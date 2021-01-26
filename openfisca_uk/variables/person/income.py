from openfisca_core.model_api import *
from openfisca_uk.entities import *
from openfisca_uk.tools.general import *

# Input from FRS

class gross_wages(Variable):
    value_type = float
    entity = Person
    label = u'Gross earnings from employment, before deductions'
    definition_period = YEAR

class gross_profit(Variable):
    value_type = float
    entity = Person
    label = u'Gross earnings from employment, before deductions'
    definition_period = YEAR

class alimony_payments_received(Variable):
    value_type = float
    entity = Person
    label = u'Amount received from maintanence payments, directly or via DWP'
    definition_period = YEAR

class parental_contributions(Variable):
    value_type = float
    entity = Person
    label = u'Amount received from parents'
    definition_period = YEAR

class edu_grants(Variable):
    value_type = float
    entity = Person
    label = u'Grants for education'
    definition_period = YEAR

class gross_pension_income(Variable):
    value_type = float
    entity = Person
    label = u'Gross pension income before tax'
    definition_period = YEAR

class free_tv_license_value(Variable):
    value_type = float
    entity = Person
    label = u'Value of free TV licenses'
    definition_period = YEAR

class FRS_net_income(Variable):
    value_type = float
    entity = Person
    label = u'Net income from FRS tables'
    definition_period = YEAR

class child_maintenance_received(Variable):
    value_type = float
    entity = Person
    label = u'Amount of child maintenance received'
    definition_period = YEAR

class misc_income(Variable):
    value_type = float
    entity = Person
    label = u'Miscellaneous income'
    definition_period = YEAR

class rental_income(Variable):
    value_type = float
    entity = Person
    label = u"Income from letting"
    definition_period = YEAR

class state_pension_reported(Variable):
    value_type = float
    entity = Person
    label = u"Income from the State Pension (reported)"
    definition_period = YEAR


class SSP(Variable):
    value_type = float
    entity = Person
    label = u"Statutory Sick Pay"
    definition_period = YEAR


class SMP(Variable):
    value_type = float
    entity = Person
    label = u"Statutory Maternity Pay"
    definition_period = YEAR


class SPP(Variable):
    value_type = float
    entity = Person
    label = u"Statutory Paternity Pay"
    definition_period = YEAR

class SHPP(Variable):
    value_type = float
    entity = Person
    label = u'Shared Parental Pay'
    definition_period = YEAR


class holiday_pay(Variable):
    value_type = float
    entity = Person
    label = u"Holiday pay"
    definition_period = YEAR

# Derived variables


class state_pension(Variable):
    value_type = float
    entity = Person
    label = u"Income from the State Pension"
    definition_period = YEAR

    def formula(person, period, parameters):
        return person("state_pension_reported", period)


class earned_income(Variable):
    value_type = float
    entity = Person
    label = u"Earnings and self-employment profit"
    definition_period = YEAR

    def formula(person, period, parameters):
        return person("gross_wages", period) + person("gross_profit", period)


class minimum_wage(Variable):
    value_type = float
    entity = Person
    label = u"Minimum wage"
    definition_period = YEAR

    def formula(person, period, parameters):
        min_wage = parameters(period).law.minimum_wage
        age = person("age", period.this_year)
        amount = select(
            [age >= 25, age >= 21, age >= 18, age < 18],
            [
                min_wage.over_25,
                min_wage.between_21_24,
                min_wage.between_18_20,
                min_wage.under_18,
            ],
        )
        return amount


class post_tax_income(Variable):
    value_type = float
    entity = Person
    label = u"Income after Income Tax and NI"
    definition_period = YEAR

    def formula(person, period, parameters):
        return person("taxable_income", period) - person("total_tax", period)


class total_benefits(Variable):
    value_type = float
    entity = Person
    label = u"Total benefits received by the person"
    definition_period = WEEK
    set_input = set_input_divide_by_period


class benefits_modelling(Variable):
    value_type = float
    entity = Person
    label = u"Difference between simulated and reported benefits"
    definition_period = WEEK
    set_input = set_input_divide_by_period

    def formula(person, period, parameters):
        BENUNIT_SIMULATED = [
            "working_tax_credit",
            "child_tax_credit",
            "child_benefit",
            "ESA_income",
            "housing_benefit",
            "income_support",
            "JSA_income",
            "pension_credit",
            "universal_credit",
        ]
        PERSON_SIMULATED = [
            "PIP_DL",
            "PIP_M",
            "BSP",
            "IIDB",
            "ESA_contrib",
            "JSA_contrib",
            "carers_allowance",
            "incapacity_benefit",
            "SDA",
            "AA",
            "DLA_M",
            "DLA_SC",
        ]
        difference = sum(
            map(
                lambda benefit: person.benunit(
                    benefit, period, options=[MATCH]
                )
                - person.benunit(benefit + "_reported", period, options=[DIVIDE]),
                BENUNIT_SIMULATED,
            )
        ) + sum(
            map(
                lambda benefit: person(benefit, period, options=[MATCH])
                - person(benefit + "_reported", period),
                PERSON_SIMULATED,
            )
        )
        return difference * person("is_benunit_head", period)


class gross_income(Variable):
    value_type = float
    entity = Person
    label = u"Gross income"
    definition_period = YEAR

    def formula(person, period, parameters):
        COMPONENTS = [
            "earnings",
            "profit",
            "state_pension",
            "pension_income",
            "savings_interest",
            "rental_income",
            "SSP",
            "SPP",
            "SMP",
            "holiday_pay",
            "dividend_income",
            "total_benefits",
            "benefits_modelling",
        ]
        return add(person, period, COMPONENTS, options=[MATCH])


class net_income(Variable):
    value_type = float
    entity = Person
    label = u"Net income"
    definition_period = YEAR

    def formula(person, period, parameters):
        EXPENSES = [
            "income_tax",
            "NI",
            "maintenance_payments",
            "pension_deductions",
            "student_loan_repayment",
        ]
        net_income = person("gross_income", period) - add(
            person, period, EXPENSES, options=[MATCH]
        )
        return net_income


class person_household_net_income(Variable):
    value_type = float
    entity = Person
    label = u'The person\'s household\'s disposable income, before housing costs'
    definition_period = YEAR

    def formula(person, period, parameters):
        return person.household("household_net_income", period)
from openfisca_uk.model_api import *


class corporate_wealth(Variable):
    label = "Corporate wealth"
    documentation = "Total owned wealth in corporations"
    entity = Household
    definition_period = YEAR
    value_type = float
    unit = "currency-GBP"


class corporate_tax_incidence(Variable):
    label = "Corporate tax incidence"
    documentation = (
        "Reduction in value of corporate wealth due to taxes on corporations"
    )
    entity = Household
    definition_period = YEAR
    value_type = float
    unit = "currency-GBP"

    def formula(household, period):
        total_change = household("corporate_stamp_duty_change", period)
        total_wealth = (
            household("corporate_wealth", period)
            * household("household_weight", period)
        ).sum()
        percentage_change = total_change / total_wealth
        return percentage_change * household("corporate_wealth", period)

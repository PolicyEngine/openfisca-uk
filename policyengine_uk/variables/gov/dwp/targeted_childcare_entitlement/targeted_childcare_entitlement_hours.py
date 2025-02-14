from policyengine_uk.model_api import *


class targeted_childcare_entitlement_hours(Variable):
    value_type = float
    entity = Person
    label = "Targeted childcare entitlement hours per year"
    definition_period = YEAR
    unit = "hour"
    defined_for = "meets_targeted_childcare_entitlement_conditions"

    def formula(person, period, parameters):
        p = parameters(period).gov.dwp.targeted_childcare_entitlement
        country = person.household("country", period)
        countries = country.possible_values
        in_England = country == countries.ENGLAND
        return where(in_England, p.hours.calc(person("age", period)), 0)

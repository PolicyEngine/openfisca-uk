from openfisca_uk.model_api import *

class household_wealth(Variable):
    label = "Wealth"
    entity = Household
    definition_period = YEAR
    value_type = float
    unit = "currency-GBP"
    quantity_type = STOCK

    def formula(household, period, parameters):
        return add(household, period, ["property_wealth", "corporate_wealth"])

class wealth_decile(Variable):
    label = "Household wealth decile"
    entity = Household
    definition_period = YEAR
    value_type = float
    unit = "currency-GBP"

    def formula(household, period, parameters):
        from microdf import MicroSeries
        weights = household.sum(household.members("person_weight", period))
        income_value = max_(0, household("household_wealth", period))
        income = MicroSeries(income_value, weights=weights)
        return income.decile_rank()
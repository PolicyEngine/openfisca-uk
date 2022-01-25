from openfisca_uk.model_api import *

class vat(Variable):
    entity = Household
    definition_period = YEAR
    label = "VAT"
    value_type = float
    unit = "currency-GBP"
    reference = "https://www.legislation.gov.uk/ukpga/1992/4/part/IX"
    documentation = "Value Added Tax"

    def formula(household, period, parameters):
        rate = ...
        income = ...
        return rate * income
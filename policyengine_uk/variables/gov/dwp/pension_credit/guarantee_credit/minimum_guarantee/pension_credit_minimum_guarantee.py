from policyengine_uk.model_api import *


class pension_credit_minimum_guarantee(Variable):
    label = "Minimum Guarantee"
    documentation = "The Minimum Guarantee informs the Pension Credit Guarantee Credit amount. Pensioners usually have their annual income increased to this amount by Pension Credit."
    entity = BenUnit
    definition_period = YEAR
    value_type = float
    unit = GBP
    reference = "https://www.legislation.gov.uk/uksi/2002/1792/regulation/6"

    adds = [
        "pension_credit_standard_minimum_guarantee",
        "pension_credit_additional_minimum_guarantee",
    ]

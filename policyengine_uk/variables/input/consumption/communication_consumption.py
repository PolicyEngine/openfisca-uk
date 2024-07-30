from policyengine_uk.model_api import *


class communication_consumption(Variable):
    label = "communication consumption"
    entity = Person
    definition_period = YEAR
    value_type = float
    unit = GBP
    quantity_type = FLOW


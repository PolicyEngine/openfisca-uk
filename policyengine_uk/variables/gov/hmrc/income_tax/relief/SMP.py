from policyengine_uk.model_api import *

class SMP(Variable):
    value_type = float
    entity = Person
    label = "Statutory Maternity Pay"
    definition_period = YEAR
    unit = GBP
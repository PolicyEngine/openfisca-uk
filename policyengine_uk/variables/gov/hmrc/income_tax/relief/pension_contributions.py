from policyengine_uk.model_api import *


class pension_contributions(Variable):
    value_type = float
    entity = Person
    label = "Amount contributed to registered pension schemes paid by the individual (not the employer)"
    definition_period = YEAR
    unit = GBP

    def formula(person, period, parameters):
        PENSIONS = [
            "private_pension_contributions",
            "occupational_pension_contributions",
        ]
        return add(person, period, PENSIONS)
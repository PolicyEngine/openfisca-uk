from policyengine_uk.model_api import *


class extended_childcare_entitlement_hours(Variable):
    value_type = float
    entity = BenUnit
    label = "Hours of extended childcare entitlement"
    documentation = "Number of hours of extended childcare entitlement based on eligibility conditions"
    definition_period = YEAR

    def formula(benunit, period, parameters):
        # Get parameters
        p = parameters(
            period
        ).gov.dfe.extended_childcare_entitlement.childcare_entitlement_hours

        # Check income condition (same for both)
        meets_income_condition = benunit.all(
            benunit.members(
                "extended_childcare_entitlement_meets_income_requirements",
                period,
            )
            | benunit.members("is_child", period)
        )

        # Check work condition (same for both)
        work_eligible = (
            benunit("extended_childcare_entitlement_work_condition", period)
            > 0
        )

        child_ages = benunit.members("age", period)

        hours_per_child = p.calc(child_ages)
        total_hours = benunit.sum(hours_per_child)

        return total_hours * meets_income_condition * work_eligible

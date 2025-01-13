from policyengine_uk.model_api import *


class meets_income_requirements(Variable):
    value_type = bool
    entity = Person
    label = "Income requirements and calculations"
    documentation = "Whether this person meets the income requirements for tax-free childcare based on age and income thresholds"
    definition_period = YEAR

    def formula(person, period, parameters):
        """
        Calculate if a person meets income requirements based on their age and income.

        Returns:
            bool: True if they meet the income conditions for their age group
        """
        # Get person's characteristics
        age = person("age", period)

        # Calculate eligible income
        total_income = person("total_income", period)
        # Extract investment incomes to subtract
        investment_income = add(
            person,
            period,
            [
                "private_pension_income",
                "savings_interest_income",
                "dividend_income",
                "property_income",
            ],
        )

        yearly_eligible_income = max_(total_income - investment_income, 0)
        quarterly_income = yearly_eligible_income / 4

        # Get required income threshold based on age
        income_limits = parameters(
            period
        ).gov.hmrc.childcare_subsidies.tax_free_childcare.income_thresholds
        
        required_threshold = income_limits.calc(age)
        
        # Compare quarterly income to required threshold
        return quarterly_income >= required_threshold
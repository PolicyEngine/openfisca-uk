# -*- coding: utf-8 -*-

# This file defines the entities needed by our legislation.
from openfisca_core.entities import build_entity

Household = build_entity(
    key = "household",
    plural = "households",
    label = u'All the people in a family or group who live together in the same place.',
    doc = '''
    Household is an example of a group entity.
    A group entity contains one or more individual·s.
    Each individual in a group entity has a role (e.g. parent or children). Some roles can only be held by a limited number of individuals (e.g. a 'first_parent' can only be held by one individual), while others can have an unlimited number of individuals (e.g. 'children').

    Example:
    Housing variables (e.g. housing_tax') are usually defined for a group entity such as 'Household'.

    Usage:
    Check the number of individuals of a specific role (e.g. check if there is a 'second_parent' with household.nb_persons(Household.SECOND_PARENT)).
    Calculate a variable applied to each individual of the group entity (e.g. calculate the 'salary' of each member of the 'Household' with salaries = household.members('salary', period = MONTH); sum_salaries = household.sum(salaries)).

    For more information, see: https://openfisca.org/doc/coding-the-legislation/50_entities.html
    ''',
    roles = [
        {
            'key': 'parent',
            'plural': 'parents',
            'label': u'Parents',
            'max': 2,
            'subroles': ['first_parent', 'second_parent'],
            'doc': u'The one or two adults in charge of the household.'
            },
        {
            'key': 'child',
            'plural': 'children',
            'label': u'Child',
            'doc': u'Other individuals living in the household.'
            }
        ]
    )

Person = build_entity(
    key = "person",
    plural = "persons",
    label = u'An individual. The minimal legal entity on which a legislation might be applied.',
    doc = '''

    Variables like 'salary' and 'income_tax' are usually defined for the entity 'Person'.

    Usage:
    Calculate a variable applied to a 'Person' (e.g. access the 'salary' of a specific month with person('salary', "2017-05")).
    Check the role of a 'Person' in a group entity (e.g. check if a the 'Person' is a 'first_parent' in a 'Household' entity with person.has_role(Household.FIRST_PARENT)).

    For more information, see: https://openfisca.org/doc/coding-the-legislation/50_entities.html
    ''',
    is_person = True,
    )

Marriage = build_entity(
    key = "marriage",
    plural = "marriages",
    label = u'Two people who are married or in a civil partnership.',
    doc = '''
    Marriage and civil partnerships provide legal and tax benefits, such as transferable personal allowances. 
    Whilst this group is named Marriage, it is intended to include civil partnerships for simplicity.
    ''',
    roles = [
        {
            'key': 'partner',
            'plural': 'partners',
            'label': u'Parents',
            'max': 2,
            'subroles': ['first_partner', 'second_partner'],
            'doc': u'The two partners in the marriage.'
            }
        ]
    )

entities = [Household, Person, Marriage]
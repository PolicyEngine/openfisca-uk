Search.setIndex({"docnames": ["examples/income-sources", "index", "model/spi-validation", "model/validation", "programs/contrib/ubi-center/carbon-tax", "programs/gov/dcms/bbc/tv-licence", "programs/gov/dwp/PIP", "programs/gov/dwp/pension-credit", "programs/gov/dwp/universal-credit", "programs/gov/hmrc/child-benefit", "programs/gov/hmrc/fuel-duty", "programs/gov/hmrc/income-tax", "programs/gov/hmrc/national-insurance", "programs/gov/hmrc/stamp-duty", "programs/gov/ofgem/energy-price-guarantee", "programs/gov/revenue_scotland/land-and-buildings-transaction-tax", "programs/gov/wra/land-transaction-tax", "usage/getting-started"], "filenames": ["examples/income-sources.ipynb", "index.ipynb", "model/spi-validation.ipynb", "model/validation.ipynb", "programs/contrib/ubi-center/carbon-tax.ipynb", "programs/gov/dcms/bbc/tv-licence.ipynb", "programs/gov/dwp/PIP.ipynb", "programs/gov/dwp/pension-credit.ipynb", "programs/gov/dwp/universal-credit.ipynb", "programs/gov/hmrc/child-benefit.ipynb", "programs/gov/hmrc/fuel-duty.ipynb", "programs/gov/hmrc/income-tax.ipynb", "programs/gov/hmrc/national-insurance.ipynb", "programs/gov/hmrc/stamp-duty.ipynb", "programs/gov/ofgem/energy-price-guarantee.ipynb", "programs/gov/revenue_scotland/land-and-buildings-transaction-tax.ipynb", "programs/gov/wra/land-transaction-tax.ipynb", "usage/getting-started.ipynb"], "titles": ["Pensioner income sources", "PolicyEngine-UK", "Validation against the Survey of Personal Incomes", "Validation", "Carbon taxes", "TV Licence", "Personal Independence Payment (PIP)", "Pension Credit", "Universal Credit", "Child Benefit", "Fuel Duty", "Income Tax", "National Insurance", "Stamp Duty Land Tax", "Energy Price Cap", "Land and Buildings Transaction Tax", "Land Transaction Tax", "Getting started"], "terms": {"The": [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "chart": [0, 3, 6, 7, 8, 11, 12, 13, 14, 15, 16], "below": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17], "figur": [0, 3, 11], "12": [0, 1, 2, 3, 7, 9, 10, 11, 13, 15, 16], "from": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "2022": [0, 6, 7, 8, 9, 10, 11, 14, 17], "hbai": 0, "public": [0, 11, 14], "show": [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "distribut": 0, "each": [0, 1, 2, 4, 5, 8, 9, 11, 12, 13, 14, 15, 16], "decil": 0, "household": [0, 2, 3, 4, 5, 13, 14, 15], "we": [0, 1, 2, 4, 5, 9, 13, 14, 15, 16, 17], "can": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17], "reproduc": [0, 17], "thi": [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14, 17], "policyengin": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17], "us": [0, 1, 2, 4, 5, 9, 10, 11, 14, 17], "code": [0, 1, 17], "policyengine_uk": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "import": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "microsimul": [0, 1, 2, 3, 4, 14], "panda": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "pd": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "sim": [0, 1, 3, 9, 13, 14, 15, 17], "is_pensioner_household": 0, "calcul": [0, 1, 2, 3, 4, 7, 9, 11, 12, 13, 14, 15, 17], "is_sp_ag": 0, "map_to": [0, 1, 3], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17], "is_child": 0, "household_benefit": 0, "household_pens": 0, "pension_incom": 0, "household_investment_incom": 0, "capital_incom": 0, "household_earn": 0, "employment_incom": [0, 11, 17], "self_employment_incom": 0, "total_incom": 0, "household_market_incom": 0, "equivalised_incom": 0, "equiv_household_net_incom": 0, "household_count_peopl": 0, "peopl": [0, 1, 8, 11, 12, 13, 15, 17], "weight": 0, "valu": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "household_income_decil": 0, "decile_rank": 0, "income_source_decod": 0, "earn": [0, 4, 9, 11, 12], "invest": [0, 2], "state": [0, 7, 12], "support": [0, 3, 6, 7, 8], "income_sourc": 0, "rang": [0, 3, 5, 9, 11, 12, 14], "1": [0, 1, 2, 3, 4, 5, 9, 11, 12, 13, 14, 15, 16, 17], "11": [0, 1, 5, 8, 11, 12, 15, 16], "in_decil": 0, "cumulative_incom": 0, "append": [0, 6, 7, 8, 11, 12, 13, 15, 16], "income_source_valu": 0, "sum": [0, 1, 3, 9, 14, 17], "add": [0, 15, 16], "other": [0, 2, 4, 5, 6, 9, 10, 11, 17], "df": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16], "datafram": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "order": [0, 5, 15], "categor": 0, "sort_valu": [0, 1, 3, 4, 5, 9, 10, 13], "ascend": [0, 1, 4], "true": [0, 3, 10, 11, 12, 13, 15], "fals": [0, 1, 3, 4, 12], "plotli": [0, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16], "express": [0, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16], "px": [0, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16], "policyengine_cor": [0, 3, 6, 7, 8, 11, 12, 13, 15, 16, 17], "format_fig": [0, 3, 6, 7, 8, 11, 12, 13, 15, 16], "fig": [0, 3, 6, 7, 8, 11, 12, 13, 15, 16], "bar": [0, 3, 4, 13, 14], "x": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "y": [0, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16], "color": [0, 3, 6, 7, 8, 12, 13, 15, 16], "update_layout": [0, 3, 4, 6, 7, 8, 10, 12, 13, 14, 15, 16], "height": [0, 4, 10, 13, 14], "600": [0, 4, 10, 14, 15], "width": [0, 4, 10, 14], "800": [0, 4, 10, 14], "No": [0, 3], "gap": [0, 12], "bargap": 0, "yaxi": 0, "dict": [0, 11, 12, 13, 15], "tickformat": [0, 13, 15], "titl": [0, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "percentag": [0, 2, 11], "tickval": 0, "2": [0, 1, 2, 3, 4, 5, 9, 11, 12, 13, 14, 15, 16], "3": [0, 1, 2, 3, 5, 9, 11, 12, 13, 14, 16, 17], "4": [0, 1, 2, 5, 9, 11, 12, 13, 16], "5": [0, 1, 2, 3, 5, 9, 10, 11, 13, 15, 16], "6": [0, 1, 3, 5, 11, 13, 14, 15, 16], "7": [0, 1, 2, 4, 5, 9, 11, 13, 16, 17], "8": [0, 1, 2, 5, 11, 12, 13, 15], "9": [0, 1, 5, 11, 13, 16], "xaxi": 0, "list": [0, 5, 9], "book": 1, "contain": [1, 2], "an": [1, 2, 6, 7, 9, 11, 12, 13, 14, 15, 16, 17], "introduct": 1, "model": [1, 3, 4, 5, 10, 11, 14, 17], "tax": [1, 2, 3, 5, 8, 9, 10, 12, 17], "benefit": [1, 3, 4, 6, 7, 8, 11, 12, 17], "It": [1, 2, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17], "current": [1, 5, 13, 15, 16], "work": [1, 3, 6, 7, 8, 9, 11, 17], "progress": 1, "mai": [1, 2, 5, 6, 7, 13, 15, 16], "ad": [1, 11, 15], "system": [1, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], "which": [1, 2, 4, 7, 9, 14, 15], "variabl": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17], "over": [1, 6, 7, 8, 9, 12, 13, 15, 16, 17], "entiti": 1, "given": 1, "polici": [1, 5, 13, 15, 16], "paramet": [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "structur": [1, 2, 11, 15, 16], "In": [1, 2, 4, 5, 10, 15], "practic": [1, 11], "give": 1, "two": [1, 2, 5, 6, 7, 13, 17], "main": [1, 2, 6, 7, 9, 12, 13, 17], "statist": [1, 2, 3, 9, 17], "under": [1, 7, 13, 15], "law": [1, 11], "simul": [1, 2, 4, 5, 9, 13, 15], "effect": [1, 5, 11, 13, 15], "potenti": [1, 4, 5], "new": 1, "chang": [1, 5, 10, 13, 15, 16, 17], "legisl": 1, "re": [1, 16, 17], "grate": 1, "ukmod": [1, 3], "team": 1, "publish": 1, "descript": 1, "our": [1, 2, 17], "abil": [1, 6], "refer": [1, 5, 9, 11, 12, 13], "acceler": 1, "openfisca": [1, 17], "s": [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 14, 15, 16, 17], "develop": [1, 17], "maintain": 1, "manag": [1, 6], "centr": 1, "analysi": 1, "institut": 1, "social": [1, 6, 9, 11, 12], "econom": 1, "research": [1, 14, 17], "iser": 1, "univers": [1, 3, 9], "essex": 1, "exampl": [1, 11, 17], "output": [1, 2], "ar": [1, 2, 3, 4, 5, 6, 8, 9, 11, 13, 14, 15, 16, 17], "run": [1, 2, 4], "automat": [1, 17], "version": 1, "total": [1, 2, 4, 7, 13, 14, 15], "incom": [1, 3, 4, 7, 8, 9, 12, 14, 17], "nation": [1, 3, 4], "insur": [1, 3], "liabil": [1, 11], "region": [1, 5, 15], "done": 1, "follow": [1, 5, 8, 11, 13, 14, 17], "national_insur": [1, 12], "income_tax": [1, 3, 11, 17], "summari": 1, "groupbi": 1, "calc": [1, 9, 14], "person": [1, 5, 7, 11, 13, 15, 17], "appli": [1, 7, 11, 13, 15, 16, 17], "lambda": [1, 5, 9, 15], "round": [1, 2, 11], "1e9": [1, 3, 14, 17], "1e6": 1, "column": [1, 3, 6, 7, 8], "bn": [1, 3, 14, 17], "popul": [1, 2, 5], "million": 1, "south_east": 1, "28": [1, 3, 8], "london": 1, "10": [1, 2, 3, 6, 9, 10, 11, 13, 15, 16], "35": [1, 3, 7], "north_west": 1, "18": [1, 3, 9, 11, 15], "east_of_england": 1, "25": [1, 3, 5, 6, 8, 9, 11, 17], "west_midland": 1, "south_west": 1, "20": [1, 4, 6, 8, 9, 11, 17], "yorkshir": 1, "scotland": [1, 15], "13": [1, 9, 11, 13, 14], "east_midland": 1, "14": [1, 3, 9, 11, 12, 16], "wale": [1, 16], "north_east": 1, "northern_ireland": 1, "name": [1, 3, 6, 7, 8, 9, 11, 13, 15, 17], "increas": [1, 4, 9, 14, 17], "basic": [1, 3, 11, 17], "rate": [1, 3, 5, 9, 11, 12, 14, 17], "23": [1, 6, 10, 11, 17], "model_api": [1, 17], "def": [1, 3, 9, 11, 17], "change_tax_paramet": 1, "gov": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "hmrc": [1, 2, 9, 10, 11, 12, 13, 17], "bracket": [1, 11, 13, 15, 16], "updat": [1, 10, 17], "period": [1, 2, 3, 14, 17], "year": [1, 2, 3, 5, 6, 7, 8, 9, 13, 14, 17], "2019": [1, 5, 6, 7, 8, 9, 10, 11, 17], "return": [1, 2, 3, 9, 11, 17], "class": [1, 12, 17], "self": [1, 3, 12, 17], "modify_paramet": [1, 17], "revenu": [1, 2, 5, 11, 13, 15, 16, 17], "f": [1, 3, 5, 9, 12, 14, 17], "1e": 1, "1bn": 1, "To": [2, 11, 17], "ensur": [2, 7, 11], "accuraci": 2, "precis": 2, "free": [2, 3, 5, 17], "open": 2, "sourc": [2, 11], "exist": [2, 4, 8, 11], "extern": [2, 17], "dataset": [2, 3, 4, 17], "process": 2, "involv": 2, "take": [2, 9, 17], "meant": 2, "repres": [2, 7], "particular": [2, 15, 16], "slice": 2, "british": [2, 5], "societi": 2, "load": [2, 4], "input": [2, 4], "individu": [2, 6, 7, 8, 11], "employ": [2, 3, 8, 11, 12], "data": [2, 3, 4, 9, 11, 12, 13, 15, 17], "compar": [2, 6, 9], "theirs": 2, "effort": [2, 4], "find": [2, 13, 14], "between": [2, 11, 14], "post": 2, "ll": [2, 17], "describ": [2, 9], "newli": 2, "releas": [2, 9], "spi": [2, 17], "2020": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17], "21": [2, 6, 9, 11, 17], "comprehens": [2, 11], "produc": [2, 4, 11, 14], "hm": [2, 13], "custom": [2, 11, 13], "provid": [2, 5, 6, 7, 8, 9, 11], "detail": [2, 4, 11], "inform": [2, 6], "financi": [2, 6, 7, 8], "base": [2, 4, 5, 6, 7, 8, 11, 12, 15, 16], "sampl": 2, "record": [2, 5, 12], "among": 2, "most": [2, 3, 9, 17], "level": [2, 5, 6, 7, 11, 14], "treasuri": 2, "member": [2, 9, 13, 15, 17], "parliament": [2, 11], "chose": 2, "report": [2, 3, 9, 14], "amount": [2, 6, 7, 8, 9, 11, 14], "do": [2, 6, 8, 17], "so": [2, 17], "first": [2, 4, 8, 13, 15, 16, 17], "remov": [2, 5], "composit": 2, "smaller": 2, "group": [2, 3, 11, 13], "collect": [2, 4, 5, 7, 13], "onli": [2, 4, 5, 9, 10, 13, 15, 17], "emploi": [2, 3, 12], "within": [2, 7], "wide": 2, "its": [2, 4, 5], "cannot": [2, 9], "correctli": 2, "comput": [2, 11, 17], "770": 2, "observ": 2, "around": [2, 6, 17], "treat": 2, "relev": 2, "categoris": 2, "logarithm": 2, "how": [2, 9, 11, 17], "close": [2, 3], "match": [2, 3], "due": [2, 6, 8, 13, 15, 16], "differ": [2, 6, 8, 11, 13, 14, 15, 16], "final": [2, 17], "displai": [2, 11], "tabl": [2, 4, 5, 6, 7, 8, 9, 10, 11, 12], "error": [2, 3], "all": [2, 12, 17], "92": [2, 6, 7, 8, 9], "100": [2, 4, 5, 6, 7], "93": 2, "000": [2, 4, 11, 13, 15, 16], "98": [2, 3], "For": [2, 14, 17], "includ": [2, 6, 7, 8, 11, 12, 13, 15, 16], "view": 2, "robust": 2, "demonstr": 2, "remain": 2, "where": 2, "believ": 2, "attribut": [2, 11], "factor": [2, 11, 13], "sometim": 2, "addit": [2, 3, 6, 7, 8, 9, 11, 12, 13, 15, 16], "avail": [2, 17], "lead": [2, 5], "At": 2, "time": [2, 6, 7, 8, 12, 13, 15, 16, 17], "wai": [2, 4, 17], "complic": 2, "further": [2, 6, 10], "four": [2, 12], "cluster": 2, "appear": 2, "case": [2, 17], "transfer": [2, 15, 16], "portion": 2, "allow": [2, 3, 8, 9, 11], "spous": 2, "part": [2, 9, 13], "marriag": [2, 11], "becaus": 2, "doe": [2, 5, 9], "indic": [2, 17], "subsequ": [2, 13], "lower": [2, 3, 6, 11, 12, 14], "driven": 2, "much": 2, "37": [2, 3, 7], "998": 2, "receiv": [2, 6], "less": [2, 4, 6, 13], "than": [2, 3, 4, 13, 14, 15, 16], "annual": [2, 5, 9, 11, 12, 14], "non": [2, 4, 13, 15, 16], "resid": [2, 15], "taxat": [2, 11], "purpos": 2, "situat": [2, 11, 13, 15, 17], "even": 2, "though": [2, 11], "would": [2, 5, 17], "project": 2, "full": [2, 4, 5, 17], "500": [2, 8, 11, 13, 16], "publicli": 2, "statu": 2, "054": 2, "both": [2, 4, 11, 13, 15, 16], "same": [2, 6, 17], "taxabl": [2, 11], "save": [2, 7, 11, 17], "ani": [2, 5, 17], "form": [2, 4], "classifi": 2, "e": [2, 4, 14], "g": [2, 4], "interest": [2, 11], "secur": [2, 6, 9, 11, 12], "thei": [2, 4, 6, 7, 8, 11, 14], "ow": 2, "more": [2, 6, 13, 15, 17], "276": 2, "taper": [2, 11], "who": [2, 5, 6, 7, 8, 12], "claim": [2, 5], "gift": 2, "aid": [2, 6], "signifi": 2, "deduct": [2, 11, 12], "donat": [2, 11], "while": [2, 5, 7, 11], "elig": [2, 5, 6, 7, 11, 13, 15], "738": 2, "high": [2, 9, 11], "accord": [2, 12], "almost": 2, "some": [2, 6, 7, 8, 17], "limit": [2, 8, 9, 12], "scope": 2, "often": [2, 12, 13], "either": 2, "testabl": 2, "ha": [2, 4, 9, 12, 13, 17], "made": [2, 12], "exercis": 2, "build": 2, "upon": 2, "previou": 2, "autumn": [2, 10], "2023": [2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17], "calibr": [2, 3, 17], "welcom": 2, "question": 2, "comment": 2, "methodolog": [2, 12, 14], "pleas": [2, 17], "feel": 2, "get": [2, 6, 12, 14, 15, 16], "touch": [2, 17], "http": [2, 5], "europa": 2, "eu": 2, "local": 2, "en": 2, "www": 2, "govern": [2, 10, 11, 13, 15, 16], "2021": [2, 5, 6, 7, 8, 9, 10, 11, 17], "offici": 3, "consumpt": [3, 4, 14, 17], "wealth": [3, 17], "taken": 3, "26": [3, 5, 11], "countri": 3, "ukmod_caseload": 3, "best": 3, "start": [3, 15, 16], "grant": [3, 17], "food": [3, 4], "32": [3, 7, 8], "16": [3, 9, 11, 15, 16], "63": [3, 8], "73": [3, 5, 8], "79": [3, 5], "78": [3, 5], "76": [3, 5, 8], "child": [3, 7, 8, 11], "c": [3, 14], "12226": 3, "12047": 3, "11368": 3, "11136": 3, "11074": 3, "11036": 3, "10928": 3, "6828": 3, "6720": 3, "6421": 3, "6280": 3, "6241": 3, "6217": 3, "6154": 3, "credit": [3, 5, 6, 9], "1567": 3, "1060": 3, "814": 3, "658": 3, "380": 3, "council": 3, "reduct": [3, 10, 11], "h": [3, 12, 13], "5876": 3, "5759": 3, "5257": 3, "5301": 3, "5381": 3, "5424": 3, "5451": 3, "ib": 3, "734": 3, "647": 3, "454": 3, "368": 3, "189": 3, "school": 3, "meal": 3, "2940": 3, "2905": 3, "2956": 3, "2978": 3, "3004": 3, "3038": 3, "3092": 3, "healthi": 3, "444": 3, "429": 3, "337": 3, "340": 3, "357": 3, "350": 3, "348": 3, "hous": [3, 4, 8], "2478": 3, "2185": 3, "2068": 3, "1873": 3, "1561": 3, "1192": 3, "1183": 3, "890": 3, "752": 3, "609": 3, "482": 3, "258": 3, "jobseek": [3, 8], "cb": 3, "pension": [3, 5, 6, 8, 11, 12], "1379": 3, "1252": 3, "1357": 3, "1354": 3, "1366": 3, "cloth": [3, 4], "1200": 3, "1162": 3, "1029": 3, "1063": 3, "1105": 3, "1139": 3, "1126": 3, "scottish": [3, 15], "carer": [3, 7, 8], "supplement": [3, 11, 15], "i": [3, 5, 9, 12, 17], "44": 3, "52": [3, 5, 7], "payment": [3, 7, 8], "170": 3, "181": 3, "193": 3, "winter": 3, "heat": [3, 10], "assist": [3, 6, 7, 11], "sure": [3, 17], "matern": 3, "33": 3, "72": [3, 5], "77": [3, 5], "83": [3, 6], "85": [3, 6, 7, 8], "84": 3, "4038": 3, "4437": 3, "4337": 3, "4855": 3, "5746": 3, "6572": 3, "6508": 3, "fuel": 3, "11998": 3, "11435": 3, "11239": 3, "cap": 3, "47": [3, 7], "36": [3, 7], "22": [3, 5, 6, 11, 17], "169": 3, "166": 3, "108": 3, "102": 3, "28797": 3, "29579": 3, "31467": 3, "32495": 3, "32902": 3, "33134": 3, "33396": 3, "22815": 3, "23039": 3, "23776": 3, "24076": 3, "24285": 3, "24296": 3, "24326": 3, "higher": [3, 6, 9, 11, 13, 15, 16], "3652": 3, "4110": 3, "5160": 3, "5457": 3, "5562": 3, "5740": 3, "5942": 3, "219": 3, "273": 3, "425": 3, "816": 3, "831": 3, "859": 3, "892": 3, "nic": [3, 12], "employe": [3, 12], "22074": 3, "22960": 3, "23024": 3, "22953": 3, "22987": 3, "23088": 3, "23195": 3, "1194": 3, "2271": 3, "2613": 3, "2601": 3, "2696": 3, "2721": 3, "22504": 3, "23266": 3, "24183": 3, "24380": 3, "24442": 3, "24490": 3, "24534": 3, "ukmod_expenditur": 3, "41": 3, "45": [3, 5, 6, 8, 9, 10], "42": [3, 7], "11098": 3, "10899": 3, "10588": 3, "11357": 3, "11898": 3, "11874": 3, "11742": 3, "8643": 3, "5767": 3, "4703": 3, "4034": 3, "2343": 3, "7558": 3, "7707": 3, "7503": 3, "7867": 3, "8252": 3, "8600": 3, "8949": 3, "5305": 3, "4579": 3, "3330": 3, "2958": 3, "1672": 3, "3968": 3, "3909": 3, "4087": 3, "4501": 3, "4757": 3, "4878": 3, "4968": 3, "126": [3, 7, 8], "167": 3, "133": [3, 7], "134": 3, "140": [3, 7], "136": 3, "11004": 3, "10127": 3, "9712": 3, "8969": 3, "7409": 3, "5471": 3, "5431": 3, "3411": 3, "2873": 3, "2452": 3, "2170": 3, "1268": 3, "233": 3, "234": 3, "99": 3, "109": 3, "115": 3, "116": 3, "4370": 3, "3831": 3, "4355": 3, "4768": 3, "5043": 3, "5124": 3, "5258": 3, "284": 3, "275": 3, "248": 3, "279": 3, "303": 3, "320": 3, "316": 3, "30": [3, 6, 7, 9, 11, 13, 15, 17], "31": [3, 8], "29": [3, 7], "24": [3, 6, 9, 11], "210": 3, "399": 3, "435": 3, "446": 3, "434": 3, "17": [3, 7, 11], "40": [3, 6, 7, 9, 13, 17], "43": 3, "38122": 3, "39612": 3, "37137": 3, "43736": 3, "53918": 3, "61863": 3, "61072": 3, "1990": 3, "1916": 3, "1903": 3, "190": 3, "308": 3, "95": [3, 7, 9], "46": 3, "687": 3, "646": 3, "260": 3, "230": 3, "362": 3, "319": 3, "149405": 3, "164580": 3, "205344": 3, "235819": 3, "240776": 3, "246492": 3, "254345": 3, "60906": 3, "63871": 3, "68330": 3, "71151": 3, "71947": 3, "72366": 3, "73341": 3, "61991": 3, "69490": 3, "89864": 3, "88729": 3, "90784": 3, "93507": 3, "97261": 3, "21054": 3, "25370": 3, "39717": 3, "65776": 3, "67352": 3, "69688": 3, "72670": 3, "55301": 3, "60554": 3, "65668": 3, "61679": 3, "62486": 3, "63547": 3, "64992": 3, "3773": 3, "4152": 3, "5887": 3, "5493": 3, "5591": 3, "5698": 3, "5827": 3, "78664": 3, "86786": 3, "103914": 3, "103760": 3, "105282": 3, "107312": 3, "110101": 3, "numpi": 3, "np": 3, "arrai": [3, 17], "1e3": 3, "estim": [3, 4, 9, 14], "str": [3, 9], "2026": [3, 9, 10, 11], "fr": [3, 4, 14, 17], "loss": 3, "calibration_paramet": 3, "get_paramet": 3, "official_estim": 3, "01": [3, 5, 6, 7, 8, 9, 10, 11, 13], "program": [3, 7], "budgetary_impact": 3, "by_countri": 3, "united_kingdom": 3, "total_ni": 3, "universal_credit": [3, 8, 17], "great_britain": 3, "child_benefit": [3, 9], "tax_credit": 3, "housing_benefit": 3, "pension_credit": [3, 7], "enumer": 3, "concat": [3, 5, 6, 7, 8, 11, 13, 15], "text": [3, 14], "should": [3, 11, 17], "aggreg": [3, 4], "br": 3, "1f": [3, 14], "billion": 3, "index": [3, 6, 7, 8], "els": 3, "blue_colour_scal": 3, "grai": 3, "animation_fram": 3, "barmod": [3, 13], "orient": [3, 12, 13], "custom_data": 3, "color_discrete_map": 3, "blue_color_scal": 3, "against": [3, 5], "xaxis_titl": [3, 6, 7, 8, 10, 13, 14], "budgetari": [3, 5], "impact": [3, 5, 6], "yaxis_titl": [3, 6, 7, 8, 10, 14], "legend_titl": [3, 6, 7, 8, 15, 16], "xaxis_rang": 3, "300": [3, 7, 13], "update_trac": [3, 10, 12, 13, 14, 15, 16], "hovertempl": 3, "customdata": 3, "modulenotfounderror": 3, "traceback": [3, 9], "recent": [3, 9], "call": [3, 9, 15], "last": [3, 9], "tmp": [3, 9], "ipykernel_2267": 3, "1965604937": 3, "py": [3, 6, 7, 8, 9, 13, 15, 16], "cell": [3, 6, 7, 8, 9], "line": [3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "103": 3, "101": 3, "104": 3, "105": 3, "modul": 3, "A": 4, "levi": [4, 10, 11], "emiss": 4, "requir": [4, 5, 6, 11], "good": 4, "servic": [4, 5, 11], "design": [4, 6, 7, 8], "reduc": [4, 7, 11, 13], "dioxid": 4, "price": [4, 5, 13, 15, 16], "decreas": 4, "demand": 4, "incentiv": 4, "make": [4, 17], "them": [4, 17], "simplest": 4, "cover": [4, 6, 7, 8, 9, 11], "co": 4, "howev": [4, 13], "also": [4, 15, 16], "greenhous": 4, "gass": 4, "methan": 4, "nitrou": 4, "oxid": 4, "global": 4, "warm": 4, "rel": [4, 9, 14], "uk": [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17], "co2": 4, "rather": 4, "product": [4, 5], "incid": 4, "owner": 4, "realiti": 4, "directli": [4, 12], "indirectli": 4, "pai": [4, 5, 11, 14, 16], "ownership": [4, 5], "share": 4, "pass": [4, 11, 17], "consum": [4, 14], "border": 4, "adjust": [4, 13, 15, 16], "assum": [4, 5], "depend": [4, 6, 13], "sector": 4, "elast": 4, "net": 4, "through": [4, 9], "step": 4, "famili": [4, 8, 9], "resourc": 4, "survei": [4, 9, 17], "receipt": 4, "demograph": 4, "Then": 4, "live": [4, 5, 6], "cost": [4, 5, 6, 8, 14], "granular": 4, "captur": 4, "imput": [4, 14, 17], "footprint": 4, "certain": [4, 11, 12, 13, 15, 16], "categori": [4, 11, 13], "associ": [4, 6], "pound": 4, "spent": 4, "after": 4, "integr": 4, "dispos": 4, "without": [4, 5], "alcohol": 4, "tobacco": 4, "footwear": 4, "commun": [4, 5], "educ": 4, "health": [4, 6], "furnish": 4, "water": 4, "electr": 4, "miscellan": 4, "recreat": 4, "restaur": 4, "hotel": 4, "transport": [4, 6], "7e": 4, "05": [4, 9, 13], "000262": 4, "000404": 4, "000241": 4, "000689": 4, "000656": 4, "000212": 4, "0012": 4, "000203": 4, "000185": 4, "000311": 4, "00107": 4, "tonn": 4, "per": [4, 5, 10, 17], "yaxis_ticksuffix": 4, "penc": [4, 10], "legal": [5, 6, 7, 8], "watch": 5, "channel": 5, "via": 5, "stream": 5, "bbc": 5, "iplay": 5, "devic": 5, "must": 5, "renew": 5, "gener": [5, 8, 13, 17], "fund": [5, 11, 12], "oper": [5, 9], "broadcast": 5, "corpor": [5, 13], "found": [5, 6, 7, 8, 9, 10, 11, 13, 15, 16], "dcm": 5, "tv_licenc": 5, "logic": [5, 6, 7, 8, 9, 10, 11, 13, 15, 16], "defin": [5, 6, 7, 8, 9, 13, 15, 16, 17], "televis": 5, "licens": 5, "regul": [5, 6, 7, 8, 9, 11, 13, 15, 16], "2004": 5, "clearli": 5, "outlin": [5, 11], "definit": 5, "function": 5, "colour": 5, "159": 5, "00": [5, 6, 7, 8, 9], "april": [5, 10, 15, 16], "programm": 5, "valid": 5, "fine": 5, "up": [5, 7, 9, 13, 15, 16], "1000": [5, 11], "plu": 5, "compens": 5, "There": [5, 9, 11, 15], "type": [5, 11, 12, 13, 15, 16], "blind": 5, "holder": 5, "appropri": 5, "evid": 5, "50": [5, 6, 7, 8, 9, 17], "discount": [5, 13], "ag": [5, 7, 8, 9, 11, 13, 15, 17], "75": [5, 6], "older": 5, "have": [5, 6, 7, 11, 17], "qualifi": [5, 6, 7, 8], "histor": [5, 10, 14], "countrytaxbenefitsystem": [5, 9, 10, 14, 15, 16], "date": [5, 6, 7, 8, 9, 10, 11, 14, 15], "instant_str": [5, 9, 10, 11, 13, 14], "values_list": [5, 9, 10, 11, 13, 14, 15, 16], "2f": [5, 9, 10, 17], "set_index": [5, 9, 10, 17], "2015": [5, 7, 9, 10, 11, 15], "147": 5, "2017": [5, 6, 7, 8, 9, 10, 11], "04": [5, 9, 10, 11, 12], "2018": [5, 6, 7, 8, 9, 10, 11, 16, 17], "150": [5, 7, 8, 13, 15], "154": 5, "157": 5, "evas": 5, "budgerati": 5, "reform": [5, 10], "here": [5, 12, 13, 15, 16, 17], "one": [5, 11], "hold": 5, "unchang": 5, "aged_discount": 5, "m": [5, 6, 7, 8, 13, 14], "91": 5, "68": 5, "reference_list_ad": 5, "org": 5, "focu": 5, "policyoutput": 5, "netincom": 5, "27903": 5, "timeperiod": 5, "baselin": [5, 17], "27083": 5, "19090": 5, "27909": 5, "len": [5, 11], "href": [5, 9], "df_aged_discount": 5, "minimum": [5, 7, 11], "age_list": 5, "70": [5, 6, 7, 9], "81": [5, 8], "min_ag": 5, "19": [5, 11, 17], "reference_list_minag": 5, "27932": 5, "27939": 5, "27941": 5, "27944": 5, "27947": 5, "27949": 5, "27951": 5, "27953": 5, "27955": 5, "27960": 5, "df_min_ag": 5, "fee_list": 5, "162": [5, 8], "licence_fe": 5, "reference_list_fe": 5, "27089": 5, "27087": 5, "26981": 5, "26983": 5, "df_licence_fe": 5, "df_reform": 5, "style": [5, 9], "format": [5, 9], "nbsp": [5, 9], "71": 5, "74": 5, "80": [5, 6, 7, 9], "158": 5, "160": [5, 8], "161": 5, "administ": [6, 7, 8, 9], "depart": [6, 7, 8], "dwp": [6, 7, 8], "unit": [6, 7, 8, 10, 11, 14, 17], "kingdom": [6, 7, 8], "long": 6, "term": 6, "condit": [6, 11], "disabl": [6, 7, 8], "help": [6, 7, 8, 11, 17], "recipi": 6, "extra": 6, "mean": [6, 7, 8, 9, 17], "test": [6, 7, 8, 9], "divid": [6, 13, 14], "compon": [6, 7, 8, 12], "daili": 6, "need": [6, 17], "activ": [6, 8], "assess": 6, "task": 6, "like": [6, 11, 17], "cook": 6, "dress": 6, "hygien": 6, "mobil": 6, "aim": [6, 8, 11], "face": 6, "challeng": 6, "relat": [6, 7, 8, 11], "expens": [6, 11], "could": [6, 17], "websit": [6, 7, 8], "award": 6, "extent": 6, "framework": [6, 7, 8], "primarili": [6, 7, 8, 9, 11, 12], "2013": [6, 8, 10, 15], "enhanc": [6, 17], "standard": [6, 8, 13], "These": [6, 7, 11], "determin": 6, "substanti": 6, "perform": 6, "sever": [6, 7, 8], "significantli": [6, 11], "affect": [6, 7], "carri": 6, "out": 6, "bath": 6, "medic": 6, "handl": 6, "financ": [6, 13], "care": 6, "still": [6, 7], "extens": [6, 17], "those": [6, 7], "moder": 6, "mani": 6, "enhanced_daili": 6, "daily_liv": 6, "standard_daili": 6, "element": [6, 7, 8, 9], "2016": [6, 7, 8, 9, 10, 11], "zip": [6, 7, 8, 11], "row": [6, 7, 8, 13, 15, 16], "new_row": [6, 7, 8], "merg": [6, 7, 8], "pivot_df": [6, 7, 8], "pivot": [6, 7, 8], "fillna": [6, 7, 8], "82": [6, 7], "55": [6, 9], "65": [6, 7], "60": [6, 7, 8, 9], "57": 6, "87": 6, "58": [6, 7, 8], "89": [6, 8], "15": [6, 9, 11, 12, 13], "59": 6, "61": 6, "yaxis_rang": [6, 7, 8], "yaxis_tickformat": [6, 7, 8, 10, 13, 14, 15, 16], "0f": [6, 7, 8, 14], "yaxis_tickprefix": [6, 7, 8, 10, 14], "signific": 6, "adapt": 6, "offer": [6, 11], "address": 6, "difficulti": 6, "enhanced_mobl": 6, "standard_mobl": 6, "62": 6, "64": [6, 7], "wa": [7, 8, 10, 14, 16], "introduc": [7, 8, 14], "combin": 7, "guarante": [7, 14], "intend": [7, 8], "reach": 7, "low": [7, 8], "top": [7, 13, 15, 16], "weekli": [7, 12], "vari": [7, 11, 15, 16], "circumst": [7, 8], "retir": 7, "modest": 7, "second": 7, "2002": 7, "act": [7, 9, 11, 12, 13, 15], "kei": [7, 8, 12], "adult": 7, "carer_addit": 7, "guarantee_credit": 7, "child_addit": 7, "disabled_child": 7, "severe_disabled_child": 7, "severe_dis": 7, "2024": [7, 8, 9, 10, 11], "53": 7, "34": 7, "02": [7, 13], "88": 7, "54": 7, "66": 7, "67": [7, 8], "38": 7, "56": 7, "69": 7, "48": 7, "threshold": [7, 9, 11, 12, 13, 15, 16], "coupl": [7, 11], "If": [7, 17], "fall": [7, 11], "becom": 7, "exce": [7, 11, 15, 16], "singl": 7, "similar": [7, 15, 16], "maximum": 7, "asset": 7, "being": 7, "entitl": [7, 9], "threshold_singl": 7, "savings_credit": 7, "threshold_coupl": 7, "201": 7, "212": 7, "97": 7, "218": 7, "137": 7, "223": 7, "229": 7, "144": 7, "239": 7, "244": [7, 8], "153": 7, "uc": 8, "replac": [8, 15, 16], "six": 8, "legaci": 8, "jsa": 8, "seek": 8, "esa": 8, "unabl": 8, "ill": 8, "ctc": 8, "respons": 8, "children": [8, 9], "gear": 8, "toward": 8, "claimant": 8, "rent": [8, 13, 15, 16], "consist": 8, "variou": [8, 11, 13], "capabl": 8, "carer_amount": 8, "child_amount": 8, "disabled_amount": 8, "disabled_child_amount": 8, "higher_amount": 8, "39": 8, "231": 8, "315": 8, "277": 8, "08": [8, 13], "151": 8, "318": 8, "156": 8, "328": 8, "336": 8, "235": 8, "341": 8, "128": 8, "281": 8, "163": 8, "237": 8, "343": 8, "282": 8, "168": 8, "354": 8, "132": 8, "290": 8, "185": 8, "86": 8, "269": 8, "390": 8, "06": [8, 11, 12], "146": 8, "impos": [9, 10, 13, 15, 16], "charg": [9, 11, 14, 15], "highest": 9, "parent": 9, "recoup": 9, "contribut": [9, 11, 12], "1992": [9, 11, 12], "ix": 9, "core": 9, "prescrib": 9, "2006": 9, "reg": 9, "amend": [9, 16], "guardian": 9, "eldest": 9, "number": 9, "unlik": 9, "try": 9, "metadata": [9, 11, 12, 15, 16], "except": 9, "2007": [9, 11], "09": 9, "b": [9, 14], "2009": 9, "2010": [9, 10, 11], "2014": 9, "07": [9, 10], "90": 9, "2025": [9, 10, 11], "size": [9, 10], "individualsim": 9, "get_cb_for_n_children": 9, "n": [9, 12], "add_person": 9, "add_benunit": 9, "map": 9, "importerror": 9, "ipykernel_2447": 9, "935488397": 9, "home": [9, 13, 15], "runner": 9, "__init__": 9, "microdata": 9, "preserv": 9, "takeup": [9, 11], "central": [9, 11], "august": 9, "commentari": 9, "administr": [9, 11, 15, 16], "held": 9, "sale": 10, "mainli": 10, "petrol": 10, "diesel": 10, "vehicl": 10, "purchas": [10, 13, 15, 16], "fuel_duti": 10, "sold": 10, "usual": 10, "spring": 10, "budget": 10, "alongsid": 10, "march": 10, "announc": 10, "cut": 10, "month": [10, 14], "extend": 10, "befor": [10, 11], "had": 10, "been": 10, "frozen": 10, "5795": 10, "litr": 10, "sinc": [10, 14], "graph": [10, 13], "petrol_and_diesel": 10, "inplac": [10, 13], "571900": 10, "581900": 10, "2011": 10, "589500": 10, "03": [10, 13], "579500": 10, "2012": 10, "609700": 10, "529500": 10, "583879": 10, "583909": 10, "592897": 10, "596999": 10, "603298": 10, "2027": [10, 11], "599042": 10, "609043": 10, "614374": 10, "621257": 10, "2028": [10, 11], "617539": 10, "giesel": 10, "color_discrete_sequ": [10, 14], "2c6496": [10, 14], "xaxis_tickformat": [10, 14], "templat": [10, 14], "plotly_whit": [10, 14], "update_xax": [10, 13, 15], "tickangl": 10, "tickfont": 10, "line_shap": [10, 12, 13, 14, 15, 16], "hv": [10, 12, 13, 14, 15, 16], "busi": 11, "primari": [11, 12, 15, 16], "expenditur": 11, "specif": [11, 13, 17], "properti": [11, 13, 15, 16], "dividend": 11, "criteria": 11, "aris": 11, "when": [11, 13, 15, 16], "met": 11, "fluctuat": 11, "influenc": 11, "applic": [11, 12], "respect": 11, "moreov": 11, "distinct": 11, "relief": [11, 13, 15, 16], "promot": 11, "behavior": 11, "burden": 11, "provis": 11, "charit": 11, "ground": 11, "secondari": [11, 13, 15], "guidanc": 11, "issu": [11, 15], "her": 11, "majesti": 11, "ita": 11, "piec": 11, "consolid": 11, "statut": 11, "aspect": 11, "serv": 11, "foundat": [11, 14], "matter": 11, "chargeabl": 11, "gain": 11, "tcga": 11, "focus": 11, "capit": 11, "intersect": 11, "particularli": 11, "realm": 11, "2003": [11, 13], "itepa": 11, "rule": [11, 13, 15, 16], "approach": 11, "area": 11, "manual": 11, "guid": 11, "taxpay": 11, "understand": 11, "compli": 11, "complex": 11, "insight": [11, 14], "interpret": 11, "clariti": 11, "navig": 11, "landscap": 11, "seri": 11, "calculate_tax": 11, "dividend_incom": 11, "savings_interest_incom": 11, "dividend_income_tax": 11, "savings_income_tax": 11, "person1": 11, "person2": 11, "person3": 11, "person4": 11, "person5": 11, "50000": 11, "60000": 11, "70000": 11, "80000": 11, "90000": 11, "10000": 11, "15000": 11, "20000": 11, "25000": 11, "30000": 11, "5000": 11, "emp_incom": 11, "div_incom": 11, "sav_incom": 11, "div_tax": 11, "sav_tax": 11, "11932": 11, "2700": 11, "1746": 11, "19619": 11, "4387": 11, "3800": 11, "28307": 11, "6075": 11, "5800": 11, "39994": 11, "7762": 11, "7800": 11, "47710": 11, "9450": 11, "9800": 11, "default": [11, 17], "annual_allow": 11, "reduction_r": 11, "annual_allowance_data": 11, "max": [11, 13, 15, 16], "marriage_allow": 11, "rounding_incr": 11, "takeup_r": 11, "marriage_allowance_data": 11, "increment": 11, "deduction_r": 11, "married_couples_allow": 11, "married_couples_allowance_data": 11, "marri": 11, "personal_allow": 11, "item": 11, "personal_allowance_data": 11, "addtional_threshold": 11, "personal_savings_allow": 11, "basic_threshold": 11, "higher_threshold": 11, "personal_savings_allowance_data": 11, "addtion": 11, "dividend_allow": 11, "dividend_allowance_data": 11, "property_allow": 11, "property_allowance_data": 11, "trading_allow": 11, "trading_allowance_data": 11, "trade": 11, "annual_allowance_df": 11, "marriage_allowance_df": 11, "married_couples_allowance_df": 11, "personal_allowance_df": 11, "personal_savings_allowance_df": 11, "dividend_allowance_df": 11, "property_allowance_df": 11, "trading_allowance_df": 11, "income_tax_allowance_df": 11, "ignore_index": 11, "40000": [11, 13], "00000": 11, "currenc": 11, "gbp": 11, "4000": 11, "margin": [11, 13, 15, 16], "240000": 11, "2000": 11, "12819": 11, "79418": 11, "12570": 11, "12500": 11, "11850": 11, "11500": 11, "10600": 11, "2005": 11, "27": 11, "illustr": 11, "implement": 11, "conduct": 11, "fix": 11, "200": 11, "10_000": 11, "ax": [11, 13, 15], "min": [11, 13, 15], "200_000": 11, "count": [11, 13, 15], "1_000": [11, 13, 15], "vs": 11, "label": [11, 12, 13, 15, 16, 17], "welfar": 12, "overview": 12, "ni": 12, "paid": 12, "wage": 12, "profit": 12, "abov": [12, 17], "voluntari": 12, "want": [12, 17], "fill": 12, "separ": [12, 13], "tabul": 12, "basi": 12, "monthli": [12, 14], "flat": 12, "deriv": 12, "minu": 12, "upper": 12, "small": 12, "amp": 12, "fl": 12, "cla": 12, "threshold_paramet": 12, "class_1": 12, "lower_earnings_limit": 12, "primary_threshold": 12, "upper_earnings_limit": 12, "secondary_threshold": 12, "class_2": 12, "small_profits_threshold": 12, "class_4": 12, "lower_profits_limit": 12, "upper_profits_limit": 12, "rate_paramet": 12, "param": [12, 15, 16], "get_descend": 12, "isinst": 12, "instant": 12, "instant_valu": 12, "is_threshold": 12, "put": 12, "legend": [12, 13], "bottom": [12, 13, 17], "yanchor": [12, 13], "xanchor": [12, 13], "right": [12, 13, 15], "don": 12, "t": 12, "plot": [12, 13, 15, 16], "rental": 13, "england": 13, "northern": 13, "ireland": 13, "residenti": [13, 15, 16], "commerci": [13, 15, 16], "stamp_duti": 13, "stamp_duty_land_tax": 13, "whether": 13, "buyer": [13, 15, 16], "exceed": 13, "band": [13, 15, 16], "125": 13, "inelig": 13, "250": [13, 15, 16], "925": 13, "market": 13, "exempt": 13, "residential_r": 13, "125000": 13, "5200000": 13, "residential_purchase_main_first": 13, "300000": 13, "500000": 13, "925000": 13, "1500000": 13, "residential_purchase_main_standard": 13, "250000": 13, "residential_purchase_addit": 13, "non_residential_r": 13, "150000": 13, "5000000": 13, "non_residential_purchas": 13, "df_list": 13, "xaxis_tickprefix": [13, 15, 16], "cliff": 13, "main_residential_property_purchased_is_first_hom": [13, 15], "main_residential_property_purchas": [13, 15], "5_000_000": [13, 15], "home_pric": [13, 15], "marginal_r": [13, 15], "subplot": [13, 15], "make_subplot": [13, 15], "left": [13, 15, 17], "col": [13, 15], "subplot_titl": [13, 15], "add_trac": [13, 15], "title_text": [13, 15], "tickprefix": [13, 15], "update_yax": [13, 15], "were": 13, "resident": 13, "stat": 13, "1000000": 13, "non_residenti": [13, 15, 16], "text_auto": 13, "textposit": [13, 14], "outsid": 13, "set": 14, "stand": 14, "supplier": 14, "ofgem": 14, "regularli": 14, "everi": 14, "q3": 14, "epg": 14, "subsidis": 14, "bill": 14, "subsidi": 14, "domest": 14, "lcf": 14, "uprat": 14, "forecast": 14, "cornwal": 14, "simpl": 14, "season": 14, "d": [14, 17], "multipli": 14, "energy_price_cap": 14, "energy_price_guarante": 14, "bdbdbd": 14, "averag": 14, "legend_title_text": 14, "mid": 14, "end": 14, "time_period": 14, "02d": 14, "epg_cost": 14, "monthly_epg_subsidi": 14, "cumul": 14, "cumsum": 14, "inlin": 14, "insid": 14, "texttempl": 14, "consult": 14, "firm": 14, "affili": 14, "analys": 14, "resolut": 14, "lbtt": 15, "stamp": [15, 16], "duti": [15, 16], "sdlt": [15, 16], "ltt": [15, 16], "leas": [15, 16], "revenue_scotland": 15, "specifi": 15, "additiion": 15, "dwell": 15, "result": 15, "waiv": 15, "175": 15, "325": 15, "750": [15, 16], "145": 15, "first_time_buyer_r": 15, "largest": [15, 16], "200000": [15, 16], "additional_residence_surcharg": 15, "df_secondari": 15, "loc": 15, "lbtt_sim": 15, "land_and_buildings_transaction_tax": 15, "welsh": 16, "author": 16, "wra": 16, "land_transaction_tax": 16, "origin": 16, "revis": 16, "But": [16, 17], "therefor": 16, "180": 16, "400": 16, "225": 16, "higher_r": 16, "larg": 17, "anyon": 17, "former": 17, "few": 17, "minut": 17, "setup": 17, "academ": 17, "nonprofit": 17, "bit": 17, "longer": 17, "you": 17, "fast": 17, "possibl": 17, "googl": 17, "colab": 17, "importantli": 17, "enabl": 17, "everyon": 17, "environ": 17, "troubl": 17, "fiddl": 17, "bad": 17, "python": 17, "instal": 17, "etc": 17, "snippet": 17, "export": 17, "policyengine_github_microdata_auth_token": 17, "your_token_if_running_microsimul": 17, "pip": 17, "packag": 17, "just": 17, "actual": 17, "30_000": 17, "benunit": 17, "3486": 17, "dtype": 17, "float32": 17, "now": 17, "let": 17, "document": 17, "excel": 17, "syntax": 17, "parameternod": 17, "increase_basic_r": 17, "baseline_income_tax": 17, "reformed_income_tax": 17, "print": 17, "rais": 17, "871": 17, "raw": 17, "file": 17, "easiest": 17, "download": 17, "ve": 17, "got": 17, "github": 17, "account": 17, "permiss": 17, "storag": 17, "classic": 17, "access": 17, "token": 17, "bash": 17, "shell": 17, "your_token_her": 17, "select": 17, "enhanced_fr": 17, "10304435685574": 17, "string": 17, "vat": 17, "option": 17, "frs_2018": 17, "frs_2019": 17, "frs_2020": 17, "frs_2021": 17, "frs_2022": 17, "raw_frs_2021": 17, "pooled_frs_2019_21": 17, "spi_enhanced_pooled_frs_2019_21": 17, "calibrated_spi_enhanced_pooled_frs_2019_21": 17, "spi_2020_21": 17, "exactli": 17, "household_net_incom": 17, "39bn": 17, "web": 17, "app": 17, "tool": 17, "scroll": 17, "down": 17, "section": 17, "see": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"pension": [0, 7], "incom": [0, 2, 11], "sourc": 0, "policyengin": 1, "uk": [1, 2], "short": 1, "demo": 1, "baselin": 1, "estim": 1, "reform": [1, 17], "evalu": 1, "valid": [2, 3], "against": 2, "survei": 2, "person": [2, 6], "The": 2, "result": 2, "analys": [2, 17], "model": [2, 12], "discrep": 2, "conclus": 2, "carbon": 4, "tax": [4, 11, 13, 15, 16], "methodolog": [4, 11], "summari": 4, "appendix": [4, 11, 12], "intens": 4, "tv": 5, "licenc": 5, "legisl": [5, 6, 7, 8, 9, 11, 13, 15, 16], "fee": 5, "concess": 5, "microsimul": [5, 9, 17], "independ": 6, "payment": [6, 9], "pip": 6, "rate": [6, 7, 8, 10, 13, 15, 16], "chang": [6, 7, 8], "credit": [7, 8], "univers": 8, "child": 9, "benefit": 9, "level": [9, 17], "exampl": 9, "fuel": 10, "duti": [10, 13], "simul": [11, 17], "nation": 12, "insur": 12, "stamp": 13, "land": [13, 15, 16], "sdlt": 13, "statist": 13, "2019": 13, "2020": 13, "energi": 14, "price": 14, "cap": 14, "build": 15, "transact": [15, 16], "get": 17, "start": 17, "household": 17, "analysi": 17, "current": 17, "law": 17, "polici": 17, "set": 17, "up": 17, "run": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 56}})
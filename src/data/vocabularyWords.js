const vocabularyWords = [
    {
        "word": "abate",
        "meaning": "become less in amount or intensity"
    },
    {
        "word": "abdicate",
        "meaning": "give up, such as power, as of monarchs and emperors"
    },
    {
        "word": "aberration",
        "meaning": "a state or condition markedly different from the norm"
    },
    {
        "word": "abstain",
        "meaning": "refrain from doing, consuming, or partaking in something"
    },
    {
        "word": "adversity",
        "meaning": "a state of misfortune or affliction"
    },
    {
        "word": "aesthetic",
        "meaning": "characterized by an appreciation of beauty or good taste"
    },
    {
        "word": "amicable",
        "meaning": "characterized by friendship and good will"
    },
    {
        "word": "anachronistic",
        "meaning": "chronologically misplaced"
    },
    {
        "word": "arid",
        "meaning": "lacking sufficient water or rainfall"
    },
    {
        "word": "asylum",
        "meaning": "a shelter from danger or hardship"
    },
    {
        "word": "benevolent",
        "meaning": "showing or motivated by sympathy and understanding"
    },
    {
        "word": "bias",
        "meaning": "a partiality preventing objective consideration of an issue"
    },
    {
        "word": "boisterous",
        "meaning": "full of rough and exuberant animal spirits"
    },
    {
        "word": "brazen",
        "meaning": "unrestrained by convention or propriety"
    },
    {
        "word": "brusque",
        "meaning": "rudely abrupt or blunt in speech or manner"
    },
    {
        "word": "camaraderie",
        "meaning": "the quality of affording easy familiarity and sociability"
    },
    {
        "word": "canny",
        "meaning": "showing self-interest and shrewdness in dealing with others"
    },
    {
        "word": "capacious",
        "meaning": "large in the amount that can be contained"
    },
    {
        "word": "capitulate",
        "meaning": "surrender under agreed conditions"
    },
    {
        "word": "clairvoyant",
        "meaning": "someone who can perceive things not present to the senses"
    },
    {
        "word": "collaborate",
        "meaning": "work together on a common enterprise or project"
    },
    {
        "word": "compassion",
        "meaning": "a deep awareness of and sympathy for another's suffering"
    },
    {
        "word": "compromise",
        "meaning": "an accommodation in which both sides make concessions"
    },
    {
        "word": "condescending",
        "meaning": "characteristic of those who treat others with arrogance"
    },
    {
        "word": "conditional",
        "meaning": "imposing or depending on or containing an assumption"
    },
    {
        "word": "conformist",
        "meaning": "someone who follows established standards of conduct"
    },
    {
        "word": "conundrum",
        "meaning": "a difficult problem"
    },
    {
        "word": "convergence",
        "meaning": "the act of coming closer"
    },
    {
        "word": "deleterious",
        "meaning": "harmful to living things"
    },
    {
        "word": "demagogue",
        "meaning": "a leader who seeks support by appealing to popular passions"
    },
    {
        "word": "digression",
        "meaning": "a message that departs from the main subject"
    },
    {
        "word": "diligent",
        "meaning": "quietly and steadily persevering in detail or exactness"
    },
    {
        "word": "discredit",
        "meaning": "the state of being held in low esteem"
    },
    {
        "word": "disdain",
        "meaning": "lack of respect accompanied by a feeling of intense dislike"
    },
    {
        "word": "divergent",
        "meaning": "tending to move apart in different directions"
    },
    {
        "word": "empathy",
        "meaning": "understanding and entering into another's feelings"
    },
    {
        "word": "emulate",
        "meaning": "strive to equal or match, especially by imitating"
    },
    {
        "word": "enervating",
        "meaning": "causing weakness or debilitation"
    },
    {
        "word": "ephemeral",
        "meaning": "anything short-lived, as an insect that lives only for a day"
    },
    {
        "word": "evanescent",
        "meaning": "tending to vanish like vapor"
    },
    {
        "word": "exemplary",
        "meaning": "worthy of imitation"
    },
    {
        "word": "extenuating",
        "meaning": "partially excusing or justifying"
    },
    {
        "word": "florid",
        "meaning": "elaborately or excessively ornamented"
    },
    {
        "word": "forbearance",
        "meaning": "a delay in enforcing rights or claims or privileges"
    },
    {
        "word": "fortitude",
        "meaning": "strength of mind that enables one to endure adversity"
    },
    {
        "word": "fortuitous",
        "meaning": "lucky; occurring by happy chance"
    },
    {
        "word": "foster",
        "meaning": "providing nurture though not related by blood or legal ties"
    },
    {
        "word": "fraught",
        "meaning": "filled with or attended with"
    },
    {
        "word": "frugal",
        "meaning": "avoiding waste"
    },
    {
        "word": "hackneyed",
        "meaning": "repeated too often; overfamiliar through overuse"
    },
    {
        "word": "haughty",
        "meaning": "having or showing arrogant superiority"
    },
    {
        "word": "hedonist",
        "meaning": "someone motivated by desires for sensual pleasures"
    },
    {
        "word": "hypothesis",
        "meaning": "a tentative insight that is not yet verified or tested"
    },
    {
        "word": "impetuous",
        "meaning": "characterized by undue haste and lack of thought"
    },
    {
        "word": "impute",
        "meaning": "attribute or credit to"
    },
    {
        "word": "inconsequential",
        "meaning": "lacking worth or importance"
    },
    {
        "word": "inevitable",
        "meaning": "incapable of being avoided or prevented"
    },
    {
        "word": "intrepid",
        "meaning": "invulnerable to fear or intimidation"
    },
    {
        "word": "intuitive",
        "meaning": "spontaneously derived from or prompted by a natural tendency"
    },
    {
        "word": "jubilation",
        "meaning": "a feeling of extreme joy"
    },
    {
        "word": "lobbyist",
        "meaning": "someone who is employed to persuade how legislators vote"
    },
    {
        "word": "longevity",
        "meaning": "the property of having lived for a considerable time"
    },
    {
        "word": "mundane",
        "meaning": "found in the ordinary course of events"
    },
    {
        "word": "nonchalant",
        "meaning": "marked by casual unconcern or indifference"
    },
    {
        "word": "opulent",
        "meaning": "rich and superior in quality"
    },
    {
        "word": "orator",
        "meaning": "a person who delivers a speech"
    },
    {
        "word": "ostentatious",
        "meaning": "intended to attract notice and impress others"
    },
    {
        "word": "parched",
        "meaning": "dried out by heat or excessive exposure to sunlight"
    },
    {
        "word": "perfidious",
        "meaning": "tending to betray"
    },
    {
        "word": "pragmatic",
        "meaning": "concerned with practical matters"
    },
    {
        "word": "precocious",
        "meaning": "characterized by exceptionally early development"
    },
    {
        "word": "pretentious",
        "meaning": "creating an appearance of importance or distinction"
    },
    {
        "word": "procrastinate",
        "meaning": "postpone doing what one should be doing"
    },
    {
        "word": "prosaic",
        "meaning": "lacking wit or imagination"
    },
    {
        "word": "prosperity",
        "meaning": "the condition of having good fortune"
    },
    {
        "word": "provocative",
        "meaning": "serving or tending to excite or stimulate"
    },
    {
        "word": "prudent",
        "meaning": "marked by sound judgment"
    },
    {
        "word": "querulous",
        "meaning": "habitually complaining"
    },
    {
        "word": "rancorous",
        "meaning": "showing deep-seated resentment"
    },
    {
        "word": "reclusive",
        "meaning": "withdrawn from society; seeking solitude"
    },
    {
        "word": "reconciliation",
        "meaning": "the reestablishment of cordial relations"
    },
    {
        "word": "renovation",
        "meaning": "the act of improving by renewing and restoring"
    },
    {
        "word": "restrained",
        "meaning": "under control"
    },
    {
        "word": "reverence",
        "meaning": "a feeling of profound respect for someone or something"
    },
    {
        "word": "sagacity",
        "meaning": "the ability to understand and discriminate between relations"
    },
    {
        "word": "scrutinize",
        "meaning": "examine carefully for accuracy"
    },
    {
        "word": "spontaneous",
        "meaning": "said or done without having been planned in advance"
    },
    {
        "word": "spurious",
        "meaning": "plausible but false"
    },
    {
        "word": "submissive",
        "meaning": "inclined or willing to give in to orders or wishes of others"
    },
    {
        "word": "substantiate",
        "meaning": "establish or strengthen as with new evidence or facts"
    },
    {
        "word": "subtle",
        "meaning": "difficult to detect or grasp by the mind or analyze"
    },
    {
        "word": "superficial",
        "meaning": "of, affecting, or being on or near the surface"
    },
    {
        "word": "superfluous",
        "meaning": "more than is needed, desired, or required"
    },
    {
        "word": "surreptitious",
        "meaning": "marked by quiet and caution and secrecy"
    },
    {
        "word": "tactful",
        "meaning": "having a sense of what is considerate in dealing with others"
    },
    {
        "word": "tenacious",
        "meaning": "stubbornly unyielding"
    },
    {
        "word": "transient",
        "meaning": "lasting a very short time"
    },
    {
        "word": "venerable",
        "meaning": "profoundly honored"
    },
    {
        "word": "vindicate",
        "meaning": "show to be right by providing justification or proof"
    },
    {
        "word": "wary",
        "meaning": "marked by keen caution and watchful prudence"
    }
]
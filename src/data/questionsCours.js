export const QUESTIONS_COURS = [
    {
        id: 101,
        question: "Lors d'un entretien, l'employeur peut-il interroger une candidate sur ses projets de grossesse ?",
        options: [
            { id: 'a', text: "Oui, si le poste demande beaucoup de déplacements" },
            { id: 'b', text: "Non, c'est une question discriminatoire liée à la vie privée" },
            { id: 'c', text: "Oui, mais la candidate peut refuser de répondre" }
        ],
        correctId: 'b',
        explanation: "Interdit. Cela relève de la vie privée. La candidate peut même mentir sur ce sujet sans risque de sanction ultérieure."
    },
    {
        id: 102,
        question: "Quelle est la durée maximale de la période d'essai pour un Cadre (renouvellement inclus) ?",
        options: [
            { id: 'a', text: "4 mois" },
            { id: 'b', text: "6 mois" },
            { id: 'c', text: "8 mois" }
        ],
        correctId: 'c',
        explanation: "4 mois initialement + 4 mois de renouvellement = 8 mois maximum (si accord de branche étendu le prévoit)."
    },
    {
        id: 103,
        question: "La fiche de poste est-elle un document obligatoire pour la validité du contrat ?",
        options: [
            { id: 'a', text: "Oui, elle doit être annexée" },
            { id: 'b', text: "Non, mais elle est fortement recommandée pour clarifier les missions" }
        ],
        correctId: 'b',
        explanation: "Ce n'est pas un document légal obligatoire, mais un outil de gestion RH précieux pour l'évaluation et la définition des objectifs."
    },
    {
        id: 104,
        question: "Peut-on renouveler une période d'essai automatiquement ?",
        options: [
            { id: 'a', text: "Oui, si c'est écrit dans le contrat" },
            { id: 'b', text: "Non, il faut l'accord exprès du salarié avant la fin de la période initiale" }
        ],
        correctId: 'b',
        explanation: "Le renouvellement nécessite un accord écrit et exprès du salarié. Une clause de renouvellement automatique est nulle."
    },
    {
        id: 105,
        question: "Un test professionnel lors du recrutement doit :",
        options: [
            { id: 'a', text: "Être rémunéré" },
            { id: 'b', text: "Ne pas consister en un travail productif au profit de l'entreprise" },
            { id: 'c', text: "Durer au moins une semaine" }
        ],
        correctId: 'b',
        explanation: "Le test sert à évaluer l'aptitude. S'il y a prestation de travail productive et rentable, cela devient un contrat de travail dissimulé."
    },
    {
        id: 201,
        question: "Le contingent annuel d'heures supplémentaires est fixé par défaut à :",
        options: [
            { id: 'a', text: "150 heures" },
            { id: 'b', text: "220 heures" },
            { id: 'c', text: "300 heures" }
        ],
        correctId: 'b',
        explanation: "220 heures par salarié par an (à défaut d'accord collectif différent)."
    },
    {
        id: 202,
        question: "Le forfait-jours (en jours par an) est limité légalement à :",
        options: [
            { id: 'a', text: "218 jours" },
            { id: 'b', text: "235 jours" },
            { id: 'c', text: "200 jours" }
        ],
        correctId: 'a',
        explanation: "218 jours maximum. Le salarié renonce aux 35h et aux heures supp, en échange de jours de repos (RTT cadres) et d'une autonomie."
    },
    {
        id: 203,
        question: "Le temps de trajet domicile-travail est-il du temps de travail effectif ?",
        options: [
            { id: 'a', text: "Oui, toujours" },
            { id: 'b', text: "Non, sauf s'il dépasse le temps normal de trajet (déplacement pro inhabituel)" }
        ],
        correctId: 'b',
        explanation: "En principe non. Mais si un déplacement professionnel dépasse le temps normal de trajet domicile-travail, il doit faire l'objet d'une contrepartie."
    },
    {
        id: 204,
        question: "Le repos quotidien obligatoire est de :",
        options: [
            { id: 'a', text: "9 heures consécutives" },
            { id: 'b', text: "11 heures consécutives" },
            { id: 'c', text: "12 heures consécutives" }
        ],
        correctId: 'b',
        explanation: "Tout salarié doit bénéficier d'un repos de 11h consécutives entre deux journées de travail (sauf dérogations exceptionnelles)."
    },
    {
        id: 205,
        question: "Droit à la déconnexion : qui est concerné ?",
        options: [
            { id: 'a', text: "Uniquement les cadres au forfait" },
            { id: 'b', text: "Tous les salariés utilisant des outils numériques" }
        ],
        correctId: 'b',
        explanation: "Bien que crucial pour le forfait-jours, ce droit concerne tous les salariés pour garantir le respect des temps de repos et de la vie privée."
    },
    {
        id: 301,
        question: "La participation aux bénéfices est obligatoire dans les entreprises de :",
        options: [
            { id: 'a', text: "Plus de 11 salariés" },
            { id: 'b', text: "Plus de 50 salariés" },
            { id: 'c', text: "Toutes les entreprises" }
        ],
        correctId: 'b',
        explanation: "Obligatoire dès 50 salariés. L'intéressement, lui, est toujours facultatif."
    },
    {
        id: 302,
        question: "Une prime de '13ème mois' prévue par usage peut-elle être supprimée ?",
        options: [
            { id: 'a', text: "Oui, du jour au lendemain" },
            { id: 'b', text: "Oui, par dénonciation de l'usage (information + délai de prévenance)" },
            { id: 'c', text: "Non, jamais" }
        ],
        correctId: 'b',
        explanation: "L'employeur peut dénoncer un usage en respectant 3 règles : information des IRP, information individuelle des salariés, et respect d'un délai de prévenance suffisant."
    },
    {
        id: 303,
        question: "Qu'est-ce que le 'salaire de base' ?",
        options: [
            { id: 'a', text: "Le salaire net perçu" },
            { id: 'b', text: "La rémunération brute stable hors primes et accessoires" },
            { id: 'c', text: "Le SMIC uniquement" }
        ],
        correctId: 'b',
        explanation: "C'est la partie fixe et stable de la rémunération versée en contrepartie du travail, avant ajout des primes variables, ancienneté, etc."
    },
    {
        id: 304,
        question: "Les stock-options permettent au salarié :",
        options: [
            { id: 'a', text: "D'avoir des actions gratuites immédiatement" },
            { id: 'b', text: "D'acheter des actions plus tard à un prix fixé aujourd'hui" }
        ],
        correctId: 'b',
        explanation: "C'est une option d'achat. Le gain vient de la différence entre le prix fixé (strike) et la valeur réelle de l'action au moment où on lève l'option."
    },
    {
        id: 305,
        question: "L'entretien d'évaluation (annuel) est-il obligatoire par la loi ?",
        options: [
            { id: 'a', text: "Oui" },
            { id: 'b', text: "Non" }
        ],
        correctId: 'b',
        explanation: "Non, la loi n'impose que l'entretien professionnel (tous les 2 ans). L'entretien d'évaluation est un droit de l'employeur mais pas une obligation légale."
    },
    {
        id: 401,
        question: "Le harcèlement moral se caractérise par :",
        options: [
            { id: 'a', text: "Un acte unique mais violent" },
            { id: 'b', text: "Des agissements répétés dégradant les conditions de travail" }
        ],
        correctId: 'b',
        explanation: "La répétition est le critère clé du harcèlement moral (contrairement au harcèlement sexuel ou à la violence qui peuvent être uniques)."
    },
    {
        id: 402,
        question: "En cas de harcèlement, l'employeur a une obligation de :",
        options: [
            { id: 'a', text: "Moyens (il doit essayer d'arrêter)" },
            { id: 'b', text: "Sécurité (obligation de résultat ou de moyens renforcée)" }
        ],
        correctId: 'b',
        explanation: "L'employeur doit prévenir et faire cesser le harcèlement. Sa responsabilité est très vite engagée s'il ne prend pas de mesures immédiates."
    },
    {
        id: 403,
        question: "Le Burn-out est-il reconnu automatiquement comme maladie professionnelle ?",
        options: [
            { id: 'a', text: "Oui, c'est dans le tableau de la Sécu" },
            { id: 'b', text: "Non, il faut prouver le lien direct et essentiel devant un comité (CRRMP)" }
        ],
        correctId: 'b',
        explanation: "Ce n'est pas automatique (pas de tableau). Le dossier est complexe et nécessite un taux d'incapacité de 25% pour être examiné."
    },
    {
        id: 404,
        question: "Qu'est-ce que le 'Bore-out' ?",
        options: [
            { id: 'a', text: "L'épuisement par surchage de travail" },
            { id: 'b', text: "L'épuisement par l'ennui et le manque de tâches" }
        ],
        correctId: 'b',
        explanation: "C'est l'inverse du burn-out. L'ennui au travail provoque une souffrance psychologique et une dévalorisation de soi."
    },
    {
        id: 405,
        question: "Un salarié qui témoigne de faits de harcèlement est-il protégé ?",
        options: [
            { id: 'a', text: "Non, il risque un licenciement pour déloyauté" },
            { id: 'b', text: "Oui, il bénéficie d'une protection contre le licenciement" }
        ],
        correctId: 'b',
        explanation: "Oui. Aucun salarié ne peut être sanctionné pour avoir relaté ou témoigné de bonne foi de faits de harcèlement."
    },
    {
        id: 501,
        question: "Quelle indemnité n'est PAS due en cas de démission classique ?",
        options: [
            { id: 'a', text: "Indemnité de congés payés" },
            { id: 'b', text: "Indemnité de licenciement" }
        ],
        correctId: 'b',
        explanation: "Le démissionnaire perd l'indemnité de licenciement et (souvent) le droit au chômage. Il garde ses congés payés acquis."
    },
    {
        id: 502,
        question: "La 'Prise d'acte' de la rupture produit les effets d'un licenciement sans cause réelle et sérieuse si :",
        options: [
            { id: 'a', text: "Le salarié le décide" },
            { id: 'b', text: "Les juges estiment que les torts de l'employeur sont fondés et graves" }
        ],
        correctId: 'b',
        explanation: "C'est le juge qui décide a posteriori. Si les torts ne sont pas prouvés, la prise d'acte est requalifiée en démission (très risqué pour le salarié)."
    },
    {
        id: 503,
        question: "L'ordre des licenciements économiques est défini par :",
        options: [
            { id: 'a', text: "L'employeur selon ses affinités" },
            { id: 'b', text: "Des critères légaux (charges famille, ancienneté, handicap...)" }
        ],
        correctId: 'b',
        explanation: "L'employeur doit appliquer des critères objectifs (barème par points souvent) pour désigner qui sera licencié."
    },
    {
        id: 504,
        question: "En cas de licenciement économique, le salarié bénéficie d'une priorité de réembauche de :",
        options: [
            { id: 'a', text: "6 mois" },
            { id: 'b', text: "1 an" }
        ],
        correctId: 'b',
        explanation: "1 an à compter de la rupture, s'il en fait la demande."
    },
    {
        id: 505,
        question: "La faute lourde implique :",
        options: [
            { id: 'a', text: "Une simple erreur grave" },
            { id: 'b', text: "Une intention de nuire à l'employeur" }
        ],
        correctId: 'b',
        explanation: "C'est le degré ultime de la faute (sabotage, violence volontaire, concurrence déloyale). Elle est la seule à pouvoir engager la responsabilité pécuniaire du salarié."
    }
];

export const QUESTIONS_COURS_SUPPLEMENTAIRES = [
    // --- MODULE 1 : EMBAUCHE & CONTRAT (15 questions) ---
    {
        id: 600,
        question: "Une offre de contrat de travail peut-elle être rétractée par l'employeur ?",
        options: [
            { id: 'a', text: "Non, jamais" },
            { id: 'b', text: "Oui, tant qu'elle n'est pas parvenue à son destinataire ou avant l'expiration du délai fixé" },
            { id: 'c', text: "Oui, même après acceptation du salarié" }
        ],
        correctId: 'b',
        explanation: "L'offre peut être rétractée librement tant qu'elle n'a pas été reçue. Si elle est reçue, elle doit être maintenue pendant le délai fixé."
    },
    {
        id: 601,
        question: "La différence majeure entre une offre de contrat et une promesse unilatérale est :",
        options: [
            { id: 'a', text: "Le salaire proposé" },
            { id: 'b', text: "La révocation de la promesse n'empêche pas la formation du contrat (dommages-intérêts)" },
            { id: 'c', text: "L'offre doit être écrite, la promesse orale" }
        ],
        correctId: 'b',
        explanation: "La révocation d'une promesse est fautive et vaut licenciement sans cause réelle et sérieuse, alors que la révocation d'une offre (dans les délais) empêche la conclusion du contrat."
    },
    {
        id: 602,
        question: "Un questionnaire d'embauche peut-il demander si le candidat est syndiqué ?",
        options: [
            { id: 'a', text: "Oui, pour organiser les élections" },
            { id: 'b', text: "Non, c'est une information confidentielle et discriminatoire" },
            { id: 'c', text: "Oui, si l'entreprise a beaucoup de syndicats" }
        ],
        correctId: 'b',
        explanation: "Il est strictement interdit de poser des questions sur l'appartenance syndicale, politique ou religieuse."
    },
    {
        id: 603,
        question: "Le renouvellement de la période d'essai est-il automatique ?",
        options: [
            { id: 'a', text: "Oui, c'est la loi" },
            { id: 'b', text: "Non, il faut l'accord écrit du salarié et que ce soit prévu par la branche et le contrat" }
        ],
        correctId: 'b',
        explanation: "Double condition : possibilité prévue par accord de branche étendu ET clause dans le contrat, plus accord exprès du salarié."
    },
    {
        id: 604,
        question: "Quelle est la durée maximale de la période d'essai pour un agent de maîtrise (renouvellement inclus) ?",
        options: [
            { id: 'a', text: "4 mois" },
            { id: 'b', text: "6 mois" },
            { id: 'c', text: "8 mois" }
        ],
        correctId: 'b',
        explanation: "3 mois initialement + 3 mois de renouvellement = 6 mois maximum."
    },
    {
        id: 605,
        question: "La rupture de la période d'essai pour motif économique est-elle possible ?",
        options: [
            { id: 'a', text: "Oui, tout motif est valable" },
            { id: 'b', text: "Non, la rupture doit être liée aux compétences de la personne" }
        ],
        correctId: 'b',
        explanation: "La période d'essai sert à évaluer les compétences. La rompre pour un motif économique est un détournement de procédure (abusif)."
    },
    {
        id: 606,
        question: "Le délai de prévenance en cas de rupture de l'essai par l'employeur après 3 mois de présence est de :",
        options: [
            { id: 'a', text: "24 heures" },
            { id: 'b', text: "48 heures" },
            { id: 'c', text: "2 semaines" }
        ],
        correctId: 'c',
        explanation: "Après 3 mois de présence, le délai de prévenance légal monte à 1 mois (mais souvent 2 semaines selon les conventions, attention à la loi qui prime si plus favorable)."
    },
    {
        id: 607,
        question: "Une clause de mobilité géographique doit définir :",
        options: [
            { id: 'a', text: "Une zone géographique précise" },
            { id: 'b', text: "Le monde entier" },
            { id: 'c', text: "Rien, elle est implicite" }
        ],
        correctId: 'a',
        explanation: "Pour être valide, la clause de mobilité doit définir précisément sa zone d'application (départements, régions) dès la signature."
    },
    {
        id: 608,
        question: "La clause d'exclusivité permet :",
        options: [
            { id: 'a', text: "D'interdire au salarié de travailler ailleurs pendant son contrat" },
            { id: 'b', text: "D'interdire au salarié de travailler après son contrat" },
            { id: 'c', text: "De payer le salarié moins cher" }
        ],
        correctId: 'a',
        explanation: "Elle interdit le cumul d'emplois pendant l'exécution du contrat. Après le contrat, c'est la clause de non-concurrence."
    },
    {
        id: 609,
        question: "Mentir sur son CV concernant une expérience précise peut justifier un licenciement si :",
        options: [
            { id: 'a', text: "L'employeur s'en aperçoit 5 ans plus tard" },
            { id: 'b', text: "Le salarié n'a pas les compétences requises pour le poste" }
        ],
        correctId: 'b',
        explanation: "Le mensonge seul ne suffit pas toujours, il faut prouver l'incompétence résultant de ce mensonge pour justifier la faute."
    },
    {
        id: 610,
        question: "Le 'testing' est une méthode utilisée pour prouver :",
        options: [
            { id: 'a', text: "La compétence du salarié" },
            { id: 'b', text: "Une discrimination à l'embauche" }
        ],
        correctId: 'b',
        explanation: "C'est une méthode de preuve admise au pénal et au civil pour démontrer qu'un employeur écarte des candidats sur des critères discriminatoires."
    },
    {
        id: 611,
        question: "Une période d'essai peut-elle être rompue pendant un arrêt maladie ?",
        options: [
            { id: 'a', text: "Non, jamais" },
            { id: 'b', text: "Oui, mais pas en raison de la maladie" }
        ],
        correctId: 'b',
        explanation: "Oui, mais la rupture ne doit pas être discriminatoire (liée à la santé). Elle doit être liée aux compétences (jugées avant l'arrêt)."
    },
    {
        id: 612,
        question: "Si l'employeur ne respecte pas le délai de prévenance de rupture d'essai, le contrat devient-il un CDI ?",
        options: [
            { id: 'a', text: "Oui" },
            { id: 'b', text: "Non, mais il doit payer une indemnité compensatrice" }
        ],
        correctId: 'b',
        explanation: "La rupture reste valable, mais l'employeur doit payer les jours de salaire correspondant au délai non respecté."
    },
    {
        id: 613,
        question: "La clause de dédit-formation engage le salarié à :",
        options: [
            { id: 'a', text: "Suivre toutes les formations" },
            { id: 'b', text: "Rembourser les frais de formation s'il démissionne avant un certain délai" }
        ],
        correctId: 'b',
        explanation: "Elle permet à l'employeur de rentabiliser une formation coûteuse (au-delà du légal) si le salarié part trop tôt."
    },
    {
        id: 614,
        question: "Le contrat de travail existe dès que sont réunis :",
        options: [
            { id: 'a', text: "Un écrit et une signature" },
            { id: 'b', text: "Une prestation de travail, une rémunération et un lien de subordination" }
        ],
        correctId: 'b',
        explanation: "C'est la définition juridique. L'écrit n'est qu'une preuve (sauf CDD). La réalité de l'exécution prime."
    },

    // --- MODULE 2 : ORGANISATION DU TRAVAIL (15 questions) ---
    {
        id: 615,
        question: "La durée maximale quotidienne de travail effectif est de :",
        options: [
            { id: 'a', text: "8 heures" },
            { id: 'b', text: "10 heures" },
            { id: 'c', text: "12 heures" }
        ],
        correctId: 'b',
        explanation: "10 heures par jour, sauf dérogations (accords collectifs ou urgence)."
    },
    {
        id: 616,
        question: "La durée maximale hebdomadaire absolue (sur une seule semaine) est de :",
        options: [
            { id: 'a', text: "44 heures" },
            { id: 'b', text: "48 heures" },
            { id: 'c', text: "60 heures" }
        ],
        correctId: 'b',
        explanation: "On ne peut jamais dépasser 48h sur une semaine isolée (et 44h en moyenne sur 12 semaines)."
    },
    {
        id: 617,
        question: "Les heures supplémentaires se décomptent :",
        options: [
            { id: 'a', text: "À la semaine civile" },
            { id: 'b', text: "Au mois" },
            { id: 'c', text: "À l'année" }
        ],
        correctId: 'a',
        explanation: "Le seuil de 35h s'apprécie par semaine civile (lundi 0h à dimanche 24h), sauf accord d'annualisation."
    },
    {
        id: 618,
        question: "Quelle est la majoration légale des 8 premières heures supplémentaires (36e à 43e) ?",
        options: [
            { id: 'a', text: "10%" },
            { id: 'b', text: "25%" },
            { id: 'c', text: "50%" }
        ],
        correctId: 'b',
        explanation: "25% pour les 8 premières heures, puis 50% au-delà (sauf si accord d'entreprise prévoit moins, min 10%)."
    },
    {
        id: 619,
        question: "La contrepartie obligatoire en repos (COR) s'applique :",
        options: [
            { id: 'a', text: "Dès la 1ère heure supplémentaire" },
            { id: 'b', text: "Au-delà du contingent annuel d'heures supplémentaires" }
        ],
        correctId: 'b',
        explanation: "Quand le salarié dépasse le contingent annuel (220h par défaut), il gagne en plus une contrepartie en repos (50% ou 100%)."
    },
    {
        id: 620,
        question: "Le travail de nuit est défini comme tout travail effectué entre :",
        options: [
            { id: 'a', text: "20h et 6h" },
            { id: 'b', text: "21h et 6h" },
            { id: 'c', text: "Minuit et 5h" }
        ],
        correctId: 'b',
        explanation: "C'est la plage légale par défaut (21h-6h), pouvant varier selon les accords collectifs (9h consécutives)."
    },
    {
        id: 621,
        question: "Le repos hebdomadaire doit avoir une durée minimale de :",
        options: [
            { id: 'a', text: "24 heures" },
            { id: 'b', text: "35 heures" },
            { id: 'c', text: "48 heures" }
        ],
        correctId: 'b',
        explanation: "24h consécutives de repos hebdomadaire + 11h de repos quotidien accolées = 35h de repos consécutif minimum."
    },
    {
        id: 622,
        question: "Un salarié à temps partiel peut-il faire des heures supplémentaires ?",
        options: [
            { id: 'a', text: "Oui" },
            { id: 'b', text: "Non, on appelle ça des heures complémentaires" }
        ],
        correctId: 'b',
        explanation: "Juridiquement, ce sont des heures 'complémentaires', limitées à 1/10e ou 1/3 de la durée contractuelle, et moins majorées."
    },
    {
        id: 623,
        question: "Le refus du télétravail par l'employeur doit-il être motivé ?",
        options: [
            { id: 'a', text: "Oui, si le poste est éligible" },
            { id: 'b', text: "Non, c'est son pouvoir de direction discrétionnaire" }
        ],
        correctId: 'a',
        explanation: "Si un accord ou une charte existe et que le salarié est éligible, le refus doit être motivé."
    },
    {
        id: 624,
        question: "L'employeur doit-il prendre en charge les coûts du télétravail ?",
        options: [
            { id: 'a', text: "Non, c'est le choix du salarié" },
            { id: 'b', text: "Oui, notamment pour les frais professionnels (ex: abonnement internet pro)" }
        ],
        correctId: 'b',
        explanation: "L'ANI sur le télétravail impose la prise en charge des frais engagés pour les besoins de l'activité professionnelle."
    },
    {
        id: 625,
        question: "Le temps d'habillage est-il du temps de travail effectif ?",
        options: [
            { id: 'a', text: "Oui, toujours" },
            { id: 'b', text: "Non, mais il doit faire l'objet de contrepartie si la tenue est obligatoire et mise sur place" }
        ],
        correctId: 'b',
        explanation: "Si tenue obligatoire + habillage sur place imposé = contrepartie (financière ou repos), mais pas forcément du 'travail effectif'."
    },
    {
        id: 626,
        question: "Un accord de performance collective (APC) peut-il modifier la rémunération ?",
        options: [
            { id: 'a', text: "Non" },
            { id: 'b', text: "Oui, et si le salarié refuse, il peut être licencié" }
        ],
        correctId: 'b',
        explanation: "L'APC permet d'aménager durée/rémunération. Le refus du salarié entraîne un licenciement sui generis (ni éco ni perso)."
    },
    {
        id: 627,
        question: "Le travail le dimanche est :",
        options: [
            { id: 'a', text: "Autorisé pour tous" },
            { id: 'b', text: "Interdit par principe, sauf dérogations" }
        ],
        correctId: 'b',
        explanation: "Le principe est le repos dominical. Les dérogations sont strictes (commerces, industries en continu, zone touristique)."
    },
    {
        id: 628,
        question: "La pause déjeuner est-elle payée ?",
        options: [
            { id: 'a', text: "Oui" },
            { id: 'b', text: "Non, sauf si le salarié reste à la disposition de l'employeur" }
        ],
        correctId: 'b',
        explanation: "Si le salarié peut vaquer à ses occupations personnelles, ce n'est pas du travail effectif, donc non payé."
    },
    {
        id: 629,
        question: "L'employeur peut-il installer une vidéosurveillance ?",
        options: [
            { id: 'a', text: "Oui, sans rien dire" },
            { id: 'b', text: "Oui, mais en informant les salariés et le CSE, et sans filmer les postes de travail en permanence" }
        ],
        correctId: 'b',
        explanation: "Information préalable obligatoire + proportionnalité (pas de surveillance constante et injustifiée de l'activité)."
    },

    // --- MODULE 3 : REMUNERATION & COMPETENCES (15 questions) ---
    {
        id: 630,
        question: "Une prime de bilan est une gratification :",
        options: [
            { id: 'a', text: "Bénévole (sauf usage)" },
            { id: 'b', text: "Toujours obligatoire" }
        ],
        correctId: 'a',
        explanation: "C'est souvent une libéralité (bénévole), sauf si elle devient un usage (fixe, constante, générale)."
    },
    {
        id: 631,
        question: "L'égalité de rémunération Homme/Femme est mesurée par :",
        options: [
            { id: 'a', text: "Le bon vouloir du patron" },
            { id: 'b', text: "L'Index d'égalité professionnelle" }
        ],
        correctId: 'b',
        explanation: "Obligatoire pour les entreprises > 50 salariés, note sur 100 points."
    },
    {
        id: 632,
        question: "La participation aux résultats est bloquée pendant :",
        options: [
            { id: 'a', text: "1 an" },
            { id: 'b', text: "5 ans" },
            { id: 'c', text: "La retraite" }
        ],
        correctId: 'b',
        explanation: "5 ans par défaut, sauf cas de déblocage anticipé (mariage, achat résidence, départ entreprise...)."
    },
    {
        id: 633,
        question: "L'intéressement (primes sur objectifs collectifs) est :",
        options: [
            { id: 'a', text: "Obligatoire" },
            { id: 'b', text: "Facultatif et aléatoire" }
        ],
        correctId: 'b',
        explanation: "C'est un dispositif facultatif. Il doit avoir un caractère aléatoire (on ne peut pas garantir le montant à l'avance)."
    },
    {
        id: 634,
        question: "Quelle est la sanction civile du travail dissimulé (ex: heures sup non payées) ?",
        options: [
            { id: 'a', text: "Rien" },
            { id: 'b', text: "Indemnité forfaitaire de 6 mois de salaire" }
        ],
        correctId: 'b',
        explanation: "En cas de rupture du contrat, si le travail dissimulé est prouvé, le salarié touche une indemnité forfaitaire de 6 mois."
    },
    {
        id: 635,
        question: "Un véhicule de fonction (utilisable le WE) est :",
        options: [
            { id: 'a', text: "Un outil de travail" },
            { id: 'b', text: "Un avantage en nature soumis à cotisations" }
        ],
        correctId: 'b',
        explanation: "Si l'usage privé est autorisé, c'est du salaire déguisé (avantage en nature), donc soumis à charges sociales."
    },
    {
        id: 636,
        question: "L'entretien annuel d'évaluation sert à :",
        options: [
            { id: 'a', text: "Fixer les objectifs et évaluer la performance" },
            { id: 'b', text: "Parler uniquement de formation" }
        ],
        correctId: 'a',
        explanation: "Il évalue le travail de l'année écoulée et fixe les objectifs. À ne pas confondre avec l'entretien professionnel (compétences/avenir)."
    },
    {
        id: 637,
        question: "Le remboursement des frais professionnels se fait :",
        options: [
            { id: 'a', text: "Au forfait ou au réel" },
            { id: 'b', text: "Uniquement au réel" }
        ],
        correctId: 'a',
        explanation: "L'employeur peut choisir (sauf exceptions) entre le remboursement sur justificatifs (réel) ou une allocation forfaitaire (URSSAF)."
    },
    {
        id: 638,
        question: "La clause d'objectifs (rémunération variable) doit être :",
        options: [
            { id: 'a', text: "Réaliste et réalisable" },
            { id: 'b', text: "Impossible à atteindre pour motiver" }
        ],
        correctId: 'a',
        explanation: "Si les objectifs sont irréalisables, l'employeur commet une faute et doit payer la part variable intégralement."
    },
    {
        id: 639,
        question: "Le PEE (Plan Epargne Entreprise) permet de :",
        options: [
            { id: 'a', text: "Se constituer un portefeuille de valeurs mobilières avec l'aide de l'entreprise" },
            { id: 'b', text: "Payer ses impôts" }
        ],
        correctId: 'a',
        explanation: "Il reçoit participation, intéressement et versements volontaires, souvent avec un 'abondement' (cadeau) de l'employeur."
    },
    {
        id: 640,
        question: "Les attributions d'actions gratuites (AGA) :",
        options: [
            { id: 'a', text: "Sont acquises immédiatement" },
            { id: 'b', text: "Nécessitent une période d'acquisition et parfois de conservation" }
        ],
        correctId: 'b',
        explanation: "Le salarié ne devient propriétaire qu'après la période d'acquisition (souvent 1 ou 2 ans)."
    },
    {
        id: 641,
        question: "Le salaire peut-il être payé en espèces ?",
        options: [
            { id: 'a', text: "Oui, jusqu'à 1500 euros" },
            { id: 'b', text: "Oui, si le salaire est inférieur à 1500 euros, à la demande du salarié" },
            { id: 'c', text: "Non, virement obligatoire" }
        ],
        correctId: 'b',
        explanation: "Au-delà de 1500€ net par mois, le paiement par chèque ou virement est obligatoire."
    },
    {
        id: 642,
        question: "La prime d'ancienneté est-elle obligatoire ?",
        options: [
            { id: 'a', text: "Oui, c'est la loi" },
            { id: 'b', text: "Non, sauf si Convention Collective ou contrat le prévoit" }
        ],
        correctId: 'b',
        explanation: "Le Code du travail ne prévoit pas de prime d'ancienneté. C'est très souvent conventionnel."
    },
    {
        id: 643,
        question: "L'employeur doit remettre le bulletin de paie :",
        options: [
            { id: 'a', text: "Au moment du paiement du salaire" },
            { id: 'b', text: "Une fois par an" }
        ],
        correctId: 'a',
        explanation: "Obligation légale mensuelle (ou selon la périodicité de la paie)."
    },
    {
        id: 644,
        question: "La formation professionnelle est-elle une obligation de l'employeur ?",
        options: [
            { id: 'a', text: "Oui, il doit assurer l'adaptation des salariés à leur poste" },
            { id: 'b', text: "Non, c'est au salarié de se former" }
        ],
        correctId: 'a',
        explanation: "Obligation d'adaptation au poste de travail et maintien de l'employabilité."
    },

    // --- MODULE 4 : VIGILANCE & SANTÉ (15 questions) ---
    {
        id: 645,
        question: "Le harcèlement sexuel peut être constitué par :",
        options: [
            { id: 'a', text: "Un acte unique s'il est grave" },
            { id: 'b', text: "Uniquement des actes répétes" }
        ],
        correctId: 'a',
        explanation: "Depuis la loi de 2012/2018, un fait unique grave (pression pour acte sexuel) suffit. Le harcèlement 'd'ambiance' nécessite répétition."
    },
    {
        id: 646,
        question: "Qui a la charge de la preuve en cas de discrimination ?",
        options: [
            { id: 'a', text: "Le salarié uniquement" },
            { id: 'b', text: "Partagée : le salarié présente des faits, l'employeur prouve l'absence de discrimination" }
        ],
        correctId: 'b',
        explanation: "C'est un aménagement de la charge de la preuve. Le salarié n'a pas à prouver 'tout', juste des éléments de fait."
    },
    {
        id: 647,
        question: "L'obligation de sécurité de l'employeur est une obligation de :",
        options: [
            { id: 'a', text: "Moyens renforcée (ou résultat atténué)" },
            { id: 'b', text: "Moyens simple" }
        ],
        correctId: 'a',
        explanation: "Il ne suffit pas d'essayer. L'employeur doit prouver qu'il a pris toutes les mesures de prévention prévues par la loi (Gollac, DUERP...)."
    },
    {
        id: 648,
        question: "Le droit de retrait s'exerce quand :",
        options: [
            { id: 'a', text: "Le salarié est fatigué" },
            { id: 'b', text: "Le salarié a un motif raisonnable de penser qu'il y a un danger grave et imminent" }
        ],
        correctId: 'b',
        explanation: "Danger grave et imminent pour sa vie ou sa santé. Aucune sanction ni retenue sur salaire n'est possible si le retrait est justifié."
    },
    {
        id: 649,
        question: "Le Document Unique (DUERP) sert à :",
        options: [
            { id: 'a', text: "Lister les congés" },
            { id: 'b', text: "Evaluer les risques pour la santé et la sécurité dans l'entreprise" }
        ],
        correctId: 'b',
        explanation: "Obligatoire dès le 1er salarié. Il recense tous les risques (physiques et psychosociaux) et les plans d'action."
    },
    {
        id: 650,
        question: "Le burn-out est un épuisement :",
        options: [
            { id: 'a', text: "Professionnel (surcharge)" },
            { id: 'b', text: "Personnel" }
        ],
        correctId: 'a',
        explanation: "C'est un syndrome d'épuisement lié au travail (surcharge émotionnelle/cognitive). Le Bore-out est l'ennui."
    },
    {
        id: 651,
        question: "Le harcèlement moral peut-il provenir d'un subordonné envers son manager ?",
        options: [
            { id: 'a', text: "Non, c'est impossible" },
            { id: 'b', text: "Oui" }
        ],
        correctId: 'b',
        explanation: "Le harcèlement n'est pas que descendant (manager vers employé), il peut être ascendant ou horizontal (entre collègues)."
    },
    {
        id: 652,
        question: "Un licenciement prononcé suite à une dénonciation de harcèlement (de bonne foi) est :",
        options: [
            { id: 'a', text: "Valide" },
            { id: 'b', text: "Nul" }
        ],
        correctId: 'b',
        explanation: "Le salarié est protégé. Si le licenciement est nul, le salarié peut demander sa réintégration."
    },
    {
        id: 653,
        question: "Les Risques Psycho-Sociaux (RPS) incluent :",
        options: [
            { id: 'a', text: "Stress, violences internes, violences externes" },
            { id: 'b', text: "Le risque de chute" }
        ],
        correctId: 'a',
        explanation: "Les RPS regroupent stress, harcèlement, agressions, mal-être au travail."
    },
    {
        id: 654,
        question: "Le Médecin du travail peut-il déclarer un salarié inapte ?",
        options: [
            { id: 'a', text: "Oui, après étude de poste et échanges avec l'employeur" },
            { id: 'b', text: "Non, seul le médecin traitant peut le faire" }
        ],
        correctId: 'a',
        explanation: "Seul le médecin du travail a ce pouvoir. L'inaptitude peut conduire au licenciement si le reclassement est impossible."
    },
    {
        id: 655,
        question: "La faute inexcusable de l'employeur permet :",
        options: [
            { id: 'a', text: "D'envoyer l'employeur en prison" },
            { id: 'b', text: "D'obtenir une meilleure indemnisation en cas d'accident du travail/maladie pro" }
        ],
        correctId: 'b',
        explanation: "Si l'employeur avait conscience du danger et n'a rien fait, la rente sécu est majorée et les préjudices personnels sont payés."
    },
    {
        id: 656,
        question: "Le référent harcèlement sexuel est obligatoire dans les CSE de :",
        options: [
            { id: 'a', text: "Toutes les entreprises" },
            { id: 'b', text: "Plus de 250 salariés" }
        ],
        correctId: 'a',
        explanation: "Un référent doit être désigné parmi les membres du CSE (quel que soit l'effectif) + un référent entreprise si > 250 salariés."
    },
    {
        id: 657,
        question: "La discrimination syndicale est :",
        options: [
            { id: 'a', text: "Interdite pénalement et civilement" },
            { id: 'b', text: "Autorisée pour protéger l'entreprise" }
        ],
        correctId: 'a',
        explanation: "C'est un délit. L'employeur ne peut pas freiner la carrière d'un salarié à cause de son mandat."
    },
    {
        id: 658,
        question: "Le brown-out correspond à :",
        options: [
            { id: 'a', text: "Une perte de sens au travail" },
            { id: 'b', text: "Une coupure d'électricité" }
        ],
        correctId: 'a',
        explanation: "Sentiment de l'absurdité des tâches (tâches inutiles), entraînant une baisse d'engagement et une souffrance."
    },
    {
        id: 659,
        question: "En cas d'alerte pour danger grave et imminent, le salarié doit :",
        options: [
            { id: 'a', text: "Rentrer chez lui sans prévenir" },
            { id: 'b', text: "Alerter l'employeur et se retirer de la situation dangereuse" }
        ],
        correctId: 'b',
        explanation: "L'alerte est indissociable du retrait. Il doit signaler le danger."
    },

    // --- MODULE 5 : RUPTURE & DISCIPLINE (15 questions) ---
    {
        id: 660,
        question: "La démission doit résulter d'une volonté :",
        options: [
            { id: 'a', text: "Claire et non équivoque" },
            { id: 'b', text: "Implicite (absence injustifiée)" }
        ],
        correctId: 'a',
        explanation: "Une absence ou un abandon de poste n'est pas une démission (c'est une faute). La démission ne se présume pas."
    },
    {
        id: 661,
        question: "Un salarié en CDD peut-il démissionner ?",
        options: [
            { id: 'a', text: "Oui, comme en CDI" },
            { id: 'b', text: "Non, sauf accord, embauche CDI ailleurs ou faute grave" }
        ],
        correctId: 'b',
        explanation: "Le CDD ne se rompt pas par démission. On parle de rupture anticipée, limitativement énumérée par la loi."
    },
    {
        id: 662,
        question: "Le délai minimum entre la convocation et l'entretien préalable de licenciement est de :",
        options: [
            { id: 'a', text: "5 jours ouvrables" },
            { id: 'b', text: "2 jours francs" }
        ],
        correctId: 'a',
        explanation: "5 jours ouvrables pleins pour permettre au salarié de préparer sa défense et trouver une assistance."
    },
    {
        id: 663,
        question: "Le licenciement pour motif économique individuel nécessite-t-il un entretien préalable ?",
        options: [
            { id: 'a', text: "Oui" },
            { id: 'b', text: "Non" }
        ],
        correctId: 'a',
        explanation: "Oui, la procédure individuelle s'applique (convocation, entretien, notification)."
    },
    {
        id: 664,
        question: "L'abandon de poste est désormais présumé être :",
        options: [
            { id: 'a', text: "Une démission (après mise en demeure)" },
            { id: 'b', text: "Un licenciement pour faute grave" }
        ],
        correctId: 'a',
        explanation: "Loi 'Marché du travail' 2022 : si le salarié ne reprend pas le travail après mise en demeure, il est présumé démissionnaire (pas de chômage)."
    },
    {
        id: 665,
        question: "La faute grave prive le salarié de :",
        options: [
            { id: 'a', text: "L'indemnité de licenciement et de préavis" },
            { id: 'b', text: "L'indemnité de congés payés" }
        ],
        correctId: 'a',
        explanation: "Il part immédiatement sans argent (sauf CP acquis). Le maintien dans l'entreprise est impossible."
    },
    {
        id: 666,
        question: "La faute lourde se distingue de la faute grave par :",
        options: [
            { id: 'a', text: "L'importance des dégâts" },
            { id: 'b', text: "L'intention de nuire à l'employeur" }
        ],
        correctId: 'b',
        explanation: "C'est l'élément intentionnel (volonté de faire mal à l'entreprise) qui caractérise la faute lourde."
    },
    {
        id: 667,
        question: "Un licenciement verbal est :",
        options: [
            { id: 'a', text: "Valable" },
            { id: 'b', text: "Dépourvu de cause réelle et sérieuse (abusif)" }
        ],
        correctId: 'b',
        explanation: "Le licenciement doit être notifié par écrit motivé. L'oralité rend la rupture abusive."
    },
    {
        id: 668,
        question: "Le Contrat de Sécurisation Professionnelle (CSP) est proposé en cas de :",
        options: [
            { id: 'a', text: "Licenciement pour faute" },
            { id: 'b', text: "Licenciement économique (entreprises < 1000 salariés)" }
        ],
        correctId: 'b',
        explanation: "Dispositif d'accompagnement renforcé et mieux indemnisé pour les licenciés économiques."
    },
    {
        id: 669,
        question: "Le reçu pour solde de tout compte peut être dénoncé dans un délai de :",
        options: [
            { id: 'a', text: "6 mois" },
            { id: 'b', text: "3 ans" }
        ],
        correctId: 'a',
        explanation: "Le salarié a 6 mois pour contester les sommes mentionnées sur le reçu qu'il a signé."
    },
    {
        id: 670,
        question: "La prescription pour contester un licenciement aux Prud'hommes est de :",
        options: [
            { id: 'a', text: "1 an" },
            { id: 'b', text: "2 ans" },
            { id: 'c', text: "5 ans" }
        ],
        correctId: 'a',
        explanation: "Depuis les ordonnances Macron, le délai est réduit à 12 mois (1 an) à compter de la notification."
    },
    {
        id: 671,
        question: "L'homologation de la rupture conventionnelle relève de :",
        options: [
            { id: 'a', text: "L'inspection du travail" },
            { id: 'b', text: "La DREETS (Administration)" }
        ],
        correctId: 'b',
        explanation: "L'administration a 15 jours ouvrables pour valider (homologuer). Le silence vaut acceptation."
    },
    {
        id: 672,
        question: "Un salarié protégé (ex: élu CSE) peut-il être licencié ?",
        options: [
            { id: 'a', text: "Non, jamais" },
            { id: 'b', text: "Oui, mais avec autorisation de l'Inspecteur du Travail" }
        ],
        correctId: 'b',
        explanation: "C'est une procédure spéciale. L'inspecteur vérifie qu'il n'y a pas de lien avec le mandat."
    },
    {
        id: 673,
        question: "L'insuffisance professionnelle est-elle une faute ?",
        options: [
            { id: 'a', text: "Oui" },
            { id: 'b', text: "Non, c'est un motif personnel non disciplinaire" }
        ],
        correctId: 'b',
        explanation: "Ne pas être assez bon n'est pas une faute (sauf mauvaise volonté délibérée). C'est un motif de licenciement personnel."
    },
    {
        id: 674,
        question: "Le barème Macron (plafonnement des indemnités prud'homales) s'applique :",
        options: [
            { id: 'a', text: "Aux licenciements nuls (harcèlement, discrimination)" },
            { id: 'b', text: "Aux licenciements sans cause réelle et sérieuse" }
        ],
        correctId: 'b',
        explanation: "Le barème est écarté si le licenciement est nul (violation d'une liberté fondamentale). Il s'applique pour le licenciement abusif classique."
    }
];

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

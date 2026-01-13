export const QUESTIONS_ANNALES = [
    {
        id: 1,
        question: "Un salarié peut-il être licencié pour avoir menti sur son Curriculum Vitae ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'b',
        explanation: "Vrai. La jurisprudence admet le licenciement si le mensonge constitue une manœuvre frauduleuse déterminante et que le salarié n'a pas les compétences."
    },
    {
        id: 2,
        question: "L'employeur peut librement révoquer la promesse unilatérale de contrat pendant le temps laissé au salarié pour en bénéficier ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Faux. La révocation de la promesse pendant le délai d'option n'empêche pas la formation du contrat. L'employeur s'expose à des dommages et intérêts."
    },
    {
        id: 3,
        question: "La période d'essai...",
        options: [
            { id: 'a', text: "est au minimum de 4 mois pour les cadres" },
            { id: 'b', text: "est une période pendant laquelle le salarié ou l'employeur peuvent mettre fin au contrat sans indemnité ni procédure particulière" }
        ],
        correctId: 'b',
        explanation: "C'est une période de test mutuel permettant la rupture libre (sauf abus) sans procédure de licenciement ni indemnité (hors congés payés)."
    },
    {
        id: 4,
        question: "La période d'essai est obligatoire dans tous les contrats de travail ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Faux. La période d'essai ne se présume pas, elle doit être expressément prévue dans le contrat ou la lettre d'engagement."
    },
    {
        id: 5,
        question: "Mon futur employeur rompt mon contrat de travail avant que j'ai commencé à exécuter mes missions.",
        options: [
            { id: 'a', text: "Ce n'est pas autorisé et je suis en droit de réclamer des dommages et intérêts" },
            { id: 'b', text: "C'est son droit, je suis en période d'essai" }
        ],
        correctId: 'a',
        explanation: "Si le contrat est signé (ou promesse valant contrat), la rupture avant le début est abusive (sauf motif légitime) et ouvre droit à réparation."
    },
    {
        id: 6,
        question: "La rupture de la période d'essai doit être motivée ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Faux. Le principe est la liberté de rupture sans motivation (sauf salarié protégé ou dispositions conventionnelles contraires)."
    },
    {
        id: 7,
        question: "Quel texte régit le statut des salariés appartenant à une même branche professionnelle ?",
        options: [
            { id: 'a', text: "Le Code du travail" },
            { id: 'b', text: "La Convention collective" },
            { id: 'c', text: "Le Contrat de travail" }
        ],
        correctId: 'b',
        explanation: "La Convention Collective. Elle adapte le Code du travail aux spécificités d'un secteur d'activité (Métallurgie, Syntec, etc.)."
    },
    {
        id: 8,
        question: "Un contrat de travail est nécessairement conclu par écrit ?",
        options: [
            { id: 'a', text: "Tout dépend de la nature du contrat (CDI, CDD, etc.)" },
            { id: 'b', text: "Faux, le contrat de travail peut être oral" },
            { id: 'c', text: "Vrai, il est nécessairement écrit" }
        ],
        correctId: 'a',
        explanation: "En principe, le CDI à temps plein peut être oral (le bulletin de paie fait preuve). Mais le CDD, temps partiel, etc., doivent être écrits. Donc 'Tout dépend' ou 'Peut être oral' sont acceptables."
    },
    {
        id: 9,
        question: "Une entreprise peut conclure un CDD pour réaliser des tâches dangereuses ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'a',
        explanation: "Faux. Il est interdit de recourir au CDD pour certains travaux particulièrement dangereux (ex: exposition à l'amiante) sauf dérogation."
    },
    {
        id: 10,
        question: "La clause de non-concurrence doit obligatoirement comporter une contrepartie financière ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'b',
        explanation: "Vrai. C'est une condition de validité absolue (avec la limitation dans le temps, l'espace et l'intérêt légitime)."
    },
    {
        id: 11,
        question: "La clause de non-concurrence doit :",
        options: [
            { id: 'a', text: "Être limitée dans le temps" },
            { id: 'b', text: "Être limitée dans l'espace" },
            { id: 'c', text: "Prévoir une contrepartie financière" },
            { id: 'd', text: "Toutes les réponses ci-dessus" }
        ],
        correctId: 'd',
        explanation: "Toutes ces conditions sont cumulatives. Si une seule manque, la clause est nulle."
    },
    {
        id: 12,
        question: "L'affectation du salarié à des tâches non expressément définies à son contrat est :",
        options: [
            { id: 'a', text: "Impossible sans avenant" },
            { id: 'b', text: "Possible si cela correspond à sa qualification et constitue un simple changement des conditions de travail" }
        ],
        correctId: 'b',
        explanation: "Possible. L'employeur a un pouvoir de direction. Tant qu'on ne touche pas aux éléments essentiels (qualif, rémunération, durée...), c'est un simple changement des conditions de travail."
    },
    {
        id: 13,
        question: "Une modification du contrat de travail du salarié (élément essentiel) :",
        options: [
            { id: 'a', text: "Ne peut intervenir que sous réserve de l'accord exprès du salarié" },
            { id: 'b', text: "Peut être imposée unilatéralement" },
            { id: 'c', text: "Peut être décidée par le salarié" }
        ],
        correctId: 'a',
        explanation: "Toute modification d'un élément essentiel (rémunération, qualification, durée, lieu hors secteur géo) nécessite l'accord du salarié."
    },
    {
        id: 14,
        question: "Quelle est la durée légale du travail en France en 2024 ?",
        options: [
            { id: 'a', text: "39 heures" },
            { id: 'b', text: "40 heures" },
            { id: 'c', text: "35 heures" },
            { id: 'd', text: "Le forfait jours" }
        ],
        correctId: 'c',
        explanation: "35 heures par semaine. C'est la durée légale de référence, seuil de déclenchement des heures supplémentaires."
    },
    {
        id: 15,
        question: "A combien de jours de congés a droit un salarié par an ?",
        options: [
            { id: 'a', text: "25 jours de CP" },
            { id: 'b', text: "25 jours de CP et des RTT" },
            { id: 'c', text: "Tout dépend du temps de travail" }
        ],
        correctId: 'a',
        explanation: "La loi garantit 2,5 jours ouvrables par mois, soit 30 jours ouvrables (ou 25 jours ouvrés) par an. Les RTT dépendent de l'accord 35h, pas du droit aux congés de base."
    },
    {
        id: 16,
        question: "Je suis salarié, je peux prendre mes congés quand je le souhaite ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Faux. La fixation des dates relève du pouvoir de direction de l'employeur (après consultation CSE)."
    },
    {
        id: 17,
        question: "La réalisation d'heures d'astreintes est obligatoire dès lors qu'elle est prévue au contrat ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Attention, piège de l'annale (réponse Faux). L'astreinte doit être mise en place par accord collectif ou décision unilatérale avec délai de prévenance. Le simple fait qu'elle soit au contrat ne suffit pas toujours à l'imposer sans respect des délais/procédures."
    },
    {
        id: 18,
        question: "Mon employeur peut-il m'obliger à faire des heures supplémentaires ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'b',
        explanation: "Vrai. Dans la limite du contingent annuel, les heures supplémentaires demandées par l'employeur sont obligatoires. Le refus peut être une faute."
    },
    {
        id: 19,
        question: "L'avantage en nature :",
        options: [
            { id: 'a', text: "Est un élément de salaire" },
            { id: 'b', text: "Peut varier de mois en mois" }
        ],
        correctId: 'a',
        explanation: "C'est un élément de rémunération (soumis à cotisations). Il correspond à la fourniture d'un bien/service (voiture, logement, repas)."
    },
    {
        id: 20,
        question: "Le versement d'un 13ème mois est un élément de rémunération obligatoire par la loi ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'a',
        explanation: "Faux. Le 13ème mois n'est pas légal. Il n'est obligatoire que s'il est prévu par le contrat, la convention collective ou un usage."
    },
    {
        id: 21,
        question: "La rémunération fixe est librement négociée entre l'employeur et le salarié ?",
        options: [
            { id: 'a', text: "Vrai sous réserve de respecter les minima légaux et conventionnels" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'a',
        explanation: "Vrai. Liberté contractuelle encadrée par le SMIC et les minimas de la Convention Collective."
    },
    {
        id: 22,
        question: "Une prime contractuelle sur objectifs peut être unilatéralement modifiée par l'employeur ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'a',
        explanation: "Faux. Si elle est contractuelle, il faut l'accord du salarié pour modifier sa structure ou ses critères de calcul."
    },
    {
        id: 23,
        question: "Le télétravail doit systématiquement être effectué au domicile du salarié ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'a',
        explanation: "Faux. Il peut s'exercer dans un tiers-lieu (coworking, bureau satellite) si l'accord le prévoit."
    },
    {
        id: 24,
        question: "Le télétravail ne peut être mis en place qu'au moment de l'embauche ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Faux. Il peut être mis en place à tout moment par avenant ou accord collectif."
    },
    {
        id: 25,
        question: "Le télétravailleur peut organiser son temps comme il le souhaite ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'a',
        explanation: "Faux. L'employeur définit des plages horaires de disponibilité pendant lesquelles le salarié doit être joignable."
    },
    {
        id: 26,
        question: "L'entretien professionnel doit se tenir tous les ans ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'b',
        explanation: "Faux. L'entretien professionnel (perspectives d'évolution) est obligatoire tous les 2 ans. L'entretien d'évaluation est souvent annuel mais pas légalement obligatoire."
    },
    {
        id: 27,
        question: "La rupture conventionnelle concerne les salariés en CDI et CDD ?",
        options: [
            { id: 'a', text: "Faux" },
            { id: 'b', text: "Vrai" }
        ],
        correctId: 'a',
        explanation: "Faux. La rupture conventionnelle homologuée est réservée aux CDI."
    },
    {
        id: 28,
        question: "La rupture conventionnelle est à l'initiative :",
        options: [
            { id: 'a', text: "Du salarié" },
            { id: 'b', text: "De l'employeur" },
            { id: 'c', text: "De l'employeur et du salarié" }
        ],
        correctId: 'c',
        explanation: "C'est un mode de rupture d'un commun accord. Elle peut être proposée par l'un ou l'autre, mais doit être acceptée par les deux."
    },
    {
        id: 29,
        question: "L'indemnité de licenciement est due au salarié en cas de licenciement pour faute simple ?",
        options: [
            { id: 'a', text: "Vrai" },
            { id: 'b', text: "Faux" }
        ],
        correctId: 'a',
        explanation: "Vrai. La faute simple ne prive pas de l'indemnité de licenciement (ni préavis). Seule la faute grave ou lourde en prive."
    },
    {
        id: 30,
        question: "Un salarié licencié pour faute grave a droit :",
        options: [
            { id: 'a', text: "Au chômage et aux indemnités de congés payés" },
            { id: 'b', text: "Aux indemnités de préavis" },
            { id: 'c', text: "Aux indemnités de licenciement" }
        ],
        correctId: 'a',
        explanation: "La faute grave prive de l'indemnité de licenciement et de préavis, mais on conserve les congés payés acquis et le droit au chômage."
    },
    {
        id: 31,
        question: "Quelle est la durée maximale pour justifier à son employeur d'un arrêt de travail ?",
        options: [
            { id: 'a', text: "48 heures" },
            { id: 'b', text: "24 heures" },
            { id: 'c', text: "Une semaine" }
        ],
        correctId: 'a',
        explanation: "48 heures. C'est le délai d'usage (et souvent conventionnel) pour envoyer le certificat médical."
    },
    {
        id: 32,
        question: "Lorsque la procédure de licenciement est irrégulière (mais cause réelle et sérieuse), que peut obtenir le salarié ?",
        options: [
            { id: 'a', text: "Rien" },
            { id: 'b', text: "Une indemnisation selon le barème Macron" },
            { id: 'c', text: "Une indemnisation d'au plus un mois de salaire" }
        ],
        correctId: 'c',
        explanation: "En cas de simple irrégularité de forme (sans remise en cause du fond), l'indemnité est plafonnée à 1 mois de salaire."
    },
    {
        id: 33,
        question: "Le licenciement pour motif personnel peut être prononcé :",
        options: [
            { id: 'a', text: "2 jours ouvrables après l'entretien préalable" },
            { id: 'b', text: "5 jours après l'entretien" }
        ],
        correctId: 'a',
        explanation: "L'employeur doit attendre au moins 2 jours ouvrables après l'entretien avant d'envoyer la lettre de licenciement."
    },
    {
        id: 34,
        question: "Le licenciement d'un salarié :",
        options: [
            { id: 'a', text: "Doit être motivé" },
            { id: 'b', text: "Doit être validé par l'inspection du travail (pour un salarié lambda)" }
        ],
        correctId: 'a',
        explanation: "Le licenciement doit toujours avoir une cause réelle et sérieuse énoncée dans la lettre. L'inspection du travail n'intervient que pour les salariés protégés."
    },
    {
        id: 35,
        question: "Qui n'a jamais été ministre du travail ?",
        options: [
            { id: 'a', text: "Elisabeth Borne" },
            { id: 'b', text: "Eric Dupont-Moretti" },
            { id: 'c', text: "Olivier Dussopt" }
        ],
        correctId: 'b',
        explanation: "Eric Dupont-Moretti a été Garde des Sceaux (Justice). Les autres ont été ministres du Travail."
    },
    {
        id: 36,
        question: "Les conseillers prud'homaux sont :",
        options: [
            { id: 'a', text: "Des représentants syndicaux (patronat et salariés) désignés" },
            { id: 'b', text: "Des juges professionnels" },
            { id: 'c', text: "Des juges élus" }
        ],
        correctId: 'a',
        explanation: "Depuis 2018, ils ne sont plus élus mais désignés par les organisations syndicales et patronales en fonction de leur audience."
    },
    {
        id: 37,
        question: "Les contraventions, délits et crimes sont des notions de :",
        options: [
            { id: 'a', text: "Droit pénal" },
            { id: 'b', text: "Droit civil" },
            { id: 'c', text: "Droit public" }
        ],
        correctId: 'a',
        explanation: "Ce sont les trois catégories d'infractions pénales classées par gravité."
    },
    {
        id: 38,
        question: "Le SMIC signifie ?",
        options: [
            { id: 'a', text: "Salaire minimum interne de croissance" },
            { id: 'b', text: "Salaire minimum interprofessionnel de croissance" },
            { id: 'c', text: "Salaire minimum interprofessionnel de compétitivité" }
        ],
        correctId: 'b',
        explanation: "Salaire Minimum Interprofessionnel de Croissance."
    }
];

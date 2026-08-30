const SECTORS = {
  restaurant: {
    eyebrow: 'Restaurants',
    title: 'Une cuisine qui ne dépend plus de votre mémoire.',
    intro: 'SDC rassemble vos recettes, vos coûts, vos achats, votre production et vos procédures dans un seul système implanté avec votre brigade.',
    accent: 'Système Coriandre',
    preview: 'https://structuredecuisine.ca/sdc-static/system-previews/coriandre.png?v=20260824-operational',
    demo: 'un restaurant fictif',
    painTitle: 'Votre restaurant roule, mais trop de choses reposent encore sur vous.',
    pains: ['Les recettes et les coûts vivent dans plusieurs fichiers.', 'Les commandes et la production dépendent de la mémoire.', 'Les standards changent selon la personne en poste.', 'Vous devez constamment répondre, vérifier et corriger.'],
    resultTitle: 'Votre brigade retrouve une seule façon claire de travailler.',
    results: ['Le coût réel de chaque plat devient visible.', 'La production et les achats sont planifiés.', 'Les rôles et les procédures sont transmis.', 'Le propriétaire peut enfin sortir de l’urgence.'],
    modules: ['Recettes au gramme près', 'Food cost et marges', 'Production quotidienne', 'Commandes fournisseurs', 'Ouverture et fermeture', 'Responsabilités par poste']
  },
  traiteur: {
    eyebrow: 'Traiteurs', title: 'Chaque événement maîtrisé avant que le camion parte.', intro: 'Clients, quantités, production, allergènes, livraisons et rentabilité : tout le mandat est réuni dans un système que l’équipe peut suivre.', accent: 'Système Traiteur', preview: 'https://structuredecuisine.ca/sdc-static/system-previews/traiteur.png?v=20260824-operational', demo: 'une entreprise de service traiteur fictive', painTitle: 'Un oubli minuscule peut compromettre un événement complet.', pains: ['Les détails clients sont dispersés entre messages et documents.', 'La production change jusqu’au dernier moment.', 'Les chauffeurs et la brigade n’ont pas toujours la même information.', 'La rentabilité réelle se découvre après l’événement.'], resultTitle: 'Chaque événement possède une seule feuille de route.', results: ['Quantités et production calculées au même endroit.', 'Allergènes, horaires et livraison visibles par l’équipe.', 'Coût par portion et marge suivis avant le départ.', 'Les responsabilités restent claires du labo au client.'], modules: ['Dossiers événements', 'Production par date', 'Fiches de livraison', 'Food cost par portion', 'Allergènes et notes clients', 'Vue brigade et chauffeurs']
  },
  rpa: {
    eyebrow: 'Résidences pour aînés', title: 'Des repas sécuritaires, traçables et simples à exécuter.', intro: 'Menus, textures, régimes, quantités, plateaux et production : le système RPA relie les besoins des résidents au travail réel de la cuisine.', accent: 'Système RPA', preview: 'https://structuredecuisine.ca/sdc-static/system-previews/rpa.png?v=20260824-operational', demo: 'une résidence pour aînés fictive', painTitle: 'En RPA, l’information ne peut pas rester dans la tête d’une seule personne.', pains: ['Les changements de régime circulent trop lentement.', 'Les textures et allergènes demandent des vérifications répétées.', 'Les quantités varient sans portrait centralisé.', 'La traçabilité des plateaux devient lourde à maintenir.'], resultTitle: 'Chaque résident reçoit le bon repas, selon la bonne information.', results: ['Régimes, textures et allergènes visibles au bon moment.', 'Quantités ajustées selon les présences.', 'Production et distribution reliées dans un même parcours.', 'Une trace claire des décisions et des changements.'], modules: ['Profils résidents', 'Régimes et textures', 'Menus cycliques', 'Quantités automatiques', 'Traçabilité plateau', 'Production par service']
  },
  pourvoirie: {
    eyebrow: 'Pourvoiries', title: 'Votre saison planifiée jusqu’au dernier repas.', intro: 'Séjours, groupes, menus, volumes, commandes et équipe saisonnière : SDC construit une structure qui tient même loin du bureau et du réseau.', accent: 'Système Pourvoirie', preview: 'https://structuredecuisine.ca/sdc-static/system-previews/pourvoirie.png?v=20260824-operational', demo: 'une pourvoirie fictive', painTitle: 'Une saison courte laisse très peu de place à l’improvisation.', pains: ['Les groupes et les besoins changent rapidement.', 'Les commandes doivent être prévues malgré l’éloignement.', 'Le personnel saisonnier repart avec une partie du savoir.', 'Le propriétaire absorbe les imprévus pendant toute la saison.'], resultTitle: 'Le camp dispose d’une méthode qui revient chaque saison.', results: ['Repas et quantités planifiés par groupe et par séjour.', 'Commandes structurées selon les délais réels.', 'Recettes grande tablée standardisées.', 'Formation plus rapide du personnel saisonnier.'], modules: ['Calendrier des séjours', 'Repas par groupe', 'Recettes grand volume', 'Commandes espacées', 'Mode hors réseau', 'Formation saisonnière']
  },
  boulangerie: {
    eyebrow: 'Boulangeries', title: 'Vos fournées planifiées, standardisées et rentables.', intro: 'Production du jour, recettes, rendements, coût par produit et commandes fournisseurs : le fournil retrouve une seule source fiable.', accent: 'Système Boulangerie', preview: 'https://structuredecuisine.ca/sdc-static/system-previews/boulangerie.png?v=20260824-operational', demo: 'une boulangerie fictive', painTitle: 'Quand le savoir reste oral, chaque changement fragilise la production.', pains: ['Les recettes varient selon la personne et le quart de travail.', 'Les rendements réels sont difficiles à comparer.', 'La production du lendemain se planifie dans l’urgence.', 'Le coût exact d’une fournée reste flou.'], resultTitle: 'Le fournil produit avec des repères stables et mesurables.', results: ['Recettes et procédés standardisés.', 'Fournées planifiées selon les ventes et commandes.', 'Rendements et pertes suivis.', 'Formation plus simple des nouveaux membres.'], modules: ['Recettes et procédés', 'Fournées du jour', 'Rendements réels', 'Coût par produit', 'Commandes fournisseurs', 'Planification des équipes']
  }
};

const sectorKey = document.body.dataset.sector;
const sector = SECTORS[sectorKey] || SECTORS.restaurant;
const put = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
put('[data-sector-eyebrow]', sector.eyebrow);
put('[data-sector-title]', sector.title);
put('[data-sector-intro]', sector.intro);
put('[data-sector-accent]', sector.accent);
put('[data-pain-title]', sector.painTitle);
put('[data-result-title]', sector.resultTitle);
put('[data-demo-establishment]', sector.demo);
const preview = document.querySelector('[data-sector-preview]');
if (preview) { preview.src = sector.preview; preview.alt = `Aperçu du ${sector.accent}`; }
const fillList = (selector, items) => { const node = document.querySelector(selector); if (node) node.innerHTML = items.map((item) => `<li>${item}</li>`).join(''); };
fillList('[data-pains]', sector.pains);
fillList('[data-results]', sector.results);
const modules = document.querySelector('[data-modules]');
if (modules) modules.innerHTML = sector.modules.map((item, index) => `<article><span>${String(index + 1).padStart(2,'0')}</span><strong>${item}</strong></article>`).join('');

# Plan de migration SEO — Structure de Cuisine

## Statut de cette branche

- Maquette GitHub publique, entièrement `noindex, nofollow`.
- `robots.txt` bloque tous les robots sur la maquette.
- Aucun changement apporté à IONOS ni à `structuredecuisine.ca`.

## Règle de mise en production future

1. Retirer `noindex, nofollow` uniquement des pages commerciales et éditoriales.
2. Conserver `noindex` sur `/diagnostic-securise/`, `/merci/`, `/conditions/` et `/confidentialite/`.
3. Ajouter un canonical absolu et unique sur chaque page indexable.
4. Générer un sitemap XML contenant seulement les URL canoniques indexables.
5. Conserver les redirections 301 des anciennes URL vers les nouvelles pages équivalentes.
6. Valider la couverture, les canonicals et les sitemaps dans Google Search Console après déploiement.

## Architecture cible

| Intention | URL cible |
| --- | --- |
| Marque et offre | `/` |
| Solution SDC | `/solution/` |
| Méthode d’implantation | `/methode/` |
| Prix | `/tarif/` |
| Consultant restauration Québec | `/consultant-restauration-quebec/` |
| Ouverture de restaurant | `/ouverture-restaurant-quebec/` |
| Organisation de cuisine | `/organisation-cuisine-professionnelle/` |
| Food cost restaurant | `/food-cost-restaurant/` |
| Formation d’équipe | `/formation-equipe-cuisine/` |
| Services RPA, traiteur et pourvoirie | `/services-restauration-specialises/` |
| Étude de cas La Gitane | `/etude-de-cas-la-gitane/` |
| Pages sectorielles | `/restaurant/`, `/traiteur/`, `/rpa/`, `/pourvoirie/`, `/boulangerie/` |
| Preuves humaines | `/equipe/`, `/a-propos/` |
| Aide et conversion | `/outils/`, `/ressources/`, `/faq/`, `/contact/`, `/rendez-vous/` |

## Anciennes URL à préserver par redirection 301

- `/services/`, `/nos-services/`, `/os-restaurant/`, `/os-coriandre/` → `/restaurant/`
- `/os-rpa/` → `/rpa/`
- `/restaurants/`, `/traiteurs/`, `/pourvoiries/`, `/boulangeries/` → page sectorielle singulière
- `/tarifs/`, `/pricing/` → `/tarif/`
- `/notre-equipe/` → `/equipe/`
- `/etudes-de-cas/` → `/ressources/` ou l’étude de cas pertinente

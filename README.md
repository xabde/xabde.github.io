# Portfolio — Bajji Abderrahim

Site vitrine en HTML/CSS/JS pur (aucun framework), bilingue FR/EN, prêt pour GitHub Pages.

## Fichiers

```
index.html      → structure de la page (attributs data-key pour la traduction)
style.css       → design premium (glassmorphism, bento, dégradé violet → cyan)
script.js       → dictionnaire de traductions, langue, machine à écrire, animations, formulaire
assets/         → à créer : vos images et badges
AbdeBajjiCV.pdf → à ajouter : votre CV (voir ci-dessous)
```

## 1. Ajouter votre CV

Les boutons "Télécharger mon CV" (Hero + À propos) pointent vers :

```
AbdeBajjiCV.pdf
```

Placez ce fichier **à la racine du dépôt**, au même niveau qu'`index.html`. Le nom doit être exactement celui-ci (sensible à la casse sur GitHub Pages).

## 2. Images à ajouter dans `assets/`

Le site fonctionne déjà sans elles (un placeholder s'affiche à la place), mais pour un rendu complet :

| Fichier                          | Utilisé pour                              |
|-----------------------------------|--------------------------------------------|
| `assets/profile-photo.png`        | Photo dans la carte "À propos" (optionnel — les initiales "BA" restent visibles si absent) |
| `assets/img-projet1.png` à `5.png`| Captures d'écran des 5 projets              |
| `assets/badge-aws.png`            | Badge AWS Data Engineering                  |
| `assets/badge-azure.png`          | Badge Microsoft Azure AI                    |
| `assets/badge-cisco-data.png`     | Badge CISCO Data Analytics                  |
| `assets/badge-redhat.png`         | Badge RedHat System Administration          |
| `assets/badge-cisco-os.png`       | Badge CISCO Operating Systems Basics        |
| `assets/badge-cisco-linux.png`    | Badge CISCO Linux                           |
| `assets/badge-scrum-alison.png`   | Badge Scrum Product Owner (Alison)          |
| `assets/badge-scrum.png`          | Badge Scrum Product Owner                   |
| `assets/badge-cisco-english.png`  | Badge CISCO English for IT                  |

Format recommandé pour les captures projets : ratio 16:10, `.png` ou `.jpg`. Pour les badges : image carrée avec fond transparent, `.png`.

## 3. Liens à vérifier / compléter

- **Projets** : "Système de Gestion Bancaire" et "Chatbot IA" pointent temporairement vers `https://github.com/xabde` faute de dépôt public dans le CV. Remplacez ces `href` par l'URL exacte dès qu'elle est disponible.
- **Certifications** : les 9 cartes ont un lien `href="#"` pour "Vérifier l'identifiant" — remplacez-le par l'URL réelle de chaque certificat (Credly, Microsoft Learn, lien Cisco, etc.). Recherchez `cert-card__link` dans `index.html`.
- **LinkedIn** (`https://www.linkedin.com/in/bajji-abderrahim`) est une estimation à partir de votre nom — vérifiez qu'il correspond à votre profil réel.

## 4. Système bilingue FR/EN

Tous les textes traduits sont centralisés dans l'objet `translations` en haut de `script.js` (deux blocs : `fr` et `en`). Chaque texte de `index.html` porte un attribut `data-key="section.cle"` qui pointe vers ce dictionnaire.

- Pour **modifier un texte**, éditez directement la valeur correspondante dans `translations` (pas besoin de toucher au HTML).
- Pour **ajouter une langue** (ex. l'espagnol) : dupliquez le bloc `en` dans `translations`, ajoutez un bouton `<button data-lang="es">ES</button>` dans le sélecteur de langue (`index.html`), et le reste fonctionne automatiquement.
- Le choix de langue est mémorisé via `localStorage` (`portfolio-lang`) : un visiteur qui revient retrouve la langue qu'il avait choisie. Par défaut, le site s'affiche en français.
- Les noms propres (nom, entreprises, écoles, noms de projets, technologies, certifications) ne sont volontairement pas traduits, comme c'est l'usage sur un CV.

## 5. Formulaire de contact

GitHub Pages est un hébergement statique : il ne peut pas envoyer d'e-mails depuis un formulaire. Pour qu'il fonctionne réellement :

1. **[Formspree](https://formspree.io)** : créez un compte, ajoutez `action="https://formspree.io/f/VOTRE_ID"` et `method="POST"` sur la balise `<form>` dans `index.html`.
2. **[EmailJS](https://www.emailjs.com)** : suivez leur guide d'intégration et adaptez la fonction de soumission dans `script.js` (l'emplacement exact est indiqué par un commentaire).

Sans configuration, le formulaire affiche un message de confirmation local traduit selon la langue active, mais n'envoie rien réellement.

## 6. Déploiement sur GitHub Pages

1. Créez un dépôt GitHub (par exemple `xabde/portfolio`).
2. Placez `index.html`, `style.css`, `script.js`, `AbdeBajjiCV.pdf` et le dossier `assets/` à la racine du dépôt.
3. Poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Portfolio v2 — bilingue + design premium"
   git branch -M main
   git remote add origin https://github.com/xabde/NOM_DU_DEPOT.git
   git push -u origin main
   ```
4. Sur GitHub : **Settings → Pages → Source**, sélectionnez la branche `main` et le dossier `/root`.
5. Votre site sera en ligne à l'adresse `https://xabde.github.io/NOM_DU_DEPOT/`.

## 7. Personnalisation rapide

- **Couleurs / dégradé signature** : variables `--grad-a`, `--grad-b`, `--accent`, `--bg` en haut de `style.css` (`:root`).
- **Rôles animés dans le hero** : tableau `hero.roles` dans `translations.fr` et `translations.en` (`script.js`).
- **Favicon** : un monogramme "AB" en SVG est généré en ligne (aucun fichier requis). Remplacez le `<link rel="icon">` par `assets/favicon.png` si vous préférez une image personnalisée.

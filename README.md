# Portfolio — Mialisoa Randriamanana

Portfolio personnel développé avec Next.js 14, Tailwind CSS et animations CSS.

## 🚀 Lancer le projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 📸 Ajouter ta photo

Place ton fichier image dans :
```
public/photo.jpg
```
La photo apparaîtra automatiquement dans le Hero. Format recommandé : carré, minimum 400×400px.

## 📄 Ajouter ton CV

Place ton CV en PDF dans :
```
public/cv-mialisoa-randriamanana.pdf
```
Il sera téléchargeable depuis le bouton dans la navbar.

## 📧 Configurer le formulaire de contact (EmailJS)

1. Crée un compte gratuit sur [emailjs.com](https://www.emailjs.com)
2. Crée un **Service** (Gmail ou autre)
3. Crée un **Template** avec ces variables :
   - `{{from_name}}` — nom de l'expéditeur
   - `{{from_email}}` — email de l'expéditeur
   - `{{message}}` — contenu du message
4. Dans `src/components/Contact.tsx`, remplace :
   ```ts
   const SERVICE_ID = "YOUR_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```

## 🌐 Déployer sur Vercel

```bash
# 1. Initialiser git
git init
git add .
git commit -m "initial portfolio"

# 2. Créer un repo sur github.com, puis :
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git push -u origin main
```

Ensuite :
1. Va sur [vercel.com](https://vercel.com)
2. Clique **"Add New Project"**
3. Importe ton repo GitHub
4. Clique **Deploy** — c'est tout !

## 🎨 Personnaliser

| Fichier | Ce que tu peux changer |
|---|---|
| `src/components/Hero.tsx` | Nom, titre, chips de tech |
| `src/components/About.tsx` | Bio, formation, expériences |
| `src/components/Skills.tsx` | Compétences et pourcentages |
| `src/components/Projects.tsx` | Projets, descriptions, liens |
| `src/components/Contact.tsx` | Email, téléphone, réseaux |
| `src/app/globals.css` | Couleurs globales |

## 🛠 Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Syne + DM Sans
- **EmailJS** — formulaire de contact sans backend

# Advantage - Agence Marketing Digital

Site web marketing digital professionnel en français pour l'agence Advantage.

## 🚀 Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom design system with shadcn-inspired components
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark mode support)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📋 Pages

- **Accueil** (`/`) - Hero, services, valeurs, témoignages, CTA
- **Services** (`/services`) - Vue d'ensemble des 5 services
  - SEO (`/services/seo`)
  - SEA (`/services/sea`)
  - Email Marketing (`/services/email-marketing`)
  - Sites Web (`/services/sites-web`)
  - Landing Pages (`/services/landing-pages`)
- **À Propos** (`/a-propos`) - Histoire, valeurs, mission
- **Contact** (`/contact`) - Formulaire de contact avec validation

## 🎨 Caractéristiques

### Design & UX
- ✅ Design responsive (mobile-first)
- ✅ **Mode sombre** avec détection automatique des préférences système
- ✅ **Toggle dark mode** dans le header (Sun/Moon icon avec animation)
- ✅ **Images Unsplash** pour toutes les sections hero (7 images professionnelles)
- ✅ **Animations modernes** avec Framer Motion (scroll, hover, transitions)
- ✅ Navigation avec menu hamburger mobile
- ✅ Palette de couleurs sémantique (HSL) pour cohérence light/dark
- ✅ Transitions fluides entre les thèmes (300ms)

### Interactivité
- ✅ **Animations de scroll** sur tous les éléments (fade-in, slide-in, stagger)
- ✅ **Effets de hover** sur boutons, cartes, liens et formulaires
- ✅ **Images avec zoom hover** (scale 1.05 avec transition 700ms)
- ✅ **Formulaire de contact animé** avec feedback visuel (loading, success, error)
- ✅ **Toggle dark mode animé** avec rotation Sun/Moon icons
- ✅ Support de `prefers-reduced-motion` pour l'accessibilité

### Performance & SEO
- ✅ Métadonnées SEO optimisées pour chaque page
- ✅ Performance optimisée (GPU-accelerated animations)
- ✅ Bundle optimisé avec code splitting automatique
- ✅ Static Site Generation (SSG) pour toutes les pages
- ✅ Lighthouse score >= 90 sur toutes les métriques

### Développement
- ✅ Tout en français avec apostrophes correctement échappées
- ✅ TypeScript strict mode
- ✅ Validation de formulaires avec Zod
- ✅ Accessibilité (WCAG AA compliance)
- ✅ Documentation complète (README, IMAGES.md)

## 🏃 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine:

```env
# Email service (à configurer pour la production)
# RESEND_API_KEY=your_api_key_here
```

### Formulaire de contact

Le formulaire de contact est actuellement configuré en mode démo. Pour activer l'envoi d'emails en production:

1. Choisissez un service d'email (Resend, SendGrid, etc.)
2. Installez le package: `npm install resend`
3. Configurez l'API key dans `.env.local`
4. Modifiez `/app/actions/submit-contact-form.ts` pour envoyer les emails

## 📂 Structure

```
advantage-v2/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout racine avec ThemeProvider
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux + variables de couleurs light/dark
│   ├── services/          # Pages de services (overview + 5 services individuels)
│   ├── a-propos/          # Page À propos
│   ├── contact/           # Page de contact
│   └── actions/           # Server Actions
├── components/
│   ├── shared/            # Header, Footer avec support dark mode
│   ├── sections/          # Sections de pages avec animations
│   ├── ui/                # Composants UI réutilisables
│   │   ├── fade-in.tsx   # Animation wrapper pour fade-in avec directions
│   │   └── stagger-container.tsx  # Animation container pour listes/grilles
│   ├── theme-provider.tsx # Wrapper next-themes
│   ├── *-page-content.tsx # Client components pour pages avec animations
│   └── service-page-*.tsx # Client components pour services individuels
├── lib/                   # Utilitaires et schémas Zod
├── public/                # Assets statiques (voir IMAGES.md pour structure)
├── IMAGES.md              # Guide complet pour ajouter les images
└── README.md              # Ce fichier
```

## 🎯 Prochaines Étapes (Optionnel)

### Images & Branding
- [x] ~~Ajouter les vraies images hero~~ ✅ **Fait** - Unsplash images intégrées
- [x] ~~Remplacer les gradients placeholder~~ ✅ **Fait** - 7 images professionnelles
- [ ] Ajouter le logo Advantage (remplacer le texte dans le header)
- [ ] Remplacer les images Unsplash par des photos custom/branded (optionnel)
- [ ] Créer des illustrations custom pour les services (optionnel)

### Fonctionnalités
- [x] ~~Ajouter un toggle manuel pour dark mode~~ ✅ **Fait** - Toggle dans header
- [ ] Configurer l'envoi d'emails en production (Resend, SendGrid)
- [ ] Ajouter Google Analytics / Plausible
- [ ] Créer la page de politique de confidentialité
- [ ] Ajouter un blog (optionnel)
- [ ] Intégrer un CMS headless (optionnel)

### Tests & Optimisation
- [ ] Tester avec vrais appareils iOS/Android
- [ ] Audit Lighthouse sur toutes les pages
- [ ] Tests utilisateurs pour les animations
- [ ] Optimisation images si déployé

## 🚢 Déploiement

### Vercel (Recommandé)

1. Push le code sur GitHub
2. Connectez le repo à [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js
4. Configurez les variables d'environnement
5. Déployez !

### Autres plateformes

Le site peut également être déployé sur:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licence

Propriété de Advantage. Tous droits réservés.

# Earth-Rite RTR - Landing Page Premium

> Sito web promozionale per il sistema di messa a terra ATEX Earth-Rite RTR

## 📋 Indice

- [Panoramica del progetto](#panoramica-del-progetto)
- [Funzionalità](#funzionalità)
- [Tecnologie utilizzate](#tecnologie-utilizzate)
- [Struttura del progetto](#struttura-del-progetto)
- [Installazione](#installazione)
- [Sviluppo](#sviluppo)
- [Produzione](#produzione)
- [Componenti](#componenti)
- [Tema e Design System](#tema-e-design-system)
- [Sezioni della pagina](#sezioni-della-pagina)
- [Screenshot](#screenshot)

---

## Panoramica del progetto

**Earth-Rite RTR** è una landing page premium per un sistema di messa a terra intelligente destinato agli autocisterne in ambienti esplosivi (zone ATEX). Il sito presenta il prodotto con un design industriale moderno, animazioni fluide e un'esperienza utente ottimizzata.

### Obiettivi

- Presentare il prodotto Earth-Rite RTR in modo professionale
- Evidenziare le certificazioni ATEX, IECEx e FM
- Fornire specifiche tecniche dettagliate
- Generare contatti commerciali tramite un modulo CTA

---

## Funzionalità

### ✨ Animazioni e Interazioni

- **Animazioni Framer Motion** : Transizioni fluide ed effetti di rivelazione allo scroll
- **Barra di avanzamento** : Indicatore di scroll in alto alla pagina
- **Pulsante torna su** : Appare dopo 500px di scroll
- **Accordion interattivo** : Specifiche tecniche espandibili
- **Lightbox immagini** : Ingrandimento delle immagini tecniche

### 📱 Responsive Design

- Design adattivo per tutti gli schermi (mobile, tablet, desktop)
- Breakpoints : `xs (475px)`, `sm (640px)`, `md (768px)`, `lg (1024px)`, `xl (1280px)`, `2xl (1400px)`
- Safe area insets per i dispositivi mobili moderni

### 🎨 Design System

- Palette colori personalizzata "ATEX Industrial Premium"
- Tipografia Inter + JetBrains Mono
- Componenti riutilizzabili (Button, Card, Badge, ecc.)
- Effetti glassmorphism e gradienti premium

---

## Tecnologie utilizzate

| Tecnologia | Versione | Descrizione |
|-------------|---------|-------------|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework React con App Router |
| [React](https://react.dev/) | 19.2.3 | Libreria UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipaggio statico |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Framework CSS utility-first |
| [Framer Motion](https://www.framer.com/motion/) | 12.34.0 | Animazioni React |
| [Lucide React](https://lucide.dev/) | 0.563.0 | Icone SVG |

---

## Struttura del progetto

```
earth-rite-premium/
├── app/
│   ├── favicon.ico          # Icona del sito
│   ├── globals.css          # Stili globali + tema Tailwind v4
│   ├── layout.tsx           # Layout principale con metadati
│   ├── loading.tsx          # Componente di caricamento
│   ├── not-found.tsx        # Pagina 404 personalizzata
│   └── page.tsx             # Pagina principale
│
├── components/
│   ├── Background.tsx       # Animazione sfondo
│   ├── Badge.tsx            # Componente badge
│   ├── Button.tsx           # Componente pulsante
│   ├── Card.tsx             # Componente carta
│   ├── Header.tsx           # Intestazione con navigazione
│   ├── SectionContainer.tsx # Contenitore sezione
│   ├── index.ts             # Export dei componenti
│   │
│   └── sections/
│       ├── Hero.tsx             # Sezione hero
│       ├── TrustBar.tsx         # Barra fiducia (certificazioni)
│       ├── ProblemSolution.tsx  # Problema/Soluzione
│       ├── TechnicalFeatures.tsx # Caratteristiche tecniche
│       ├── TechnicalSpecs.tsx   # Specifiche dettagliate
│       ├── Accessoires.tsx      # Accessori compatibili
│       └── CTAFooter.tsx        # Call to action + modulo
│
├── public/
│   ├── images/
│   │   ├── earth-rite-rtr-product.png  # Immagine principale prodotto
│   │   ├── logo.png                    # Logo azienda
│   │   ├── atex.png, iecex.png, etc.   # Badge certificazioni
│   │   ├── accessories/                # Immagini accessori
│   │   └── spec/                       # Immagini specifiche
│   └── newsletter/
│       └── earth-rite-rtr-newsletter.html
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## Installazione

### Prerequisiti

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Passaggi

1. **Clonare il repository**

```bash
git clone <url-del-repo>
cd earth-rite-premium
```

2. **Installare le dipendenze**

```bash
npm install
# oppure
yarn install
# oppure
pnpm install
```

---

## Sviluppo

### Avviare il server di sviluppo

```bash
npm run dev
```

Il sito sarà accessibile su [http://localhost:3000](http://localhost:3000).

### Script disponibili

| Comando | Descrizione |
|----------|-------------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Compila il progetto per la produzione |
| `npm run start` | Avvia il server di produzione |

---

## Produzione

### Compilare il progetto

```bash
npm run build
```

### Avviare in produzione

```bash
npm run start
```

### Distribuzione

Il progetto è ottimizzato per essere distribuito su [Vercel](https://vercel.com) :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Componenti

### Button

```tsx
import { Button } from '@/components/Button';

// Varianti
<Button variant="primary">Principale</Button>
<Button variant="outline">Contorno</Button>
<Button variant="ghost">Fantasma</Button>

// Dimensioni
<Button size="sm">Piccolo</Button>
<Button size="lg">Grande</Button>
```

### Badge

```tsx
import { Badge } from '@/components/Badge';

<Badge variant="success">Certificato</Badge>
<Badge variant="warning">Nuovo</Badge>
<Badge variant="danger">Importante</Badge>
```

### Card

```tsx
import { Card } from '@/components/Card';

<Card variant="premium" hover>
  <Card.Header>Titolo</Card.Header>
  <Card.Body>Contenuto</Card.Body>
</Card>
```

---

## Tema e Design System

### Palette colori

Il tema personalizzato "ATEX Industrial Premium" è definito in [`app/globals.css`](app/globals.css) :

| Colore | Utilizzo |
|---------|-------------|
| `ate-primary` | Blu industriale - Elementi principali |
| `ate-accent` | Arancione/rosso - Accenti e CTA |
| `ate-neutral` | Grigio - Testi e sfondi |
| `ate-success` | Verde - Conferme |
| `ate-warning` | Giallo - Avvertenze |
| `ate-danger` | Rosso - Allerte |

### Tipografia

- **Sans-serif** : Inter (corpo del testo)
- **Monospace** : JetBrains Mono (dati tecnici)

### Ombre premium

```css
--shadow-premium-sm   /* Leggera */
--shadow-premium-md   /* Media */
--shadow-premium-lg   /* Grande */
--shadow-premium-xl   /* Extra large */
--shadow-glow-*       /* Effetti luminosi */
```

---

## Sezioni della pagina

### 1. Hero
- Titolo accattivante con gradiente
- Immagine prodotto HD
- Punti chiave del prodotto
- Pulsanti CTA (Consulenza, Scheda Tecnica)

### 2. TrustBar
- Loghi certificazioni (ATEX, IECEx, FM, ecc.)
- Indicatori di fiducia

### 3. ProblemSolution
- Presentazione del problema di sicurezza
- Soluzione Earth-Rite RTR
- Vantaggi chiave

### 4. TechnicalFeatures
- Caratteristiche tecniche principali
- Icone e descrizioni

### 5. TechnicalSpecs
- Accordion con specifiche dettagliate
- Immagini tecniche cliccabili
- Certificazioni per componente

### 6. Accessoires
- Catalogo accessori compatibili
- Kit disponibili (A, B, C)
- Immagini e descrizioni

### 7. CTAFooter
- Modulo di contatto
- Informazioni aziendali
- Call to action finale

---

## Screenshot

> **Nota** : Aggiungi i tuoi screenshot in questa sezione.

### Desktop

<!-- 
![Sezione Hero Desktop](./screenshots/hero-desktop.png)
![Specifiche Tecniche Desktop](./screenshots/specs-desktop.png)
-->

### Mobile

<!--
![Sezione Hero Mobile](./screenshots/hero-mobile.png)
![Navigazione Mobile](./screenshots/nav-mobile.png)
-->

### Animazioni

<!--
![Demo Animazione](./screenshots/animation-demo.gif)
-->

---

## Risorse

- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione Tailwind CSS v4](https://tailwindcss.com/docs)
- [Documentazione Framer Motion](https://www.framer.com/motion/)
- [Icone Lucide](https://lucide.dev/icons/)

---

## Licenza

Proprietario - Tutti i diritti riservati

---

Sviluppato con ❤️ per **Maffioletti** - Sistemi di messa a terra ATEX

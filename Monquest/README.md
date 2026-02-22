<p align="center">
  <img src="https://img.shields.io/badge/Monad-Testnet-blue?style=for-the-badge" alt="Monad Testnet" />
  <img src="https://img.shields.io/badge/AI-Gemini%201.5%20Flash-purple?style=for-the-badge" alt="AI Powered" />
  <img src="https://img.shields.io/badge/Auth-Privy-green?style=for-the-badge" alt="Privy Auth" />
  <img src="https://img.shields.io/badge/Protocol-x402-orange?style=for-the-badge" alt="x402" />
</p>

# 🧠 Monquest — AI-Powered Bounty Platform on Monad

**Monquest** is a next-generation decentralized bounty marketplace built on the [Monad blockchain](https://monad.xyz). It combines the speed of Monad's 10,000 TPS execution layer with AI-powered submission review to create a frictionless, trustless platform for posting tasks and rewarding contributors with crypto.

> **TL;DR** — Post a bounty → Hunters submit work → AI reviews submissions → Pay the winner on-chain. All in under a minute.

---

## 🚀 How It Works

Monquest follows a simple, transparent lifecycle for every bounty:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  1. CREATE   │────▶│  2. SUBMIT   │────▶│  3. REVIEW   │────▶│   4. PAY     │
│   Bounty     │     │    Work      │     │   with AI    │     │   Winner     │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
     Creator             Hunters            Gemini AI            On-chain
```

### Step-by-Step

1. **Create a Bounty** — A creator posts a task with a title, description (Markdown supported), and a prize pool in MON tokens. A small platform fee (`0.001 MON`) is charged via the [x402](https://www.x402.org/) HTTP payment protocol.

2. **Submit Work** — Hunters browse open bounties, pick one, and submit their solution with proof of work (text, images, files). Submissions are tied to the hunter's on-chain wallet address.

3. **AI Review** — The bounty creator can trigger an **AI Judge** (powered by Google Gemini 1.5 Flash) that automatically analyzes all submissions, scores them, and highlights a top pick — saving hours of manual review.

4. **Pay the Winner** — The creator selects a winner and pays them directly from their wallet. The bounty prize is transferred on-chain via the Monad testnet. The bounty status is marked `PAID` and the winner is recorded permanently.

---

## ✨ Features

### 🤖 AI-Powered Verification
- **Gemini 1.5 Flash** reviews all submissions in real-time with a streaming response
- AI provides written feedback for each submission and selects a top pick
- Creators see AI reasoning before making their final decision
- Fully optional — creators can always choose manually

### ⚡ Instant On-Chain Settlement
- Built on **Monad's EVM-compatible testnet** (Chain ID `0x279F`)
- Prize payouts happen directly wallet-to-wallet with a single transaction
- Leverages Monad's parallel execution for near-instant finality
- Full transaction transparency on [Monad Explorer](https://testnet.monadexplorer.com)

### 🔐 x402 Payment Protocol
- Bounty creation requires a micro-payment via the **x402 HTTP 402** standard
- Server returns `402 Payment Required` → wallet prompts for approval → payment hash is sent back as proof
- Ensures skin-in-the-game and prevents spam bounties

### 🔑 Seamless Authentication (Privy)
- **Embedded wallets** — users get a wallet automatically on signup, zero friction
- **External wallet support** — connect MetaMask, Coinbase Wallet, or any injected wallet
- **Multi-wallet profiles** — link multiple wallets to a single identity
- Private key export available for embedded wallets

### 📝 Rich Content Support
- Full **Markdown editor** with live preview (GFM supported)
- Drag-and-drop **file & image uploads** via Supabase Storage
- Inline image rendering in submissions and bounty descriptions

### 📱 Progressive Web App
- Installable PWA with offline support (Serwist service worker)
- Web push notification infrastructure ready
- Responsive design — works on mobile, tablet, and desktop

---

## 🎨 Design

Monquest features a **premium fintech-inspired UI** built for clarity and trust:

| Element | Implementation |
|---------|---------------|
| **Color Palette** | Electric Blue (`#4F8CFF`), Lime Green (`#A3E635`), Soft Purple (`#8B5CF6`) on an off-white (`#FAFAFA`) background |
| **Typography** | Inter — ExtraBold headlines, Regular body text for sharp hierarchy |
| **Cards** | White surfaces with multi-layer soft shadows and subtle borders |
| **Glassmorphism** | Frosted glass navbar and floating decorative elements |
| **Micro-animations** | Hover lift on cards, floating icons, fade-in-up hero content |
| **Accents** | Blue for primary CTAs, green for status/success, purple for AI features |
| **Gradients** | Mesh gradient hero background blending blue, purple, and green tints |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, React Server Components) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + custom design tokens |
| **Authentication** | [Privy](https://privy.io) (embedded + external wallets) |
| **Database** | [Supabase](https://supabase.com) (PostgreSQL + Row Level Security) |
| **File Storage** | Supabase Storage (media bucket) |
| **AI** | Google Generative AI (Gemini 1.5 Flash) |
| **Blockchain** | Monad Testnet (EVM-compatible, `viem` for interactions) |
| **Payment Protocol** | x402 (HTTP 402 standard) |
| **PWA** | Serwist (service worker, offline caching) |
| **Markdown** | react-markdown + remark-gfm |

---

## 📁 Project Structure

```
Monquest/
├── app/
│   ├── page.tsx                    # Landing page (Hero + Features)
│   ├── layout.tsx                  # Root layout (Privy, Navbar, Footer)
│   ├── globals.css                 # Design system & utility classes
│   ├── bounties/
│   │   ├── page.tsx                # Browse & search bounties
│   │   └── [id]/page.tsx           # Bounty detail, submissions, AI review
│   ├── create/page.tsx             # Post a new bounty (x402 payment flow)
│   ├── profile/page.tsx            # User profile, wallets, bounty history
│   ├── components/
│   │   ├── Navbar.tsx              # Frosted glass navigation bar
│   │   ├── Footer.tsx              # Minimal footer
│   │   ├── CarbonHero.tsx          # Landing page hero section
│   │   ├── CarbonFeatures.tsx      # Feature cards (bento grid)
│   │   ├── MarkdownEditor.tsx      # Write/Preview editor with file upload
│   │   ├── WalletModal.tsx         # Wallet details & connect prompts
│   │   └── privy-provider.tsx      # Privy auth wrapper
│   ├── api/
│   │   ├── bounties/               # CRUD for bounties + payout endpoint
│   │   ├── submissions/            # Create submissions
│   │   ├── ai-review/              # Gemini AI streaming review
│   │   └── profile/                # User bounty history
│   └── lib/
│       ├── db.ts                   # Supabase database operations
│       ├── supabase-client.ts      # Supabase client initialization
│       └── utils.ts                # Utility helpers
├── public/                         # Static assets, PWA icons
├── supabase_schema.sql             # Base database schema
├── supabase_migration_*.sql        # Database migrations
├── tailwind.config.ts              # Tailwind theme configuration
└── .env.example                    # Environment variable template
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- A [Privy](https://privy.io) account (for App ID)
- A [Supabase](https://supabase.com) project (for database & storage)
- A [Google AI Studio](https://aistudio.google.com) API key (for Gemini)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_PRIVY_APP_ID` | Your Privy application ID |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (backend only) |
| `GOOGLE_GEMINI_API_KEY` | Google Gemini API key |

### 3. Set Up the Database

Run the SQL migration scripts in your Supabase SQL editor, **in this order**:

1. `supabase_schema.sql` — base tables + storage
2. `supabase_migration_user_id.sql` — user tracking
3. `supabase_migration_ai_review.sql` — AI review columns
4. `supabase_migration_winner.sql` — winner tracking

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're live! 🚀

---

## 📄 License

MIT

---

<p align="center">
  Built with 🧠 on <strong>Monad</strong>
</p>
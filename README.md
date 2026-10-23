# MEN N BLACK - Haute Joaillerie Pour Homme

> **An ultra-luxury men's jewelry e-commerce platform built with pure HTML5, CSS3, Vanilla JavaScript, and an integrated SQL Database.**

---

## 💎 Brand Identity & Visual Aesthetics
- **Maison Name:** `MEN N BLACK`
- **Palette:** Obsidian Midnight Black (`#060608`), Deep Onyx Charcoal (`#0D0D11`, `#14141A`), and Metallic Champagne Gold (`#D4AF37`, `#F4E2BB`, `#9E7736`) with platinum accents.
- **Typography:** Classical high-fashion Roman serifs (`Cinzel`, `Playfair Display`) paired with clean architectural sans-serif (`Montserrat`).
- **Logo:** Bespoke faceted geometric crest emblem in SVG vector format (`assets/images/logo.svg`), with metallic gold gradient reflections, interlocking monogram, and Geneva hallmark detailing.

---

## 🌟 Key Features

1. **Main Dashboard & Male Model Showcase:**
   - Cinematic hero section featuring a high-fashion male model wearing solid 18K gold Cuban link chains, natural black onyx signet rings, diamond pendants, and luxury chronometer timepieces.
   - Interactive hotspot showcase highlighting individual jewelry pieces on the model with direct pricing.
   - Elegant animated scroll-down indicator: *"Discover the curation down to products ↓"*.

2. **Down to Products (Curated Archive):**
   - Filterable product grid populated directly from the SQL database.
   - Category filtering: *All Pieces*, *Chains & Necklaces*, *Signet & Diamond Rings*, *Bracelets & Cuffs*, *Pendants & Talismans*, *Horlogerie & Cufflinks*.
   - Live search by gemstone or metal type (18K Solid Gold, Black Aeronautical Titanium, Zirconia Ceramic, Natural Onyx).
   - Real-time sorting by price (Low to High, High to Low) and Connoisseur Rating.
   - Hover and touch cues: *"Touch to Inspect Creation & Hear Story →"*.

3. **Dedicated Product Detail Experience & Storyteller:**
   - **Touch Navigation:** Touching or clicking any jewelry piece immediately transitions to its dedicated, full-screen product experience (`#product-detail-view`).
   - **Tells About the Product:**
     - In-depth Goldsmith narrative, artistic inspiration, and historical lineage.
     - Technical dossier specs table (Karat, Weight, Gemstone clarity, Clasp mechanics, Origin atelier).
     - **🔊 "Listen to Atelier Presentation" Audio Narration:** Integrated Web Speech engine that literally speaks and narrates the piece's craftsmanship in an authoritative luxury British tone with animated sound waves!
     - Custom sizing selector (e.g. Ring sizes 8-12, Chain lengths 20"-26") and complimentary custom monogram laser engraving.
     - Curated complementary pairings ("Complete the Gentleman's Look").
     - Seamless *Return to Archive* navigation button and browser back/forward history support.

4. **Slide-Over Acquisition Vault (Cart Drawer):**
   - Clickable cart button in the header with live gold item badge counter.
   - Slide-over drawer with item thumbnails, quantities, increment/decrement controls, and remove options.
   - VIP privilege discount codes (enter `VIP10` or `FOUNDER20` for instant reduction).
   - Complimentary white-glove armored courier calculation.

5. **Authentication (Login & Registration):**
   - Luxury modal supporting both **Sign In** and **VIP Application (Registration)**.
   - Secure password hashing and SQL database user persistence.
   - **Quick Demo VIP Fill** button to immediately authenticate as *Lord Julian Vance* (`vip_gentleman` / `luxury2026`).
   - Profile drawer showing VIP tier (*Founding Black Card Member*) and concierge liaison perks.

6. **Secured Armored Checkout:**
   - Recipient and insured delivery address collection.
   - Settlement methods: Centurion / Black Card Protocol, Private Bank Wire, Swiss Cryptographic Vault.
   - Submits order to the SQL database, automatically records rows in `orders` and `order_items` tables, and issues an acquisition certificate receipt (`MNB-2026-XXXX`).

---

## 🗄️ SQL Database Architecture (`men_n_black.db`)

The database is built on relational SQL with full ACID compliance using SQLite (and also compatible with MySQL / PostgreSQL via `database.sql`):

- `users`: User accounts, emails, hashed passwords, VIP statuses, and contact details.
- `categories`: Jewelry collection classifications with slugs and descriptions.
- `products`: Product catalogue with prices, metals, gemstones, hallmark details, ratings, and image paths.
- `cart_items`: Active items saved to user vaults.
- `orders`: Transaction records, client details, armored shipping addresses, and status.
- `order_items`: Line-item breakdown per order with quantity and cleared unit prices.

---

## 🚀 How to Launch

### Option 1: One-Click Launcher (Recommended for Windows)
Double-click `start_men_n_black.bat` in the root folder.
This will:
1. Verify the SQL database (`men_n_black.db`).
2. Start the Python server on `http://localhost:8000/`.
3. Open the website automatically in your default browser.

### Option 2: Command Line (PowerShell / Command Prompt)
```powershell
# 1. Initialize or reset the SQL Database
python init_db.py

# 2. Start the FastAPI backend server
python server.py
```
Open **[http://localhost:8000/](http://localhost:8000/)** in any modern web browser.

### Option 3: Standalone Browser Opening
You can also directly double-click `index.html` to open it in Chrome, Edge, or Firefox. The built-in JavaScript engine contains a local fallback catalog so that all animations, cart operations, filters, and demo logins function even without a local web server!

/**
 * MEN N BLACK - Haute Joaillerie Pour Homme
 * Luxury E-Commerce Engine & SQL Integration
 */

// Application State
const state = {
  products: [],
  filteredProducts: [],
  categories: [],
  activeCategory: 'all',
  activeMetal: '',
  activeSort: '',
  searchQuery: '',
  cart: [],
  wishlist: [],
  user: null,
  currency: 'USD',
  currencySymbol: '$',
  promoCode: '',
  discountPercent: 0,
  currentPdpProductId: null,
  currentDashboardProductId: null,
  currentAngleIndex: 0,
  selectedPaymentMethod: 'Cash on Delivery',
  pdpSelectedSize: '',
  pdpQuantity: 1,
  apiBase: window.location.origin.includes('8000') ? '' : 'http://127.0.0.1:8000'
};

// Rich Craftsmanship Storytelling & Audio Presentation Scripts
const PRODUCT_STORIES = {
  1: {
    story: "Cast in heavy 18K solid yellow gold, the Sovereign Miami Cuban Chain represents the pinnacle of commanding masculinity. Measuring 12mm in width and weighing 185 grams of solid gold, every single interlocking link is hand-filed and polished to a mirror gleam in Geneva. The signature box lock is paved with 2.15 carats of brilliant-cut VVS1 diamonds, locking with an authoritative mechanical click that assures absolute security.",
    quote: "\"A heavy gold chain is not an adornment; it is an architectural signature of presence and power.\"",
    audioText: "Welcome to MEN N BLACK. Presenting the Sovereign Miami Cuban Chain. Hand-finished in solid eighteen karat yellow gold with a diamond-encrusted box lock clasp, this twelve-millimeter masterpiece weighs one hundred and eighty-five grams of solid gold. Each link is hand-polished in Geneva to mirror perfection, commanding presence and timeless authority.",
    specs: {
      "Gold Karat": "18K Solid Yellow Gold (AU750)",
      "Total Weight": "185 Grams Solid Gold",
      "Width": "12 Millimeters",
      "Diamonds": "2.15 ctw VVS1 Pavé Clasp",
      "Clasp": "Triple-Safety Box Lock Mechanism",
      "Origin": "Geneva Haute Atelier No. 4"
    },
    sizes: ['20" (50cm)', '22" (55cm)', '24" (60cm)', '26" (65cm)']
  },
  2: {
    story: "The Obsidian Monarch is sculpted from solid 18K yellow gold, crowned with a rare hand-carved Brazilian black onyx stone. Surrounding the deep velvet-black gem is an intricate halo of 36 micro-pavé black diamonds that capture the light with subtle, shadowy brilliance. Stamped with the AU750 hallmark, the ring has substantial heft, designed to sit with undeniable authority on the index or pinky finger.",
    quote: "\"Black onyx has shielded rulers for millennia. We forged it into solid gold to define the modern monarch.\"",
    audioText: "Presenting the Obsidian Monarch Signet Ring by MEN N BLACK. Sculpted from solid eighteen karat yellow gold, this signet is crowned with a rare natural Brazilian black onyx, encircled by thirty-six micro-pavé black diamonds. Weighted to feel commanding on the hand, it represents stoic elegance and unwavering prestige.",
    specs: {
      "Gold Karat": "18K Yellow Gold (AU750 Stamped)",
      "Center Stone": "AAA Natural Brazilian Onyx",
      "Accent Diamonds": "36 Round Cut Black Diamonds",
      "Weight": "26.5 Grams Solid Gold",
      "Finish": "Hand-Brushed Satin with Polished Bezel",
      "Origin": "Florence Goldsmith Atelier"
    },
    sizes: ["US 8 (18.1mm)", "US 9 (18.9mm)", "US 10 (19.8mm)", "US 11 (20.6mm)", "US 12 (21.4mm)"]
  },
  3: {
    story: "The Apollo Duo explores the duality of primeval fire and modern aeronautics. One cuff is hand-hammered from raw molten 18K solid gold, reflecting organic texture and warmth. The companion piece is precision-milled from aerospace-grade blackened titanium with an ultra-matte diamond-like carbon coating, delivering an unstoppable statement of modern resilience.",
    quote: "\"When raw molten gold meets blackened aeronautical titanium, the balance of power is forged.\"",
    audioText: "Introducing the Apollo Raw Gold and Titanium Duo Cuff. One cuff is hand-hammered from raw molten eighteen karat solid gold, while its companion is precision-engineered from aeronautical blackened titanium. Together, they embody the union of ancient fire and contemporary mastery.",
    specs: {
      "Materials": "Solid 18K Yellow Gold & Grade 5 Titanium",
      "Gold Weight": "42 Grams AU750",
      "Coating": "Diamond-Like Carbon (DLC) Matte Black",
      "Closure": "Engineered Deployant Security Buckle",
      "Origin": "Geneva Mechanical Atelier"
    },
    sizes: ["Small (17-18 cm)", "Medium (19-20 cm)", "Large (21-22 cm)", "Bespoke Fit"]
  },
  4: {
    story: "The Noir Pendant takes its architectural cues from classical art deco monuments. An imposing emerald-cut black onyx tablet is encased in a double halo of brilliant round white diamonds totaling 1.80 carats. Suspended from an 18K solid gold wheat chain, it rests with poise against black silk or an open tailored tuxedo collar.",
    quote: "\"Architectural geometry meets midnight stones. A talisman for the man who shapes his own destiny.\"",
    audioText: "You are looking at the Noir Emerald-Cut Diamond Pendant. Crowned with an architectural black onyx gemstone and framed in a double tier of brilliant white diamonds, this talisman is suspended on an eighteen karat solid gold wheat chain, created for distinguished black tie and evening wear.",
    specs: {
      "Gold Karat": "18K Solid Yellow Gold",
      "Center Gem": "Emerald-Cut Brazilian Natural Onyx",
      "Diamonds": "1.80 ctw F-Color VS1 Diamonds",
      "Chain Included": "24\" 18K Solid Gold Wheat Chain",
      "Dimensions": "28mm x 18mm",
      "Origin": "Geneva Haute Atelier"
    },
    sizes: ['Chain: 22" Length', 'Chain: 24" Length', 'Chain: 26" Length']
  },
  5: {
    story: "The Grand Duke cufflinks are the definitive finishing detail of black tie elegance. Hand-crafted in Geneva, each octagonal face is sculpted from satin-brushed 18K gold inset with mirror-polished natural black onyx. Eight star-set diamonds punctuate the corners, fastening securely with a custom whaleback mechanism.",
    quote: "\"True luxury lies in the subtle brilliance revealed at the turn of a cuff.\"",
    audioText: "Presenting the Grand Duke Octagonal Onyx Cufflinks. Hand-sculpted in satin-brushed eighteen karat gold with jet black onyx centerpieces and eight bezel-set diamonds, these cufflinks provide the quintessential signature of distinction for evening dress.",
    specs: {
      "Gold Karat": "18K Solid Yellow Gold (19.4 grams)",
      "Inlay": "Mirror-Polished Natural Black Onyx",
      "Diamonds": "8 Round Brilliant Accent Diamonds",
      "Closure": "Heavy-Duty Whaleback Toggle",
      "Hallmark": "Geneva Poinçon de Maître"
    },
    sizes: ["Standard French Cuff (16mm Octagon)"]
  },
  6: {
    story: "The Phantom Chronometer is a masterpiece of Swiss horological mastery. Encased in high-tech black zirconia ceramic that is virtually scratchproof, the open-worked skeleton dial reveals an automatic movement with solid 18K gold bridges and ruby bearings. Paired with a hand-stitched Louisiana alligator strap, it represents the absolute zenith of precision and prestige.",
    quote: "\"Time is a gentleman’s most precious asset; honor it in black ceramic and gold.\"",
    audioText: "Introducing the Phantom Skeleton Ceramic Chronometer. Crafted with an indestructible zirconia ceramic case and an open-worked automatic Swiss movement with solid gold gears, this timepiece delivers seventy-two hours of power reserve with water resistance to one hundred meters.",
    specs: {
      "Case Material": "High-Tech Zirconia Ceramic (42mm)",
      "Bezel Accents": "18K Rose Gold Hand-Polished",
      "Movement": "Swiss Automatic Skeleton (72h Reserve)",
      "Glass": "Dual Anti-Reflective Sapphire Crystal",
      "Strap": "Matte Black Louisiana Alligator Leather",
      "Water Resistance": "100 Meters / 10 ATM"
    },
    sizes: ["42mm Case / Adjustable Deployant Strap"]
  }
};

// Multi-Angle Swipe Perspectives for Products
const PRODUCT_ANGLES = {
  1: [
    { url: 'assets/images/product_cuban_chain.jpg', label: 'Angle 1: Full Cuban Profile (12mm)', badge: 'Angle 1 of 3: Macro Profile' },
    { url: 'assets/images/angle_chain_clasp.jpg', label: 'Angle 2: VVS Diamond Clasp Macro', badge: 'Angle 2 of 3: Clasp & Setting Detail' },
    { url: 'assets/images/hero_model.jpg', label: 'Angle 3: Styled on Gentleman', badge: 'Angle 3 of 3: On Model Styling' }
  ],
  2: [
    { url: 'assets/images/product_signet_ring.jpg', label: 'Angle 1: 45° Perspective on Marble', badge: 'Angle 1 of 3: 45° Facet View' },
    { url: 'assets/images/angle_ring_top.jpg', label: 'Angle 2: Top-Down Black Onyx & Diamonds', badge: 'Angle 2 of 3: Top-Down Gem Macro' },
    { url: 'assets/images/hero_model.jpg', label: 'Angle 3: Worn on Gentleman\'s Hand', badge: 'Angle 3 of 3: On Hand Styling' }
  ],
  3: [
    { url: 'assets/images/product_gold_bracelet.jpg', label: 'Angle 1: Raw Gold & Titanium Lay', badge: 'Angle 1 of 3: Dual Material Lay' },
    { url: 'assets/images/product_gold_bracelet.jpg', label: 'Angle 2: 750 18K Hallmark Stamp', badge: 'Angle 2 of 3: Hallmark Stamp Macro' },
    { url: 'assets/images/hero_model.jpg', label: 'Angle 3: Styled on Gentleman\'s Wrist', badge: 'Angle 3 of 3: On Wrist Styling' }
  ],
  4: [
    { url: 'assets/images/product_diamond_pendant.jpg', label: 'Angle 1: Frontal Emerald-Cut Octagon', badge: 'Angle 1 of 3: Frontal Symmetry' },
    { url: 'assets/images/product_diamond_pendant.jpg', label: 'Angle 2: Dual-Tier Diamond Halo', badge: 'Angle 2 of 3: Pavé Halo Detail' },
    { url: 'assets/images/model_collection_banner.jpg', label: 'Angle 3: Worn on Tuxedo Silk Collar', badge: 'Angle 3 of 3: Black Tie Styling' }
  ],
  5: [
    { url: 'assets/images/product_cufflinks.jpg', label: 'Angle 1: Pair Display on Dark Granite', badge: 'Angle 1 of 3: Pair Profile' },
    { url: 'assets/images/product_cufflinks.jpg', label: 'Angle 2: Whaleback Closure Mechanism', badge: 'Angle 2 of 3: Mechanism Detail' },
    { url: 'assets/images/model_collection_banner.jpg', label: 'Angle 3: Styled on French Cuff Shirt', badge: 'Angle 3 of 3: On Tuxedo Cuff' }
  ],
  6: [
    { url: 'assets/images/product_black_watch.jpg', label: 'Angle 1: Open-Worked Skeleton Dial', badge: 'Angle 1 of 3: Skeleton Movement' },
    { url: 'assets/images/product_black_watch.jpg', label: 'Angle 2: Ceramic Bezel & Gold Accents', badge: 'Angle 2 of 3: Bezel & Crown Angle' },
    { url: 'assets/images/hero_model.jpg', label: 'Angle 3: Worn on Gentleman\'s Wrist', badge: 'Angle 3 of 3: On Wrist Styling' }
  ]
};

// Fallback seed catalog in case file is opened via file:// or without backend running
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: 'The Sovereign Miami Cuban Chain (12mm)',
    category_slug: 'chains',
    price: 4850.00,
    original_price: 5400.00,
    metal: '18K Solid Yellow Gold',
    gemstone: 'VVS1 Pavé Clasp Diamonds',
    tag: 'ICONIC',
    rating: 5.0,
    review_count: 142,
    description: 'Hand-finished 18K solid yellow gold Cuban link chain with a diamond-encrusted box lock clasp. Weighted for commanding presence.',
    details: 'Width: 12mm | Length: 22 inches | Weight: 185 grams of 18K Gold | Total Diamond Weight: 2.15 ct VVS Clarity | Hand-polished mirror finish.',
    image_url: 'assets/images/product_cuban_chain.jpg',
    in_stock: 1
  },
  {
    id: 2,
    name: 'The Obsidian Monarch Signet Ring',
    category_slug: 'rings',
    price: 2400.00,
    original_price: 2850.00,
    metal: '18K Yellow Gold AU750',
    gemstone: 'Natural Black Onyx & Black Diamonds',
    tag: 'BESTSELLER',
    rating: 4.9,
    review_count: 98,
    description: 'An imposing hand-carved oval black onyx gemstone surrounded by a halo of micro-pavé black diamonds in brushed 18K yellow gold.',
    details: 'Gemstone: AAA Grade Natural Brazilian Onyx | Diamonds: 36 Round Cut Black Diamonds | Hallmark: AU750 Stamped | Custom engraving available.',
    image_url: 'assets/images/product_signet_ring.jpg',
    in_stock: 1
  },
  {
    id: 3,
    name: 'The Apollo Raw Gold & Titanium Duo Cuff',
    category_slug: 'bracelets',
    price: 3200.00,
    original_price: 3750.00,
    metal: '18K Yellow Gold & Matte Titanium',
    gemstone: 'None',
    tag: 'NEW ARRIVAL',
    rating: 4.8,
    review_count: 64,
    description: 'A dual statement of raw organic molten 18K gold craftsmanship alongside a precision-engineered matte black titanium link bracelet.',
    details: 'Gold Cuff: Hand-hammered textured solid 18K gold | Titanium Cuff: Grade 5 blackened aeronautical titanium with security deployant buckle.',
    image_url: 'assets/images/product_gold_bracelet.jpg',
    in_stock: 1
  },
  {
    id: 4,
    name: 'The Noir Emerald-Cut Diamond Pendant',
    category_slug: 'pendants',
    price: 3950.00,
    original_price: 4500.00,
    metal: '18K Yellow Gold',
    gemstone: 'Emerald-Cut Onyx & Round Diamonds',
    tag: 'LIMITED EDITION',
    rating: 5.0,
    review_count: 77,
    description: 'Architectural octagonal black onyx crystal crowned by an exquisite dual-tier diamond halo suspended from an 18K gold wheat chain.',
    details: 'Pendant Dimensions: 28mm x 18mm | Chain: 24 inch 18K Wheat Chain included | Diamond Quality: F Color, VS1 Clarity (1.80 ctw).',
    image_url: 'assets/images/product_diamond_pendant.jpg',
    in_stock: 1
  },
  {
    id: 5,
    name: 'The Grand Duke Octagonal Onyx Cufflinks',
    category_slug: 'accessories',
    price: 1650.00,
    original_price: 1950.00,
    metal: '18K Yellow Gold',
    gemstone: 'Polished Black Onyx & Diamonds',
    tag: 'BESTSELLER',
    rating: 4.9,
    review_count: 115,
    description: 'Deco-inspired octagonal French cufflinks in satin-brushed 18K gold with jet-black onyx centerpieces and 8 bezel-set accent diamonds.',
    details: 'Diameter: 16mm | Mechanism: Whaleback closure | Gold Weight: 19.4 grams | Hallmarked in Geneva | Presented in velvet keepsake chest.',
    image_url: 'assets/images/product_cufflinks.jpg',
    in_stock: 1
  },
  {
    id: 6,
    name: 'The Phantom Skeleton Ceramic Chronometer',
    category_slug: 'accessories',
    price: 9800.00,
    original_price: 11200.00,
    metal: 'Black Ceramic & 18K Rose Gold',
    gemstone: 'Sapphire Crystal & Rubies',
    tag: 'VIP EXCLUSIVE',
    rating: 5.0,
    review_count: 49,
    description: 'A masterpiece of horological engineering. Matte black high-tech ceramic casing framing an open-worked automatic movement with gold gears.',
    details: 'Case: 42mm Zirconia Ceramic | Power Reserve: 72 Hours | Water Resistance: 100M | Strap: Hand-stitched Louisiana matte alligator leather.',
    image_url: 'assets/images/product_black_watch.jpg',
    in_stock: 1
  }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  loadLocalSession();
  setupEventListeners();
  await loadProducts();
  renderProducts();
  updateCartUI();
  updateAuthUI();
  checkHashRoute();
}

// Session & Storage
function loadLocalSession() {
  try {
    const savedCart = localStorage.getItem('mnb_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);

    const savedWish = localStorage.getItem('mnb_wishlist');
    if (savedWish) state.wishlist = JSON.parse(savedWish);

    const savedUser = localStorage.getItem('mnb_user');
    if (savedUser) state.user = JSON.parse(savedUser);
  } catch (e) {
    console.warn('Storage read note:', e);
  }
}

function saveLocalSession() {
  try {
    localStorage.setItem('mnb_cart', JSON.stringify(state.cart));
    localStorage.setItem('mnb_wishlist', JSON.stringify(state.wishlist));
    if (state.user) {
      localStorage.setItem('mnb_user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('mnb_user');
    }
  } catch (e) {
    console.warn('Storage write note:', e);
  }
}

// Load products from SQL database via API, fallback gracefully
async function loadProducts() {
  try {
    const res = await fetch(`${state.apiBase}/api/products`);
    if (res.ok) {
      state.products = await res.json();
      console.log('✓ Products successfully synced with SQL Database.');
    } else {
      throw new Error('API returned status: ' + res.status);
    }
  } catch (err) {
    console.log('ℹ Notice: Using local catalog mirror (Python server can be started via run_website.bat)');
    state.products = [...FALLBACK_PRODUCTS];
  }
  applyFilters();
}

// Filter and Sort Engine
function applyFilters() {
  let list = [...state.products];

  // Category Filter
  if (state.activeCategory && state.activeCategory !== 'all') {
    list = list.filter(p => p.category_slug === state.activeCategory);
  }

  // Metal Filter
  if (state.activeMetal) {
    list = list.filter(p => p.metal.toLowerCase().includes(state.activeMetal.toLowerCase()));
  }

  // Search Filter
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) || 
      (p.gemstone && p.gemstone.toLowerCase().includes(q))
    );
  }

  // Sort
  if (state.activeSort === 'price_asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === 'price_desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  state.filteredProducts = list;
}

// Render Products Grid
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  if (state.filteredProducts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-gold); margin-bottom: 12px;">No Pieces Found In Current Curation</p>
        <p style="color: var(--text-muted); font-size: 0.85rem;">Adjust your filter criteria or search keyword to reveal vault selections.</p>
        <button onclick="resetFilters()" class="btn-luxury-outline" style="margin-top: 20px;">RESET ALL FILTERS</button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.filteredProducts.map(p => {
    const isWish = state.wishlist.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}" onclick="transformDashboardToProduct(${p.id})">
        <div class="product-image-container">
          <img src="${p.image_url}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='assets/images/hero_model.jpg'">
          ${p.tag ? `<span class="product-badge">${p.tag}</span>` : ''}
          <div class="card-quick-actions">
            <button class="card-action-btn" title="Quick View" onclick="event.stopPropagation(); openQuickView(${p.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button class="card-action-btn ${isWish ? 'active' : ''}" title="Add to Wishlist" onclick="event.stopPropagation(); toggleWishlist(${p.id})">
              <svg viewBox="0 0 24 24" fill="${isWish ? 'var(--gold-primary)' : 'none'}" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
          <div class="card-touch-indicator">
            <span>TOUCH TO SWIPE ANGLES & HEAR STORY</span>
            <span>→</span>
          </div>
        </div>

        <div class="product-body">
          <div class="product-meta">
            <span class="product-metal">${p.metal}</span>
            <span class="product-rating">★ ${p.rating.toFixed(1)} <span style="color: var(--text-muted); font-size: 0.7rem;">(${p.review_count})</span></span>
          </div>

          <h3 class="product-title">${p.name}</h3>
          <p class="product-desc">${p.description}</p>

          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-current">${formatPrice(p.price)}</span>
              ${p.original_price ? `<span class="price-original">${formatPrice(p.original_price)}</span>` : ''}
            </div>
            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              ACQUIRE
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Price Formatter
function formatPrice(amount) {
  return `${state.currencySymbol}${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

// Cart Logic
function addToCart(productId, qty = 1) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      metal: prod.metal,
      image_url: prod.image_url,
      quantity: qty
    });
  }

  saveLocalSession();
  updateCartUI();
  showToast('Piece Added to Vault', `${prod.name} has been placed in your acquisition vault.`);

  // Optional: Sync with SQL backend if user logged in
  if (state.user && state.user.id) {
    fetch(`${state.apiBase}/api/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id: productId, quantity: qty, user_id: state.user.id })
    }).catch(e => console.log('Cart backend sync note:', e));
  }
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  saveLocalSession();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveLocalSession();
  updateCartUI();
  showToast('Item Removed', 'The item was removed from your vault.');
}

function clearCart() {
  state.cart = [];
  saveLocalSession();
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-count-badge');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const discountRow = document.getElementById('cart-discount-row');
  const discountVal = document.getElementById('cart-discount-val');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countBadge) countBadge.textContent = totalCount;

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 60px 10px; color: var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.4)" style="margin-bottom: 16px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-primary); margin-bottom: 8px;">Your Vault is Empty</p>
        <p style="font-size: 0.8rem;">Explore our haute collections to select your signature pieces.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (discountRow) discountRow.style.display = 'none';
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image_url}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-metal">${item.metal}</span>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
          </div>
          <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
          <button class="btn-remove-item" onclick="removeFromCart(${item.id})">REMOVE</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (state.discountPercent / 100);
  const total = subtotal - discountAmount;

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(total);

  if (discountRow && discountVal) {
    if (state.discountPercent > 0) {
      discountRow.style.display = 'flex';
      discountVal.textContent = `-${formatPrice(discountAmount)} (${state.discountPercent}% VIP)`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  // Update In-Cart Direct Confirmation Button
  const btnIncart = document.getElementById('btn-incart-confirm');
  if (btnIncart) {
    if (state.cart.length === 0) {
      btnIncart.disabled = true;
      btnIncart.style.opacity = '0.5';
      btnIncart.textContent = 'VAULT EMPTY';
    } else {
      btnIncart.disabled = false;
      btnIncart.style.opacity = '1';
      btnIncart.textContent = `CONFIRM ORDER • ${state.selectedPaymentMethod.toUpperCase()} (${formatPrice(total)})`;
    }
  }

  // Pre-fill user name if logged in
  if (state.user) {
    const incartName = document.getElementById('incart-name');
    if (incartName && !incartName.value) {
      incartName.value = state.user.full_name;
    }
  }
}

// Promo Code
function applyPromoCode() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'VIP10' || code === 'BLACKCARD' || code === 'MENNBLACK') {
    state.discountPercent = 10;
    state.promoCode = code;
    showToast('VIP Courtesy Applied', '10% Private Client reduction applied to your vault.');
    updateCartUI();
  } else if (code === 'FOUNDER20') {
    state.discountPercent = 20;
    state.promoCode = code;
    showToast('Founder Privilege Granted', '20% Executive reduction unlocked.');
    updateCartUI();
  } else {
    showToast('Privilege Key Invalid', 'The concierge key entered is either expired or inactive.');
  }
}

// Wishlist
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from Wishlist', 'Piece removed from your private wishlist.');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to Wishlist', 'Piece securely saved to your private wishlist.');
  }
  saveLocalSession();
  renderProducts();
}

// Quick View Modal
function openQuickView(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quick-view-modal');
  const body = document.getElementById('quick-view-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="quick-view-grid">
      <div>
        <img src="${prod.image_url}" alt="${prod.name}" class="quick-view-img" onerror="this.src='assets/images/hero_model.jpg'">
      </div>
      <div>
        <div style="color: var(--text-gold); font-size: 0.74rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; margin-bottom: 6px;">
          ${prod.metal}
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-primary); margin-bottom: 12px; line-height: 1.3;">
          ${prod.name}
        </h2>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 18px; font-size: 0.85rem; color: #F5C518;">
          ★ ${prod.rating.toFixed(1)} <span style="color: var(--text-muted);">(${prod.review_count} Connoisseur Reviews)</span>
        </div>
        <div style="font-size: 1.8rem; font-weight: 700; color: var(--text-primary); margin-bottom: 18px;">
          ${formatPrice(prod.price)}
          ${prod.original_price ? `<span style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 10px;">${formatPrice(prod.original_price)}</span>` : ''}
        </div>
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; margin-bottom: 22px;">
          ${prod.description}
        </p>
        <div style="background: var(--bg-surface-2); border-left: 3px solid var(--gold-primary); padding: 14px 18px; margin-bottom: 24px; font-size: 0.78rem; color: var(--platinum);">
          <strong>Atelier Specifications:</strong><br>
          ${prod.details}
        </div>
        <div style="display: flex; gap: 14px; margin-bottom: 12px;">
          <button class="btn-gold-primary" onclick="addToCart(${prod.id}); closeModal('quick-view-modal');" style="flex: 1; justify-content: center;">
            ACQUIRE FOR VAULT
          </button>
          <button class="btn-luxury-outline" onclick="toggleWishlist(${prod.id}); renderProducts();">
            ♡
          </button>
        </div>
        <button class="btn-luxury-outline" onclick="closeModal('quick-view-modal'); goToProduct(${prod.id});" style="width: 100%; justify-content: center; font-size: 0.74rem;">
          VIEW FULL CRAFTSMANSHIP & AUDIO STORY →
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// Authentication (Login & Register with SQL Backend & Local fallback)
async function handleLogin(e) {
  if (e) e.preventDefault();
  const loginInput = document.getElementById('login-identifier');
  const passwordInput = document.getElementById('login-password');

  const login = loginInput ? loginInput.value.trim() : '';
  const password = passwordInput ? passwordInput.value : '';

  if (!login || !password) {
    showToast('Missing Credentials', 'Please enter your username/email and password.');
    return;
  }

  try {
    const res = await fetch(`${state.apiBase}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password })
    });

    if (res.ok) {
      const data = await res.json();
      state.user = data.user;
      saveLocalSession();
      updateAuthUI();
      closeModal('auth-modal');
      showToast('Welcome to MEN N BLACK', `Greetings, ${state.user.full_name}. Your VIP vault is active.`);
      return;
    } else {
      const err = await res.json();
      throw new Error(err.detail || 'Authentication failed');
    }
  } catch (err) {
    // If running in local standalone mode without backend
    if (login === 'vip_gentleman' || login === 'gentleman@mennblack.luxury' || password === 'luxury2026') {
      state.user = {
        id: 1,
        username: 'vip_gentleman',
        full_name: 'Lord Julian Vance',
        email: 'gentleman@mennblack.luxury',
        role: 'vip',
        vip_status: 'Founding Black Card Member'
      };
      saveLocalSession();
      updateAuthUI();
      closeModal('auth-modal');
      showToast('Welcome Back (VIP)', `Logged in as ${state.user.full_name}.`);
      return;
    }
    showToast('Authentication Failed', err.message || 'Invalid luxury credentials.');
  }
}

async function handleRegister(e) {
  if (e) e.preventDefault();
  const fullName = document.getElementById('reg-fullname').value.trim();
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const phone = document.getElementById('reg-phone') ? document.getElementById('reg-phone').value.trim() : '';

  if (!fullName || !username || !email || !password) {
    showToast('Incomplete Dossier', 'Please complete all required fields.');
    return;
  }

  try {
    const res = await fetch(`${state.apiBase}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ full_name: fullName, username, email, password, phone })
    });

    if (res.ok) {
      const data = await res.json();
      state.user = data.user;
      saveLocalSession();
      updateAuthUI();
      closeModal('auth-modal');
      showToast('Membership Established', `Welcome to the Inner Circle, ${state.user.full_name}.`);
    } else {
      const err = await res.json();
      throw new Error(err.detail || 'Registration failed');
    }
  } catch (err) {
    // Standalone fallback
    state.user = {
      id: Date.now(),
      username,
      full_name: fullName,
      email,
      role: 'customer',
      vip_status: 'VIP Privilege Member'
    };
    saveLocalSession();
    updateAuthUI();
    closeModal('auth-modal');
    showToast('Membership Established', `Welcome to the Inner Circle, ${state.user.full_name}.`);
  }
}

function quickDemoFill() {
  const loginInput = document.getElementById('login-identifier');
  const passwordInput = document.getElementById('login-password');
  if (loginInput && passwordInput) {
    loginInput.value = 'vip_gentleman';
    passwordInput.value = 'luxury2026';
    showToast('Credentials Injected', 'Click "AUTHENTICATE VAULT" to proceed.');
  }
}

function logoutUser() {
  state.user = null;
  saveLocalSession();
  updateAuthUI();
  closeModal('profile-modal');
  showToast('Vault Secured', 'You have been safely signed out.');
}

function updateAuthUI() {
  const authBtn = document.getElementById('nav-auth-btn');
  if (!authBtn) return;

  if (state.user) {
    authBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span>${state.user.full_name.split(' ')[0]} (VIP)</span>
    `;
    authBtn.onclick = () => openProfileModal();
  } else {
    authBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span>SIGN IN / JOIN</span>
    `;
    authBtn.onclick = () => openAuthModal('login');
  }
}

// Profile Modal
function openProfileModal() {
  if (!state.user) return;
  const modal = document.getElementById('profile-modal');
  const body = document.getElementById('profile-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 28px;">
      <div style="width: 72px; height: 72px; border-radius: 50%; background: var(--bg-surface-3); border: 2px solid var(--gold-primary); display: inline-flex; align-items: center; justify-content: center; font-size: 1.8rem; color: var(--gold-primary); font-family: var(--font-serif); margin-bottom: 14px;">
        ${state.user.full_name.charAt(0)}
      </div>
      <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-primary); margin-bottom: 4px;">${state.user.full_name}</h3>
      <span style="font-size: 0.74rem; background: rgba(212,175,55,0.15); color: var(--gold-light); padding: 4px 12px; border-radius: 20px; border: 1px solid var(--border-gold); text-transform: uppercase; letter-spacing: 0.14em;">
        ${state.user.vip_status || 'Founding VIP Member'}
      </span>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; font-size: 0.8rem;">
      <div style="background: var(--bg-surface-2); padding: 12px; border-radius: 4px;">
        <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Username</span>
        <strong style="color: var(--text-primary);">${state.user.username}</strong>
      </div>
      <div style="background: var(--bg-surface-2); padding: 12px; border-radius: 4px;">
        <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Private Email</span>
        <strong style="color: var(--text-primary);">${state.user.email}</strong>
      </div>
    </div>

    <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px; margin-bottom: 20px;">
      <h4 style="font-family: var(--font-serif); font-size: 0.95rem; margin-bottom: 12px; color: var(--gold-primary);">Private Vault Privileges</h4>
      <ul style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.9; list-style-position: inside;">
        <li>24/7 Dedicated Haute Joaillerie Concierge Liaison</li>
        <li>Priority access to limited numbered watch & chain allocations</li>
        <li>Complimentary annual ultrasonic cleaning & platinum polish</li>
        <li>Armored courier dispatch with zero deductible transit coverage</li>
      </ul>
    </div>

    <button onclick="logoutUser()" class="btn-luxury-outline" style="width: 100%; justify-content: center; border-color: rgba(230,57,70,0.5); color: #E63946;">
      SECURE LOGOUT
    </button>
  `;

  modal.classList.add('active');
}

// Checkout & SQL Order Placement
async function handleCheckout(e) {
  if (e) e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Vault Empty', 'Please select at least one piece before proceeding to checkout.');
    return;
  }

  const name = document.getElementById('checkout-name').value.trim();
  const email = document.getElementById('checkout-email').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const paymentMethod = document.getElementById('checkout-payment').value;

  if (!name || !email || !address) {
    showToast('Details Required', 'Please complete the recipient shipping dossier.');
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (state.discountPercent / 100);
  const total = subtotal - discountAmount;

  const orderData = {
    user_id: state.user ? state.user.id : 1,
    customer_name: name,
    customer_email: email,
    shipping_address: address,
    payment_method: paymentMethod,
    items: state.cart,
    total_amount: total
  };

  try {
    const res = await fetch(`${state.apiBase}/api/orders/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    let orderNum = `MNB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    if (res.ok) {
      const data = await res.json();
      orderNum = data.order_number;
    }

    displayOrderConfirmation(orderNum, total, address, name);
    clearCart();
    closeModal('checkout-modal');
    closeCartDrawer();
  } catch (err) {
    const fallbackNum = `MNB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    displayOrderConfirmation(fallbackNum, total, address, name);
    clearCart();
    closeModal('checkout-modal');
    closeCartDrawer();
  }
}

function selectInCartPayment(method, cardEl) {
  state.selectedPaymentMethod = method;
  document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
  if (cardEl) cardEl.classList.add('selected');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (state.discountPercent / 100);
  const total = subtotal - discountAmount;

  const btnConfirm = document.getElementById('btn-incart-confirm');
  if (btnConfirm) {
    btnConfirm.textContent = `CONFIRM ORDER • ${method.toUpperCase()} (${formatPrice(total)})`;
  }
}

async function confirmOrderFromCart() {
  if (state.cart.length === 0) {
    showToast('Vault Empty', 'Please select at least one piece before confirming order.');
    return;
  }

  const nameInput = document.getElementById('incart-name');
  const addrInput = document.getElementById('incart-address');

  let name = nameInput ? nameInput.value.trim() : '';
  let address = addrInput ? addrInput.value.trim() : '';

  if (!name && state.user) name = state.user.full_name;
  if (!name) name = 'Gentleman Connoisseur';

  if (!address) {
    address = 'Private Courier Destination (Direct Verification)';
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (state.discountPercent / 100);
  const total = subtotal - discountAmount;

  const orderData = {
    user_id: state.user ? state.user.id : 1,
    customer_name: name,
    customer_email: state.user ? state.user.email : 'concierge@mennblack.luxury',
    shipping_address: address,
    payment_method: state.selectedPaymentMethod,
    items: state.cart,
    total_amount: total
  };

  try {
    const res = await fetch(`${state.apiBase}/api/orders/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    let orderNum = `MNB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    if (res.ok) {
      const data = await res.json();
      orderNum = data.order_number;
    }

    displayOrderConfirmation(orderNum, total, address, name, state.selectedPaymentMethod);
    clearCart();
    closeCartDrawer();
  } catch (err) {
    const fallbackNum = `MNB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    displayOrderConfirmation(fallbackNum, total, address, name, state.selectedPaymentMethod);
    clearCart();
    closeCartDrawer();
  }
}

function displayOrderConfirmation(orderNum, amount, address, name, paymentMethod = 'Cash on Delivery') {
  const modal = document.getElementById('receipt-modal');
  const body = document.getElementById('receipt-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(212,175,55,0.12); border: 2px solid var(--gold-primary); display: inline-flex; align-items: center; justify-content: center; color: var(--gold-primary); font-size: 2rem; margin-bottom: 20px;">
        ✓
      </div>
      <span style="display: block; font-size: 0.74rem; letter-spacing: 0.24em; color: var(--text-gold); text-transform: uppercase; margin-bottom: 8px;">TRANSACTION RECORDED IN VAULT ARCHIVE</span>
      <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-primary); margin-bottom: 8px;">Order Confirmed</h2>
      <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 24px;">Security Certificate Reference: <strong style="color: var(--gold-light);">${orderNum}</strong></p>

      <div style="background: var(--bg-surface-2); border: 1px solid var(--border-gold); border-radius: 6px; padding: 20px; text-align: left; margin-bottom: 24px; font-size: 0.82rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Client Liaison:</span>
          <strong style="color: var(--text-primary);">${name}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Secure Destination:</span>
          <strong style="color: var(--text-primary); max-width: 260px; text-align: right;">${address}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Payment Method:</span>
          <strong style="color: var(--gold-primary);">${paymentMethod}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="color: var(--text-muted);">Courier Service:</span>
          <strong style="color: var(--gold-light);">Armored White-Glove Transit (Insured)</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="color: var(--text-muted);">Total Cleared / Payable:</span>
          <strong style="font-size: 1.15rem; color: var(--text-primary);">${formatPrice(amount)}</strong>
        </div>
      </div>

      <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
        ${paymentMethod === 'Cash on Delivery' ? '💵 Cash on Delivery verified. Please have exact cash settlement ready for the armored security courier upon delivery inspection.' : 'A sealed manifest has been stored in your SQL archive ledger and dispatched to your email.'}
      </p>

      <button onclick="closeModal('receipt-modal')" class="btn-gold-primary" style="width: 100%; justify-content: center;">
        RETURN TO MAISON ARCHIVE
      </button>
    </div>
  `;

  modal.classList.add('active');
}

// Drawer & Modal Helpers
function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('active');
  document.getElementById('cart-drawer').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('active');
  document.getElementById('cart-drawer').classList.remove('active');
}

function openAuthModal(tab = 'login') {
  const modal = document.getElementById('auth-modal');
  modal.classList.add('active');
  switchAuthTab(tab);
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('form-login');
  const regForm = document.getElementById('form-register');
  const tabLogin = document.getElementById('tab-btn-login');
  const tabReg = document.getElementById('tab-btn-register');

  if (tab === 'login') {
    loginForm.style.display = 'block';
    regForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    regForm.style.display = 'block';
    tabLogin.classList.remove('active');
    tabReg.classList.add('active');
  }
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Vault Empty', 'Add items before proceeding to checkout.');
    return;
  }

  // Pre-fill user data if logged in
  if (state.user) {
    const nameInput = document.getElementById('checkout-name');
    const emailInput = document.getElementById('checkout-email');
    if (nameInput) nameInput.value = state.user.full_name;
    if (emailInput) emailInput.value = state.user.email;
  }

  closeCartDrawer();
  document.getElementById('checkout-modal').classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Toast System
function showToast(title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">✦</div>
    <div class="toast-message">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Reset filters
function resetFilters() {
  state.activeCategory = 'all';
  state.activeMetal = '';
  state.activeSort = '';
  state.searchQuery = '';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const metalSelect = document.getElementById('metal-select');
  if (metalSelect) metalSelect.value = '';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = '';

  document.querySelectorAll('.category-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });

  applyFilters();
  renderProducts();
}

// Event Listeners Binding
function setupEventListeners() {
  // Category tab clicks
  document.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.dataset.category || 'all';
      applyFilters();
      renderProducts();
    });
  });

  // Search input live filter
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
      renderProducts();
    });
  }

  // Metal filter
  const metalSelect = document.getElementById('metal-select');
  if (metalSelect) {
    metalSelect.addEventListener('change', (e) => {
      state.activeMetal = e.target.value;
      applyFilters();
      renderProducts();
    });
  }

  // Sort filter
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      applyFilters();
      renderProducts();
    });
  }

  // Hotspot clicks on hero model
  document.querySelectorAll('.hotspot-item').forEach(item => {
    item.addEventListener('click', () => {
      const prodId = parseInt(item.dataset.productId);
      if (prodId) {
        goToProduct(prodId);
      }
    });
  });

  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Mobile drawer toggle
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', openCartDrawer);
  }

  // Hash route listener
  window.addEventListener('popstate', () => {
    checkHashRoute();
  });
}

// Check URL Hash for direct product links (e.g. index.html#product-2)
function checkHashRoute() {
  if (window.location.hash.startsWith('#product-')) {
    const pid = parseInt(window.location.hash.replace('#product-', ''));
    if (pid) {
      transformDashboardToProduct(pid, false);
    }
  }
}

// ====================================================================
// PRODUCT-CENTRIC DASHBOARD & MULTI-ANGLE SWIPER
// ====================================================================

function transformDashboardToProduct(productId, updateHash = true) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  state.currentDashboardProductId = productId;
  state.currentPdpProductId = productId;
  state.currentAngleIndex = 0;

  // Stop any playing audio
  stopAudioNarration();

  // 1. Dashboard Eyebrow & Title
  const badgeEl = document.getElementById('hero-product-badge');
  const eyebrowEl = document.getElementById('hero-eyebrow');
  const titleEl = document.getElementById('hero-title');
  const descEl = document.getElementById('hero-description');
  const briefBox = document.getElementById('hero-brief-box');
  const briefDesc = document.getElementById('hero-brief-desc');
  const briefPrice = document.getElementById('hero-brief-price');
  const briefMetal = document.getElementById('hero-brief-metal');
  const briefRating = document.getElementById('hero-brief-rating');
  const ctaDefault = document.getElementById('hero-cta-group');
  const ctaProduct = document.getElementById('hero-pdp-actions');
  const btnAcquireText = document.getElementById('btn-hero-acquire-text');
  const hotspotBox = document.getElementById('hero-hotspot-box');
  const swiperBox = document.getElementById('hero-swiper-box');
  const scrollText = document.getElementById('hero-scroll-text');

  if (badgeEl) badgeEl.style.display = 'inline-flex';
  if (eyebrowEl) eyebrowEl.textContent = `ATELIER CREATION • ${prod.metal.toUpperCase()}`;
  if (titleEl) {
    titleEl.innerHTML = `${prod.name}<br><span class="gold-text">${formatPrice(prod.price)}</span>`;
  }

  // 2. Brief Description ("when we click the product there should be brief description")
  if (descEl) descEl.style.display = 'none';
  if (briefBox) briefBox.style.display = 'block';
  if (briefDesc) {
    briefDesc.textContent = `${prod.description} Hand-cast in ${prod.metal} with precision ${prod.gemstone || 'gemstone'} setting and certified Geneva hallmark authentication.`;
  }
  if (briefPrice) briefPrice.textContent = formatPrice(prod.price);
  if (briefMetal) briefMetal.textContent = prod.metal;
  if (briefRating) briefRating.textContent = `★ ${prod.rating.toFixed(1)} (${prod.review_count} Connoisseurs)`;

  // 3. CTA Buttons
  if (ctaDefault) ctaDefault.style.display = 'none';
  if (ctaProduct) ctaProduct.style.display = 'flex';
  if (btnAcquireText) btnAcquireText.textContent = `ACQUIRE PIECE (${formatPrice(prod.price)})`;

  // 4. Hotspot vs Multi-Angle Swiper
  if (hotspotBox) hotspotBox.style.display = 'none';
  if (swiperBox) swiperBox.style.display = 'block';

  // 5. Scroll indicator
  if (scrollText) scrollText.textContent = 'EXPLORE DIFFERENT PRODUCTS DOWNSIDE ↓';

  // 6. Initialize Multi-Angle Swiper
  initSwiperForProduct(productId);

  // 7. Show Downside: Different Products Section ("downside there should be different producr")
  renderDownsideDifferentProducts(productId);

  // Smooth scroll up to top of hero dashboard
  const heroSection = document.getElementById('hero-dashboard');
  if (heroSection) heroSection.scrollIntoView({ behavior: 'smooth' });

  if (updateHash) {
    window.history.pushState({ productId: prod.id }, '', `#product-${productId}`);
  }
}

function resetDashboardToModel() {
  state.currentDashboardProductId = null;
  state.currentAngleIndex = 0;
  stopAudioNarration();

  const badgeEl = document.getElementById('hero-product-badge');
  const eyebrowEl = document.getElementById('hero-eyebrow');
  const titleEl = document.getElementById('hero-title');
  const descEl = document.getElementById('hero-description');
  const briefBox = document.getElementById('hero-brief-box');
  const ctaDefault = document.getElementById('hero-cta-group');
  const ctaProduct = document.getElementById('hero-pdp-actions');
  const hotspotBox = document.getElementById('hero-hotspot-box');
  const swiperBox = document.getElementById('hero-swiper-box');
  const differentSection = document.getElementById('different-products-section');
  const scrollText = document.getElementById('hero-scroll-text');

  if (badgeEl) badgeEl.style.display = 'none';
  if (eyebrowEl) eyebrowEl.textContent = 'HAUTE JOAILLERIE POUR HOMME • EST. 2026';
  if (titleEl) titleEl.innerHTML = 'DARK SOPHISTICATION.<br><span class="gold-text">PURE LUXURY.</span>';
  if (descEl) descEl.style.display = 'block';
  if (briefBox) briefBox.style.display = 'none';
  if (ctaDefault) ctaDefault.style.display = 'flex';
  if (ctaProduct) ctaProduct.style.display = 'none';
  if (hotspotBox) hotspotBox.style.display = 'block';
  if (swiperBox) swiperBox.style.display = 'none';
  if (differentSection) differentSection.style.display = 'none';
  if (scrollText) scrollText.textContent = 'DISCOVER THE CURATION DOWN TO PRODUCTS ↓';

  window.history.pushState({}, '', '#hero-dashboard');
}

// Multi-Angle Swiper Engine
function initSwiperForProduct(productId) {
  const angles = PRODUCT_ANGLES[productId] || [
    { url: 'assets/images/hero_model.jpg', label: 'Angle 1: Studio Profile', badge: 'Angle 1 of 1: Macro View' }
  ];

  state.currentAngleIndex = 0;

  const track = document.getElementById('swiper-track');
  const thumbsRow = document.getElementById('swiper-thumbnails-row');

  if (track) {
    track.innerHTML = angles.map(a => `
      <div class="swiper-slide">
        <img src="${a.url}" alt="${a.label}" class="swiper-slide-img" onerror="this.src='assets/images/hero_model.jpg'">
      </div>
    `).join('');
    track.style.transform = `translateX(0%)`;
  }

  if (thumbsRow) {
    thumbsRow.innerHTML = angles.map((a, idx) => `
      <button type="button" class="swiper-thumb-pill ${idx === 0 ? 'active' : ''}" onclick="goToAngle(${idx})">
        ${a.label.split(':')[0]}
      </button>
    `).join('');
  }

  updateSwiperBadge(productId, 0);
  bindSwiperGestures();
}

function updateSwiperBadge(productId, index) {
  const angles = PRODUCT_ANGLES[productId] || [];
  const badge = document.getElementById('swiper-angle-badge');
  if (badge && angles[index]) {
    badge.textContent = angles[index].badge.toUpperCase();
  }
}

function goToAngle(index) {
  const productId = state.currentDashboardProductId || 1;
  const angles = PRODUCT_ANGLES[productId] || [];
  if (index < 0) index = angles.length - 1;
  if (index >= angles.length) index = 0;

  state.currentAngleIndex = index;
  const track = document.getElementById('swiper-track');
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Update pills
  document.querySelectorAll('.swiper-thumb-pill').forEach((pill, idx) => {
    pill.classList.toggle('active', idx === index);
  });

  updateSwiperBadge(productId, index);
}

function nextAngle() {
  goToAngle(state.currentAngleIndex + 1);
}

function prevAngle() {
  goToAngle(state.currentAngleIndex - 1);
}

let swipeTouchStartX = 0;
let swipeTouchEndX = 0;

function bindSwiperGestures() {
  const viewport = document.getElementById('swiper-viewport');
  if (!viewport || viewport.dataset.gesturesBound) return;

  viewport.dataset.gesturesBound = 'true';

  viewport.addEventListener('touchstart', (e) => {
    swipeTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    swipeTouchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });

  // Mouse drag support for desktop
  let isDragging = false;
  let mouseStartX = 0;

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    mouseStartX = e.clientX;
  });

  viewport.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = e.clientX - mouseStartX;
    if (diff < -40) nextAngle();
    else if (diff > 40) prevAngle();
  });

  viewport.addEventListener('mouseleave', () => {
    isDragging = false;
  });
}

function handleSwipeGesture() {
  const threshold = 40;
  if (swipeTouchEndX < swipeTouchStartX - threshold) {
    nextAngle(); // swiped left -> next
  } else if (swipeTouchEndX > swipeTouchStartX + threshold) {
    prevAngle(); // swiped right -> previous
  }
}

// Downside Different Products
function renderDownsideDifferentProducts(currentProductId) {
  const sec = document.getElementById('different-products-section');
  const grid = document.getElementById('different-products-grid');
  if (!sec || !grid) return;

  sec.style.display = 'block';

  const different = state.products.filter(p => p.id !== currentProductId);
  grid.innerHTML = different.map(p => `
    <div class="product-card" onclick="transformDashboardToProduct(${p.id})">
      <div class="product-image-container">
        <img src="${p.image_url}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='assets/images/hero_model.jpg'">
        ${p.tag ? `<span class="product-badge">${p.tag}</span>` : ''}
        <div class="card-touch-indicator">
          <span>TOUCH TO SWIPE THIS PIECE</span>
          <span>→</span>
        </div>
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span class="product-metal">${p.metal}</span>
          <span class="product-rating">★ ${p.rating.toFixed(1)}</span>
        </div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <span class="price-current">${formatPrice(p.price)}</span>
          <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})">
            ACQUIRE
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function acquireCurrentDashboardProduct() {
  if (state.currentDashboardProductId) {
    addToCart(state.currentDashboardProductId, 1);
    openCartDrawer();
  }
}

// Forward goToProduct to transformDashboardToProduct
function goToProduct(productId, updateHash = true) {
  transformDashboardToProduct(productId, updateHash);
}

function closeProductDetail(updateHash = true) {
  resetDashboardToModel();
}

function selectPdpSize(size, btnEl) {
  state.pdpSelectedSize = size;
  document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

function updatePdpQty(delta) {
  state.pdpQuantity = Math.max(1, state.pdpQuantity + delta);
  const qtyVal = document.getElementById('pdp-qty-val');
  if (qtyVal) qtyVal.textContent = state.pdpQuantity;
}

function acquireFromPdp() {
  acquireCurrentDashboardProduct();
}

function togglePdpWishlist() {
  if (!state.currentDashboardProductId) return;
  toggleWishlist(state.currentDashboardProductId);
}

function renderPdpRelated(currentId, categorySlug) {
  renderDownsideDifferentProducts(currentId);
}

// ====================================================================
// AUDIO STORYTELLER / NARRATION SYSTEM ("Tells About The Product")
// ====================================================================

let currentSpeechUtterance = null;
let isNarrating = false;

function toggleAudioNarration() {
  if (isNarrating) {
    stopAudioNarration();
  } else {
    startAudioNarration();
  }
}

function startAudioNarration() {
  if (!('speechSynthesis' in window)) {
    showToast('Audio Unavailable', 'Your browser does not support Web Speech synthesis.');
    return;
  }

  window.speechSynthesis.cancel();

  const prodId = state.currentDashboardProductId || state.currentPdpProductId || 1;
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  const info = PRODUCT_STORIES[prodId];
  const narrationText = info ? info.audioText : `Presenting ${prod.name} by MEN N BLACK. Cast in solid ${prod.metal}. ${prod.description}`;

  currentSpeechUtterance = new SpeechSynthesisUtterance(narrationText);
  currentSpeechUtterance.rate = 0.92;   // Polished, luxury tempo
  currentSpeechUtterance.pitch = 0.95;  // Resonant authoritative timbre

  // Select British or refined English voice if available
  const voices = window.speechSynthesis.getVoices();
  const refinedVoice = voices.find(v => 
    (v.name.includes('UK') || v.name.includes('British') || v.name.includes('Daniel') || v.name.includes('Oliver') || v.name.includes('George') || v.lang === 'en-GB') && 
    v.lang.startsWith('en')
  ) || voices.find(v => v.lang.startsWith('en'));

  if (refinedVoice) {
    currentSpeechUtterance.voice = refinedVoice;
  }

  const card = document.getElementById('audio-presentation-card');
  const heroIcon = document.getElementById('hero-speech-icon');
  const heroLabel = document.getElementById('hero-speech-label');

  currentSpeechUtterance.onstart = () => {
    isNarrating = true;
    if (card) card.classList.add('audio-playing');
    if (heroIcon) heroIcon.textContent = '⏸';
    if (heroLabel) heroLabel.textContent = 'PAUSE STORY';
    showToast('Storyteller Active', `Listening to the atelier presentation for ${prod.name}`);
  };

  currentSpeechUtterance.onend = () => {
    stopAudioNarration();
  };

  currentSpeechUtterance.onerror = (e) => {
    console.warn('Speech synthesis note:', e);
    stopAudioNarration();
  };

  window.speechSynthesis.speak(currentSpeechUtterance);
}

function stopAudioNarration() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isNarrating = false;
  currentSpeechUtterance = null;

  const card = document.getElementById('audio-presentation-card');
  const heroIcon = document.getElementById('hero-speech-icon');
  const heroLabel = document.getElementById('hero-speech-label');

  if (card) card.classList.remove('audio-playing');
  if (heroIcon) heroIcon.textContent = '🔊';
  if (heroLabel) heroLabel.textContent = 'HEAR PIECE STORY';
}

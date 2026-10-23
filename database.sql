-- ====================================================================
-- MEN N BLACK - Luxury Men's Haute Joaillerie
-- SQL Database Schema & Seed Data
-- Compatible with SQLite & MySQL
-- ====================================================================

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    role VARCHAR(50) DEFAULT 'customer',
    phone VARCHAR(50),
    vip_status VARCHAR(50) DEFAULT 'Black Card Member',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

-- 3. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    category_slug VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2),
    metal VARCHAR(100) NOT NULL,
    gemstone VARCHAR(100),
    tag VARCHAR(50),
    rating DECIMAL(3, 2) DEFAULT 4.9,
    review_count INTEGER DEFAULT 84,
    description TEXT NOT NULL,
    details TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    in_stock INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Cart Items Table
CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 5. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id INTEGER,
    customer_name VARCHAR(150) NOT NULL,
    customer_email VARCHAR(150) NOT NULL,
    shipping_address TEXT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Confirmed',
    payment_method VARCHAR(100) DEFAULT 'Private Concierge / Black Card',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- ====================================================================
-- SEED INITIAL LUXURY CATEGORIES
-- ====================================================================
INSERT INTO categories (name, slug, description) VALUES
('All Collections', 'all', 'Complete collection of handcrafted luxury jewelry for gentlemen'),
('Chains & Necklaces', 'chains', 'Solid 18K gold Miami Cuban chains and statement necklaces'),
('Signet & Diamond Rings', 'rings', 'Bold natural black onyx signets and pavé diamond rings'),
('Bracelets & Cuffs', 'bracelets', 'Sculpted gold cuffs and forged titanium link bracelets'),
('Pendants & Medallions', 'pendants', 'Architectural emerald-cut onyx pendants and diamond talismans'),
('Haute Horlogerie & Cufflinks', 'accessories', 'Skeleton chronometers and handcrafted black onyx cufflinks');

-- ====================================================================
-- SEED LUXURY PRODUCTS
-- ====================================================================
INSERT INTO products (name, category_slug, price, original_price, metal, gemstone, tag, rating, review_count, description, details, image_url, in_stock) VALUES
(
    'The Sovereign Miami Cuban Chain (12mm)',
    'chains',
    4850.00,
    5400.00,
    '18K Solid Yellow Gold',
    'VVS1 Pavé Clasp Diamonds',
    'ICONIC',
    5.0,
    142,
    'Hand-finished 18K solid yellow gold Cuban link chain with a diamond-encrusted box lock clasp. Weighted for commanding presence.',
    'Width: 12mm | Length: 22 inches | Weight: 185 grams of 18K Gold | Total Diamond Weight: 2.15 ct VVS Clarity | Hand-polished mirror finish.',
    'assets/images/product_cuban_chain.jpg',
    1
),
(
    'The Obsidian Monarch Signet Ring',
    'rings',
    2400.00,
    2850.00,
    '18K Yellow Gold AU750',
    'Natural Black Onyx & Black Diamonds',
    'BESTSELLER',
    4.9,
    98,
    'An imposing hand-carved oval black onyx gemstone surrounded by a halo of micro-pavé black diamonds in brushed 18K yellow gold.',
    'Gemstone: AAA Grade Natural Brazilian Onyx | Diamonds: 36 Round Cut Black Diamonds | Hallmark: AU750 Stamped | Custom engraving available.',
    'assets/images/product_signet_ring.jpg',
    1
),
(
    'The Apollo Raw Gold & Titanium Duo Cuff',
    'bracelets',
    3200.00,
    3750.00,
    '18K Yellow Gold & Matte Titanium',
    'None',
    'NEW ARRIVAL',
    4.8,
    64,
    'A dual statement of raw organic molten 18K gold craftsmanship alongside a precision-engineered matte black titanium link bracelet.',
    'Gold Cuff: Hand-hammered textured solid 18K gold | Titanium Cuff: Grade 5 blackened aeronautical titanium with security deployant buckle.',
    'assets/images/product_gold_bracelet.jpg',
    1
),
(
    'The Noir Emerald-Cut Diamond Pendant',
    'pendants',
    3950.00,
    4500.00,
    '18K Yellow Gold',
    'Emerald-Cut Onyx & Round Diamonds',
    'LIMITED EDITION',
    5.0,
    77,
    'Architectural octagonal black onyx crystal crowned by an exquisite dual-tier diamond halo suspended from an 18K gold wheat chain.',
    'Pendant Dimensions: 28mm x 18mm | Chain: 24 inch 18K Wheat Chain included | Diamond Quality: F Color, VS1 Clarity (1.80 ctw).',
    'assets/images/product_diamond_pendant.jpg',
    1
),
(
    'The Grand Duke Octagonal Onyx Cufflinks',
    'accessories',
    1650.00,
    1950.00,
    '18K Yellow Gold',
    'Polished Black Onyx & Diamonds',
    'BESTSELLER',
    4.9,
    115,
    'Deco-inspired octagonal French cufflinks in satin-brushed 18K gold with jet-black onyx centerpieces and 8 bezel-set accent diamonds.',
    'Diameter: 16mm | Mechanism: Whaleback closure | Gold Weight: 19.4 grams | Hallmarked in Geneva | Presented in velvet keepsake chest.',
    'assets/images/product_cufflinks.jpg',
    1
),
(
    'The Phantom Skeleton Ceramic Chronometer',
    'accessories',
    9800.00,
    11200.00,
    'Black Ceramic & 18K Rose Gold',
    'Sapphire Crystal & Rubies',
    'VIP EXCLUSIVE',
    5.0,
    49,
    'A masterpiece of horological engineering. Matte black high-tech ceramic casing framing an open-worked automatic movement with gold gears.',
    'Case: 42mm Zirconia Ceramic | Power Reserve: 72 Hours | Water Resistance: 100M | Strap: Hand-stitched Louisiana matte alligator leather.',
    'assets/images/product_black_watch.jpg',
    1
);

-- ====================================================================
-- SEED DEFAULT VIP DEMO USER (Password: 'luxury2026' or 'password123')
-- ====================================================================
INSERT INTO users (username, email, password_hash, full_name, role, phone, vip_status) VALUES
('vip_gentleman', 'gentleman@mennblack.luxury', 'sha256$e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'Lord Julian Vance', 'vip', '+1 (555) 890-7766', 'Founding VIP Member');

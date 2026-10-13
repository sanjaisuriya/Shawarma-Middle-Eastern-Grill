# Shawarma & Middle Eastern Grill - HTML5 Website Template

**Shawarma & Middle Eastern Grill** is a premium, responsive, multi-page HTML5 website template designed specifically for Middle Eastern restaurants, shawarma shops, charcoal grill eateries, and event catering businesses. Built with modern semantic HTML5, Bootstrap 5.3, custom CSS tokens, and clean vanilla JavaScript.

---

## 🌟 Key Features

- **12 Complete Production-Ready HTML Pages**: Fully populated with authentic Levant culinary copy and crisp SVG vector graphics. No filler text or lorem ipsum!
- **Two Distinct Homepages**:
  - `index.html` (Home 1): Restaurant landing focused on slow-roasted vertical spit shawarma, saj wraps, story, and guest reviews.
  - `home-catering.html` (Home 2): Grill & Catering landing focused on live charcoal barbecue, grand banquet trays, and bulk event booking.
- **Light & Dark Mode**: Persistent theme toggle with stored user preferences (`localStorage`) integrated with Bootstrap 5 `data-bs-theme`.
- **RTL (Right-To-Left) Support**: Native support for Arabic and Hebrew layouts via a single toggle button or `dir="rtl"` attribute with custom typography overrides (`Tajawal`).
- **Interactive Menu Engine**: Category tab filtering, live dish search bar, and dietary filter checkboxes (Halal, Vegan, Gluten-Free, Spicy).
- **Interactive Form Validation**: Front-end validation with accessible error state feedback and success toasts for catering enquiries, contact forms, and newsletter signups.
- **Fully Responsive & Mobile-First**: Optimized for seamless display on phones, tablets, laptops, and ultra-wide desktops.
- **Accessible & SEO Optimized**: Semantic landmark tags (`<nav>`, `<section>`, `<article>`, `<footer>`), Open Graph metadata, Schema.org `Restaurant` JSON-LD structured data placeholders, and high color contrast.

---

## 📁 File & Folder Structure

```text
shawarma-grill-template/
├── index.html                  # Home Page 1 – Restaurant Landing (Shawarma & Saj)
├── home-catering.html          # Home Page 2 – Grill & Catering Landing (Barbecue & Events)
├── about.html                  # About Us – Heritage, Mission, & Chef Team
├── menu.html                   # Browseable Menu – Live Search & Dietary Filters
├── menu-item.html              # Menu Item Details – Ingredients, Customization, & Spice Meter
├── catering.html               # Catering Orders – Packages, Serving Guide, FAQs & Form
├── contact.html                # Contact Us – Address, Hours, Google Map Frame & Form
├── blog.html                   # Blog – Article Listing, Categories, & Search
├── blog-details.html           # Blog Details – Full Article, Author Bio, & Comments
├── pricing.html                # Pricing – Catering Comparison Matrix & Package Tiers
├── 404.html                    # 404 Error Page – Friendly Navigation & Search
├── coming-soon.html            # Coming Soon – Opening Announcement & Countdown Timer
├── README.md                   # Documentation & Customization Guide
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css   # Bootstrap 5.3 CSS Framework Wrapper
│   │   ├── style.css           # Core Custom Styles & Theme Tokens
│   │   ├── responsive.css      # Breakpoint Refinements
│   │   └── rtl.css             # Right-To-Left Overrides for Arabic / Hebrew
│   ├── js/
│   │   ├── bootstrap.bundle.min.js # Bootstrap JavaScript Bundle
│   │   ├── main.js             # Theme & RTL Toggles, Sticky Header, Mobile Nav
│   │   ├── menu-filter.js      # Menu & Blog Filtering & Search Engine
│   │   └── form-validation.js  # Form Validation & Feedback Toasts
│   ├── images/
│   │   ├── logo/               # Dark & Light Brand Logos + Favicon
│   │   ├── home-1/             # Home 1 Specific Graphic Assets
│   │   ├── home-2/             # Home 2 Specific Graphic Assets
│   │   ├── food/               # Food & Beverage Dish Graphics
│   │   ├── team/               # Chef & Management Avatars
│   │   ├── blog/               # Article Cover Illustrations
│   │   └── backgrounds/        # Decorative Background Patterns
│   ├── fonts/                  # Custom Font Assets (if hosted locally)
│   └── icons/                  # SVG Icon Assets
└── docs/
    └── credits.txt             # License & Third-Party Asset Attributions
```

---

## 🚀 Quick Setup Instructions

1. **Unzip / Copy Directory**: Simply unzip or copy the `shawarma-grill-template/` directory to your local web server environment (e.g., Apache, Nginx, Live Server, VS Code Preview).
2. **Open in Browser**: Open `index.html` in any web browser to view the template.
3. **No Build Steps Required**: The template uses vanilla JavaScript, CSS custom properties, and HTML5. No Node.js build pipeline or compilation is required to run or edit this project!

---

## 🎨 Customization Guide

### 1. Colors & Theme Tokens
All colors are defined using CSS Custom Properties in `assets/css/style.css`. Easily change your client's brand colors by modifying the `:root` variables:

```css
:root {
  --brand-red: #C83E2B;       /* Primary Spice Red */
  --brand-gold: #E5A93B;      /* Saffron Gold Accent */
  --brand-charcoal: #1E1E24;  /* Deep Charcoal Background */
  --bg-body: #FAF6F0;         /* Cream Warm Body */
}
```

### 2. Fonts
The template links Google Fonts (`Playfair Display`, `Outfit`, and `Tajawal` for RTL Arabic) in the `<head>` of each file. You can swap these font families in `assets/css/style.css`:

```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Outfit', sans-serif;
--font-arabic: 'Tajawal', sans-serif;
```

### 3. Demo-Only Forms
All forms (`#cateringForm`, `#contactForm`, `#quickOrderForm`, `#newsletterForm`) include front-end interactive JavaScript validation in `assets/js/form-validation.js`. 
- They simulate real-time submission by validating required inputs and rendering accessible success feedback toasts (`.form-alert-success`).
- To connect to a backend server (e.g., PHP, Node.js, Formspree, or Firebase), replace the `event.preventDefault()` handler in `form-validation.js` with your backend `POST` submission endpoint.

---

## 📄 License & Credits

- **Bootstrap 5.3**: MIT License.
- **Google Fonts**: SIL Open Font License.
- **Graphics**: Custom SVG Illustrations created for Shawarma & Middle Eastern Grill.

See `docs/credits.txt` for complete attribution details.

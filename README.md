# KPM FRIED CHICKEN — SINGLE-PAGE FRANCHISE WEBSITE

A high-converting, mobile-first **single-page website** for **KPM Fried Chicken**, built around the **8 × 4 Premium Cart** business model with modern royal Indian hospitality branding.

---

## Single-Page Architecture & Section Flow

All content lives on **one single, high-performance page**. The navigation bar smoothly scrolls the viewport directly to the corresponding section without reloading the browser:

| # | Section ID | Navigation Label | Contents & Features |
| :---: | :--- | :--- | :--- |
| **1** | `#home` | **HOME** | Official KPM logo, headline, primary CTAs (*"EXPLORE FRANCHISE"*, *"CALL NOW"*, *"View 18 Inclusions"*) |
| **2** | `#about` | **ABOUT** | Brand concept introduction, philosophy, compact model vs. restaurant lease analysis, shop/cart visuals |
| **3** | `#franchise` | **FRANCHISE** | *"BUILD YOUR KPM FRIED CHICKEN"*, 4 official benefits preview, 5-step operational roadmap |
| **4** | `#cart` | **8 × 4 CART** | Physical 8 × 4 cart presentation (mobile: image first, specs second, CTA third) |
| **5** | `#benefits` | **WHY KPM** | 4 official partnership cards: *No Royalty*, *Lifetime Brand Support*, *Own Unique Masala*, *1st Day Manpower Support* |
| **6** | `#package` | **PACKAGE** | All 18 official package inclusions in 6 categories + dedicated **Franchise Investment** price section |
| **7** | `#menu` | **MENU** | Food menu showcase with category filters + in-page expand/collapse (*"VIEW FULL MENU"*) |
| **8** | `#gallery` | **GALLERY** | Photo portfolio (Cart, Food, Equipment, Stall) with fullscreen lightbox modal |
| **9** | `#location` | **LOCATION** | Komarapalayam stall details (Salem Main Road, Old Saravana Theatre Front, [Google Maps](https://maps.app.goo.gl/Gt9cnFybxVXNBdHN8?g_st=aw)), interactive map embed, Call, WhatsApp, Get Directions |
| **10** | `#enquiry` | **ENQUIRY** | Complete validated Franchise Enquiry form with direct WhatsApp message generator |
| **11** | `#contact` | **CONTACT / FOOTER** | Direct contacts, Instagram, official address, and quick scroll navigation links |

---

## Key Features & User Experience
1. **Official KPM Logo**: Exact official logo (`public/KPM_Fried_Chicken_Transparent.png`) used across the header, hero, cart, pin, and footer.
2. **Active Section Indicator**: As the user scrolls, the sticky top navigation detects the currently visible section and highlights the corresponding link with an amber text accent and a subtle red underline.
3. **Smooth Scroll with Header Offset**: All navigation clicks calculate an offset (~68px) so headings are never concealed under the sticky header.
4. **Mobile Navigation Drawer**: Clean full-screen drawer on mobile with touch-friendly menu targets. Closes automatically upon selecting an item and smoothly scrolls to that section.
5. **Fixed Mobile Quick Bar**: 3 separated, equal-width action areas (`CALL`, `WHATSAPP`, `DIRECTIONS`) with safe-area spacing and a `pb-24` clearance to ensure no form or footer elements are ever obscured.

---

## 1. How to Run in VS Code

```bash
cd KPM-Fried-Chicken
npm install
npm run dev
```

Navigate to `http://localhost:3000` to view the website.

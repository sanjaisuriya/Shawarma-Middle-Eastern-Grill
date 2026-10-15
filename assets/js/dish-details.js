/**
 * Shawarma & Middle Eastern Grill - Dynamic Dish Details Controller
 * Ensures that whatever dish was clicked on any card, that EXACT image,
 * title, price, description, and dietary tags are displayed on menu-item.html.
 */

(function () {
  'use strict';

  const dishesDatabase = {
  "classic-chicken-saj-shawarma": {
    "id": "classic-chicken-saj-shawarma",
    "name": "Classic Chicken Saj Shawarma",
    "price": "₹14.50",
    "numPrice": 14.5,
    "img": "assets/images/food/classic-chicken-saj-shawarma.jpg",
    "bannerImg": "assets/images/banners/banner-chicken-saj-shawarma.jpg",
    "fallbackImg": "assets/images/food/chicken-shawarma.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Mild Spice",
        "cls": "badge-spicy"
      }
    ],
    "spiceChilis": 2,
    "spiceLabel": "Mild Spice",
    "desc": "Marinated citrus-garlic chicken carved thin from vertical spit, Lebanese garlic toum, wild pickles, and crispy fries in toasted dome saj flatbread.",
    "ingredients": [
      "Spit-Carved Cardamom Chicken",
      "Whipped Garlic Toum",
      "Wild Levantine Pickles",
      "Hand-Stretched Saj Flatbread",
      "Golden Batata Fries"
    ],
    "sides": [
      {
        "val": "fries",
        "text": "Spicy Batata Harra Fries (Standard)"
      },
      {
        "val": "rice",
        "text": "Cardamom Saffron Rice (+₹1.50)"
      },
      {
        "val": "salad",
        "text": "Fresh Fattoush Salad Side (+₹2.00)"
      }
    ],
    "bread": "Fresh Baked Saj Bread (Recommended)"
  },
  "prime-beef-lamb-saj-wrap": {
    "id": "prime-beef-lamb-saj-wrap",
    "name": "Prime Beef & Lamb Saj Wrap",
    "price": "₹15.95",
    "numPrice": 15.95,
    "img": "assets/images/food/prime-beef-lamb-saj-wrap.jpg",
    "bannerImg": "assets/images/banners/banner-beef-lamb-saj-wrap.jpg",
    "fallbackImg": "assets/images/food/beef-shawarma.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Signature",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 2,
    "spiceLabel": "Mild Spice",
    "desc": "Tender layers of spiced beef chuck and lamb flank slow-carved from rotisserie, sumac red onions, ripe tomatoes, fresh parsley, and sesame tahini in warm saj.",
    "ingredients": [
      "Prime Beef & Lamb Chuck",
      "Toasted Sesame Tahini",
      "Parsley Sumac Salad",
      "Fire-Roasted Tomatoes",
      "Blistered Saj Flatbread"
    ],
    "sides": [
      {
        "val": "rice",
        "text": "Cardamom Saffron Rice (Standard)"
      },
      {
        "val": "fries",
        "text": "Crispy Garlic Toum Fries (+₹1.50)"
      },
      {
        "val": "hummus",
        "text": "Side Artisanal Hummus (+₹2.50)"
      }
    ],
    "bread": "Dome Saj Bread"
  },
  "sultan-double-shawarma-box": {
    "id": "sultan-double-shawarma-box",
    "name": "Sultan Double Meat Shawarma Box Wrap",
    "price": "₹17.50",
    "numPrice": 17.5,
    "img": "assets/images/food/sultan-double-shawarma-box.jpg",
    "bannerImg": "assets/images/banners/banner-sultan-shawarma-box.jpg",
    "fallbackImg": "assets/images/home-1/wrap-special.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Spicy Feast",
        "cls": "badge-spicy"
      }
    ],
    "spiceChilis": 3,
    "spiceLabel": "Medium Spice",
    "desc": "Double portion of spit chicken and tender beef with garlic toum, spicy batata fries, wild cucumbers, pickled turnips, and toasted sesame tahini.",
    "ingredients": [
      "Rotisserie Chicken & Beef",
      "Spiced Batata Fries",
      "Whipped Garlic Toum",
      "Tahini Drizzle",
      "Warm Saj Bread"
    ],
    "sides": [
      {
        "val": "rice",
        "text": "Cardamom Saffron Rice (Included)"
      },
      {
        "val": "fries",
        "text": "Batata Harra Fries (+₹1.50)"
      }
    ],
    "bread": "Toasted Saj Bread & Warm Pita"
  },
  "crispy-herb-falafel-saj-wrap": {
    "id": "crispy-herb-falafel-saj-wrap",
    "name": "Crispy Herb Falafel Saj Wrap",
    "price": "₹12.50",
    "numPrice": 12.5,
    "img": "assets/images/food/crispy-herb-falafel-platter.jpg",
    "bannerImg": "assets/images/food/crispy-herb-falafel-platter.jpg",
    "fallbackImg": "assets/images/food/falafel-platter.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      }
    ],
    "spiceChilis": 1,
    "spiceLabel": "Mild",
    "desc": "Freshly fried golden chickpea and herb falafel patties, tomato-cucumber salad, fresh mint, pink pickled turnips, and creamy sesame tahini in blistered saj.",
    "ingredients": [
      "Herbed Chickpea Falafels",
      "Sesame Tahini",
      "Diced Persian Cucumber",
      "Fresh Mint",
      "Pickled Pink Turnips",
      "Dome Saj Bread"
    ],
    "sides": [
      {
        "val": "salad",
        "text": "Heirloom Tomato Salad (Standard)"
      },
      {
        "val": "fries",
        "text": "Spicy Batata Harra (+₹1.50)"
      }
    ],
    "bread": "Warm Blistered Saj"
  },
  "sultan-mixed-charcoal-kebab-platter": {
    "id": "sultan-mixed-charcoal-kebab-platter",
    "name": "Sultan Mixed Charcoal Kebab Platter",
    "price": "₹26.50",
    "numPrice": 26.5,
    "img": "assets/images/food/sultan-mixed-grill-platter.jpg",
    "bannerImg": "assets/images/food/sizzling-flame-seared-specialties-table.jpg",
    "fallbackImg": "assets/images/home-2/h2-mixed-platter.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Royal Feast",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 3,
    "spiceLabel": "Medium Spice",
    "desc": "Grand hearth assortment of lamb kofta, chicken shish tawook, and marinated beef tenderloin skewers over saffron cardamom rice with fire-roasted tomatoes.",
    "ingredients": [
      "Ground Lamb Kofta",
      "Chicken Shish Tawook",
      "Beef Tenderloin Skewers",
      "Saffron Cardamom Rice",
      "Charred Plum Tomatoes",
      "Sumac Red Onions"
    ],
    "sides": [
      {
        "val": "rice",
        "text": "Saffron Cardamom Rice (Included)"
      },
      {
        "val": "hummus",
        "text": "Side Beirut Hummus (+₹2.00)"
      }
    ],
    "bread": "Fresh Stone-Baked Pita & Saj"
  },
  "charcoal-shish-tawook-skewer-platter": {
    "id": "charcoal-shish-tawook-skewer-platter",
    "name": "Charcoal Shish Tawook Skewer Platter",
    "price": "₹21.00",
    "numPrice": 21.0,
    "img": "assets/images/home-2/platter-grilled-chicken.jpg",
    "bannerImg": "assets/images/home-2/platter-grilled-chicken.jpg",
    "fallbackImg": "assets/images/food/shish-taook.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Mild Spice",
        "cls": "badge-spicy"
      }
    ],
    "spiceChilis": 2,
    "spiceLabel": "Mild Spice",
    "desc": "Tender chicken breast cubes marinated for 24 hours in garlic toum, lemon juice, extra virgin olive oil, and Aleppo paprika, grilled over live lump charcoal.",
    "ingredients": [
      "Citrus-Garlic Chicken Skewers",
      "House Toum Garlic Dip",
      "Charred Sweet Peppers",
      "Fragrant Basmati Rice"
    ],
    "sides": [
      {
        "val": "rice",
        "text": "Fragrant Basmati Rice (Standard)"
      },
      {
        "val": "fries",
        "text": "Batata Harra Fries (+₹1.50)"
      }
    ],
    "bread": "Warm Stone-Baked Pita"
  },
  "aleppo-spiced-lamb-kofta-platter": {
    "id": "aleppo-spiced-lamb-kofta-platter",
    "name": "Aleppo Spiced Lamb Kofta Platter",
    "price": "₹22.50",
    "numPrice": 22.5,
    "img": "assets/images/food/charcoal-lamb-kebabs.jpg",
    "bannerImg": "assets/images/banners/banner-charcoal-lamb-kebabs.jpg",
    "fallbackImg": "assets/images/food/lamb-kebab.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Spicy Favorite",
        "cls": "badge-spicy"
      }
    ],
    "spiceChilis": 3,
    "spiceLabel": "Medium Spicy",
    "desc": "Ground Australian lamb kneaded with chopped parsley, sweet red onions, sumac, and Syrian Aleppo pepper, hand-pressed onto skewers and flame-seared.",
    "ingredients": [
      "Australian Ground Lamb",
      "Flat-Leaf Parsley",
      "Red Onion",
      "Aleppo Chili Pepper",
      "Sumac Vinaigrette",
      "Warm Pita"
    ],
    "sides": [
      {
        "val": "rice",
        "text": "Cardamom Rice (Standard)"
      },
      {
        "val": "salad",
        "text": "Fattoush Salad (+₹1.50)"
      }
    ],
    "bread": "Warm Hearth Flatbread"
  },
  "prime-lamb-chops-rosemary-sumac": {
    "id": "prime-lamb-chops-rosemary-sumac",
    "name": "Prime Lamb Chops with Rosemary & Sumac",
    "price": "₹28.00",
    "numPrice": 28.0,
    "img": "assets/images/home-2/platter-artisan-kebabs.jpg",
    "bannerImg": "assets/images/home-2/platter-artisan-kebabs.jpg",
    "fallbackImg": "assets/images/home-2/charcoal-grill.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Chef Special",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 2,
    "spiceLabel": "Mild Herb Seasoning",
    "desc": "Three hand-trimmed bone-in prime lamb chops marinated in fresh rosemary, cold-pressed olive oil, garlic, and wild sumac, seared on open hardwood embers.",
    "ingredients": [
      "Triple Bone-In Lamb Chops",
      "Fresh Rosemary",
      "Wild Sumac",
      "Roasted Garlic Cloves",
      "Grilled Vine Tomatoes"
    ],
    "sides": [
      {
        "val": "rice",
        "text": "Saffron Rice (Standard)"
      },
      {
        "val": "potatoes",
        "text": "Spicy Batata Harra (+₹1.50)"
      }
    ],
    "bread": "Artisan Stone-Baked Flatbread"
  },
  "creamy-labneh-zaatar-olives": {
    "id": "creamy-labneh-zaatar-olives",
    "name": "Creamy Labneh with Za'atar & Olives",
    "price": "₹8.50",
    "numPrice": 8.5,
    "img": "assets/images/food/creamy-zaatar-labneh.jpg",
    "bannerImg": "assets/images/food/creamy-zaatar-labneh.jpg",
    "fallbackImg": "assets/images/food/food-placeholder.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Gluten-Free",
        "cls": "badge-gf"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Not Spicy",
    "desc": "Thick strained whole milk yogurt topped with wild thyme za'atar herb blend, Kalamata olives, fresh spearmint leaves, and cold-pressed extra virgin olive oil.",
    "ingredients": [
      "Strained Yogurt Labneh",
      "Wild Thyme Za'atar",
      "Greek Kalamata Olives",
      "Fresh Spearmint",
      "Cold-Pressed Virgin Olive Oil"
    ],
    "sides": [
      {
        "val": "pita",
        "text": "2 Warm Stone-Baked Pitas (Standard)"
      },
      {
        "val": "veggies",
        "text": "Fresh Cucumber & Radish Dippers (+₹1.50)"
      }
    ],
    "bread": "Warm Stone-Baked Pita Basket"
  },
  "spicy-batata-harra-potatoes": {
    "id": "spicy-batata-harra-potatoes",
    "name": "Spicy Batata Harra Crispy Potatoes",
    "price": "₹7.95",
    "numPrice": 7.95,
    "img": "assets/images/food/spicy-batata-harra.jpg",
    "bannerImg": "assets/images/food/spicy-batata-harra.jpg",
    "fallbackImg": "assets/images/food/food-placeholder.svg",
    "dietary": [
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      },
      {
        "label": "Spicy",
        "cls": "badge-spicy"
      },
      {
        "label": "Gluten-Free",
        "cls": "badge-gf"
      }
    ],
    "spiceChilis": 3,
    "spiceLabel": "Medium Spice",
    "desc": "Crispy golden potato cubes tossed in a sizzling pan with sautéed minced garlic, fresh coriander leaves, crushed Aleppo chili pepper flakes, and fresh lemon.",
    "ingredients": [
      "Golden Potato Cubes",
      "Sautéed Minced Garlic",
      "Fresh Cilantro / Coriander",
      "Crushed Aleppo Chili Flakes",
      "Cold Lemon Juice"
    ],
    "sides": [
      {
        "val": "toum",
        "text": "House Garlic Toum Dip (Standard)"
      },
      {
        "val": "tahini",
        "text": "Sesame Tahini Dip (+₹1.00)"
      }
    ],
    "bread": "Warm Saj Bread"
  },
  "fresh-stone-baked-pita-basket": {
    "id": "fresh-stone-baked-pita-basket",
    "name": "Fresh Stone-Baked Pita Bread Basket",
    "price": "₹4.50",
    "numPrice": 4.5,
    "img": "assets/images/food/stone-baked-pita-basket.jpg",
    "bannerImg": "assets/images/food/stone-baked-pita-basket.jpg",
    "fallbackImg": "assets/images/food/food-placeholder.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Not Spicy",
    "desc": "Warm, puffed pocket pitas and blistered saj flatbreads baked continuously throughout the day in our traditional stone hearth oven, served steaming fresh.",
    "ingredients": [
      "Heirloom Flour Dough",
      "Toasted Sesame Seeds",
      "Extra Virgin Olive Oil",
      "Sea Salt"
    ],
    "sides": [
      {
        "val": "zaatar",
        "text": "Za'atar & Olive Oil Dip (+₹1.50)"
      },
      {
        "val": "toum",
        "text": "Garlic Toum Dip (+₹1.50)"
      }
    ],
    "bread": "Assorted Oven Hearth Pitas & Saj"
  },
  "beirut-silk-hummus-olive-oil": {
    "id": "beirut-silk-hummus-olive-oil",
    "name": "Beirut Silk Hummus with Virgin Olive Oil",
    "price": "₹8.95",
    "numPrice": 8.95,
    "img": "assets/images/food/artisanal-creamy-hummus.jpg",
    "bannerImg": "assets/images/banners/banner-artisanal-creamy-hummus.jpg",
    "fallbackImg": "assets/images/food/hummus-plate.svg",
    "dietary": [
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      },
      {
        "label": "Gluten-Free",
        "cls": "badge-gf"
      },
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Not Spicy",
    "desc": "Slow-simmered Levant chickpeas whipped silky smooth with sesame tahini, fresh lemon juice, and sea salt, crowned with whole chickpeas, sumac, and olive oil.",
    "ingredients": [
      "Simmered Kabuli Chickpeas",
      "Sesame Tahini",
      "Palestinian Extra Virgin Olive Oil",
      "Crushed Garlic",
      "Fresh Lemon Juice",
      "Ruby Sumac"
    ],
    "sides": [
      {
        "val": "pita",
        "text": "2 Stone-Baked Pitas (Standard)"
      },
      {
        "val": "pine_nuts",
        "text": "Roasted Pine Nuts Topping (+₹2.00)"
      }
    ],
    "bread": "Fresh Warm Stone-Baked Pita"
  },
  "fire-roasted-moutabal-baba-ghanoush": {
    "id": "fire-roasted-moutabal-baba-ghanoush",
    "name": "Fire-Roasted Moutabal Baba Ghanoush",
    "price": "₹9.50",
    "numPrice": 9.5,
    "img": "assets/images/food/moutabal-baba-ghanoush.jpg",
    "bannerImg": "assets/images/food/moutabal-baba-ghanoush.jpg",
    "fallbackImg": "assets/images/food/baba-ghanoush.svg",
    "dietary": [
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      },
      {
        "label": "Gluten-Free",
        "cls": "badge-gf"
      },
      {
        "label": "Smoky",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Not Spicy",
    "desc": "Whole eggplants charred over lump charcoal, blended with sesame tahini, crushed garlic, and pomegranate seeds for a rich, smoky velvet mezze dip.",
    "ingredients": [
      "Charcoal-Smoked Eggplant",
      "Roasted Sesame Tahini",
      "Extra Virgin Olive Oil",
      "Ruby Pomegranate Seeds",
      "Fresh Lemon & Garlic"
    ],
    "sides": [
      {
        "val": "pita",
        "text": "2 Puffed Hearth Pitas (Standard)"
      },
      {
        "val": "veggies",
        "text": "Crispy Veggie Dippers (+₹1.50)"
      }
    ],
    "bread": "Warm Hearth Pita"
  },
  "authentic-lebanese-garden-tabbouleh": {
    "id": "authentic-lebanese-garden-tabbouleh",
    "name": "Authentic Lebanese Garden Tabbouleh",
    "price": "₹9.00",
    "numPrice": 9.0,
    "img": "assets/images/menu/tabbouleh-bowl.jpg",
    "bannerImg": "assets/images/menu/tabbouleh-bowl.jpg",
    "fallbackImg": "assets/images/food/fattoush-salad.svg",
    "dietary": [
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      },
      {
        "label": "Fresh Herb",
        "cls": "badge-special"
      },
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Not Spicy",
    "desc": "Finely hand-chopped flat-leaf parsley, vine Roma tomatoes, fresh garden mint, scallions, and cracked bulgur wheat dressed in lemon-olive oil vinaigrette.",
    "ingredients": [
      "Flat-Leaf Parsley",
      "Fresh Spearmint",
      "Vine Roma Tomatoes",
      "Scallions",
      "Fine Cracked Bulgur",
      "Lemon-Olive Oil Dressing"
    ],
    "sides": [
      {
        "val": "standard",
        "text": "Crispy Romaine Lettuce Cups (Standard)"
      }
    ],
    "bread": "Crisp Pita Chips"
  },
  "royal-pistachio-baklava-selection": {
    "id": "royal-pistachio-baklava-selection",
    "name": "Royal Pistachio Baklava Selection",
    "price": "₹8.50",
    "numPrice": 8.5,
    "img": "assets/images/menu/chef-fav-baklava-selection.jpg",
    "bannerImg": "assets/images/menu/chef-fav-baklava-selection.jpg",
    "fallbackImg": "assets/images/food/baklava-tray.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Handmade",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Sweet Dessert",
    "desc": "40 delicate layers of gossamer filo pastry baked with clarified butter, filled with crushed Antep pistachios, and lightly bathed in orange blossom honey syrup.",
    "ingredients": [
      "Gossamer Filo Pastry Sheets",
      "Clarified Butter / Ghee",
      "Crushed Antep Pistachios",
      "Orange Blossom Honey Syrup"
    ],
    "sides": [
      {
        "val": "qahwa",
        "text": "Arabic Coffee Pairing (+₹2.50)"
      },
      {
        "val": "mint_tea",
        "text": "Fresh Mint Tea (+₹2.00)"
      }
    ],
    "bread": "Crisp Flaky Filo Crust"
  },
  "warm-cheese-kunafa-kataifi": {
    "id": "warm-cheese-kunafa-kataifi",
    "name": "Warm Cheese Kunafa with Kataifi & Pistachios",
    "price": "₹10.50",
    "numPrice": 10.5,
    "img": "assets/images/food/warm-cheese-kunafa.jpg",
    "bannerImg": "assets/images/food/warm-cheese-kunafa.jpg",
    "fallbackImg": "assets/images/food/kunafa.svg",
    "dietary": [
      {
        "label": "100% Halal",
        "cls": "badge-halal"
      },
      {
        "label": "Served Warm",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Sweet Dessert",
    "desc": "Crispy golden shredded kataifi pastry baked over sweet melted Nabulsi cheese, drizzled with warm floral sugar syrup and crowned with crushed emerald pistachios.",
    "ingredients": [
      "Shredded Kataifi Pastry",
      "Sweet Nabulsi & Akkawi Cheese",
      "Orange Blossom Attar Syrup",
      "Crushed Antep Pistachios",
      "Clarified Butter"
    ],
    "sides": [
      {
        "val": "extra_syrup",
        "text": "Extra Orange Blossom Syrup (Included)"
      },
      {
        "val": "ice_cream",
        "text": "Mastic Turkish Ice Cream Scoop (+₹2.50)"
      }
    ],
    "bread": "Golden Crisp Kataifi Crust"
  },
  "traditional-cardamom-arabic-coffee": {
    "id": "traditional-cardamom-arabic-coffee",
    "name": "Traditional Cardamom Arabic Coffee (Qahwa)",
    "price": "₹4.95",
    "numPrice": 4.95,
    "img": "assets/images/menu/arabic-coffee.jpg",
    "bannerImg": "assets/images/menu/arabic-coffee.jpg",
    "fallbackImg": "assets/images/food/menu-mint-tea.svg",
    "dietary": [
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      },
      {
        "label": "Gluten-Free",
        "cls": "badge-gf"
      },
      {
        "label": "Hot Brew",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 1,
    "spiceLabel": "Warm Cardamom Spice",
    "desc": "Light-roasted Yemeni Arabica coffee brewed with crushed green cardamom pods and saffron threads, poured from a brass dallah pot and served with Medina dates.",
    "ingredients": [
      "Light-Roast Arabica Coffee Beans",
      "Crushed Green Cardamom Pods",
      "Saffron Threads",
      "Organic Medina Dates"
    ],
    "sides": [
      {
        "val": "dates",
        "text": "3 Medina Khudri Dates (Included)"
      },
      {
        "val": "baklava",
        "text": "Single Pistachio Baklava (+₹2.00)"
      }
    ],
    "bread": "Beverage / No Bread Required"
  },
  "fresh-mint-lemonade-limonana": {
    "id": "fresh-mint-lemonade-limonana",
    "name": "Fresh Mint Lemonade (Limonana)",
    "price": "₹5.50",
    "numPrice": 5.5,
    "img": "assets/images/food/fresh-mint-limonana.jpg",
    "bannerImg": "assets/images/food/fresh-mint-limonana.jpg",
    "fallbackImg": "assets/images/food/mint-tea.svg",
    "dietary": [
      {
        "label": "100% Vegan",
        "cls": "badge-vegan"
      },
      {
        "label": "Gluten-Free",
        "cls": "badge-gf"
      },
      {
        "label": "Ice Cold",
        "cls": "badge-special"
      }
    ],
    "spiceChilis": 0,
    "spiceLabel": "Refreshing Mint Citrus",
    "desc": "The quintessential Middle Eastern cooler: freshly squeezed tart lemons blended with fresh garden spearmint leaves, pure cane sugar, and crushed mountain ice.",
    "ingredients": [
      "Freshly Squeezed Lemon Juice",
      "Garden Spearmint Leaves",
      "Pure Cane Sugar",
      "Crushed Mountain Ice",
      "Spring Water"
    ],
    "sides": [
      {
        "val": "lemon_slice",
        "text": "Fresh Lemon Wheel & Mint Sprig (Standard)"
      }
    ],
    "bread": "Chilled Drink / No Bread Required"
  }
};

  // Aliases for seamless URL and ID lookups
  dishesDatabase['sultan-double-mixed-shawarma-box'] = dishesDatabase['sultan-double-shawarma-box'];
  dishesDatabase['prime-beef-amp-lamb-saj-wrap'] = dishesDatabase['prime-beef-lamb-saj-wrap'];
  dishesDatabase['classic-chicken-saj-shawarma-wrap'] = dishesDatabase['classic-chicken-saj-shawarma'];
  dishesDatabase['saj-shawarma-wrap'] = dishesDatabase['classic-chicken-saj-shawarma'];
  dishesDatabase['artisanal-creamy-hummus'] = dishesDatabase['beirut-silk-hummus-olive-oil'];
  dishesDatabase['charcoal-lamb-kebabs'] = dishesDatabase['aleppo-spiced-lamb-kofta-platter'];
  dishesDatabase['sultan-mixed-grill-platter'] = dishesDatabase['sultan-mixed-charcoal-kebab-platter'];
  dishesDatabase['hot-nabulsi-kunafa'] = dishesDatabase['warm-cheese-kunafa-kataifi'];
  dishesDatabase['garden-fresh-fattoush'] = dishesDatabase['authentic-lebanese-garden-tabbouleh'];

  function normalizeKey(str) {
    if (!str) return '';
    try {
      str = decodeURIComponent(str);
    } catch (e) {}
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function initDishDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    let requestedKey = urlParams.get('dish') || urlParams.get('id') || urlParams.get('name');

    // Also support hash navigation e.g. #dish=... or #crispy-herb-falafel...
    if (!requestedKey && window.location.hash) {
      const hashStr = window.location.hash.replace(/^#/, '');
      if (hashStr.includes('=')) {
        const hashParams = new URLSearchParams(hashStr);
        requestedKey = hashParams.get('dish') || hashParams.get('id');
      } else if (hashStr) {
        requestedKey = hashStr;
      }
    }

    if (requestedKey) {
      requestedKey = normalizeKey(requestedKey);
    }

    let dish = null;

    // 1. Try match by URL parameter
    if (requestedKey && dishesDatabase[requestedKey]) {
      dish = dishesDatabase[requestedKey];
    }

    // 2. Try match from sessionStorage or localStorage
    let stored = null;
    try {
      const storedStr = sessionStorage.getItem('sg_selected_dish') || localStorage.getItem('sg_selected_dish');
      if (storedStr) {
        stored = JSON.parse(storedStr);
      }
    } catch (e) {}

    if (!dish && stored) {
      const storedKey = normalizeKey(stored.id || stored.name);
      if (dishesDatabase[storedKey]) {
        dish = dishesDatabase[storedKey];
      } else if (stored.img || stored.name) {
        dish = {
          id: storedKey || 'custom-dish',
          name: stored.name || 'Classic Chicken Saj Shawarma',
          price: stored.price || '₹14.50',
          numPrice: parseFloat(String(stored.price || '14.50').replace(/[^0-9.]/g, '')) || 14.50,
          img: stored.img || 'assets/images/food/classic-chicken-saj-shawarma.jpg',
          bannerImg: stored.bannerImg || stored.img || 'assets/images/banners/banner-chicken-saj-shawarma.jpg',
          fallbackImg: 'assets/images/food/chicken-shawarma.svg',
          dietary: [{ label: '100% Halal', cls: 'badge-halal' }],
          spiceChilis: 2,
          spiceLabel: 'Mild Spice',
          desc: stored.desc || 'Freshly handcrafted with authentic Middle Eastern spices and premium ingredients.',
          ingredients: ['Authentic Levant Spices', 'Whipped Toum & Herbs', 'Fresh Hearth Bread'],
          sides: [{ val: 'standard', text: 'House Standard Side' }],
          bread: 'Fresh Flatbread'
        };
      }
    }

    // 3. Fallback default: Classic Chicken Saj Shawarma
    if (!dish) {
      dish = dishesDatabase['classic-chicken-saj-shawarma'];
    }

    // If stored dish has an explicit image matching menu.html, ensure it is preserved!
    if (stored && stored.img && (!dish.img || stored.id === dish.id || stored.name === dish.name || stored.id === requestedKey)) {
      dish.img = stored.img;
    }

    // Populate Page Elements
    renderDish(dish);
  }

  function renderDish(dish) {
    // Page Title
    document.title = `${dish.name} | Shawarma & Middle Eastern Grill`;

    // Banner Elements with related background image
    const pageBanner = document.getElementById('dishPageBanner') || document.querySelector('.page-banner-dish');
    if (pageBanner) {
      const bannerBg = dish.bannerImg || dish.img || 'assets/images/banners/banner-chicken-saj-shawarma.jpg';
      pageBanner.style.backgroundImage = `url('${bannerBg}')`;
      pageBanner.style.backgroundPosition = 'center center';
      pageBanner.style.backgroundSize = 'cover';
      pageBanner.style.backgroundRepeat = 'no-repeat';
    }

    const bannerTitle = document.getElementById('bannerDishTitle');
    if (bannerTitle) bannerTitle.textContent = dish.name;

    const bannerDesc = document.getElementById('bannerDishDesc');
    if (bannerDesc) bannerDesc.textContent = dish.desc;

    const breadcrumbName = document.getElementById('breadcrumbDishName');
    if (breadcrumbName) breadcrumbName.textContent = dish.name;

    // Main Dish Image - THIS IS THE CRUCIAL REQUIREMENT
    const mainImg = document.getElementById('dishMainImg');
    if (mainImg) {
      mainImg.src = dish.img;
      mainImg.alt = dish.name;
      if (dish.fallbackImg) {
        mainImg.onerror = function () {
          this.onerror = null;
          this.src = dish.fallbackImg;
        };
      }
    }

    // Main Dish Title
    const mainTitle = document.getElementById('dishMainTitle');
    if (mainTitle) mainTitle.textContent = dish.name;

    // Main Dish Price
    const mainPrice = document.getElementById('dishMainPrice');
    if (mainPrice) mainPrice.textContent = dish.price;

    // Main Dish Description
    const mainDesc = document.getElementById('dishMainDesc');
    if (mainDesc) mainDesc.textContent = dish.desc;

    // Dietary Badges
    const badgesContainer = document.getElementById('dishBadgesContainer');
    if (badgesContainer && dish.dietary) {
      badgesContainer.innerHTML = dish.dietary
        .map(b => `<span class="badge-dietary ${b.cls}">${b.label}</span>`)
        .join(' ');
    }

    // Spice Meter
    const spiceMeter = document.getElementById('dishSpiceMeter');
    const spiceLabel = document.getElementById('dishSpiceLabel');
    if (spiceMeter && dish.spiceChilis !== undefined) {
      const chilisHtml = [1, 2, 3, 4, 5]
        .map(i => `<span class="spice-chili ${i <= dish.spiceChilis ? 'active' : ''}">🌶️</span>`)
        .join('');
      const meterEl = spiceMeter.querySelector('.spice-meter');
      if (meterEl) {
        meterEl.innerHTML = chilisHtml;
        meterEl.setAttribute('title', `${dish.spiceLabel} (${dish.spiceChilis} out of 5)`);
      }
      if (spiceLabel) {
        spiceLabel.textContent = `(${dish.spiceLabel})`;
      }
    }

    // Key Ingredients
    const ingredientsContainer = document.getElementById('dishKeyIngredients');
    if (ingredientsContainer && dish.ingredients) {
      ingredientsContainer.innerHTML = dish.ingredients
        .map(ing => `<span class="badge bg-surface-alt text-main border border-color px-3 py-2">${ing}</span>`)
        .join(' ');
    }

    // Custom Order Form
    const customForm = document.getElementById('dishCustomForm');
    if (customForm) {
      // Set submit handler to add this exact dish to cart
      customForm.onsubmit = function (e) {
        e.preventDefault();
        const qtyInput = customForm.querySelector('input[type="number"]');
        const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
        const sideSelect = document.getElementById('sideChoice');
        const breadSelect = document.getElementById('breadChoice');
        const sideText = sideSelect ? sideSelect.options[sideSelect.selectedIndex]?.text : '';
        const breadText = breadSelect ? breadSelect.options[breadSelect.selectedIndex]?.text : '';

        const customOpts = [sideText, breadText].filter(Boolean).join('; ');

        if (window.CartEngine && typeof window.CartEngine.addItem === 'function') {
          window.CartEngine.addItem({
            id: dish.id,
            name: dish.name,
            price: dish.numPrice,
            img: dish.img,
            quantity: qty,
            options: customOpts
          });
        } else if (typeof window.addToCart === 'function') {
          window.addToCart({
            id: dish.id,
            name: dish.name,
            price: dish.numPrice,
            img: dish.img,
            quantity: qty,
            options: customOpts
          });
        } else {
          // Fallback direct storage & offcanvas
          let cart = [];
          try {
            cart = JSON.parse(localStorage.getItem('sg_cart') || '[]');
          } catch (err) {}
          cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.numPrice,
            img: dish.img,
            quantity: qty,
            options: customOpts
          });
          localStorage.setItem('sg_cart', JSON.stringify(cart));
          alert(`Added ${qty}x ${dish.name} to cart!`);
        }
      };
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDishDetails);
  } else {
    initDishDetails();
  }
})();

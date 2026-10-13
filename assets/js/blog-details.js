/**
 * Shawarma & Middle Eastern Grill - Blog Details Engine
 * Dynamically renders the selected article, mapping title, content, author,
 * and the exact matching image from its blog card with 16:9 aspect ratio cropping.
 */

(function () {
  'use strict';

  const articlesData = {
    'art-of-slow-roasted-shawarma': {
      id: 'art-of-slow-roasted-shawarma',
      title: 'The Art of Slow-Roasted Shawarma: Secrets from the Vertical Spit',
      shortTitle: 'Slow-Roasted Shawarma Secrets',
      category: 'Shawarma Craft',
      badgeClass: 'badge-halal',
      readTime: '6 Min Read',
      date: 'October 12, 2026',
      author: 'Chef Tariq Al-Mansoor',
      authorBadge: 'assets/images/blog/author-tariq-badge.svg',
      authorBioImg: 'assets/images/blog/author-tariq.svg',
      authorBio: 'Chef Tariq is the co-founder and master pitmaster at Shawarma & Middle Eastern Grill, dedicated to preserving 200-year-old Levant vertical spit and charcoal roasting traditions.',
      image: 'assets/images/blog/blog-featured-rotisserie.jpg',
      snippet: 'Step inside our 5 a.m. preparation ritual: how we alternate hand-trimmed chicken thigh and lamb flank on the spit, why a 12-hour sumac-and-citrus marinade tenderises without over-acidifying, and how we dial charcoal temperature.',
      bodyHtml: `
        <p class="lead">What elevates street-food shawarma into a dining experience fit for royalty? While slow vertical roasting and high-temperature searing are critical, the true soul of Levant shawarma begins at 5 a.m. with the preparation ritual, meat stacking geometry, and heat management.</p>

        <p class="text-muted">In our hearth kitchen, the rotisserie is not simply a piece of cooking equipment—it is a vertical balance of radiant heat, fat basting, and gravity. Here are the core pillars behind our signature spit craft:</p>

        <h3 class="font-heading mt-4 mb-2">1. The 5 A.M. Spit Assembly Ritual</h3>
        <p class="text-muted">Every morning starts with deboning whole chicken thighs and slicing grain-fed lamb flank into uniform sheets. We never use minced meat fillers or pre-frozen cones. Each layer is hand-draped over the stainless-steel skewer, pressing firmly to eliminate internal air pockets that cause uneven heat distribution.</p>

        <h3 class="font-heading mt-4 mb-2">2. The 12-Hour Citrus &amp; Sumac Marinade</h3>
        <p class="text-muted">Acidity is double-edged: too much lemon juice breaks down meat fibres into mush, while too little leaves the interior bland. We blend wild sour sumac, Seville orange zest, garlic toum base, freshly cracked green cardamom, and cold-pressed Lebanese olive oil. The mixture coats every crevice 12 hours before stacking, allowing aromatic essential oils to penetrate deep into the protein.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“A shawarma spit is not merely cooked meat; it is a living thermal sculpture where rendered fat, fruit wood smoke, and wild spices continuously baste every single layer.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Tariq Al-Mansoor</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. Dual-Zone Heat: The 280°C Sear to 180°C Render</h3>
        <p class="text-muted">We dial charcoal hearth temperature between 280°C for the initial high-intensity crust formation and 180°C for the continuous slow render. This dual-zone thermal control seals in the natural moisture while developing an irresistible caramelized mahogany crust on the outer perimeter.</p>

        <h3 class="font-heading mt-4 mb-2">4. The 45-Degree Shaving Technique</h3>
        <p class="text-muted">Carving requires an ultra-sharp Damascus steel blade held at a strict 45-degree angle. By shaving paper-thin ribbons instead of thick chunks, every slice presents maximum surface area of crispy caramelized exterior and succulent, juicy interior.</p>
      `,
      commentsCount: 3,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Omar F. <small class="text-muted fs-6 font-normal">&bull; Oct 12, 2026</small></h5>
            <p class="text-muted small mb-0">The explanation of the 45-degree carving angle blew my mind! You can truly taste the difference in texture and juiciness.</p>
          </div>
        </div>
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Nadia M. <small class="text-muted fs-6 font-normal">&bull; Oct 13, 2026</small></h5>
            <p class="text-muted small mb-0">Best shawarma in the city! Love seeing the behind-the-scenes craft that goes into stacking the vertical spit every morning.</p>
          </div>
        </div>
      `
    },

    'mastering-authentic-levant-shawarma': {
      id: 'mastering-authentic-levant-shawarma',
      title: 'Mastering Authentic Levant Shawarma: From Stacking to Ribbon Carving',
      shortTitle: 'Mastering Levant Shawarma',
      category: 'Shawarma Prep',
      badgeClass: 'badge-halal',
      readTime: '5 Min Read',
      date: 'October 10, 2026',
      author: 'Chef Tariq Al-Mansoor',
      authorBadge: 'assets/images/blog/author-tariq-badge.svg',
      authorBioImg: 'assets/images/blog/author-tariq.svg',
      authorBio: 'Chef Tariq is the co-founder and master pitmaster at Shawarma & Middle Eastern Grill, dedicated to preserving 200-year-old Levant vertical spit and charcoal roasting traditions.',
      image: 'assets/images/blog/blog-shawarma-prep.jpg',
      snippet: 'Learn how meat choice (bone-in vs. boneless thigh), marinade layering order, and spit-to-charcoal distance all determine whether the crust caramelises without drying the centre.',
      bodyHtml: `
        <p class="lead">Carving succulent, caramelized ribbons from a roaring shawarma spit is the crowning hallmark of Levant culinary craftsmanship. From the initial knife cuts to the final slice onto warm saj, precision is everything.</p>

        <p class="text-muted">Whether operating a commercial vertical spit or experimenting with a home rotisserie setup, these time-tested guidelines ensure maximum succulence and deep spice caramelization:</p>

        <h3 class="font-heading mt-4 mb-2">1. Meat Selection: Bone-In vs. Boneless Thigh</h3>
        <p class="text-muted">Boneless skinless breast meat dries out within 20 minutes under vertical heat. For authentic Levant chicken shawarma, we exclusively utilize trimmed chicken thighs interleaved with thinly cut lamb fat caps. The melting fat trickles down the cone, acting as an automatic self-basting system.</p>

        <h3 class="font-heading mt-4 mb-2">2. Stacking Geometry: The Inverted Cone</h3>
        <p class="text-muted">Stacking begins with wider base layers, tapering slightly inward before crowning the top with a dense shoulder. This inverted cone shape ensures that fat rendering from the top coats every tier below rather than dripping straight into the tray.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“The knife must glide against the rotating spit with zero downward pressure—letting razor-sharp steel meet fire-crisped crust.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Tariq Al-Mansoor</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. Regulating Spit-to-Charcoal Distance</h3>
        <p class="text-muted">Begin with the spit 8 inches away from glowing lump embers to allow the core to warm through gently. Once the core reaches 65°C, move the spit to 4 inches to trigger rapid Maillard browning across the exterior ribbon surface.</p>

        <h3 class="font-heading mt-4 mb-2">4. Catching the Pan Drippings</h3>
        <p class="text-muted">Never discard the pan drippings! We rest freshly baked saj bread directly beneath the carving zone for 3 seconds before wrapping. The bread absorbs hot spiced lamb and chicken juices, creating unforgettable aroma and depth.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Karim B. <small class="text-muted fs-6 font-normal">&bull; Oct 11, 2026</small></h5>
            <p class="text-muted small mb-0">The tip about the inverted cone stacking was a revelation. It makes total sense why the bottom layers stay so juicy!</p>
          </div>
        </div>
      `
    },

    '7-essential-middle-eastern-spices': {
      id: '7-essential-middle-eastern-spices',
      title: 'The 7 Essential Middle Eastern Spices: Cardamom, Sumac & Beyond',
      shortTitle: '7 Essential Middle Eastern Spices',
      category: 'Spices & Blends',
      badgeClass: 'badge-gold',
      readTime: '6 Min Read',
      date: 'October 04, 2026',
      author: 'Chef Layla Haddad',
      authorBadge: 'assets/images/team/chef-layla-home.svg',
      authorBioImg: 'assets/images/team/chef-layla.svg',
      authorBio: 'Chef Layla is our head culinary director, specializing in ancient Levant spice blending, pastry craft, and traditional wood-fired saj bread baking.',
      image: 'assets/images/blog/blog-spices-guide.jpg',
      snippet: 'Chef Layla breaks down all seven spices — sumac, cardamom, cumin, allspice, turmeric, cinnamon, and black pepper — covering origins, when to add each during cooking, and toasting secrets.',
      bodyHtml: `
        <p class="lead">What elevates street-food shawarma into a dining experience fit for royalty? While slow vertical roasting and high-temperature searing are critical, the true soul of Levant shawarma lies within its spice marinade blend.</p>

        <p class="text-muted">In our kitchen, we toast and grind whole spices every single morning. Here are the seven non-negotiable spices that define our signature chicken and beef shawarma spit marinades:</p>

        <h3 class="font-heading mt-4 mb-2">1. Green Cardamom Pods (The Floral Note)</h3>
        <p class="text-muted">Cardamom provides that unmistakable warm, sweet, citrus-floral aroma characteristic of Syrian and Lebanese shawarmas. We crush whole green pods to release volatile oils just before marinating.</p>

        <h3 class="font-heading mt-4 mb-2">2. Wild Sumac Berries (The Tart Tang)</h3>
        <p class="text-muted">Coarsely ground dried sumac berries deliver a vibrant crimson color and a tart, astringent lemon-like acidity that cuts through rich roasted meat juices.</p>

        <h3 class="font-heading mt-4 mb-2">3. Roasted Cumin &amp; Coriander Seeds</h3>
        <p class="text-muted">Lightly dry-roasted in copper pans, earthy cumin and citrusy coriander form the savory backbone of the marinade, anchoring the meat with deep warmth.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“Spices in Middle Eastern cooking are not meant to heat the mouth; they are meant to awaken the senses and honor the guest.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Layla Haddad</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">4. Allspice, Cinnamon Bark &amp; Nutmeg</h3>
        <p class="text-muted">A subtle touch of sweet clove-cinnamon warmth rounds out the savory profile, ensuring every slice of beef or chicken is aromatic down to the center.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Hassan K. <small class="text-muted fs-6 font-normal">&bull; Oct 05, 2026</small></h5>
            <p class="text-muted small mb-0">Fascinating read! I always wondered what gave your chicken shawarma that incredible fragrance. Keep the articles coming!</p>
          </div>
        </div>
        <div class="d-flex gap-3 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Emily R. <small class="text-muted fs-6 font-normal">&bull; Oct 06, 2026</small></h5>
            <p class="text-muted small mb-0">The sumac and cardamom combo is pure magic. Tried your catering last week for our office party—everyone loved it!</p>
          </div>
        </div>
      `
    },

    'secret-to-paper-thin-saj-bread': {
      id: 'secret-to-paper-thin-saj-bread',
      title: 'The Secret to Paper-Thin Saj Bread: Blistered on the Domed Griddle',
      shortTitle: 'Paper-Thin Saj Bread Secrets',
      category: 'Saj & Bakery',
      badgeClass: 'badge-vegan',
      readTime: '4 Min Read',
      date: 'September 25, 2026',
      author: 'Chef Layla Haddad',
      authorBadge: 'assets/images/team/chef-layla-home.svg',
      authorBioImg: 'assets/images/team/chef-layla.svg',
      authorBio: 'Chef Layla is our head culinary director, specializing in ancient Levant spice blending, pastry craft, and traditional wood-fired saj bread baking.',
      image: 'assets/images/blog/blog-saj-bread.jpg',
      snippet: 'Discover why an 80% hydration dough, an overnight cold ferment, and a 300°C domed griddle are the three non-negotiables for authentic saj.',
      bodyHtml: `
        <p class="lead">Nothing compares to bread baked minutes before your meal. Stretched paper-thin over spinning forearms and kissed by blistering heat on an inverted convex steel dome, saj bread is the edible envelope of Middle Eastern cuisine.</p>

        <p class="text-muted">Unlike dense pita pockets, saj is whisper-light, stretchy, and dotted with golden leopard-spot blisters. Here is how our bakery creates authentic saj daily:</p>

        <h3 class="font-heading mt-4 mb-2">1. The 80% High-Hydration Fermented Dough</h3>
        <p class="text-muted">High water content is essential. At 80% hydration with hard winter wheat flour and a touch of sea salt, the gluten develops extraordinary extensibility during a 16-hour cold retard. This allows the dough ball to stretch outward without snapping back.</p>

        <h3 class="font-heading mt-4 mb-2">2. The Forearm Toss &amp; Pillow Drape</h3>
        <p class="text-muted">Bakers don't use rolling pins. The dough is thrown back and forth across rotating forearms until it expands into a translucent sheet. It is then transferred onto a round fabric-covered cushion (the kára) to maintain its round geometry.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“A great saj bread must be translucent enough to see light through, yet elastic enough to cradle hot dripping roasted meats without tearing.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Layla Haddad</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. The 300°C Dome Sear in 45 Seconds</h3>
        <p class="text-muted">The cushion slaps the stretched sheet directly onto the blazing 300°C convex domed griddle. In 40 to 45 seconds, steam bubbles puff up, creating delicate crisp spots while retaining a tender, pliable core.</p>

        <h3 class="font-heading mt-4 mb-2">4. Storing in Linen to Keep It Supple</h3>
        <p class="text-muted">As soon as the bread leaves the dome, it is folded into heavy damp linen towels. The trapped steam softens the exterior, ensuring it rolls into airtight wraps without cracking.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Samir A. <small class="text-muted fs-6 font-normal">&bull; Sep 27, 2026</small></h5>
            <p class="text-muted small mb-0">Watching the baker stretch saj on the pillow is pure artistry. The bread is so fresh and delicious!</p>
          </div>
        </div>
      `
    },

    'oak-charcoal-grilling-mastery': {
      id: 'oak-charcoal-grilling-mastery',
      title: 'Oak Charcoal Grilling: Ember Control & Skewer Rotation Mastery',
      shortTitle: 'Oak Charcoal Grilling Mastery',
      category: 'Grilling Tips',
      badgeClass: 'badge-spicy',
      readTime: '5 Min Read',
      date: 'September 18, 2026',
      author: 'Chef Tariq Al-Mansoor',
      authorBadge: 'assets/images/blog/author-tariq-badge.svg',
      authorBioImg: 'assets/images/blog/author-tariq.svg',
      authorBio: 'Chef Tariq is the co-founder and master pitmaster at Shawarma & Middle Eastern Grill, dedicated to preserving 200-year-old Levant vertical spit and charcoal roasting traditions.',
      image: 'assets/images/blog/blog-grilling-tips.jpg',
      snippet: 'Chef Tariq explains how to build a two-zone fire using lump oak charcoal — a 500°C direct zone for the initial sear and a 200°C indirect zone to finish without burning.',
      bodyHtml: `
        <p class="lead">Gas grills cook with convective hot air; lump oak charcoal cooks with infrared radiation and aromatic wood smoke. Mastering glowing embers is what separates dry skewered meat from tender, flame-kissed kebabs.</p>

        <p class="text-muted">On our open mangal charcoal trough, we avoid briquettes with chemical binders. We burn 100% natural kiln-dried white oak. Here is our master guide to ember management:</p>

        <h3 class="font-heading mt-4 mb-2">1. Building the Two-Zone Mangal Hearth</h3>
        <p class="text-muted">We mound glowing white oak coals 4 inches deep on the left side of the mangal trough (creating a 500°C intense infrared sear zone) and bank a gentle 1.5-inch single-layer bed on the right side (maintaining a 200°C finishing zone).</p>

        <h3 class="font-heading mt-4 mb-2">2. The Skewer Rotation Cadence</h3>
        <p class="text-muted">Never leave a skewer unattended on direct heat. We follow a strict 30-second rotation rhythm for kofta and 45 seconds for chicken tawook. Continuous rotation prevents hot fat from accumulating on the bottom and dripping into the embers, preventing bitter flare-ups.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“Listen to the fat sizzling against the coals—that rhythm tells you whether to fan the embers or shift the skewer to gentle heat.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Tariq Al-Mansoor</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. Rest Over Warm Pita</h3>
        <p class="text-muted">When skewers come off the coals, they rest directly between two sheets of warm saj or pita for 3 minutes. The bread acts as an insulator and captures savory rendered fat and meat juices for the table.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">David L. <small class="text-muted fs-6 font-normal">&bull; Sep 20, 2026</small></h5>
            <p class="text-muted small mb-0">Applying the two-zone mangal technique changed my backyard grilling forever. The skewers stayed juicy throughout!</p>
          </div>
        </div>
      `
    },

    'catering-ideas-for-memorable-feasts': {
      id: 'catering-ideas-for-memorable-feasts',
      title: 'Catering Ideas for Memorable Feasts: Platters, Portions & Live Stations',
      shortTitle: 'Catering Ideas for Memorable Feasts',
      category: 'Catering Ideas',
      badgeClass: 'badge-halal',
      readTime: '7 Min Read',
      date: 'September 08, 2026',
      author: 'Youssef El-Sayed',
      authorBadge: 'assets/images/team/manager-youssef-home.svg',
      authorBioImg: 'assets/images/team/manager-youssef.svg',
      authorBio: 'Youssef is our General Manager and head banquet coordinator with over 15 years orchestrating wedding banquets, corporate summits, and private hospitality celebrations.',
      image: 'assets/images/blog/blog-catering-ideas.jpg',
      snippet: 'Youssef shares the per-head portion formula (250 g protein + four sides for a full buffet), how to arrange meze platters for visual impact, and the live station checklist.',
      bodyHtml: `
        <p class="lead">Planning an unforgettable celebration begins with generous hospitality. Middle Eastern catering is built on abundance, vibrant colors, and theatrical live cooking that leaves every guest feeling honored.</p>

        <p class="text-muted">Whether hosting an intimate family banquet for 30 or a corporate gala for 300, getting the portion math, setup flow, and presentation right makes all the difference:</p>

        <h3 class="font-heading mt-4 mb-2">1. The Golden Portion Formula</h3>
        <p class="text-muted">For a full dinner buffet, calculate 250 grams of cooked mixed protein per person (split between carved shawarma, charcoal shish tawook, and lamb kebab), accompanied by 180 grams of saffron rice and four 60-gram portions of chilled meze (hummus, mutabbal, fattoush, and tabbouleh).</p>

        <h3 class="font-heading mt-4 mb-2">2. Color Architecture on Meze Platters</h3>
        <p class="text-muted">Guests eat with their eyes first. We alternate silky ivory chickpea hummus with ruby-red pomegranate sumac salads, emerald tabbouleh, and golden pickled peppers to create eye-catching contrast across every station.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“True Middle Eastern generosity means that when guests leave the table, the platters still look bountiful and welcoming.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Youssef El-Sayed</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. The Live Vertical Spit &amp; Saj Station</h3>
        <p class="text-muted">Nothing excites guests like an interactive live station where our chefs carve smoking chicken and beef directly onto blistered saj bread fresh off the dome. It eliminates line congestion while adding authentic culinary performance.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Layla S. <small class="text-muted fs-6 font-normal">&bull; Sep 10, 2026</small></h5>
            <p class="text-muted small mb-0">We booked Shawarma & Grill for our annual corporate banquet, and our guests are still raving about the live carving station!</p>
          </div>
        </div>
      `
    },

    'kitchen-chronicles-open-charcoal-hearth': {
      id: 'kitchen-chronicles-open-charcoal-hearth',
      title: 'Kitchen Chronicles: Introducing Our Open Charcoal Hearth & New Specialties',
      shortTitle: 'Kitchen Chronicles: Open Hearth Expansion',
      category: 'Restaurant News',
      badgeClass: 'badge-gold',
      readTime: '3 Min Read',
      date: 'August 28, 2026',
      author: 'Hospitality Management',
      authorBadge: 'assets/images/team/manager-youssef-home.svg',
      authorBioImg: 'assets/images/team/manager-youssef.svg',
      authorBio: 'The Hospitality & Culinary Operations Team at Shawarma & Middle Eastern Grill, shaping kitchen experiences and seasonal menu innovations.',
      image: 'assets/images/blog/blog-restaurant-news.jpg',
      snippet: 'Our newly expanded open charcoal hearth seats 14 counter guests directly facing the fire — the best seat in the house for watching live shawarma carving, saj stretching, and kofta grilling.',
      bodyHtml: `
        <p class="lead">We are thrilled to unveil our latest restaurant expansion: a custom-built 14-seat open charcoal hearth counter, offering guests front-row seats to ancient Levant fire-craft and live hospitality.</p>

        <p class="text-muted">Designed in collaboration with artisan blacksmiths and stone masons, our new hearth brings diners right into the heat and aroma of our open kitchen:</p>

        <h3 class="font-heading mt-4 mb-2">1. Front-Row Counter Seating</h3>
        <p class="text-muted">Guests at the 14-seat counter watch every step up close: whole chickens spinning on the glowing rotisserie, fresh saj dough floating over the baker's forearms, and skewers sizzling over white oak embers.</p>

        <h3 class="font-heading mt-4 mb-2">2. Hand-Hammered Copper Domes &amp; Basalt Stone</h3>
        <p class="text-muted">The station features traditional hand-beaten copper saj domes imported from Beirut and natural basalt stone grill beds that retain searing heat without hotspots.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“Fire connects diners to the oldest form of community: gathering around glowing embers while fragrant food cooks in plain sight.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Hospitality Management</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. Autumn Specialties Preview</h3>
        <p class="text-muted">To celebrate the expansion, our chefs are introducing three limited-edition seasonal hearth dishes: Pomegranate-Molasses Glazed Lamb Ribs, Slow-Roasted Eggplant Mutabbal with Smoked Garlic Toum, and Cardamom Pistachio Kunafa baked over embers.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Mark T. <small class="text-muted fs-6 font-normal">&bull; Aug 30, 2026</small></h5>
            <p class="text-muted small mb-0">Sat at the new counter last Saturday—what an electric atmosphere! The pomegranate lamb ribs were out of this world.</p>
          </div>
        </div>
      `
    },

    'perfect-mixed-grill-platter': {
      id: 'perfect-mixed-grill-platter',
      title: 'How We Build the Perfect Mixed Grill Platter: Sequence, Spacing & Smoke',
      shortTitle: 'Building the Perfect Mixed Grill Platter',
      category: 'Grilling Tips',
      badgeClass: 'badge-spicy',
      readTime: '5 Min Read',
      date: 'October 11, 2026',
      author: 'Chef Tariq Al-Mansoor',
      authorBadge: 'assets/images/blog/author-tariq-badge.svg',
      authorBioImg: 'assets/images/blog/author-tariq.svg',
      authorBio: 'Chef Tariq is the co-founder and master pitmaster at Shawarma & Middle Eastern Grill, dedicated to preserving 200-year-old Levant vertical spit and charcoal roasting traditions.',
      image: 'assets/images/blog/blog-mixed-grill-platter.jpg',
      snippet: 'A mixed grill is not just a collection of skewers — it’s a sequence. Chef Tariq explains why lamb kofta goes on first, how to space skewers to prevent steam pockets, and fruit-wood finishing.',
      bodyHtml: `
        <p class="lead">A true Levant mixed grill platter is an orchestrated symphony of temperatures, cooking times, and textures. When executed correctly, every protein finishes juicy at the exact same moment.</p>

        <p class="text-muted">Too often, mixed grills suffer from either cold chicken or overdone, dried-out lamb. Here is our kitchen's strict timing and spacing protocol for platter harmony:</p>

        <h3 class="font-heading mt-4 mb-2">1. The Grilling Sequence by Protein Density</h3>
        <p class="text-muted">Lamb kofta skewers require 10 minutes total with frequent turns and go onto the medium-hot coals first. Bone-in lamb chops follow at the 3-minute mark. Chicken shish tawook goes onto direct sear at 5 minutes, and freshly carved shawarma is folded in at the very end.</p>

        <h3 class="font-heading mt-4 mb-2">2. Airflow vs. Steam Pockets</h3>
        <p class="text-muted">Crowding skewers edge-to-edge traps moisture, causing the meat to steam rather than sear. We maintain a minimum 1-inch gap between skewers on the mangal grate, allowing radiant charcoal heat and convection currents to caramelize the spice crust.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“If meat steams on the grill, the pitmaster has failed. Every skewer needs air and direct radiant heat to develop crisp edges.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Tariq Al-Mansoor</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. The Saffron Rice &amp; Biwaz Foundation</h3>
        <p class="text-muted">We assemble the platter over a steaming bed of fragrant cardamom saffron rice, flanked by sumac-rubbed parsley onions (biwaz), grilled plum tomatoes, and blistered hot peppers to keep the meats elevated and warm.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Fadi R. <small class="text-muted fs-6 font-normal">&bull; Oct 12, 2026</small></h5>
            <p class="text-muted small mb-0">The timing sequence breakdown is brilliant! No more overcooked chicken while waiting for the lamb to finish.</p>
          </div>
        </div>
      `
    },

    'kofta-vs-shish-kebab-traditions': {
      id: 'kofta-vs-shish-kebab-traditions',
      title: 'Kofta vs. Shish: Understanding the Two Great Kebab Traditions',
      shortTitle: 'Kofta vs. Shish Traditions',
      category: 'Recipes & Technique',
      badgeClass: 'badge-halal',
      readTime: '4 Min Read',
      date: 'October 07, 2026',
      author: 'Chef Layla Haddad',
      authorBadge: 'assets/images/team/chef-layla-home.svg',
      authorBioImg: 'assets/images/team/chef-layla.svg',
      authorBio: 'Chef Layla is our head culinary director, specializing in ancient Levant spice blending, pastry craft, and traditional wood-fired saj bread baking.',
      image: 'assets/images/blog/blog-kofta-vs-shish.jpg',
      snippet: 'Both are skewered, both are charcoal-grilled — but the techniques are worlds apart. Kofta is a minced-meat mix shaped onto flat blades; shish is cubed marinated meat on round skewers.',
      bodyHtml: `
        <p class="lead">While both belong to the rich pantheon of Middle Eastern barbecue, kofta and shish demand vastly different butcher techniques, seasoning methodologies, and skewer physics.</p>

        <p class="text-muted">Confusing the two methods leads to crumbly kofta or tough shish. Here is our master comparison between these two culinary icons:</p>

        <h3 class="font-heading mt-4 mb-2">1. Kofta: Emulsion, Hand Work &amp; Flat Sword Skewers</h3>
        <p class="text-muted">Kofta is made from finely double-minced lamb and beef with an 80/20 meat-to-fat ratio, kneaded with parsley, grated onion, sumac, and allspice until the protein fibers form a sticky emulsion. It must be molded onto wide, flat stainless-steel sword skewers to prevent slipping into the coals.</p>

        <h3 class="font-heading mt-4 mb-2">2. Shish Tawook: Whole Cubed Cuts &amp; Acid Marinade</h3>
        <p class="text-muted">Shish consists of whole cubes of chicken breast or tender lamb leg, marinated for 8 hours in yogurt, garlic toum, lemon juice, and Aleppo pepper. The lactic acid in yogurt tenderizes without breaking down muscle integrity. It is threaded onto slim round skewers with spacing for heat circulation.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“Kofta is a test of emulsion and hand technique; shish is a test of marinades and heat patience.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Layla Haddad</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. Pairing Sauces and Condiments</h3>
        <p class="text-muted">Kofta pairs naturally with bright sumac onions and silky tahini sauce, while shish tawook demands intense garlic toum, wild pickled cucumbers, and spicy harissa dip.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Yasmin H. <small class="text-muted fs-6 font-normal">&bull; Oct 08, 2026</small></h5>
            <p class="text-muted small mb-0">I finally understand why flat sword skewers are necessary for kofta! Great culinary insight.</p>
          </div>
        </div>
      `
    },

    'prime-beef-lamb-saj-wraps': {
      id: 'prime-beef-lamb-saj-wraps',
      title: 'Prime Beef & Lamb Saj Wraps: Folding Technique and Filling Ratios',
      shortTitle: 'Prime Beef & Lamb Saj Wraps',
      category: 'Saj & Bakery',
      badgeClass: 'badge-halal',
      readTime: '4 Min Read',
      date: 'October 02, 2026',
      author: 'Chef Layla Haddad',
      authorBadge: 'assets/images/team/chef-layla-home.svg',
      authorBioImg: 'assets/images/team/chef-layla.svg',
      authorBio: 'Chef Layla is our head culinary director, specializing in ancient Levant spice blending, pastry craft, and traditional wood-fired saj bread baking.',
      image: 'assets/images/blog/blog-saj-wrap-folding.jpg',
      snippet: 'The ideal saj wrap holds its shape from first bite to last without the bread splitting or the filling escaping. Chef Layla covers the 60:40 meat-to-condiment ratio and the envelope fold.',
      bodyHtml: `
        <p class="lead">A great shawarma wrap is architectural. The thinnest saj bread must securely enclose piping hot sliced meat, pickled wild cucumbers, and rich garlic sauce without sogginess or tears.</p>

        <p class="text-muted">Mastering the geometry of folding and balancing condiments ensures that every single bite delivers the harmonious ratio of crunch, garlic warmth, and roasted meat:</p>

        <h3 class="font-heading mt-4 mb-2">1. The 60:40 Protein-to-Condiment Ratio</h3>
        <p class="text-muted">Overstuffing with wet condiments turns thin saj mushy. We maintain a strict ratio of 60% hot roasted meat to 40% condiments (whipped toum, pickled turnip ribbons, and wild cucumber spears).</p>

        <h3 class="font-heading mt-4 mb-2">2. The Toum Barrier Layer</h3>
        <p class="text-muted">Always spread garlic toum directly across the inner bread surface first. Because toum is an emulsion of oil and garlic, it creates a hydrophobic moisture barrier that stops meat juices from softening the bread before serving.</p>

        <blockquote class="p-4 my-4 bg-surface-alt border-start border-4 border-warning rounded-3 italic">
          <p class="mb-0 font-heading fs-5 text-main">“A shawarma wrap should be compact and tight like a cigar—never bulging, never leaking, and crisp from the first bite to the last.”</p>
          <footer class="blockquote-footer mt-2 text-gold font-normal">— Chef Layla Haddad</footer>
        </blockquote>

        <h3 class="font-heading mt-4 mb-2">3. The Final Dome Press</h3>
        <p class="text-muted">Once folded in our signature three-point envelope, the assembled wrap returns to the hot convex saj dome for 20 seconds per side under light parchment pressure. The heat crisps the outer layer and heat-seals the seam shut.</p>
      `,
      commentsCount: 2,
      commentsHtml: `
        <div class="d-flex gap-3 mb-4 p-3 bg-surface border border-color rounded-3">
          <div class="fw-bold fs-4 text-spice">💬</div>
          <div>
            <h5 class="mb-1">Tarek N. <small class="text-muted fs-6 font-normal">&bull; Oct 03, 2026</small></h5>
            <p class="text-muted small mb-0">The toum moisture barrier trick is genius! The wrap stays perfectly crisp until the last bite.</p>
          </div>
        </div>
      `
    }
  };

  // Add convenient aliases (numeric indexes and alternate slugs)
  const aliasMap = {
    '1': 'art-of-slow-roasted-shawarma',
    'featured': 'art-of-slow-roasted-shawarma',
    'slow-roasted-shawarma': 'art-of-slow-roasted-shawarma',
    'the-art-of-slow-roasted-shawarma': 'art-of-slow-roasted-shawarma',

    '2': 'mastering-authentic-levant-shawarma',
    'shawarma-prep': 'mastering-authentic-levant-shawarma',

    '3': '7-essential-middle-eastern-spices',
    'spices-guide': '7-essential-middle-eastern-spices',
    'the-7-essential-shawarma-spices': '7-essential-middle-eastern-spices',
    '7-essential-spices': '7-essential-middle-eastern-spices',

    '4': 'secret-to-paper-thin-saj-bread',
    'secret-to-paper-thin-saj-bread': 'secret-to-paper-thin-saj-bread',
    'saj-bread': 'secret-to-paper-thin-saj-bread',

    '5': 'oak-charcoal-grilling-mastery',
    'grilling-tips': 'oak-charcoal-grilling-mastery',

    '6': 'catering-ideas-for-memorable-feasts',
    'catering-ideas': 'catering-ideas-for-memorable-feasts',

    '7': 'kitchen-chronicles-open-charcoal-hearth',
    'restaurant-news': 'kitchen-chronicles-open-charcoal-hearth',

    '8': 'perfect-mixed-grill-platter',
    'mixed-grill-platter': 'perfect-mixed-grill-platter',

    '9': 'kofta-vs-shish-kebab-traditions',
    'kofta-vs-shish': 'kofta-vs-shish-kebab-traditions',

    '10': 'prime-beef-lamb-saj-wraps',
    'saj-wraps': 'prime-beef-lamb-saj-wraps'
  };

  function renderArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    let requestedId = urlParams.get('id') || urlParams.get('article') || urlParams.get('slug');

    if (!requestedId) {
      try {
        requestedId = sessionStorage.getItem('sg_selected_blog_id') || localStorage.getItem('sg_selected_blog_id');
      } catch (e) {}
    }

    if (requestedId) {
      requestedId = requestedId.toLowerCase().trim();
    }

    // Resolve alias if needed
    if (requestedId && aliasMap[requestedId]) {
      requestedId = aliasMap[requestedId];
    }

    // Fallback default
    if (!requestedId || !articlesData[requestedId]) {
      requestedId = 'art-of-slow-roasted-shawarma';
    }

    const article = articlesData[requestedId];
    if (!article) return;

    // Optional override if explicit image passed via query param or storage
    let explicitImage = urlParams.get('img');
    if (!explicitImage) {
      try {
        explicitImage = sessionStorage.getItem('sg_selected_blog_img') || localStorage.getItem('sg_selected_blog_img');
      } catch (e) {}
    }
    const finalImage = explicitImage || article.image;

    // 1. Update Document Title & Meta Description
    document.title = `${article.title} | Spice Journal`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', article.snippet);
    }

    // 2. Update Page Banner
    const bannerCategory = document.getElementById('bannerCategoryBadge');
    if (bannerCategory) {
      bannerCategory.textContent = `🌿 ${article.category}`;
    }

    const bannerTitle = document.getElementById('bannerArticleTitle');
    if (bannerTitle) {
      bannerTitle.textContent = article.title;
    }

    const bannerSnippet = document.getElementById('bannerArticleSnippet');
    if (bannerSnippet) {
      bannerSnippet.textContent = article.snippet;
    }

    const breadcrumbTitle = document.getElementById('breadcrumbArticleTitle');
    if (breadcrumbTitle) {
      breadcrumbTitle.textContent = article.shortTitle || article.title;
    }

    // 3. Update Main Article Header
    const articleBadge = document.getElementById('articleBadge');
    if (articleBadge) {
      articleBadge.textContent = article.category;
      articleBadge.className = `badge-dietary ${article.badgeClass || 'badge-halal'}`;
    }

    const articleTitle = document.getElementById('articleTitle');
    if (articleTitle) {
      articleTitle.textContent = article.title;
    }

    const articleAuthorAvatar = document.getElementById('articleAuthorAvatar');
    if (articleAuthorAvatar) {
      articleAuthorAvatar.src = article.authorBadge;
      articleAuthorAvatar.alt = article.author;
    }

    const articleAuthorName = document.getElementById('articleAuthorName');
    if (articleAuthorName) {
      articleAuthorName.textContent = `Written by ${article.author}`;
    }

    const articleMeta = document.getElementById('articleMeta');
    if (articleMeta) {
      articleMeta.innerHTML = `Published ${article.date} &bull; ${article.readTime}`;
    }

    // 4. Update Article Hero Graphic with matching card image
    const articleHeroImg = document.getElementById('articleHeroImg');
    if (articleHeroImg) {
      articleHeroImg.src = finalImage;
      articleHeroImg.setAttribute('src', finalImage);
      articleHeroImg.alt = article.title;
      articleHeroImg.setAttribute('alt', article.title);
    }

    // 5. Update Article Body Content
    const articleBody = document.getElementById('articleBody');
    if (articleBody && article.bodyHtml) {
      articleBody.innerHTML = article.bodyHtml;
    }

    // 6. Update Author Bio Card
    const authorBioAvatar = document.getElementById('authorBioAvatar');
    if (authorBioAvatar) {
      authorBioAvatar.src = article.authorBioImg;
      authorBioAvatar.alt = article.author;
    }

    const authorBioName = document.getElementById('authorBioName');
    if (authorBioName) {
      authorBioName.textContent = `About ${article.author}`;
    }

    const authorBioDesc = document.getElementById('authorBioDesc');
    if (authorBioDesc) {
      authorBioDesc.textContent = article.authorBio;
    }

    // 7. Update Comments Section
    const commentsCount = document.getElementById('commentsCount');
    if (commentsCount) {
      commentsCount.textContent = `Guest Comments (${article.commentsCount || 2})`;
    }

    const commentsList = document.getElementById('commentsList');
    if (commentsList && article.commentsHtml) {
      commentsList.innerHTML = article.commentsHtml;
    }
  }

  // Expose on window for programmatic rendering or verification
  window.renderBlogArticle = renderArticle;

  // Render immediately if body elements exist
  if (document.getElementById('articleHeroImg') || document.getElementById('articleTitle')) {
    renderArticle();
  }

  // Wire up Sidebar Search Journal on details page to redirect to blog.html with search query
  function initDetailsSearch() {
    const detailsForm = document.getElementById('detailsBlogSearchForm');
    const detailsInput = document.getElementById('detailsBlogSearchInput');
    const detailsBtn = document.getElementById('detailsBlogSearchBtn');

    function performDetailsSearch() {
      const q = detailsInput ? detailsInput.value.trim() : '';
      if (q) {
        window.location.href = `blog.html?search=${encodeURIComponent(q)}`;
      } else {
        window.location.href = 'blog.html';
      }
    }

    if (detailsForm) {
      detailsForm.addEventListener('submit', function (e) {
        e.preventDefault();
        performDetailsSearch();
      });
    }

    if (detailsBtn) {
      detailsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        performDetailsSearch();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDetailsSearch);
  } else {
    initDetailsSearch();
  }

  // Also hook into lifecycle events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderArticle);
  }
  window.addEventListener('load', renderArticle);
  window.addEventListener('pageshow', renderArticle);
})();

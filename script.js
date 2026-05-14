let currentLang = 'ar';

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .why-us-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

const translations = {
    ar: {
        title: 'ذرة سكر - حلويات منزلية فاخرة في دبي',
        navHome: 'الرئيسية',
        navAbout: 'من نحن',
        navProducts: 'التشكيلة',
        navContact: 'تواصل معنا',

        heroTitle: 'حلويات منزلية فاخرة تُحضَّر يومياً بعناية',
        heroText: 'نقدّم لكم تشكيلة مختارة من الحلويات الشرقية الفاخرة، تُحضَّر يومياً بمكونات عالية الجودة ولمسة منزلية راقية تليق بكل مناسبة',
        heroBtn: 'اطلب عبر واتساب',

        aboutTitle: 'من نحن',
        aboutText: 'في ذرة سكر نقدم لكم حلويات منزلية تحضر يوميا بعناية باستخدام مكونات عالية الجودة ووصفات مميزة لنقدم لكم طعما لا ينسى في كل طلب',

        whyTitle: 'لماذا ذرة سكر',
        why1Title: 'جودة مختارة',
        why1Text: 'نعتمد على مكونات طازجة وعالية الجودة لضمان طعم غني وتجربة مميزة في كل قطعة',
        why2Title: 'تحضير يومي',
        why2Text: 'يتم تحضير الطلبات بعناية يومية للحفاظ على الطزاجة وتقديم أفضل مستوى من الجودة',
        why3Title: 'طعم يليق بالمناسبات',
        why3Text: 'وصفات منزلية بنكهة أصيلة ولمسة راقية تجعلها مثالية للضيافة والهدايا والتجمعات',
        why4Title: 'تقديم أنيق',
        why4Text: 'حلويات مناسبة للتقديم الراقي في المناسبات الخاصة والزيارات والهدايا المميزة',

        productsTitle: 'تشكيلة مختارة',
        productViewBtn: 'عرض الخيارات',
        productNote: 'الكمية محدودة - الحجز مسبق',

        ctaTitle: 'اطلب الآن',
        ctaText: 'للطلب أو الاستفسار، تواصل معنا مباشرة عبر واتساب',
        ctaBtn: 'اطلب عبر واتساب',
        deliveryText: 'خدمة توصيل لجميع مناطق الامارات بعناية واهتمام',

        infoTitle: 'معلومات مهمة قبل الطلب',
        infoSubtitle: 'معلومات مختصرة وواضحة لتجربة طلب مريحة ومناسبة لكم',
        allergyTitle: 'معلومات الحساسية',
        allergy1: 'قد تحتوي بعض منتجاتنا على مكونات مثل الحليب والبيض والقمح والمكسرات والسمسم',
        allergy2: 'يتم التحضير في نفس بيئة العمل، لذلك قد يحدث تلامس بين المكونات',
        allergy3: 'يرجى ابلاغنا مسبقا في حال وجود اي حساسية',

        policyTitle: 'سياسة الطلب',
        policy1: 'جميع الطلبات تتم عبر واتساب فقط',
        policy2: 'يتم تاكيد الطلب بعد الاتفاق على التفاصيل',
        policy3: 'بعض المنتجات تحتاج حجز مسبق حسب الكمية',
        policy4: 'التوصيل متوفر لجميع مناطق دولة الامارات',
        policy5: 'رسوم التوصيل يتم توضيحها عند تاكيد الطلب',

        contactTitle: 'تواصل معنا',
        contactInstagram: 'انستغرام',
        contactLocationTitle: 'الموقع',
        contactLocationText: 'دبي - الامارات العربية المتحدة',
        contactWhatsappTitle: 'للطلب عبر واتساب',
        contactWhatsappNote: 'الطلب يتم عبر واتساب فقط',

        footerBrandTitle: 'ذرة سكر',
        footerBrandText: 'حلويات منزلية فاخرة تُحضَّر يومياً بعناية',
        footerHome: 'الرئيسية',
        footerAbout: 'من نحن',
        footerProducts: 'التشكيلة',
        footerContact: 'التواصل',
        footerCopy: '© 2026 ذرة سكر - جميع الحقوق محفوظة',

        popupOptionLabel: 'اختر الخيار',
        popupFlavorLabel: 'اختر النكهات',
        popupQtyLabel: 'الكمية',
        popupExtraLabel: 'خيارات إضافية',
        popupNotesLabel: 'ملاحظات خاصة',
        popupNotesPlaceholder: 'اكتب ملاحظاتك هنا',
        popupTotalLabel: 'الإجمالي',
        popupSendBtn: 'إرسال الطلب',
        popupCloseBtn: 'إغلاق',

        flavorStrawberry: 'فراولة',
        flavorChocolate: 'شوكولاتة',
        flavorLotus: 'لوتس',

        giftWrap: 'تغليف هدية (+10 درهم)',
        giftCard: 'بطاقة تهنئة (+5 درهم)',
        giftMix: 'تشكيلة متنوعة (+15 درهم)',

        popupUndetermined: 'يتم تحديده بعد الطلب',
        currency: 'درهم',

        whatsappHello: 'مرحباً،',
        whatsappOrderIntro: 'أرغب في الطلب:',
        whatsappProduct: 'المنتج',
        whatsappOption: 'الخيار',
        whatsappFlavor: 'النكهات',
        whatsappQuantity: 'الكمية',
        whatsappGift: 'الإضافات',
        whatsappNotes: 'الملاحظات',
        whatsappTotal: 'الإجمالي',
        whatsappThanks: 'شكراً.',

        products: {
            "mini-mabrousha": {
                cardTitle: 'ميني مبروشة بنكهات مختلفة',
                cardDesc: 'ميني مبروشة متنوعة بنكهات مميزة، مثالية للتقديم الأنيق والضيافة والتوزيعات',
                popupTitle: 'ميني مبروشة',
                popupDesc: 'ميني مبروشة بنكهات متنوعة، مثالية للتقديم والضيافة والتجمعات.',
                options: [
                    { label: '٢٥ قطعة — ٥٠ درهم', price: 50 },
                    { label: '٣٥ قطعة — ٧٠ درهم', price: 70 },
                    { label: '٦٠ قطعة — ١١٠ درهم', price: 110 }
                ],
                flavors: true
            },
            "kaak-eid": {
                cardTitle: 'كعك العيد',
                cardDesc: 'كعك تقليدي فاخر محشو بالتمر ومغطى بالسمسم، بطعم أصيل يليق بالضيافة والمناسبات',
                popupTitle: 'كعك العيد',
                popupDesc: 'كعك تقليدي فاخر محشو بالتمر ومغطى بالسمسم، مثالي للضيافة والمناسبات.',
                options: [
                    { label: '١ كيلو — ٨٠ درهم', price: 80 },
                    { label: '٢ كيلو — ١٥٠ درهم', price: 150 }
                ],
                flavors: false
            },
            "maqroota-tamar": {
                cardTitle: 'مقروطة التمر الفلسطينية',
                cardDesc: 'مقروطة فلسطينية بطبقات غنية ونكهة أصيلة، محضّرة بعناية لتقدّم تجربة مميزة مع القهوة العربية',
                popupTitle: 'مقروطة التمر الفلسطينية',
                popupDesc: 'مقروطة تمر فلسطينية تقليدية بطبقات غنية ونكهة أصيلة، مثالية مع القهوة العربية.',
                options: [
                    { label: '١ كيلو — ٧٠ درهم', price: 70 },
                    { label: '٢ كيلو — ١٣٠ درهم', price: 130 }
                ],
                flavors: false
            },
            "maamoul-tamar": {
                cardTitle: 'معمول التمر',
                cardDesc: 'معمول تمر فاخر محضّر بطريقة تقليدية بطعم غني وقوام ناعم، مناسب للتقديم في جميع المناسبات',
                popupTitle: 'معمول التمر',
                popupDesc: 'معمول تمر فاخر محضر بطريقة تقليدية بطعم غني وقوام ناعم، مثالي مع القهوة العربية.',
                options: [
                    { label: '١ كيلو — ٨٠ درهم', price: 80 },
                    { label: '٢ كيلو — ١٥٠ درهم', price: 150 }
                ],
                flavors: false
            },
            "date-fingers": {
                cardTitle: 'اصابع تمر',
                cardDesc: 'أصابع تمر مغطاة بالسمسم، غنية بالنكهة والقوام، ومثالية للضيافة الراقية والتقديم اليومي',
                popupTitle: 'اصابع تمر',
                popupDesc: 'مقروطة تمر فلسطينية طويلة مغطاة بالسمسم، غنية بالنكهة ومثالية للضيافة.',
                options: [
                    { label: '١ كيلو — ٧٠ درهم', price: 70 },
                    { label: '٢ كيلو — ١٣٠ درهم', price: 130 }
                ],
                flavors: false
            },
            "qatayef": {
                cardTitle: 'قطايف',
                cardDesc: 'قطايف محضّرة بعناية بحشوات متنوعة مثل المكسرات والقشطة والجبنة، مناسبة للتقديم بطابع شرقي فاخر',
                popupTitle: 'قطايف',
                popupDesc: 'متوفر لدينا قطايف بحشوات مختلفة، مثل المكسرات والقشطة والجبنة وعجينة القطايف العصافيري.',
                options: [
                    { label: 'السعر حسب الطلب', price: null }
                ],
                flavors: false
            },
            "luxury-sweets-box": {
                cardTitle: 'بوكس حلويات فاخر',
                cardDesc: 'تشكيلة حلويات فاخرة تناسب جميع المناسبات والتقديمات الراقية وتُحضّر بعناية خاصة حسب الطلب',
                popupTitle: 'بوكس حلويات فاخر',
                popupDesc: 'تشكيلة حلويات فاخرة تناسب جميع المناسبات والتقديمات الراقية.',
                options: [
                    { label: 'يتم تحديد السعر حسب الطلب والتفاصيل', price: null }
                ],
                flavors: false
            }
        }
    },

    en: {
        title: 'Atom of Sugar - Luxury Homemade Sweets in Dubai',
        navHome: 'Home',
        navAbout: 'About',
        navProducts: 'Products',
        navContact: 'Contact',

        heroTitle: 'Luxury Homemade Sweets Prepared Fresh Daily',
        heroText: 'We offer a carefully selected range of premium Middle Eastern sweets, prepared daily with high-quality ingredients and an elegant homemade touch for every occasion.',
        heroBtn: 'Order on WhatsApp',

        aboutTitle: 'About Us',
        aboutText: 'At Atom of Sugar, we offer homemade sweets prepared daily with care using high-quality ingredients and distinctive recipes to deliver unforgettable flavor in every order.',

        whyTitle: 'Why Atom of Sugar',
        why1Title: 'Selected Quality',
        why1Text: 'We use fresh, high-quality ingredients to ensure rich flavor and a premium experience in every bite.',
        why2Title: 'Prepared Daily',
        why2Text: 'Orders are prepared fresh every day to maintain quality, freshness, and excellent presentation.',
        why3Title: 'Perfect for Occasions',
        why3Text: 'Authentic homemade recipes with an elegant touch, ideal for hospitality, gifts, and gatherings.',
        why4Title: 'Elegant Presentation',
        why4Text: 'Beautiful sweets designed for refined serving at special occasions, visits, and gift moments.',

        productsTitle: 'Selected Collection',
        productViewBtn: 'View Options',
        productNote: 'Limited quantity - pre-order required',

        ctaTitle: 'Order Now',
        ctaText: 'For orders or inquiries, contact us directly on WhatsApp.',
        ctaBtn: 'Order on WhatsApp',
        deliveryText: 'Delivery service available across the UAE with care and attention.',

        infoTitle: 'Important Information Before Ordering',
        infoSubtitle: 'Clear and simple information for a smooth and comfortable ordering experience.',
        allergyTitle: 'Allergy Information',
        allergy1: 'Some of our products may contain ingredients such as milk, eggs, wheat, nuts, and sesame.',
        allergy2: 'Products are prepared in the same kitchen environment, so cross-contact may occur.',
        allergy3: 'Please inform us in advance if you have any allergies.',

        policyTitle: 'Order Policy',
        policy1: 'All orders are placed through WhatsApp only.',
        policy2: 'Orders are confirmed after agreeing on the details.',
        policy3: 'Some products require advance booking depending on quantity.',
        policy4: 'Delivery is available to all areas in the UAE.',
        policy5: 'Delivery fees are shared upon order confirmation.',

        contactTitle: 'Contact Us',
        contactInstagram: 'Instagram',
        contactLocationTitle: 'Location',
        contactLocationText: 'Dubai - United Arab Emirates',
        contactWhatsappTitle: 'Order via WhatsApp',
        contactWhatsappNote: 'Orders are placed via WhatsApp only',

        footerBrandTitle: 'Atom of Sugar',
        footerBrandText: 'Luxury homemade sweets prepared fresh daily',
        footerHome: 'Home',
        footerAbout: 'About',
        footerProducts: 'Products',
        footerContact: 'Contact',
        footerCopy: '© 2026 Atom of Sugar - All rights reserved',

        popupOptionLabel: 'Choose an option',
        popupFlavorLabel: 'Choose flavors',
        popupQtyLabel: 'Quantity',
        popupExtraLabel: 'Extra Options',
        popupNotesLabel: 'Special Notes',
        popupNotesPlaceholder: 'Write your notes here',
        popupTotalLabel: 'Total',
        popupSendBtn: 'Send Order',
        popupCloseBtn: 'Close',

        flavorStrawberry: 'Strawberry',
        flavorChocolate: 'Chocolate',
        flavorLotus: 'Lotus',

        giftWrap: 'Gift Wrapping (+10 AED)',
        giftCard: 'Greeting Card (+5 AED)',
        giftMix: 'Mixed Selection (+15 AED)',

        popupUndetermined: 'To be confirmed after order',
        currency: 'AED',

        whatsappHello: 'Hello,',
        whatsappOrderIntro: 'I would like to order:',
        whatsappProduct: 'Product',
        whatsappOption: 'Option',
        whatsappFlavor: 'Flavors',
        whatsappQuantity: 'Quantity',
        whatsappGift: 'Extras',
        whatsappNotes: 'Notes',
        whatsappTotal: 'Total',
        whatsappThanks: 'Thank you.',

        products: {
            "mini-mabrousha": {
                cardTitle: 'Mini Mabrousha - Assorted Flavors',
                cardDesc: 'Mini mabrousha in assorted flavors, perfect for elegant serving, hospitality, and gifting.',
                popupTitle: 'Mini Mabrousha',
                popupDesc: 'Mini mabrousha with assorted flavors, perfect for serving, hospitality, and gatherings.',
                options: [
                    { label: '25 pieces — 50 AED', price: 50 },
                    { label: '35 pieces — 70 AED', price: 70 },
                    { label: '60 pieces — 110 AED', price: 110 }
                ],
                flavors: true
            },
            "kaak-eid": {
                cardTitle: 'Eid Kaak',
                cardDesc: 'Traditional premium kaak filled with dates and topped with sesame, perfect for hospitality and occasions.',
                popupTitle: 'Eid Kaak',
                popupDesc: 'Traditional premium kaak filled with dates and topped with sesame, ideal for hospitality and occasions.',
                options: [
                    { label: '1 kg — 80 AED', price: 80 },
                    { label: '2 kg — 150 AED', price: 150 }
                ],
                flavors: false
            },
            "maqroota-tamar": {
                cardTitle: 'Palestinian Date Maqroota',
                cardDesc: 'Palestinian maqroota with rich layers and authentic flavor, carefully prepared for a special experience with Arabic coffee.',
                popupTitle: 'Palestinian Date Maqroota',
                popupDesc: 'Traditional Palestinian date maqroota with rich layers and authentic flavor, perfect with Arabic coffee.',
                options: [
                    { label: '1 kg — 70 AED', price: 70 },
                    { label: '2 kg — 130 AED', price: 130 }
                ],
                flavors: false
            },
            "maamoul-tamar": {
                cardTitle: 'Date Maamoul',
                cardDesc: 'Premium date maamoul made in a traditional way with rich flavor and a soft texture, perfect for all occasions.',
                popupTitle: 'Date Maamoul',
                popupDesc: 'Premium date maamoul prepared traditionally with rich flavor and soft texture, perfect with Arabic coffee.',
                options: [
                    { label: '1 kg — 80 AED', price: 80 },
                    { label: '2 kg — 150 AED', price: 150 }
                ],
                flavors: false
            },
            "date-fingers": {
                cardTitle: 'Date Fingers',
                cardDesc: 'Sesame-coated date fingers with rich flavor and texture, perfect for elegant hospitality and daily serving.',
                popupTitle: 'Date Fingers',
                popupDesc: 'Long Palestinian date rolls coated with sesame, rich in flavor and perfect for hospitality.',
                options: [
                    { label: '1 kg — 70 AED', price: 70 },
                    { label: '2 kg — 130 AED', price: 130 }
                ],
                flavors: false
            },
            "qatayef": {
                cardTitle: 'Qatayef',
                cardDesc: 'Carefully prepared qatayef with assorted fillings such as nuts, cream, and cheese for elegant oriental serving.',
                popupTitle: 'Qatayef',
                popupDesc: 'Available with various fillings such as nuts, cream, cheese, and qatayef dough for asafeeri style.',
                options: [
                    { label: 'Price on request', price: null }
                ],
                flavors: false
            },
            "luxury-sweets-box": {
                cardTitle: 'Luxury Sweets Box',
                cardDesc: 'A premium sweets selection suitable for all occasions and elegant presentations, prepared carefully upon request.',
                popupTitle: 'Luxury Sweets Box',
                popupDesc: 'A premium sweets selection suitable for all occasions and elegant presentations.',
                options: [
                    { label: 'Price depends on request and details', price: null }
                ],
                flavors: false
            }
        }
    }
};

let currentProductKey = null;
let popupQty = 1;
let selectedFlavors = [];
let selectedOptionIndex = 0;

function getProductData(productKey) {
    return translations[currentLang].products[productKey];
}

function getFlavorLabel(flavorKey) {
    const t = translations[currentLang];
    if (flavorKey === 'strawberry') return t.flavorStrawberry;
    if (flavorKey === 'chocolate') return t.flavorChocolate;
    if (flavorKey === 'lotus') return t.flavorLotus;
    return flavorKey;
}

function updateStaticText() {
    const t = translations[currentLang];

    document.title = t.title;
     document.documentElement.setAttribute('lang', currentLang);
     document.documentElement.setAttribute('dir', 'rtl');
     document.body.style.direction = 'rtl';

    setText('nav-home', t.navHome);
    setText('nav-about', t.navAbout);
    setText('nav-products', t.navProducts);
    setText('nav-contact', t.navContact);

    setText('hero-title', t.heroTitle);
    setText('hero-text', t.heroText);
    setText('hero-btn', t.heroBtn);

    setText('about-title', t.aboutTitle);
    setText('about-text', t.aboutText);

    setText('why-title', t.whyTitle);
    setText('why-card-1-title', t.why1Title);
    setText('why-card-1-text', t.why1Text);
    setText('why-card-2-title', t.why2Title);
    setText('why-card-2-text', t.why2Text);
    setText('why-card-3-title', t.why3Title);
    setText('why-card-3-text', t.why3Text);
    setText('why-card-4-title', t.why4Title);
    setText('why-card-4-text', t.why4Text);

    setText('products-title', t.productsTitle);

    updateProductCards();

    setText('cta-title', t.ctaTitle);
    setText('cta-text', t.ctaText);
    setText('cta-btn', t.ctaBtn);
    setText('delivery-text', t.deliveryText);

    setText('info-title', t.infoTitle);
    setText('info-subtitle', t.infoSubtitle);
    setText('allergy-title', t.allergyTitle);
    setText('allergy-text-1', t.allergy1);
    setText('allergy-text-2', t.allergy2);
    setText('allergy-text-3', t.allergy3);

    setText('policy-title', t.policyTitle);
    setText('policy-text-1', t.policy1);
    setText('policy-text-2', t.policy2);
    setText('policy-text-3', t.policy3);
    setText('policy-text-4', t.policy4);
    setText('policy-text-5', t.policy5);

    setText('contact-title', t.contactTitle);
    setText('contact-instagram-title', t.contactInstagram);
    setText('contact-location-title', t.contactLocationTitle);
    setText('contact-location-text', t.contactLocationText);
    setText('contact-whatsapp-title', t.contactWhatsappTitle);
    setText('contact-whatsapp-note', t.contactWhatsappNote);

    setText('footer-brand-title', t.footerBrandTitle);
    setText('footer-brand-text', t.footerBrandText);
    setText('footer-home', t.footerHome);
    setText('footer-about', t.footerAbout);
    setText('footer-products', t.footerProducts);
    setText('footer-contact', t.footerContact);
    setText('footer-copy', t.footerCopy);

    setText('popup-option-label', t.popupOptionLabel);
    setText('popup-flavor-label', t.popupFlavorLabel);
    setText('popup-qty-label', t.popupQtyLabel);
    setText('popup-extra-label', t.popupExtraLabel);
    setText('popup-notes-label', t.popupNotesLabel);
    setText('popup-total-label', t.popupTotalLabel);
    setText('popup-send-btn', t.popupSendBtn);
    setText('popup-close-btn', t.popupCloseBtn);

    const notes = document.getElementById('popupNotes');
    if (notes) {
        notes.placeholder = t.popupNotesPlaceholder;
    }

    setText('flavor-strawberry-label', t.flavorStrawberry);
    setText('flavor-chocolate-label', t.flavorChocolate);
    setText('flavor-lotus-label', t.flavorLotus);

    setText('gift-wrap-label', t.giftWrap);
    setText('gift-card-label', t.giftCard);
    setText('gift-mix-label', t.giftMix);

    updateLanguageButtons();

    if (currentProductKey) {
        renderOpenPopupContent();
    }
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (currentLang === 'ar') {
        if (buttons[0]) buttons[0].classList.add('active');
    } else {
        if (buttons[1]) buttons[1].classList.add('active');
    }
}

function updateProductCards() {
    const p = translations[currentLang].products;
    const t = translations[currentLang];

    setText('product-mini-title', p['mini-mabrousha'].cardTitle);
    setText('product-mini-desc', p['mini-mabrousha'].cardDesc);

    setText('product-kaak-title', p['kaak-eid'].cardTitle);
    setText('product-kaak-desc', p['kaak-eid'].cardDesc);

    setText('product-maqroota-title', p['maqroota-tamar'].cardTitle);
    setText('product-maqroota-desc', p['maqroota-tamar'].cardDesc);

    setText('product-maamoul-title', p['maamoul-tamar'].cardTitle);
    setText('product-maamoul-desc', p['maamoul-tamar'].cardDesc);

    setText('product-fingers-title', p['date-fingers'].cardTitle);
    setText('product-fingers-desc', p['date-fingers'].cardDesc);

    setText('product-qatayef-title', p['qatayef'].cardTitle);
    setText('product-qatayef-desc', p['qatayef'].cardDesc);

    setText('product-box-title', p['luxury-sweets-box'].cardTitle);
    setText('product-box-desc', p['luxury-sweets-box'].cardDesc);

    for (let i = 1; i <= 7; i++) {
        setText(`product-note-${i}`, t.productNote);
    }

    document.querySelectorAll('.product-view-btn').forEach(btn => {
        btn.textContent = t.productViewBtn;
    });
}

// Open popup
function openProductPopup(productKey) {
    const product = getProductData(productKey);
    if (!product) return;

    currentProductKey = productKey;
    popupQty = 1;
    selectedFlavors = [];
    selectedOptionIndex = 0;

    const popup = document.getElementById('productPopup');
    const popupQtyEl = document.getElementById('popupQty');
    const popupNotes = document.getElementById('popupNotes');

    if (!popup || !popupQtyEl || !popupNotes) return;

    popupQtyEl.textContent = popupQty;
    popupNotes.value = '';

    document.querySelectorAll('.gift-item input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    resetFlavorCards();
    renderOpenPopupContent();

    popup.classList.remove('popup-hidden');
    document.body.style.overflow = 'hidden';
}

// Render current popup content when language changes or popup opens
function renderOpenPopupContent() {
    const product = getProductData(currentProductKey);
    if (!product) return;

    const popupImage = document.getElementById('popupImage');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const flavorSection = document.getElementById('popupFlavorSection');

    if (!popupImage || !popupTitle || !popupDescription || !flavorSection) return;

    const imageMap = {
        "mini-mabrousha": "Gourmet treats and Arabic coffee in Dubai.png",
        "kaak-eid": "Savory biscuits and Arabic coffee.png",
        "maqroota-tamar": "Golden date pastries with Arabic coffee.png",
        "maamoul-tamar": "Rose pastries with Arabic coffee at twilight.png",
        "date-fingers": "Sesame date rolls with Arabic coffee.png",
        "qatayef": "Middle Eastern dessert spread with qatayef.png",
        "luxury-sweets-box": "Elegant Middle Eastern sweets and coffee setup.png"
    };

    popupImage.src = imageMap[currentProductKey];
    popupImage.alt = product.popupTitle;
    popupTitle.textContent = product.popupTitle;
    popupDescription.textContent = product.popupDesc;

    renderPopupOptions();

    if (product.flavors) {
        flavorSection.classList.remove('popup-hidden');
    } else {
        flavorSection.classList.add('popup-hidden');
    }

    updatePopupTotal();

    const popupCard = document.querySelector('.product-popup-card');
    if (popupCard) {
        popupCard.scrollTop = 0;
    }
}

// Close popup
function closeProductPopup() {
    const popup = document.getElementById('productPopup');
    if (!popup) return;
    popup.classList.add('popup-hidden');
    document.body.style.overflow = '';
    currentProductKey = null;
}

// Render popup options
function renderPopupOptions() {
    const product = getProductData(currentProductKey);
    const optionsWrap = document.getElementById('popupOptions');
    if (!product || !optionsWrap) return;

    optionsWrap.innerHTML = '';

    product.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-card' + (index === selectedOptionIndex ? ' active' : '');
        btn.textContent = option.label;

        btn.addEventListener('click', function () {
            selectedOptionIndex = index;
            renderPopupOptions();
            updatePopupTotal();
        });

        optionsWrap.appendChild(btn);
    });
}

// Quantity controls
function changePopupQty(change) {
    popupQty += change;
    if (popupQty < 1) popupQty = 1;

    const qtyEl = document.getElementById('popupQty');
    if (qtyEl) {
        qtyEl.textContent = popupQty;
    }

    updatePopupTotal();
}

// Reset flavor cards
function resetFlavorCards() {
    document.querySelectorAll('.flavor-card').forEach(card => {
        card.classList.remove('active');
    });
}

// Toggle flavor selection
function toggleFlavor(flavor, element) {
    if (selectedFlavors.includes(flavor)) {
        selectedFlavors = selectedFlavors.filter(item => item !== flavor);
        element.classList.remove('active');
    } else {
        selectedFlavors.push(flavor);
        element.classList.add('active');
    }
}

// Update total
function updatePopupTotal() {
    const product = getProductData(currentProductKey);
    const totalEl = document.getElementById('popupTotal');
    if (!product || !totalEl) return;

    const selectedOption = product.options[selectedOptionIndex];
    const t = translations[currentLang];

    if (!selectedOption) {
        totalEl.textContent = '—';
        return;
    }

    if (selectedOption.price === null) {
        totalEl.textContent = t.popupUndetermined;
        return;
    }

    let total = selectedOption.price * popupQty;

    document.querySelectorAll('.gift-item input:checked').forEach(cb => {
        const extra = parseInt(cb.value, 10);
        if (!Number.isNaN(extra)) {
            total += extra;
        }
    });

    totalEl.textContent = `${total} ${t.currency}`;
}

// Send WhatsApp order
function sendPopupOrder() {
    const product = getProductData(currentProductKey);
    if (!product) return;

    const t = translations[currentLang];
    const selectedOption = product.options[selectedOptionIndex];
    const notes = document.getElementById('popupNotes')?.value.trim() || '';
    const totalText = document.getElementById('popupTotal')?.textContent || '';

    const gifts = [];
    document.querySelectorAll('.gift-item input:checked').forEach(cb => {
        gifts.push(currentLang === 'ar' ? cb.dataset.nameAr : cb.dataset.nameEn);
    });

    const flavorLabels = selectedFlavors.map(getFlavorLabel);

    let message = `${t.whatsappHello}\n\n`;
    message += `${t.whatsappOrderIntro}\n\n`;
    message += `${t.whatsappProduct}: ${product.popupTitle}\n`;
    message += `${t.whatsappOption}: ${selectedOption ? selectedOption.label : '—'}\n`;

    if (flavorLabels.length > 0) {
        message += `${t.whatsappFlavor}: ${flavorLabels.join(', ')}\n`;
    }

    message += `${t.whatsappQuantity}: ${popupQty}\n`;

    if (gifts.length > 0) {
        message += `${t.whatsappGift}: ${gifts.join(', ')}\n`;
    }

    if (notes) {
        message += `${t.whatsappNotes}: ${notes}\n`;
    }

    message += `${t.whatsappTotal}: ${totalText}\n\n`;
    message += t.whatsappThanks;

    const whatsappUrl = `https://wa.me/971522622363?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Close popup with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProductPopup();
    }
});

// Update total when gift checkbox changes
document.addEventListener('change', function (e) {
    if (e.target.matches('.gift-item input[type="checkbox"]')) {
        updatePopupTotal();
    }
});

// Language switch
function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'ar';
    updateStaticText();
}

// Initialize
updateStaticText();

console.log('ذرة سكر - Website loaded successfully');

// Track MAIN CTA WhatsApp button
document.addEventListener('DOMContentLoaded', function () {
    const ctaBtn = document.getElementById('cta-btn');

    if (ctaBtn) {
        ctaBtn.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_click', {
                    event_category: 'engagement',
                    event_label: 'main_cta_button',
                    button_location: 'hero',
                    language: currentLang
                });
            }
        });
    }
});
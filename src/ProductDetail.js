import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useCart } from "./CartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Lấy tham số id từ URL
  const { addToCart } = useCart(); // Lấy hàm addToCart từ context giỏ hàng
  const [product, setProduct] = useState(null); // Trạng thái để lưu thông tin sản phẩm
  const [quantity, setQuantity] = useState(1); // Trạng thái để lưu số lượng sản phẩm
  const [showMore, setShowMore] = useState(false); // Trạng thái để hiển thị toàn bộ mô tả
  const navigate = useNavigate(); // Hàm điều hướng

  // Danh sách sản phẩm
  const products = [
    {
      id: 1,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80103084_original_original_1.webp",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "50ml",
      oldPrice: "$157.00",
      newPrice: 141.3,
      description: `Skin Type: Combination, Dry, Normal, Oily
      Texture: Serum
      Use: Every day, morning and night.
      Benefits:
      - Just one drop for smooth, youthful-looking skin.
      - Fine lines are visibly smoothed.
      - Firmer, plumper, more radiant skin.
      - Refined skin texture, reduced pores.
      
      Double Serum is pushing the boundaries of anti-aging innovation and reinventing itself in a new generation with increased power.
      
      Its unique dual formula, made up of 95% naturally-sourced ingredients, combines 22 powerful plant extracts, including the iconic turmeric extract, with 5 new pure active molecules to stimulate the skin's 5 vital functions.`,
    },
    {
      id: 2,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80093147_original_original_A.webp",
      name: "Double Serum Light Texture Anti-Aging Serum",
      size: "50ml",
      oldPrice: "$142.00",
      newPrice: 127.8,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Firmer skin, smoothed wrinkles.
Radiance and even complexion restored, pores reduced.
Preserves the skin’s youth and beauty.
“Barely there” finish.
Learn More
The iconic Double Serum is available in a light, imperceptible texture, with proven results on signs of aging. Developed by Clarins Research, its unique dual formula combines 21 powerful plant extracts that help boost the 5 vital functions of the skin - regeneration, nutrition, oxygenation, hydration, protection - and act on signs of aging. Its dual texture leaves an immediate "barely there" finish and a pleasant fragrance with fruity, floral, fresh and refined notes.

The nested bottles contain the two formulas in a technological and eco-designed feat that prioritizes responsible materials and limits waste.

This product won the Consumer's Choice - Skincare, at the 2024 Beauty's Best Awards.
Innovation and plant expertise
Its lipidic phase, modified by 70%*, contains ultra-light and "evanescent" oils that draw the active ingredients onto the skin, then evaporate, leaving an immediate "barely there" finish and offering an exceptional sensory effect on application.
*Compared to Double Serum
Clarins Plus
Ideal for use during warmer seasons, for men, and for people with combination-to-oily skin. What’s innovative about Double Serum Light Texture is its new trio of ultra-light molecules chosen for their volatility: "evanescent" oils that draw the active ingredients onto the skin, then disappear, leaving an immediate "bare skin" finish with no residue.`,
    },
    {
      id: 3,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye - Anti Aging Eye Care",
      size: "50ml",
      oldPrice: "$102.00",
      newPrice: 91.8,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Fluid
Use: Gently dab over the entire eye area from temple to temple, every morning and/or evening. Learn more
Benefits
Smooths wrinkles.
Reduces puffiness and dark circles.
Strengthens the skin.
Learn More
All the power of the iconic Double Serum, now for your eyes.
A double anti-aging formula for the eyes in perfect organic harmony with the skin around the eye contour area, which draws its strength from a rich variety of plants (13 plant extracts including the powerful duo of organic wild chervil & turmeric extracts).
A complete serum with 96% natural ingredients that effectively and visibly treats all signs of aging: it smooths wrinkles, reduces puffiness and dark circles, and strengthens the skin around the eyes.
Instantly, eyes appear more radiant and youthful.

Clarins Plus
The secret behind Double Serum Eye: the strengthening properties of organic wild chervil extract are combined with the Double Serum’s star ingredient, turmeric, to help preserve the five vital functions of the skin around the eye.`,
    },
    {
      id: 4,
      label: "BEST SELLERS",
      imgSrc: "../img/Product1/00596100_original_original_x.webp",
      name: "Gentle Care Roll-On Deodorant",
      size: "50ml",
      oldPrice: "$26.00",
      newPrice: 23.4,
      description: `Skin Type: Normal, Oily, Combination, Dry
Use: Apply to clean, dry skin daily. Learn more
Benefits
Long-lasting deodorant and antiperspirant
Non-irritating, alcohol-free formula
Leaves skin feeling soft, fresh, and comfortable
No white residue
Learn More
Delicately-scented, alcohol-free antiperspirant and deodorant keeps underarms dry and odor-free all day long. Formulated with natural plant extracts of Buchu Leaf, Witch Hazel, and Rosemary, this non-irritating formula works to regulate perspiration and leaves skin feeling soft, fresh, and comfortable. Non-sticky texture glides on without leaving white residue. Gentle enough for the even the most sensitive skin.`,
    },
    {
      id: 5,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80056458_original_original_A.webp",
      name: "Extra-Firming Neck and Décolleté",
      size: "30ml",
      oldPrice: "$104.00",
      newPrice: 93.6,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply in the morning and/or at night with gentle massaging motions working from the chin to the décolleté area. Learn more
Benefits
Lifts
Sculpts
Firms
Learn More
The neck and décolleté areas are delicate and often overlooked in daily skincare routines. With age and the movements they make day after day, the skin forms wrinkles and creases even more easily. Extra-Firming Neck and Décolleté is a wonderfully melting and non-greasy treatment that smooths and creates a lift-sculpt effect to visibly maintain the youthful look of the neck and décolleté. With each passing day, beauty, firmness and support are restored to this incredibly fragile and delicate area that's in constant motion.
Clarins Plus
The perfect lift-sculpt treatment for visibly maintaining the youthful look of the neck and décolleté.`,
    },
    {
      id: 6,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80044967_hero_original.webp",
      name: "Wonder Perfect Mascara 4D",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: 35.1,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Gel / Fluid
Use: Apply from roots to tips of lashes. Learn more
Benefits
Visibly lengthens, curls, defines, and volumizes lashes with Lash Boosting Complex
Filmogenic Rose Wax provides long-wear color and hold
Learn More
An all-in-one, 4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized—for a captivating, wide-eyed look.
This unique formula combines intense carbon-black mineral pigments with filmogenic Rose Wax for long-wearing color and hold. Clarins’ exclusive Lash Boosting Complex of Sphingony and Panthenol protects lashes and promotes visibly thicker, longer-looking lashes even after you've removed your mascara.
Clarins' exclusive precision brush allows for the perfect balance of volume & definition so no lash goes unnoticed.
Clarins Plus
Makeup made for skin. Developed with the same expertise as Clarins' skincare, we harness the power of the most potent plant extracts for makeup that delivers true skincare benefits.`,
    },
    {
      id: 7,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80068482_original_original_1.webp",
      name: "Total Eye Lift - Under Eye Tightening Cream",
      size: "15ml",
      oldPrice: "$105.00",
      newPrice: 94.5,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Serum
Use: Apply in the morning and evening before a day or night treatment. Learn more
Benefits
Best eye cream for wrinkles, fine lines, and crow's feet
Restores density to the skin around the eyes
Brightens the eyes and beautifies the lashes
Best eye-lifting serum
Learn More
Clarins, the eye contour expert, introduces Total Eye Lift, an award-winning, naturally powerful, all-in-one, eye cream that targets wrinkles, crow's feet, dark circles, and puffiness for a visible eye lift in 60 seconds flat* designed for all women. This exceptional eye-lifting serum combats all factors, restoring radiance to skin at any age. Because you don't have time to waste, cassie wax, which visibly tightens and smoothes lines and wrinkles with immediate results and organic harungana extract that is as effective as retinol** and gentle on the skin, deeply replenishes and visibly firms the fragile skin around the eyes, were brought together to generate an instant smoothing-lift effect that challenges the clock. This redefining skincare formula was specifically created to enhance the entire eye area – from temple to temple – for women of all ages. Fine lines and wrinkles are visibly smoothed, the eye area appears replenished and rested, brighter, and refreshed. This sensorial, lightweight balm melts into the skin, prepping eyes for flawless makeup application and long-lasting wear. Its 94% naturally derived formula combines responsibly sourced precious plant materials. Gentle eye cream is suitable for all ages and all skin types—including contact lens wearers and those with sensitive eyes—and is housed in an airless glass bottle made of recycled glass.
*For 80% of women - Satisfaction test - reported by 110 women - 60 seconds after the first application.**In vitro test on collagen synthesis
Clarins Plus
The sensorial, lightweight balm melts into skin, prepping eyes for flawless makeup application and long-lasting wear. This gentle eye cream is suitable for all ages and all skin types—including contact lens wearers and those with sensitive eyes—and is housed in an airless glass bottle made of recycled glass.`
    },
    {
      id: 8,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80102952_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "200ml",
      oldPrice: "$90.00",
      newPrice: 81.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Every day, morning and night. Learn more
Benefits
The appearance of cellulite is reduced.
Skin is more toned and smoother.
The figure is more sculpted.
Learn More
Body Fit Active, the No. 1 expert firming skincare*, helps reduce the appearance of stubborn cellulite, tone the skin and reshape the figure.

Its expert formula, made with 96% naturally derived ingredients, helps improve the firmness of the skin. It is smoother and more toned after 14 days**. Its organic matcha tea extract promotes energy release and helps firm the skin. It is combined with plant-based caffeine to create the [Skin Smoothing Power Complex]. A duo of active ingredients with dual fat-limiting and eliminating action.

*No.1 anti-cellulite treatment for the body. Source Circana Group BeautyTrends®, Europe 5 (France, Germany, United Kingdom, Italy and Spain), Selective Retailing (products sold in perfume shops and department stores), sales in value (€) and units, over the period January 2022 to December 2022.
**Satisfaction test 108 women, 14 days
Innovation and plant expertise
CLARINS INNOVATION: [SKIN SMOOTHING POWER COMPLEX]
Organic matcha tea extract is combined with the lipolytic power of plant-based caffeine for an enhanced action on the appearance of cellulite.
Clarins Plus
With an icy feeling inspired by cryo-lipolysis, Body Fit Active’s sensory texture completes the skincare action. It provides an instant tightening effect that lasts over time for more beautiful skin.`
    },
    {
      id: 9,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: 38.7,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply to clean face and neck, morning and/or evening. Learn more
Benefits
Intensive Moisture Balm super-hydrates his skin
Tones, energizes and soothes
Calms razor burn
Nourishes skin
Tested by 6 divers under extreme arctic conditions
Anti-Pollution Complex
Learn More
Powered by ClarinsMens’ exclusive Hydra-Resist Phyto Complex—a blend of super-hydrating Organic Houseleek and Organic Leaf of Life extacts—this refreshing balm was tested by 6 divers under arctic conditions, to help a man’s skin withstand the most extreme temperatures.
Clarins Plus
Intensive moisture balm helps a man’s skin rebound from extreme sports, recover from cold weather, and survive a rough shave. Organic Sesame oil nourishes his skin, ClarinsMen Complex calms razor burn, and Bison Grass and Gymnema extracts soothe and energize.`
    },
    {
      id: 10,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80070887_original_original_1.jpg",
      name: "Extra-Firming Energy + Radiance Face Cream",
      size: "50ml",
      oldPrice: "$112.00",
      newPrice: 100.8,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Apply to the face and neck every morning. Learn more
Benefits
Enhancing and glow-boosting effect.
Visibly firms skin and smoothes wrinkles.
Anti-pollution protection.
Learn More
For skin that appears dull and fatigued, discover the energizing effect of this day cream, packed with plant extracts and glow-boosting superfruits. Skin not only looks more radiant but also visibly smoother and firmer, thanks to organic kangaroo and organic mitracarpus extracts. It has a creamy texture, delicate orange tint and fresh, energizing scent. Protected from the harmful effects of pollution, skin looks more youthful, day after day.
Clarins Plus
2-in-1 skin care that combines Clarins' firming expertise with the enhancing effect of a radiance cream.`
    },
    {
      id: 11,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "$38.00",
      newPrice: 27.5,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Liquid
Use: Mix 2-3 drops with your day or night moisturizer. Learn more
Benefits
Creates a natural-looking golden glow
Mistake-proof application is even and streak-free
Customizable results
Leaves skin soft, supple, and hydrated
Learn More
Why not add a little radiance and self-tanner to your skincare products when you have the chance? With Clarins’ Radiance Plus Golden Glow Booster, you can do exactly that - boost your luminous glow! To get this enhanced look, you can simply combine the Radiance Plus Booster with any Clarins’ face moisturizers and build your tan. Not only does this unique booster create a lovely, natural-looking self-tan effect, but it also keeps the moisturizing, anti-wrinkle and firming benefits of your usual day and night creams. So, for easy-to-achieve, one-step, 100% safe, radiant skin, treat your complexion to Radiance Plus Golden Glow Booster.
Dermatologically tested. Non comedogenic.`
    },
    {
      id: 12,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80083866_original_original_A.webp",
      name: "Sun Care Essentials",
      size: "100ml",
      oldPrice: "$78.00",
      newPrice: 70.2,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Oil
Use: Use 2-3 times per week. Learn more
Benefits
Visibly firms, tones and boosts elasticity
Reduces the look of stretch marks
Locks in moisture
Sooths and smoothes
Learn More
Canada's #1 Prestige Body Firming & Cellulite Skincare Product*. Firming body treatment oil, formulated with 100% pure plant extracts, creates a total feeling of wellbeing. An aromatic blend of essential oils—including Geranium, Mint, and Rosemary—visibly firms, tones and improves elasticity, reducing the appearance of stretch marks caused by pregnancy and weight loss. Hazelnut oil, rich in Omega 9 and Vitamin E, locks in moisture to smooth skin from shoulders to toes. Fine, lightweight formula absorbs instantly.
Won’t stain clothes. Preservative-free. Dermatologist tested.
*based on dollar and unit sales latest YTD ME Dec 2021. Source: The NPD Group/BeautyTrends®, Canada.
Tonic Body Treatment Oil: an iconic product that supports solidarity. For every “Tonic” Body Treatment Oil** purchased Clarins will make a donation to the Arthritis Foundation.
**This oil is a cosmetic product. It does not have any therapeutic action nor is it a treatment for arthritis.
Clarins Plus
Created in 1965, it's THE go-to product for pregnant women, thanks to an invigorating formula made entirely of plant extracts.`
    },
    {
      id: 13,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Lunar New Year Edition",
      size: "75ml",
      newPrice: 204.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Just one drop for smooth, youthful-looking skin.
Fine lines are visibly smoothed.
Firmer, plumper, more radiant skin
Refined skin texture, reduced pores.
Learn More
This exclusive limited edition Double Serum celebrates the year of the snake and the power to reawaken radiance.
Double Serum is pushing the boundaries of anti-aging innovation and reinventing itself in a new generation with increased power*.
Its unique dual formula, made up of 95% naturally-sourced ingredients, combines 22 powerful plant extracts, including the iconic turmeric extract, with 5 new pure active molecules to stimulate the skin's 5 vital functions.
Inspired by the science of epigenetics, its unique Epi-ageing Defense technology targets the signs of aging linked to lifestyle-induced aging. Empowered by Provence tall reed extract, it helps strengthen the skin's resistance to its environment to limit the appearance of aging.
Its new packaging contains 94%** recyclable materials and features its [Hydric + Lipidic System], which preserves the intrinsic qualities of these two phases.
*Compared with Double Serum generation 8.
**Based on a 50 ml format.
Innovation and plant expertise
Epi-Ageing Defense technology : for the first time, the exclusive Provence tall reed extract helps to neutralise 100%* of lifestyle-related epigenetic changes.
This extract is an exclusive Clarins development and made in France.
*in vitro test on ingredient
Clarins Plus
For the 1st time*, a ground-breaking Clarins clinical study carried out on over 60 twins has quantified the impact of lifestyle on skin aging. Clarins Research has given this aging phenomenon the name Epi-ageing, proving that an "unbalanced" lifestyle accentuates the signs of ageing.*at Clarins`
    },
    {
      id: 14,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye Lunar New Year Edition",
      size: "20ml",
      newPrice: 102.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Mix the two phases with your fingertips. Press the serum onto eyelids and the under-eye area moving from the inner corner out to the temples. Then, apply with slight pressure between your brows. Learn more
Benefits
Visibly firms skin to smooth the look of fine lines and wrinkles.
Nourishes and hydrates.
Visibly reduces puffiness and dark circles.
Illuminates the eye area.
Revitalizes the delicate skin around eyes.
Plant-based Anti-Pollution Complex helps protect skin from indoor and outdoor pollutants, including blue lights from electronics.
Learn More
This exclusive limited edition Double Serum Eye celebrates the year of the snake and the power to reawaken radiance from within.

A multi-benefit double eye serum that acts visibly on different signs of aging around the delicate eye area. In just 7 days, the eye area is intensely nourished, smoother, firmer and brighter*. A rich and silky eye serum formulated with 96% natural ingredients and formulated with 13 plant extracts, including potent organic wild chervil extract. Alongside 12 other plant extracts, including turmeric, organic leaf of life, organic kiwi, organic oat sugars and organic white horehound, Double Serum Eye takes complete care of the eye area while also offering anti-pollution protection.

*Satisfaction test - multi-ethnic panel - 375 women after 7 days of use.
Innovation and plant expertise
This innovative eye treatment is formulated with Clarins' exclusive Youth-Preserving Duo—a combination of Organic Wild Chervil and Double Serum's iconic ingredient, Turmeric, to optimize the performance of the skin's 5 vital functions—hydration, nutrition, oxygenation, regeneration, and protection—to effectively target different visible signs of eye aging.
Clarins Plus
Our eye serum contains organic wild chervil extract which is the key to help have a brighter, smoother, more rested eye area. Combined with turmeric extract, renowned for its exceptional age-defying properties, Double Serum Eye visibly acts on different signs of aging around the eye area.`
    },
    {
      id: 15,
      label: "NEW",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "30ml",
      oldPrice: "$100.00",
      newPrice: 99.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Just one drop for smooth, youthful-looking skin.
Fine lines are visibly smoothed.
Firmer, plumper, more radiant skin
Refined skin texture, reduced pores
Learn More
Double Serum is pushing the boundaries of anti-aging innovation and reinventing itself in a new generation with increased power*.

Its unique dual formula, made up of 95% naturally-sourced ingredients, combines 22 powerful plant extracts, including the iconic turmeric extract, with 5 new pure active molecules to stimulate the skin's 5 vital functions.

Inspired by the science of epigenetics, its unique Epi-ageing Defense technology targets the signs of aging linked to lifestyle-induced aging. Empowered by Provence tall reed extract, it helps strengthen the skin's resistance to its environment to limit the appearance of aging.

Its new packaging contains 94%** recyclable materials and features its [Hydric + Lipidic System], which preserves the intrinsic qualities of these two phases.

*Compared with Double Serum generation 8
**Base 50ml format
Innovation and plant expertise
Epi-Ageing Defense technology: for the first time, the exclusive Provence tall reed extract helps to neutralise 100% of lifestyle-related epigenetic changes.
This extract is an exclusive Clarins development and 100% made in France.
Clarins Plus
For the 1st time*, a ground-breaking Clarins clinical study carried out on over 60 twins has quantified the impact of lifestyle on skin aging. Clarins Research has given this aging phenomenon the name Epi-ageing, proving that an "unbalanced" lifestyle accentuates the signs of aging.*at Clarins`
    },
    {
      id: 16,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "$62.00",
      newPrice: 40.0,
      description:`A set of sun care essentials for the face, including SPF 50 protection, after-sun balm and a face moisturizer.
      This set contains:
Dry Touch Facial Sunscreen SPF 50+
Dry Touch Facial Sunscreen SPF 50+
Moisturizes and protects against the harmful effects of the sun. 
50 ml
Soothing After Sun Balm 30 mL
Soothing After Sun Balm 30 mL
Soothing after sun balm for face and body, enriched with antioxydants & promotes a long-lasting tan. 
1 item
Hydra-Essentiel [HA²] Silky Cream 15 mL
Hydra-Essentiel [HA²] Silky Cream 15 mL
The daytime face cream that hydrates and plumps. 
1 item
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan
Promotes a long-lasting, intense tan that resists peeling and flaking
Hydrates and plumps skin`
    },
    {
      id: 17,
      label: "NEW",
      imgSrc: "../img/Product1/80112531_original_original_2.jpg",
      name: "The Precious Discovery Set",
      size: "Unit",
      newPrice: 370.0,
      description:`This set combines the four essential steps of the Clarins Precious exceptional anti-aging routine. First step: to prepare the skin with a fresh and comfortable Lotion-essence with leaf of life extract that helps to hydrate the skin. Second step: use La Crème Yeux to refresh the eye contour. Third step: apply the luxurious Le Serum, a gentle cream-gel texture that leaves skin firmer day after day. Fourth step: reveal your skin’s youth with La Crème, a unique combination of three peptides with restructuring and redensifying properties. All of the Clarins Precious technology in four rare products for your precious skin.
This set contains:
Precious La Crème Age-Defying Moisturizer 15 mL
Precious La Crème Age-Defying Moisturizer 15 mL
Exceptional anti-aging care that preserves your skin and stimulates its own youthful resources. 
1 item
Precious La Lotion Age-Defying Treatment Essence 30 mL
Precious La Lotion Age-Defying Treatment Essence 30 mL
A fresh and beneficial Essence-Lotion: an essential prelude that prepares the skin to receive the full benefits of La Crème. 
1 item
Precious Le Sérum Face Serum 10 mL
Precious Le Sérum Face Serum 10 mL
The exceptional anti-aging serum with lifting effects that helps to redefine the facial contours and luminate the skin. 
1 item
Precious La Crème Yeux 4 mL
Precious La Crème Yeux 4 mL
The exceptional anti-aging product that lifts the eye contour and restores an expressive, more youthful look. 
1 item
Benefits
Smoothed, moisturized, plump and toned skin.
Smoothed eye area.`
    },
    {
      id: 18,
      label: "NEW",
      imgSrc: "../img/Product1/80105569_original_original_1.jpg",
      name: "Rose Radiance Peptide Day Cream for Mature Skin",
      size: "20ml",
      oldPrice: "$150.00",
      newPrice: 135.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Apply each morning. Learn more
Benefits
Densified skin.
Firming effect.
Smoothed skin texture.
Luminous and even complexion.
Instant healthy glow.
Energy booster for skin and morale.
Learn More
A pink tinted, 2-in-1 anti-aging + radiance-boosting day cream for mature skin that replenishes, visibly lifts, and smoothes wrinkles while providing a healthy, rosy glow.

For this generation of Rose Radiance Cream, Clarins Research targets the loss of rosy radiance in menopausal skin. At the heart of its unique formula is the new [PEPTIDE - POMEGRANATE POWER] radiance complex that helps to even out the complexion and re-energise the skin. The result: Smoother skin reflects light better and comes to life with an instantly healthy rosy glow.

Clarins has combined organic gorse and harungana extracts to target the signs of sagging skin caused by the fall in hormones during menopause. Together, they form a powerful duo with lifting and densifying properties. Skin appears re-densified, lifted and firmer.

The rosy hue of Rose Radiance Cream acts as an energy booster for both skin and morale, offering an immediate beautifying effect that revives the radiance of all women, whatever their skin type and complexion.

Made of 93% natural ingredients, Rose Radiance Cream offers a smooth, enveloping texture. It absorbs easily with no greasy residue when applied to the skin.
Innovation and plant expertise
For an energizing, radiance-enhancing effect, Clarins Research has developed the [Peptide - Pomegranate Power] Radiance Complex.
At the heart of this innovation: a duo of complementary active ingredients
- Organic Pomegranate extract: re-energises the skin
- Radiance peptide: helps with cell renewal and smooths the micro-relief of the epidermis.
Clarins Plus
Thanks to a consumer test called “Inner Radiance Booster”, Clarins has proven the effectiveness of this new generation of Rose Radiance cream, and highlighted its positive effect on self-confidence.`
    },
    {
      id: 19,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112650_original_original_1.jpg",
      name: "12-Day Advent Calendar",
      size: "Unit",
      oldPrice: "$251.00",
      newPrice: 135.0,
      description:`This 12-Day Advent Calendar celebrates the magic of the festive season with 3 carefully selected beauty routines for face care, body care and makeup: the very best of Clarins’ expertise to enhance your skin and look after yourself throughout December.
With its plastic-free case and 100% FSC-certified and recyclable paper, this eco-designed calendar is part of our commitment to reducing our environmental impact.

Ready for a cosmic party? Embark on the most fabulous journey, to the planet of Clarins.
This Advent calendar celebrates the magic of the festive season with a constellation of beauty surprises: 3 face care, body care and makeup routines carefully selected to pamper you throughout December.

The calendar's Parisian façade is a nod to Clarins' origins, celebrating 70 years of plant-based beauty and professional expertise.

In line with the brand's commitments, this calendar is eco-designed, with a plastic-free case made from FSC-certified paper, printed with plant-based and recyclable inks.
This set contains:
Beauty Flash Balm
Beauty Flash Balm
Face tightening cream that instantly erases signs of fatigue and restores radiance to the complexion for glowing skin. 
50 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Hydrating Toning Lotion 50 mL
Hydrating Toning Lotion 50 mL
The toning lotion that moisturizes, softens and helps to maintain the balance of normal to dry skin types. 
1 item
One-Step Gentle Exfoliating Cleanser 30 mL
One-Step Gentle Exfoliating Cleanser 30 mL
This refreshing exfoliating cleanser removes makeup, cleanses and gently exfoliates, all while maintaining the skin’s balance. 
1 item
Hydra-Essentiel Mask 15ml
Hydra-Essentiel Mask 15ml
The mask enriched with hyaluronic acids and ceramides for intense hydration and a strengthened skin barrier. 
1 item
Total Eye Lift 7 mL
Total Eye Lift 7 mL
Lift-Replenishing Eye Concentrate 
1 item
SOS Primer white 5 mL
SOS Primer white 5 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
SOS Lashes Serum Mascara 3 mL
SOS Lashes Serum Mascara 3 mL
The new half-mascara, half lash-care treatment that provides volume, length, density, curl and definition with every stroke. 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Moisture-Rich Body Lotion 30 mL
Moisture-Rich Body Lotion 30 mL
The perfect moisturizer for intense hydration on even the driest skin. 
1 item
Exfoliating Body Scrub For Smooth Skin 30 mL
Exfoliating Body Scrub For Smooth Skin 30 mL
Soften, smooth and firm with bamboo powder 
1 item
Hand and Nail Treatment Cream 30 mL
Hand and Nail Treatment Cream 30 mL
A moisturizer that softens, protects, hydrates, and strengthens your hands and nails. 
1 item`
    },
    {
      id: 20,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112630_original_original_1.webp",
      name: "Double Serum & Double Serum Eye Collection",
      size: "200ml - 400ml",
      oldPrice: "$252.00",
      newPrice: 216.0,
      description:`The essentials for radiant skin and bright eyes. The legendary Double Serum, formulated with 22 of the most powerful plant extracts to preserve skin's youthfulness, Double Serum Eye, which targets signs of aging around the eyes, the essential Beauty Flash Balm, which can be used as a daily treatment or mask to instantly reduce signs of fatigue and reveal a radiant complexion and the Wonder Perfect 4D Mascara for intense eyes. Finally, the addictive Lip Oil will give you irresistibly shiny lips. A vanity case holds all these products.
This set contains:
Double Serum Eye - Anti Aging Eye Care
Double Serum Eye - Anti Aging Eye Care
Intensive Anti-Aging Eye Treatment. 
20 ml
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum targets the signs of aging linked to natural aging and those induced by lifestyle and the environment 
30 ml
Beauty Flash Balm 15 mL
Beauty Flash Balm 15 mL
Instant radiance for tired skin 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Holiday Vanity Case
Holiday Vanity Case
Red holiday vanity case that holds all the products 
1 item
Benefits
Targets signs of aging
Boosts radiance
Enhances the eyes`
    },
    {
      id: 21,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: 38.7,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply to clean face and neck, morning and/or evening. Learn more
Benefits
Intensive Moisture Balm super-hydrates his skin
Tones, energizes and soothes
Calms razor burn
Nourishes skin
Tested by 6 divers under extreme arctic conditions
Anti-Pollution Complex
Learn More
Powered by ClarinsMens’ exclusive Hydra-Resist Phyto Complex—a blend of super-hydrating Organic Houseleek and Organic Leaf of Life extacts—this refreshing balm was tested by 6 divers under arctic conditions, to help a man’s skin withstand the most extreme temperatures.
Clarins Plus
Intensive moisture balm helps a man’s skin rebound from extreme sports, recover from cold weather, and survive a rough shave. Organic Sesame oil nourishes his skin, ClarinsMen Complex calms razor burn, and Bison Grass and Gymnema extracts soothe and energize.`
    },
    {
      id: 22,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80070887_original_original_1.jpg",
      name: "Extra-Firming Energy + Radiance Face Cream",
      size: "50ml",
      oldPrice: "$112.00",
      newPrice: 100.8,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Apply to the face and neck every morning. Learn more
Benefits
Enhancing and glow-boosting effect.
Visibly firms skin and smoothes wrinkles.
Anti-pollution protection.
Learn More
For skin that appears dull and fatigued, discover the energizing effect of this day cream, packed with plant extracts and glow-boosting superfruits. Skin not only looks more radiant but also visibly smoother and firmer, thanks to organic kangaroo and organic mitracarpus extracts. It has a creamy texture, delicate orange tint and fresh, energizing scent. Protected from the harmful effects of pollution, skin looks more youthful, day after day.
Clarins Plus
2-in-1 skin care that combines Clarins' firming expertise with the enhancing effect of a radiance cream.`
    },
    {
      id: 23,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "$38.00",
      newPrice: 27.5,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Liquid
Use: Mix 2-3 drops with your day or night moisturizer. Learn more
Benefits
Creates a natural-looking golden glow
Mistake-proof application is even and streak-free
Customizable results
Leaves skin soft, supple, and hydrated
Learn More
Why not add a little radiance and self-tanner to your skincare products when you have the chance? With Clarins’ Radiance Plus Golden Glow Booster, you can do exactly that - boost your luminous glow! To get this enhanced look, you can simply combine the Radiance Plus Booster with any Clarins’ face moisturizers and build your tan. Not only does this unique booster create a lovely, natural-looking self-tan effect, but it also keeps the moisturizing, anti-wrinkle and firming benefits of your usual day and night creams. So, for easy-to-achieve, one-step, 100% safe, radiant skin, treat your complexion to Radiance Plus Golden Glow Booster.
Dermatologically tested. Non comedogenic.`

    },
    {
      id: 24,
      label: "NEW",
      imgSrc: "../img/Product1/80112647_original_original_1.jpg",
      name: "Mascaras Collection",
      size: "Unit",
      oldPrice: "$44.00",
      newPrice: 39.0,
      description:`This set combines the 3 steps required for a perfect eye routine. First, a serum for your eyelashes that's part mascara, part treatment to add volume, length, density, curl and definition thanks to the Lash Boosting Complex developed by Clarins Laboratories. Then Wonder Perfect 4D Mascara to enhance, lengthen and curl lashes. Finally, use a top-coat mascara to set, tame and waterproof the makeup.
This set contains:
SOS Lashes Serum Mascara 3 mL
SOS Lashes Serum Mascara 3 mL
The new half-mascara, half lash-care treatment that provides volume, length, density, curl and definition with every stroke. 
1 item
Lash&Brow Double Fix Mascara 01 Eyes Miniature 3ml 2022
Lash&Brow Double Fix Mascara 01 Eyes Miniature 3ml 2022
Out of Stock 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Benefits
Lengthens lashes.
Strengthens lashes.
Enhances the eyes.
Fixes eye make-up in place.`
    },
    {
      id: 25,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112664_original_original_1.jpg",
      name: "Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin",
      size: "50ml",
      oldPrice: "",
      newPrice: 20.0,
      description:`Skin Type: Dry, Normal
Texture: With Water
Use: Apply morning and/or night. Learn more
Benefits
Moisturized skin
Perfectly cleansed skin
Learn More
Enriched with Alpine herb extracts from the Domaine Clarins, this foaming cleanser removes makeup, moisturizes and eliminates impurities while maintaining a balanced complexion.
Rich in organic aloe vera extract to moisturise the skin and make it supple and comfortable, this cleanser is ideal for balancing out normal to dry skin types.
Its formula is also rich in the Clarins [Gentle Complex] with organic yellow gentian and lemon balm extracts to soothe and soften the skin.
Finally, moringa extract prevents impurities from adhering to the skin.

A creamy texture that transforms into a soft, lightweight foam.

To minimise its environmental footprint, Clarins has redesigned this product in an even more eco-friendly tube with a lighter capsule.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe and soften the skin.
Clarins Plus
A new, creamy texture that transforms into a soft, lightweight foam.`
    },
    {
      id: 26,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112658_original_original_1.jpg",
      name: "Gentle Renewing Cleansing Mousse",
      size: "50ml",
      oldPrice: "",
      newPrice: 18.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Mousse
Use: Use morning and night. Learn more
Benefits
Cleansed and makeup free skin.
Clear, soft and soothed skin.
Radiant skin.
Learn More
This highly foaming cleansing mousse gently removes makeup and restores radiance to dull complexions while leaving the skin cleansed and feeling instantly renewed.
The tamarind pulp acids contain AHAs, which help to gently exfoliate the skin and make it more radiant.
Its formula is enriched with the Clarins [Gentle Complex] with organic yellow gentian and lemon balm extracts to soothe and soften the skin.
Moringa extract prevents impurities from adhering to the skin. Its highly practical pump bottle is easy to use.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe, calm and soften the skin.
Clarins Plus
Its highly foamy texture is suitable for all skin types and specifically those who prefer to cleanse using water. Easy to rinse.`
    },
    {
      id: 27,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112662_original_original_1.jpg",
      name: "Instant Eye Make-Up Remover",
      size: "50ml - 125ml",
      oldPrice: "",
      newPrice: 19.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Lotion
Use: Every evening. Learn more
Benefits
Removes waterproof makeup
Removes residue and impurities
Soothes and softens the skin around the eye
Protects lashes
Learn More
This instant makeup remover for eyes is for those who wear heavy or waterproof make-up and who want to take care of their eye area. Its non-greasy bi-phase texture gently removes waterproof makeup. It is rich in organic Alpine yellow gentian extract grown at the heart of the Domaine Clarins and organic cornflower extract to soothe the skin around the eyes.
What’s more: it is rich in panthenol, which helps to protect lashes.
To minimise its environmental footprint, Clarins has redesigned this product in an even more eco-friendly bottle with a lighter capsule.
Clarins Plus
A non-greasy bi-phase texture.`
    },
    {
      id: 28,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112660_original_original_1.jpg",
      name: "Cleansing Micellar Water",
      size: "100ml",
      oldPrice: "",
      newPrice: 24.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Lotion
Use: Use in the morning and at night. Learn more
Benefits
Cleansed and comfortable skin
Fresh skin.
Learn More
This fresh micellar water is perfect for removing makeup in one simple step.
Suitable for sensitive skin, it gently removes makeup from the face, eyes and lips as well as impurities and traces of pollution.
Its formula is enriched with the Clarins [Gentle Complex] with organic yellow gentian and lemon balm extracts to soothe and soften the skin.

The freshness of water with the effectiveness of a cleanser.

To reduce its environmental footprint, Clarins has redesigned this product in an eco-friendly bottle with a lighter capsule.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe and soften the skin.
Clarins Plus
An aqueous texture that can be applied to the face, eyes and lips.`
    },
    {
      id: 29,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083300_original_original_X.jpg",
      name: "Eau Dynamisante",
      size: "50ml",
      oldPrice: "",
      newPrice: 31.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Liquid
Use: Use every morning and top up at any time of day. Learn more
Benefits
Delicately scented skin.
Toned and firmed skin.
Energizing and refreshing sensation.
Learn More
The iconic first Clarins Treatment Fragrance! Made of 95% natural ingredients, it perfumes, energizes and tones the body and mind. It’s perfect for starting the day off right or fighting off a temporary bout of fatigue. Top notes of sweet and bitter orange, mandarin and petitgrain are the first to reveal their fresh scent. Heart notes of lavandin, eucalyptus, tarragon and nutmeg, combined with the aromas of patchouli, then lend Eau Dynamisante its invigorating character. The skin’s energy and firmness are restored thanks to the stimulating properties of organic red ginseng extract combined with toning organic lemon thyme extract. Its iconic red bottle is refillable.
Innovation and plant expertise
Clarins Treatment Fragrances draw their richness from the essence of plants: essential oils. Secreted in small quantities by aromatic plants then extracted, they are true natural concentrates. They bring all their beneficial properties to the skin and mind.
Clarins Plus
Created in 1987 by Jacques Courtin-Clarins, Eau Dynamisante was the first Treatment Fragrance that combined essential oils and plant extracts, the principles of aromatherapy and phytotherapy, to simultaneously perfume and care for your skin and mind.`
    },
    {
      id: 30,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083315_original_original_X.jpg",
      name: "Eau Ressourçante",
      size: "50ml",
      oldPrice: "$31.00",
      newPrice: 27.9,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Liquid
Use: Use every morning and top up at any time of day. Learn more
Benefits
Delicately scented skin.
Calming fragrance.
Feeling of serenity and freshness.
Learn More
The iconic Clarins Eau Dynamisante comes in a Ressourçante version. Floral and woody, this Treatment Fragrance, made of 93% natural ingredients, relieves stress and relaxes the body and mind. When struggling with fatigue or tension, it’s an excellent ally to help the skin and mind restore harmony and serenity. Top notes of basil and cardamom immediately refresh the skin. Heart notes of clary sage and iris, combined with the aromas of Benzoin (base note), then encourage relaxation. The skin’s comfort is restored thanks to the relaxing effect of the organic teasel extract, combined with the soothing properties of the robinia flower water. Its deep blue, refillable bottle is an invitation to let go and relax.
Innovation and plant expertise
Clarins Treatment Fragrances draw their richness from the essence of plants: essential oils. Secreted in small quantities by aromatic plants then extracted, they are true natural concentrates. They bring all their beneficial properties to the skin and mind.`
    },
    {
      id: 31,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80084964_original_original_A.webp",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "50ml",
      oldPrice: "$132.00",
      newPrice: 118.8,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Apply morning or night, before your day and night care. Learn more
Benefits
Brightens skin.
Evens skin tone.
Targets dark spots.
Hydrates.
Learn More
An oxygen shot for skin! The proven double oxygenating power of rose-myrtle and acerola seeds extracts boosts cellular respiration to revive a dull complexion, revealing brighter, radiant skin and a healthy glow from within.
Clarins Plus
Not one but two super oxygenating plants extracts that help skin 'breathe' better and look brighter.`
    },
    {
      id: 32,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80100571_original_original_1.webp",
      name: "Multi-Active Emulsion Moisturizer",
      size: "100ml",
      oldPrice: "",
      newPrice: 72.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Emulsion
Use: Apply day and night. Learn more
Benefits
Smooth skin.
Mattifying action.
Refined texture.
Boosted radiance.
Clarins Anti-Pollution Complex.
Learn More
Day and night, the skin needs to maintain its level of energy and resistance to cope with an intense daily lifestyle. This rich, lightweight emulsion, with 93% natural ingredients, contains an innovative technology:

• [Skin Charger Complex]: Niacinamide, combined with Sea Holly extract, form a powerful duo that helps to reduce the first visible signs of aging. The skin's barrier function is strengthened, its radiance revived and its youth preserved.
• Teasel extract, with its revitalising properties, energises the skin.
• Cassava root extract helps mattify the skin.
• Strawberry tree extract helps improve skin texture and reduce the appearance of pores.

Result: the skin seems smoothed, radiant and perfectly hydrated. The skin texture is refined.
Innovation and plant expertise
Clarins technological innovation: the [Skin Charger Complex].
A duo of powerful active ingredients: Niacinamide combined with organic Sea Holly extract helps smooth skin and boost its resistance.
Clarins Plus
Clarins Research has identified 8 visible signs of aging on the skin, accentuated by a busy, intense lifestyle and daily stress.We call this phenomenon stress aging: the acceleration of skin aging linked to stress induced by the pace of life. Multi-Active skincare targets a youthful appearance and promotes its resilience.`
    },
    {
      id: 33,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80092160_original_original_X.webp",
      name: "Hydra-Essentiel [HA²] Emulsion",
      size: "75ml",
      oldPrice: "$51.00",
      newPrice: 45.9,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Emulsion
Use: Every morning. Learn more
Benefits
Hydrated and plumped skin.
Soft skin.
Learn More
This emulsion, enriched with hyaluronic acid, organic leaf of life extract and organic Damascus rose water moisturizes and intensely plumps the skin, while softening it. At the heart of its formula, the Hyaluronic Power Complex developed by Clarins Laboratories helps boost the skin's natural self-hydration mechanisms and preserve its moisture reserves. Its fresh, liquid texture melts instantly into the skin to leave it plump, soft and comfortable.
Innovation and plant expertise
Hyaluronic Power Complex
For a triple hydrating and plumping action, Clarins Laboratories has combined an exclusive duo of low and high molecular weight hyaluronic acids [HA²] with organic leaf of life extract for the first time.
Clarins Plus
Plumped skin in 60 seconds*.*Consumer test, Emulsion, 101 women, after 60 seconds.`
    },
    {
      id: 34,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80092153_original_original_X.webp",
      name: "Hydra-Essentiel [HA²] Silky Cream",
      size: "30ml",
      oldPrice: 0,
      newPrice: 34.0,
      description:`Skin Type: Normal, Dry
Texture: Cream
Use: Every morning. Learn more
Benefits
Hydrated and plumped skin.
Learn More
This cream, enriched with hyaluronic acid and organic leaf of life extract, intensely hydrates and plumps the skin. At the heart of its formula, the Hyaluronic Power Complex developed by Clarins Laboratories helps boost the skin's natural self-hydration mechanisms and preserve its moisture reserves. Its fresh and silky texture melts instantly into the skin, leaving it plump, supple, luminous and comfortable.
Innovation and plant expertise
Hyaluronic Power Complex
For a triple hydrating and plumping action, Clarins Laboratories has combined an exclusive duo of low and high molecular weight hyaluronic acids [HA²] with organic leaf of life extract for the first time.
Clarins Plus
Plumped skin in 60 seconds*.*Consumer test, Silky Cream, 107 women, after 60 seconds.`
    },
    {
      id: 35,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80002597_original_original_A.webp",
      name: "Super Restorative Remodelling Serumr",
      size: "50ml",
      oldPrice: "$202.00",
      newPrice: 181.8,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Apply daily to clean face and neck, morning and/or evening. Learn more
Benefits
Helps visibly define facial contours
Minimizes the look of lines, wrinkles and skin slackening
Targets the look of dark spots
Boosts skin’s luminosity
Learn More
This new exceptional anti-aging treatment lifts the features, replenishes the skin, reshapes and redefines contours and the face shape, all while diminishing the appearance of age spots.

CLARINS ANTI-AGING INNOVATION
Precious narrow-leaf plantain combined with organic harungana extract helps protect the facial contours. By limiting the elimination of lipids by adipocytes, it prevents the melting of adipose tissue caused by ageing fibroblasts. It redefines the contours of the face and preserves harmonious facial contours.

IMPROVED DENSITY
In combination, organic harungana extract, a "healing" tree from Madagascar, reactivates hormone-depleted fibroblasts, which restores the substance of the dermis to combat the effects of gravity and help slow down skin slackening around the chin.

CORRECTING AGE SPOTS
Organic Montpellier rock-rose extract, nicknamed the 'phoenix plant', helps visibly reduce the look of age-related dark spots and restores the complexion's luminosity.`
    },
    {
      id: 36,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80076240_original_original_X.webp",
      name: "Moisture-Rich Body Lotion",
      size: "400ml",
      oldPrice: "$74.00",
      newPrice: 66.6,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Rich Cream Learn more
Benefits
Hydrates and intensely nourishes the skin.
Smooths the skin and makes it supple.
Learn More
Thanks to its concentration of shea butter, the Moisture Rich Body Lotion nourishes and hydrates all skin types, even the driest. Its naturally-sourced extracts of organic raspberry water, tamarind pulp acids and organic oat sugars soften and smooth the skin. Its melting texture instantly penetrates the skin, meaning you can get dressed immediately after applying.

Clarins Plus
A new formula rich in shea butter with a maximum of naturally-sourced ingredients.`
    },
    {
      id: 37,
      label: "NEW",
      imgSrc: "../img/Product1/80104492_original_original_1.webp",
      name: "Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin",
      size: "125ml",
      oldPrice: "",
      newPrice: 46.00,
      description:`Skin Type: Dry, Normal
Texture: With Water
Use: Apply morning and/or night. Learn more
Benefits
Moisturized skin
Perfectly cleansed skin
Learn More
Enriched with Alpine herb extracts from the Domaine Clarins, this foaming cleanser removes makeup, moisturizes and eliminates impurities while maintaining a balanced complexion.
Rich in organic aloe vera extract to moisturise the skin and make it supple and comfortable, this cleanser is ideal for balancing out normal to dry skin types.
Its formula is also rich in the Clarins [Gentle Complex] with organic yellow gentian and lemon balm extracts to soothe and soften the skin.
Finally, moringa extract prevents impurities from adhering to the skin.

A creamy texture that transforms into a soft, lightweight foam.

To minimise its environmental footprint, Clarins has redesigned this product in an even more eco-friendly tube with a lighter capsule.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe and soften the skin.
Clarins Plus
A new, creamy texture that transforms into a soft, lightweight foam.`
    },
    {
      id: 38,
      label: "NEW",
      imgSrc: "../img/Product1/80104490_original_original_1.webp",
      name: "Soothing Gentle Foaming Face Cleanser for Dry Skin",
      size: "125ml",
      oldPrice: "",
      newPrice: 46.0,
      description:`Skin Type: Dry
Texture: With Water
Use: Apply morning and/or night. Learn more
Benefits
Soothed and comforted skin
Perfectly cleansed skin
Learn More
This foaming cleanser rich in Alpine herb extracts from the Domaine Clarins removes makeup, soothes dry skin and rids it of impurities while maintaining a balanced complexion.
Rich in active ingredients chosen specifically to balance out very dry or sensitive skin: organic shea butter helps to moisturise the skin while organic chamomile extract helps to reduce feelings of discomfort.
Its formula is also rich in the Clarins [Gentle Complex] with organic yellow gentian and lemon balm extracts to soothe and soften the skin.
Finally, moringa extract prevents impurities from adhering to the skin.

A creamy, comforting texture that transforms into a soft, lightweight foam.

To minimise its environmental footprint, Clarins has redesigned this product in an even more eco-friendly tube with a lighter capsule.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe and soften the skin.
Clarins Plus
A new creamy, comforting texture that transforms into a soft, lightweight foam.`
    },
    {
      id: 39,
      label: "NEW",
      imgSrc: "../img/Product1/80104509_original_original_1.webp",
      name: "One-Step Gentle Exfoliating Cleanser",
      size: "50ml",
      oldPrice: "20.00",
      newPrice: 15.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: With Beads
Use: Every day, morning and/or night. Learn more
Benefits
Makeup free and cleansed skin
Exfoliated skin
Invigorated skin
Learn More
This 3-in-1 cleanser, rich in Alpine herb extracts from the Domaine Clarins, removes makeup, cleanses and exfoliates all skin types in one simple step while maintaining a balanced complexion.
Rich in organic soapwort and kiwi extracts, it leaves skin cleansed, fresh and radiant.
The Clarins [Gentle Complex] with organic yellow gentian and organic lemon balm extracts helps to soothe and soften the skin.

This fresh gel enriched with plant-based microbeads transforms into a lightweight and creamy foam. A light 'peeling' effect gently leaves the skin soft and clear after rinsing.

To minimise its environmental footprint, Clarins has redesigned this product in an even more eco-friendly tube with a lighter capsule.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe, calm and soften the skin.
Clarins Plus
A fresh gel with microbeads that offers multifunctional makeup removal that is quick, gentle and effective.`
    },
    {
      id: 40,
      label: "NEW",
      imgSrc: "../img/Product1/80105707_original_original_1.webp",
      name: "Gentle Renewing Cleansing Mousse",
      size: "150ml",
      oldPrice: "",
      newPrice: 46.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Mousse
Use: Use morning and night. Learn more
Benefits
Cleansed and makeup free skin.
Clear, soft and soothed skin.
Radiant skin.
Learn More
This highly foaming cleansing mousse gently removes makeup and restores radiance to dull complexions while leaving the skin cleansed and feeling instantly renewed.
The tamarind pulp acids contain AHAs, which help to gently exfoliate the skin and make it more radiant.
Its formula is enriched with the Clarins [Gentle Complex] with organic yellow gentian and lemon balm extracts to soothe and soften the skin.
Moringa extract prevents impurities from adhering to the skin. Its highly practical pump bottle is easy to use.
Innovation and plant expertise
Clarins [GENTLE COMPLEX]
Composed of organic yellow gentian and lemon balm extracts from the Domaine Clarins, specifically selected to bring you all the freshness and purity of the Alps.
Helps to soothe, calm and soften the skin.
Clarins Plus
Its highly foamy texture is suitable for all skin types and specifically those who prefer to cleanse using water. Easy to rinse.`
    },
    {
      id: 41,
      label: "NEW",
      imgSrc: "../img/Product1/80082064_original_original_1.webp",
      name: "One-Step Facial Cleanser with Orange Extract",
      size: "200ml",
      oldPrice: "",
      newPrice: 45.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Lotion
Use: Every evening. Learn more
Benefits
Cleansed and makeup free skin in one simple step.
Refreshed skin.
Restored radiance.
Learn More
This bi-phase makeup remover is the perfect combination between a cleanser and a lotion to leave skin clean in one simple step. This toning face care with orange and moringa extracts removes all traces of makeup and rids your skin of impurities and dead cells. Moringa extract prevents impurities from adhering to the skin.

To minimise its environmental footprint, Clarins has redesigned this product in an even more eco-friendly bottle with a lighter capsule.
Clarins Plus
A bi-phase texture with plant extracts to cleanse all skin types in one simple step.`
    },
    {
      id: 42,
      label: "NEW",
      imgSrc: "../img/Product1/80104513_original_original_1.webp",
      name: "Purifying Toning Lotion",
      size: "200ml",
      oldPrice: "",
      newPrice: 45.0,
      description:`Skin Type: Dry, Normal
Texture: Lotion
Use: Morning and/or evening on clean skin Learn more
Benefits
Moisturized skin
Beautiful, soft and fresh skin
Rebalanced skin
Preserves the skin's microbiota
Learn More
The perfect toning lotion for removing makeup from normal to dry skin.
Rich in organic fig and aloe vera extracts that help to moisturise the skin.
This formula is also rich in Clarins' [Microbiota Complex], which combines polyphenols from saffron flowers and marine-based prebiome to help preserve the balance of skin microbiota.

A refreshing, lightweight and comfortable toner.

To reduce its environmental footprint, Clarins has redesigned this product in an even more eco-friendly bottle with a lighter capsule. And, for the first time, it is refillable thanks to its new eco-refill.
Innovation and plant expertise
Clarins [MICROBIOTA COMPLEX]
Composed of polyphenols from
saffron flowers and marine-based
prebiome, it helps to preserve the
balance of skin microbiota.
Clarins Plus
A light and comfortable toner that leaves skin feeling fresh.`
    },
    {
      id: 43,
      label: "NEW",
      imgSrc: "../img/Product1/80102469_original_original_1.jpg",
      name: "Precious La Mousse Foaming Face Cleanser",
      size: "125ml",
      oldPrice: "",
      newPrice: 130.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Mousse
Use: Use morning and/or evening. Learn more
Benefits
Thoroughly cleansed and exfoliated skin
Hydrated and softened skin
Refreshed and comforted skin
Learn More
This treatment offers a unique cleansing experience, enhanced by the use of a brush. The purity and comfort of clean, fresh and revitalised skin with the Moonlight Flower cryoextract’s exceptional rejuvenating power at the heart of the formula.

This treatment has a dual effect:
- Ultra gentle cleansing action - soapwort extract cleanses the skin and prickly pear extract contributes to its radiance. It exfoliates to get rid of impurities.
- Skincare action - Moonlight Flower extract is the most precious ally in reactivating skin’s youthfulness. Moonlight Flower essence is extracted through a unique cryoextraction procedure at -196°C .

It is combined with powerful plant extracts:
- Camellia oil helps to hydrate the skin.
- Raspberry water.
- Leaf of life extract boosts the skin’s natural synthesis of hyaluronic acid, preserving hydration.
Innovation and plant expertise
Clarins Laboratories have deciphered the youthful secret of a rare flower: The Moonlight Flower. Thanks to the cryoextraction process, the precious Moonlight Flower cryoextract is obtained, which helps to preserve the appearance of younger-looking, more resistant and more radiant skin.
Clarins Plus
Clarins Precious offers an exceptional skincare range that is 100% French and 100% Clarins: featuring the rare Moonlight Flower grown in Brittany, a unique active ingredient processed in the South of France, a fragrance created in Grasse, and sophisticated packaging designed in Paris. *at Clarins`
    },
    {
      id: 44,
      label: "NEW",
      imgSrc: "../img/Product1/80104514_original_original_1.webp",
      name: "Soothing Toning Lotion",
      size: "200ml",
      oldPrice: "",
      newPrice: 45.0,
      description:`What it is
Skin Type: Dry
Texture: Lotion
Use: Morning and/or evening on clean skin Learn more
Benefits
Soothed and comfortable skin.
Fresh skin
Beautiful, soft and fresh skin
Rebalanced skin
Preserves the skin's microbiota
Learn More
The perfect toning lotion for removing makeup from very dry or sensitive skin.
Rich in organic chamomile extract chosen specifically to soothe and soften dry skin.
This formula is also rich in the Clarins [Microbiota Complex], which combines polyphenols from saffron flowers and marine-based prebiome to help preserve the balance of skin microbiota.

To reduce its environmental footprint, Clarins has redesigned this product in an even more eco-friendly bottle with a lighter capsule. And, for the first time, it is refillable thanks to its new eco-refill.
Innovation and plant expertise
Clarins [MICROBIOTA COMPLEX]
Composed of polyphenols from
saffron flowers and marine-based
prebiome, it helps to preserve the
balance of skin microbiota.
Clarins Plus
A light and comfortable toner that leaves skin feeling fresh.`
    },
    {
      id: 45,
      label: "NEW",
      imgSrc: "../img/Product1/80087951_original_original_1.webp",
      name: "Precious La Lotion Age-Defying Treatment Essence",
      size: "150ml",
      oldPrice: "144.00",
      newPrice: 160.7,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Prepares the skin before La Crème is applied.
Moisturizes and plumps the skin.
Smooths and softens the skin.
Learn More
A fresh and comfortable Essence-Lotion: the first step in the Clarins Precious ritual. Its fluid and refreshing texture with a delicate fragrance is a sensory experience. Its organic leaf of life extract boosts the skin’s natural hydration mechanisms, while the acerola seed extract helps revive its radiance. The skin is smoothed, softened and plumped. This beneficial lotion perfectly prepares the skin to fully receive the active ingredients of La Crème and optimizes the treatment, day after day.
Innovation and plant expertise
Clarins Laboratories have deciphered the youthful secret of a rare flower: the moonight flower. Thanks to the cryoextraction process, the precious moonlight flower cryoextract is obtained, which helps to preserve the appearance of younger-looking, more resistant and more radiant skin.
Clarins Plus
Clarins Precious is an exceptional skincare line that is 100% French and 100% Clarins: it features the rare moonlight flower grown in Brittany, a unique active ingredient processed in the South of France, a fragrance created in Grasse and sophisticated packaging designed in Paris.`
    },
    {
      id: 46,
      label: "",
      imgSrc: "../img/Product1/80083073_original_original_X.jpg",
      name: "Multi-Intensive Smoothing Treatment Essence",
      size: "200ml",
      oldPrice: "82.00",
      newPrice: 73.8,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Lotion
Use: Apply daily, morning and/or evening, to clean, dry skin. Learn more
Benefits
Hydrates skin.
Leaves skin renewed and reenergized.
Visibly smoothes and replenishes.
Learn More
This smoothing treatment essence, perfect for all skin types, combines powerful botanical ingredients and a hyaluronic acid complex to intensely moisturize skin for 8 hours*, while renewing and reenergizing it. Its age-specific formula helps visibly smooth and replenish. It also preps the skin to absorb skin care applied afterwards. A comforting texture that dives deep, leaving skin feeling plump and supple. Its eco-designed bottle uses a minimum of 25% recycled plastic.
*Clinical test, 25 women
Clarins Plus
Our range of treatment essences is specially formulated to address age-specific concerns by infusing skin with potent anti-aging plant extracts.`
    },
    {
      id: 47,
      label: "",
      imgSrc: "../img/Product1/80083072_original_original_X.jpg",
      name: "Extra-Firming Firming Essence",
      size: "200ml",
      oldPrice: "",
      newPrice: 72.0,
      description:`Use: Apply daily, morning and/or evening, to clean, dry skin. Learn more
Benefits
Hydrates skin.
Boosts skin's energy and radiance.
Visibly smoothes, and plumps.
Visibly firms, lifts, and fights wrinkles.
Learn More
This firming treatment essence, perfect for all skin types, combines powerful botanical ingredients and a hyaluronic acid complex to intensely moisturize skin for 8 hours*, while renewing and reenergizing it. Its age-specific formula helps keep skin visibly firm and elastic. It also preps the skin to absorb skin care applied afterwards. A velvety texture that dives deep, leaving skin feeling plump and supple. Its eco-designed bottle uses a minimum of 25% recycled plastic.
*Clinical test, 25 women
Clarins Plus
Our range of treatment essences is specially formulated to address age-specific concerns by infusing skin with potent anti-aging plant extracts.`
    },
    {
      id: 48,
      label: "",
      imgSrc: "../img/Product1/80083071_original_original_X.jpg",
      name: "Multi-Active Revitalizing Essence",
      size: "200ml",
      oldPrice: "62.00",
      newPrice: 55.8,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Lotion
Use: Apply daily, morning and/or evening, to clean, dry skin. Learn more
Benefits
Deeply hydrates for 8 hours*.
Boosts skin's energy and radiance.
Mattifies skin.
Refines pores.
Revitalizes and visibly addresses signs of aging and imperfections.
Learn More
This revitalitizing treatment essence, perfect for all skin types, combines powerful botanical ingredients and a hyaluronic acid complex to intensely moisturize skin for 8 hours*, while renewing and reenergizing it. Its age specific formula helps to preserve the skin's youth and visibly reduce the look of pores. It also preps the skin to absorb skin care applied afterwards. A super lightweight texture that dives deep, leaving skin feeling supple. Its eco-designed bottle uses a minimum of 25% recycled plastic.
*Clinical test, 25 women
Clarins Plus
Our range of treatment essences is specially formulated to address age-specific concerns by infusing skin with potent anti-aging plant extracts.`
    },
    {
      id: 49,
      label: "NEW",
      imgSrc: "../img/Product1/80103084_original_original_1.webp",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "50ml",
      oldPrice: "157.00",
      newPrice: 141.3,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Just one drop for smooth, youthful-looking skin.
Fine lines are visibly smoothed.
Firmer, plumper, more radiant skin
Refined skin texture, reduced pores
Learn More
Double Serum is pushing the boundaries of anti-aging innovation and reinventing itself in a new generation with increased power*.

Its unique dual formula, made up of 95% naturally-sourced ingredients, combines 22 powerful plant extracts, including the iconic turmeric extract, with 5 new pure active molecules to stimulate the skin's 5 vital functions.

Inspired by the science of epigenetics, its unique Epi-ageing Defense technology targets the signs of aging linked to lifestyle-induced aging. Empowered by Provence tall reed extract, it helps strengthen the skin's resistance to its environment to limit the appearance of aging.

Its new packaging contains 94%** recyclable materials and features its [Hydric + Lipidic System], which preserves the intrinsic qualities of these two phases.

*Compared with Double Serum generation 8
**Base 50ml format
Innovation and plant expertise
Epi-Ageing Defense technology: for the first time, the exclusive Provence tall reed extract helps to neutralise 100% of lifestyle-related epigenetic changes.
This extract is an exclusive Clarins development and 100% made in France.
Clarins Plus
For the 1st time*, a ground-breaking Clarins clinical study carried out on over 60 twins has quantified the impact of lifestyle on skin aging. Clarins Research has given this aging phenomenon the name Epi-ageing, proving that an "unbalanced" lifestyle accentuates the signs of aging.*at Clarins`
    },
    {
      id: 50,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Lunar New Year Edition",
      size: "75ml",
      oldPrice: "",
      newPrice: 204.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Just one drop for smooth, youthful-looking skin.
Fine lines are visibly smoothed.
Firmer, plumper, more radiant skin
Refined skin texture, reduced pores.
Learn More
This exclusive limited edition Double Serum celebrates the year of the snake and the power to reawaken radiance.
Double Serum is pushing the boundaries of anti-aging innovation and reinventing itself in a new generation with increased power*.
Its unique dual formula, made up of 95% naturally-sourced ingredients, combines 22 powerful plant extracts, including the iconic turmeric extract, with 5 new pure active molecules to stimulate the skin's 5 vital functions.
Inspired by the science of epigenetics, its unique Epi-ageing Defense technology targets the signs of aging linked to lifestyle-induced aging. Empowered by Provence tall reed extract, it helps strengthen the skin's resistance to its environment to limit the appearance of aging.
Its new packaging contains 94%** recyclable materials and features its [Hydric + Lipidic System], which preserves the intrinsic qualities of these two phases.
*Compared with Double Serum generation 8.
**Based on a 50 ml format.
Innovation and plant expertise
Epi-Ageing Defense technology : for the first time, the exclusive Provence tall reed extract helps to neutralise 100%* of lifestyle-related epigenetic changes.
This extract is an exclusive Clarins development and made in France.
*in vitro test on ingredient
Clarins Plus
For the 1st time*, a ground-breaking Clarins clinical study carried out on over 60 twins has quantified the impact of lifestyle on skin aging. Clarins Research has given this aging phenomenon the name Epi-ageing, proving that an "unbalanced" lifestyle accentuates the signs of ageing.*at Clarins`
    },
    {
      id: 51,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80093147_original_original_A.webp",
      name: "Double Serum Light Texture Anti-Aging Serum",
      size: "50ml",
      oldPrice: "142.00",
      newPrice: 127.8,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Firmer skin, smoothed wrinkles.
Radiance and even complexion restored, pores reduced.
Preserves the skin’s youth and beauty.
“Barely there” finish.
Learn More
The iconic Double Serum is available in a light, imperceptible texture, with proven results on signs of aging. Developed by Clarins Research, its unique dual formula combines 21 powerful plant extracts that help boost the 5 vital functions of the skin - regeneration, nutrition, oxygenation, hydration, protection - and act on signs of aging. Its dual texture leaves an immediate "barely there" finish and a pleasant fragrance with fruity, floral, fresh and refined notes.

The nested bottles contain the two formulas in a technological and eco-designed feat that prioritizes responsible materials and limits waste.

This product won the Consumer's Choice - Skincare, at the 2024 Beauty's Best Awards.
Innovation and plant expertise
Its lipidic phase, modified by 70%*, contains ultra-light and "evanescent" oils that draw the active ingredients onto the skin, then evaporate, leaving an immediate "barely there" finish and offering an exceptional sensory effect on application.
*Compared to Double Serum
Clarins Plus
Ideal for use during warmer seasons, for men, and for people with combination-to-oily skin. What’s innovative about Double Serum Light Texture is its new trio of ultra-light molecules chosen for their volatility: "evanescent" oils that draw the active ingredients onto the skin, then disappear, leaving an immediate "bare skin" finish with no residue.`
    },
    {
      id: 52,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112630_original_original_1.webp",
      name: "One-Step Gentle Exfoliating Cleanser",
      size: "Unit",
      oldPrice: "",
      newPrice: 216.0,
      description:`The essentials for radiant skin and bright eyes. The legendary Double Serum, formulated with 22 of the most powerful plant extracts to preserve skin's youthfulness, Double Serum Eye, which targets signs of aging around the eyes, the essential Beauty Flash Balm, which can be used as a daily treatment or mask to instantly reduce signs of fatigue and reveal a radiant complexion and the Wonder Perfect 4D Mascara for intense eyes. Finally, the addictive Lip Oil will give you irresistibly shiny lips. A vanity case holds all these products.
This set contains:
Double Serum Eye - Anti Aging Eye Care
Double Serum Eye - Anti Aging Eye Care
Intensive Anti-Aging Eye Treatment. 
20 ml
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum targets the signs of aging linked to natural aging and those induced by lifestyle and the environment 
30 ml
Beauty Flash Balm 15 mL
Beauty Flash Balm 15 mL
Instant radiance for tired skin 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Holiday Vanity Case
Holiday Vanity Case
Red holiday vanity case that holds all the products 
1 item
Benefits
Targets signs of aging
Boosts radiance
Enhances the eyes`
    },
    {
      id: 53,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112622_original_original_1.webp",
      name: "Double Serum & Extra-Firming Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 159.00,
      description:`The youthful radiance skincare set. Firmer, smoother skin, day after day, thanks to the complementary action of Double Serum with its 22 plant extracts to target signs of aging, the radiance-boosting SOS Primer base and the Extra-Firming creams: Energy for an energizing healthy glow and Night formulated with a firming kangaroo flower extract that reveals the youthfulness of your face and offers an instant lifting effect. A large case holds all these products.
This set contains:
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum targets the signs of aging linked to natural aging and those induced by lifestyle and the environment 
50 ml
Extra-Firming Energy 15 mL
Extra-Firming Energy 15 mL
Anti-aging day cream for women in their 40s that leaves skin visibly firmer and instantly glowing. 
1 item
Extra-Firming Night - All Skin Types 15 mL
Extra-Firming Night - All Skin Types 15 mL
Age-defying night cream that visibly firms, lifts, and fights wrinkles. 
1 item
SOS Primer white 5 mL
SOS Primer white 5 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
Large Holiday Pouch
Large Holiday Pouch
Red pouch that holds all the products 
1 item
Benefits
Targets signs of aging
Firms
Visibly reduces wrinkles`
    },
    {
      id: 54,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112619_original_original_1.webp",
      name: "Double Serum & Multi-Active Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 159.00,
      description:`The youth skincare set that targets the first signs of aging. First, the legendary Double Serum, formulated with 22 plant extracts, targets signs of aging. This is followed by the Multi-Active Day and Night Creams, formulated with a powerful duo [Niacinamide + Sea Holly extract] to help boost the skin's resistance and reduce the first visible signs of aging. They help to moisturize the skin while preserving its youthfulness. And to boost radiance, there’s the SOS Primer base. A large case holds all these products.
This set contains:
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum targets the signs of aging linked to natural aging and those induced by lifestyle and the environment 
50 ml
Multi-Active Day Cream - All Skin Types 15 mL
Multi-Active Day Cream - All Skin Types 15 mL
Smoothing and radiance boosting cream. Melting texture. Enriched with [NIACINAMIDE + SEA HOLLY EXTRACT]. 
1 item
Multi-Active Night Cream - All Skin Types 15 mL
Multi-Active Night Cream - All Skin Types 15 mL
Smoothing and renewing night cream enriched with [NIACINAMIDE + SEA HOLLY EXTRACT]. Comforting texture. 
1 item
SOS Primer white 5 mL
SOS Primer white 5 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
Large Holiday Pouch
Large Holiday Pouch
Red pouch that holds all the products 
1 item
Benefits
Targets signs of aging
Boosts radiance`
    },
    {
      id: 55,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112628_original_original_1.webp",
      name: "Double Serum Luminosity Trio",
      size: "Unit",
      oldPrice: "",
      newPrice: 159.00,
      description:`The essentials for a radiant face. The legendary Double Serum, formulated with 22 of the most powerful plant extracts to preserve the skin's youthful appearance, and the essential Beauty Flash Balm, which can be used as a daily treatment or mask to instantly reduce signs of fatigue and revive the complexion's radiance. Finally, the addictive Lip Oil will give you irresistibly shiny lips. A large case holds all these products.
This set contains:
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum targets the signs of aging linked to natural aging and those induced by lifestyle and the environment 
50 ml
Beauty Flash Balm 15 mL
Beauty Flash Balm 15 mL
Instant radiance for tired skin 
1 item
Mini Lip Comfort Oil - 01 honey 1.4 mL
Mini Lip Comfort Oil - 01 honey 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Large Holiday Pouch
Large Holiday Pouch
Red pouch that holds all the products 
1 item
Benefits
Targets signs of aging
Boosts radiance
Nourishes lips`
    },
    {
      id: 56,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112627_original_original_1.webp",
      name: "Double Serum & Nutri-Lumière Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 159.00,
      description:`The youthful skincare set that helps skin lacking in nutrition regain its radiance and luminosity. The iconic Double Serum with 22 plant extracts and the brightening SOS Primer base are combined with the Nutri-Lumière Revive & Night Duo with organic flower extracts and horse chestnut escin: wrinkles are visibly smoothed, radiance is restored and the skin is replenished and nourished. It regains its full radiance. A large case holds all these products.
This set contains:
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum Anti Aging + Anti Wrinkle Serum
Double Serum targets the signs of aging linked to natural aging and those induced by lifestyle and the environment 
50 ml
Nutri-Lumière Revive 15 mL
Nutri-Lumière Revive 15 mL
Beautifying, revitalizing and firming day cream for mature skin. 
1 item
Nutri-Lumière Night 15 mL
Nutri-Lumière Night 15 mL
Intense restorative cream for all skin types. 
1 item
SOS Primer white 5 mL
SOS Primer white 5 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
Large Holiday Pouch
Large Holiday Pouch
Red pouch that holds all the products 
1 item
Benefits
Targets signs of aging
Revitalises
Brightens`
    },
    {
      id: 57,
      label: "",
      imgSrc: "../img/Product1/80092151_original_original_1.webp",
      name: "Hydra-Essentiel Bi-phase Serum",
      size: "30ml",
      oldPrice: 68.00,
      newPrice: 61.20,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Every day, morning and night. Learn more
Benefits
Instant and long-lasting skin hydration
Plumped skin
Strengthened skin barrier
Improves skin quality
Learn More
This bi-phase serum has a duo hydric and lipidic texture that provides intense hydration.

At the heart of its formula is the [HYALURONIC POWER COMPLEX +], a duo of hyaluronic acids with organic leaf of life extract, which provides continuous, multi-level and long-lasting hydration. The organic leaf of life extract + hyaluronic acid help to intensely hydrate and plump the skin. Acetylated hyaluronic acid, the formula’s standout ingredient, provides intense hydration.
The formula is also enriched with saffron flower polyphenols to help balance the microbiota and organic strawberry tree extract to regulate sebum. It helps refine skin texture and tighten pores. It balances the skin* and improves its quality. Skin radiates with beauty after each use.

The silky and non-greasy formula absorbs easily and nourishes the skin.
For all skin types.

*Clinical study on transepidermal water loss.
Innovation and plant expertise
[HYALURONIC POWER COMPLEX +] Clarins combines low molecular weight hyaluronic acid with acetylated hyaluronic acid. As the standout ingredient of this formula, it intensely hydrates thanks to a 13-times-longer lifespan compared to classic hyaluronic acid.*
*in vitro test on the ingredient
Clarins Plus
A bi-phase texture inspired by the dual hydric and lipidic nature of the skin. This unique* active texture reinforces the skin's hydrolipidic film, limiting excessive water loss. *at Clarins`
    },
    {
      id: 58,
      label: "LUXURY SIZE",
      imgSrc: "../img/Product1/80084964_original_original_A.webp",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "50ml",
      oldPrice: 132.00,
      newPrice: 118.80,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Apply morning or night, before your day and night care. Learn more
Benefits
Brightens skin.
Evens skin tone.
Targets dark spots.
Hydrates.
Learn More
An oxygen shot for skin! The proven double oxygenating power of rose-myrtle and acerola seeds extracts boosts cellular respiration to revive a dull complexion, revealing brighter, radiant skin and a healthy glow from within.
Clarins Plus
Not one but two super oxygenating plants extracts that help skin 'breathe' better and look brighter.`
    },
    {
      id: 59,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80084964_original_original_1.jpg",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "30ml",
      oldPrice: 100.00,
      newPrice: 90.00,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Serum
Use: Apply morning or night, before your day and night care. Learn more
Benefits
Brightens skin.
Evens skin tone.
Targets dark spots.
Hydrates.
Learn More
An oxygen shot for skin! The proven double oxygenating power of rose-myrtle and acerola seeds extracts boosts cellular respiration to revive a dull complexion, revealing brighter, radiant skin and a healthy glow from within.
Clarins Plus
Not one but two super oxygenating plants extracts that help skin 'breathe' better and look brighter.`
    },
    {
      id: 60,
      label: "",
      imgSrc: "../img/Product1/80090396_original_original_X.jpg",
      name: "Bright Plus Fresh Ampoule",
      size: "8ml",
      oldPrice: 44.00,
      newPrice: 39.60,
      description:`Skin Type: Oily
Texture: Liquid
Use: Every morning and night. Learn more
Benefits
Improves radiance.
Evens skin tone.
Learn More
This ampoule treatment is formulated with a unique Vitamin C complex, concentrated at 15%, and a brightening essence enriched with two superfruit extracts, acerola and rose-myrtle. The two-layer formula only mixes together on application, thanks to Clarins’ fresh-mix packaging.
This intensive brightening treatment reduces dullness, leaving the complexion radiant and more even. Its fluid texture is fast-absorbing, non-drying and super sensorial. The minimalistic formula features only 15 ingredients, including 1 organically-cultivated plant.
Innovation and plant expertise
Clarins fresh-mix packaging stabilizes the pure Vitamin C in powder form and keeps it separate, preserving its potency until the 1st application.
Clarins Plus
For even better efficacy, pair the ampoule with our Bright Plus Serum. You can also choose to extend the ampoule program to 14 and even 28 days, using a 2nd, 3rd and 4th ampoule, when season’s change or before an important event.`
    },
    {
      id: 61,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80102954_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "400ml",
      oldPrice: 144.00,
      newPrice: 129.60,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Every day, morning and night. Learn more
Benefits
The appearance of cellulite is reduced.
Skin is more toned and smoother.
The figure is more sculpted.
Learn More
Body Fit Active, the No. 1 expert firming skincare*, helps reduce the appearance of stubborn cellulite, tone the skin and reshape the figure.

Its expert formula, made with 96% naturally derived ingredients, helps improve the firmness of the skin. It is smoother and more toned after 14 days**. Its organic matcha tea extract promotes energy release and helps firm the skin. It is combined with plant-based caffeine to create the [Skin Smoothing Power Complex]. A duo of active ingredients with dual fat-limiting and eliminating action.

*No.1 anti-cellulite treatment for the body. Source Circana Group BeautyTrends®, Europe 5 (France, Germany, United Kingdom, Italy and Spain), Selective Retailing (products sold in perfume shops and department stores), sales in value (€) and units, over the period January 2022 to December 2022.
**Satisfaction test 108 women, 14 days
Innovation and plant expertise
CLARINS INNOVATION: [SKIN SMOOTHING POWER COMPLEX]
Organic matcha tea extract is combined with the lipolytic power of plant-based caffeine for an enhanced action on the appearance of cellulite.
Clarins Plus
With an icy feeling inspired by cryo-lipolysis, Body Fit Active’s sensory texture completes the skincare action. It provides an instant tightening effect that lasts over time for more beautiful skin.`
    },
    {
      id: 62,
      label: "",
      imgSrc: "../img/Product1/80102952_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "200ml",
      oldPrice: 90.00,
      newPrice: 81.00,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Every day, morning and night. Learn more
Benefits
The appearance of cellulite is reduced.
Skin is more toned and smoother.
The figure is more sculpted.
Learn More
Body Fit Active, the No. 1 expert firming skincare*, helps reduce the appearance of stubborn cellulite, tone the skin and reshape the figure.

Its expert formula, made with 96% naturally derived ingredients, helps improve the firmness of the skin. It is smoother and more toned after 14 days**. Its organic matcha tea extract promotes energy release and helps firm the skin. It is combined with plant-based caffeine to create the [Skin Smoothing Power Complex]. A duo of active ingredients with dual fat-limiting and eliminating action.

*No.1 anti-cellulite treatment for the body. Source Circana Group BeautyTrends®, Europe 5 (France, Germany, United Kingdom, Italy and Spain), Selective Retailing (products sold in perfume shops and department stores), sales in value (€) and units, over the period January 2022 to December 2022.
**Satisfaction test 108 women, 14 days
Innovation and plant expertise
CLARINS INNOVATION: [SKIN SMOOTHING POWER COMPLEX]
Organic matcha tea extract is combined with the lipolytic power of plant-based caffeine for an enhanced action on the appearance of cellulite.
Clarins Plus
With an icy feeling inspired by cryo-lipolysis, Body Fit Active’s sensory texture completes the skincare action. It provides an instant tightening effect that lasts over time for more beautiful skin.`
    },
    {
      id: 63,
      label: "",
      imgSrc: "../img/Product1/80093316_original_original_X.jpg",
      name: "Super Restorative Balm For Abdomen and Waist",
      size: "200ml",
      oldPrice: 104.00,
      newPrice: 93.60,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Balm
Use: Every day, morning and night. Learn more
Benefits
Slimmed, sculpted and toned waist.
Toned figure.
Intensely moisturized, supple and firm skin.
Learn More
This balm targets sagging and helps to redefine the stomach and waist to give them shape. Because women's bodies change from the age of 50 onwards, a suitable reshaping product can significantly help to firm the abdominal area. Organic cryptomeria extract, an active ingredient derived from gemmotherapy, has shown its effectiveness in anti-lipogenesis action targeted on the storage and distribution of fat. It helps to reduce excess 11ß-HSD1 enzyme, the protein responsible for abdominal storage during menopause. Formula with 94% natural ingredients.
Innovation and plant expertise
Organic cryptomeria extract is derived from the buds of Japanese cedar. These buds contain all the nutrients, vitamins and minerals that enable the plants to grow and regenerate. The essence of nature concentrated in the Super Restorative Balm For Abdomen and Waist.`
    },
    {
      id: 64,
      label: "",
      imgSrc: "../img/Product1/80093314_original_original_X.webp",
      name: "Masvelt Advanced Body Shaping Cream",
      size: "200ml",
      oldPrice: 110.00,
      newPrice: 99.00,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Every day, morning and night. Learn more
Benefits
Firmer, smoother skin.
Skin is intensely moisturized, soft and silky.
Wrinkles are smoothed and the figure redefined.
Slimmed arms, hips, knees, stomach and waist.
Learn More
This iconic, highly effective body cream provides threefold slimming, firming and sculpting action. It fights resistant fat by slowing down its movement to the fat cells in order to limit the storage of new fat. It also promotes and accelerates the removal of excess fat. The Arctic ferment extract used in the formula possesses targeted anti-storage properties that take action with several complementary mechanisms. Ever more natural formula containing 96% natural ingredients.
Innovation and plant expertise
The Arctic Ocean had to be explored at a depth of more than 2,700 metres to find a valuable Arctic ferment: a natural postbiotic that was then cultivated by biotechnology and from which an extraordinarily effective extract could be developed.`
    },
    {
      id: 65,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80045944_original_original_1.jpg",
      name: "Body Partner",
      size: "175ml",
      oldPrice: 64.00,
      newPrice: 57.60,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply using circular motions on the thighs, hips, abdomen and breasts. We recommend using the Clarins application and massage method (see product insert). Learn more
Benefits
Increase elasticity
Helps minimize the look of stretch marks by visibly reducing them on four levels: [length + width + depth + color].
Learn More
A high-tolerance cream with a silky lightweight formula to help prevent stretch marks and reduce their appearance through weight changes. This pro formula is a combination of active ingredients that help improve elasticity and firmness as it soothes your skin. Developed with minimal ingredients, it's stays perfectly preserved in its protective packaging.
Clarins Plus
Stretch Mark Expert. Improves elasticity and helps reduce the appearance of stretch marks.`
    },
    {
      id: 66,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80035093_original_original_X.jpg",
      name: "Renew Plus Body Serum",
      size: "200ml",
      oldPrice: "",
      newPrice: 78.00,
      description: `Skin Type: Normal, Oily, Combination, Dry
Use: Apply morning and/or evening. Learn more
Benefits
Visibly firms and smoothes slackened skin
Gently exfoliates to even skin's texture
Restores radiance
Hydrates and softens
Learn More
A concentrated, anti-wrinkle body serum that helps restore the smoothness, firmness and radiance of young-looking skin. The dual moisturising and cellular renewal action of Water Lily extract encourages the elimination of dry, flaky cells—smoothing away roughness to leave skin soft, supple and bright. Moisturises all through the day and night.`
    },
    {
      id: 67,
      label: "",
      imgSrc: "../img/Product1/80084435_original_original_A.webp",
      name: "Body Firming Extra-Firming Cream",
      size: "200ml",
      oldPrice: 74.00,
      newPrice: 66.60,
      description: `Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Every day, morning and/or night. Learn more
Benefits
Smoother and firmer skin.
Nourishes and moisturises.
Restores tone and energy to the skin.
Learn More
This rich and comfortable cream, infused with organic active plant ingredients, firms the skin and visibly sculpts the silhouette. Smoother skin regains its natural elasticity. Its delicately scented texture is perfect for massaging into the skin, for a toned and perfectly moisturised body you can feel good in.
Clarins Plus
Organic butterbur extract is a 100% Clarins extract, grown at our Domaine Clarins farm in the Alps.`
    },
    {
      id: 68,
      label: "",
      imgSrc: "../img/Product1/80084436_original_original_X.jpg",
      name: "Body Firming Extra-Firming Gel",
      size: "15ml",
      oldPrice: 64.00,
      newPrice: 57.60,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Gel
Use: Every day, morning and/or night. Learn more
Benefits
Instant toning effect.
Smoother and firmer skin.
Hydrates.
Restores tone and energy to the skin.
Learn More
This fresh "shaping" and toning gel is formulated with organic plant extracts to target areas particularly prone to sagging: the arms, buttocks, thighs, stomach and waist. It instantly protects, tones and firms the skin. Smoother and more moisturised, the skin regains its natural elasticity. Its texture has an instant toning effect and is non-sticky, meaning you can get dressed after applying it.
Clarins Plus
Organic butterbur extract is a 100% Clarins extract, grown at our Domaine Clarins farm in the Alps.`
    },
    {
      id: 69,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80083866_original_original_A.webp",
      name: "Tonic Body Treatment Oil",
      size: "100ml",
      oldPrice: 78.00,
      newPrice: 70.20,
      description: `Skin Type: Normal, Oily, Combination, Dry
Texture: Oil
Use: Use 2-3 times per week. Learn more
Benefits
Visibly firms, tones and boosts elasticity
Reduces the look of stretch marks
Locks in moisture
Sooths and smoothes
Learn More
Canada's #1 Prestige Body Firming & Cellulite Skincare Product*. Firming body treatment oil, formulated with 100% pure plant extracts, creates a total feeling of wellbeing. An aromatic blend of essential oils—including Geranium, Mint, and Rosemary—visibly firms, tones and improves elasticity, reducing the appearance of stretch marks caused by pregnancy and weight loss. Hazelnut oil, rich in Omega 9 and Vitamin E, locks in moisture to smooth skin from shoulders to toes. Fine, lightweight formula absorbs instantly.
Won’t stain clothes. Preservative-free. Dermatologist tested.
*based on dollar and unit sales latest YTD ME Dec 2021. Source: The NPD Group/BeautyTrends®, Canada.
Tonic Body Treatment Oil: an iconic product that supports solidarity. For every “Tonic” Body Treatment Oil** purchased Clarins will make a donation to the Arthritis Foundation.
**This oil is a cosmetic product. It does not have any therapeutic action nor is it a treatment for arthritis.
Clarins Plus
Created in 1965, it's THE go-to product for pregnant women, thanks to an invigorating formula made entirely of plant extracts.`
    },
    {
      id: 70,
      label: "",
      imgSrc: "../img/Product1/80083877_original_original_A.jpeg",
      name: "Contour Body Treatment Oil",
      size: "100ml",
      oldPrice: "",
      newPrice: 78.00,
      description: `Skin Type: Normal, Oily, Combination, Dry
Texture: Oil
Use: Use 2-3 times per week. Learn more
Benefits
Visibly firms and tones
Helps release toxins
Locks in moisture
Visibly reduces sponginess
Learn More
Contouring body treatment oil, formulated with 100% pure plant extracts, creates a total feeling of wellbeing. An aromatic blend of essential oils—including Geranium, Sweet Marjoram, and Lemon—helps release toxins to visibly firm, tone and reduce the look of sponginess for a slimmer-looking silhouette. Hazelnut oil, rich in Omega 9 and Vitamin E, locks in moisture to smooth skin from shoulders to toes. Fine, lightweight formula absorbs instantly.
Won’t stain clothes. Preservative-free. No synthetic fragrance. Dermatologist tested.`
    },
    {
      id: 71,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80087281_original_original_X.webp",
      name: "Nourishing Shampoo Bar",
      size: "100ml",
      oldPrice: "",
      newPrice: 28.00,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Bar
Use: Use 2-3 times per week. Learn more
Benefits
Clean, soft and shiny hair.
Eco-Friendly.
Learn More
This practical and eco-friendly shampoo bar, containing 87% naturally-sourced ingredients, is the environmentally friendly step you need to take for your hair care. Enriched with argan and organic camelia oil, known for their nourishing properties, it leaves your hair clean, soft, supple and shiny. Its rinse-off smooth mousse and coconut fragrance will make everyone in your family look forward to washing their hair. Compact, light and practical, you can take it anywhere with no worries of spillages.
Clarins Plus
Its soft, ultra-indulgent, naturally sourced coconut fragrance envelops and lightly scents the hair.`
    },
    {
      id: 72,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80078282_original_original_1.webp",
      name: "Invigorating Shine Shampoo",
      size: "300ml",
      oldPrice: "",
      newPrice: 34.00,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Gel
Use: Pour a little shampoo into your palm and distribute evenly on wet hair. Gently massage into the scalp. Rinse. Learn more
Benefits
Hair that's invigorated, healthy and shiny.
Suitable for all types of hair.
Learn More
Invigorating Shine Shampoo with Ginseng is perfect for moisturizing and gently cleaning hair to give it shine and purify the scalp. Suited for all types of hair, it can also be used as often as needed.
Clarins Plus
A universal shampoo formulated to provide moisture, vitality and shine to your hair.`
    },
    {
      id: 73,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80078283_original_original_1.webp",
      name: "Invigorating Shine Hair Conditioner",
      size: "300ml",
      oldPrice: "",
      newPrice: 36.00,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Cream-Gel Learn more
Benefits
Nourishes and softens
Detangles and smoothes
Adds body and shine
Delicately scented
Suitable for all hair types
Learn More
This detangling conditioner gives your hair body and shine.`
    },
    {
      id: 74,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80057222_original_original_1.webp",
      name: "Nourishing Strengthening Mask",
      size: "200ml",
      oldPrice: 45.00,
      newPrice: 40.50,
      description: `Skin Type: Combination, Dry, Normal, Oily
Texture: Oil
Use: Apply by gently massaging into clean rinsed hair (scalp, lengths and ends). Leave on for 5-10 minutes and rinse thoroughly. Learn more
Benefits
Shine, strength and softness for dry or damaged hair.
Won't weigh down your hair.
Learn More
This wonderfully scented mask is perfect for dry or damaged hair. Its formula is enriched with organic shea butter and organic argan oil, known for their nourishing properties, to help strengthen the scalp and intensely nourish the hair fiber. Instantly restores your hair's shine, strength and softness to look more beautiful with every application.
Clarins Plus
To nourish and strengthen dry or damaged hair.`
    },
    {
      id: 75,
      label: "",
      imgSrc: "../img/Product1/80085753_original_original_x.webp",
      name: "ClarinsMen Shampoo & Shower",
      size: "200ml",
      oldPrice: 35.00,
      newPrice: 31.50,
      description: `Skin Type: Normal, Oily, Combination, Dry
Texture: Gel
Use: Apply to damp skin and hair. Learn more
Benefits
Gently removes excess oil, sweat, and dirt from head to toe
Helps neutralize the drying effects of hard water
Awakens the senses for a complete fresh feeling
Suitable for all skin and hair types
Dermatologist-tested
Learn More
An invigorating, 2-in-1 wash that gently cleanses hair and body. Soothing bison grass (organic plant) and gymnema with energizing properties. Conditions hair with Provitamin B5. Gentle enough to use each morning and evening. For all hair and skin types, even sensitive skin.`
    },
    {
      id: 76,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "",
      newPrice: 40.00,
      description: `A set of sun care essentials for the face, including SPF 50 protection, after-sun balm and a face moisturizer.
This set contains:
Dry Touch Facial Sunscreen SPF 50+
Dry Touch Facial Sunscreen SPF 50+
Moisturizes and protects against the harmful effects of the sun. 
50 ml
Soothing After Sun Balm 30 mL
Soothing After Sun Balm 30 mL
Soothing after sun balm for face and body, enriched with antioxydants & promotes a long-lasting tan. 
1 item
Hydra-Essentiel [HA²] Silky Cream 15 mL
Hydra-Essentiel [HA²] Silky Cream 15 mL
The daytime face cream that hydrates and plumps. 
1 item
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan
Promotes a long-lasting, intense tan that resists peeling and flaking
Hydrates and plumps skin`
    },
    {
      id: 77,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/01295260_original_original_1.webp",
      name: "UV 50 Day Screen Multi-Protection",
      size: "50ml",
      oldPrice: 58.00,
      newPrice: 52.20,
      description: `Skin Type: All Skin Types
Texture: Fluid
Use: Apply to face and neck after moisturizing. Learn more
Benefits
Helps protect skin from photo-aging and dark spots
Fights free radicals
Contains Clarins’ Anti-Pollution Complex
Learn More
Formulated with Clarins’ Anti-Pollution Complex and Broad Spectrum SPF 50—this silky, oil-free day screen helps lock out skin-damaging UVA/UVB rays, pollution and free radicals. Forms an invisible shield that helps protect skin from the appearance of dark spots and the risk of early skin aging.
Clarins Plus
Complete anti-UV and anti-pollution protection for skin that lives in the city.`
    },
    {
      id: 78,
      label: "NEW",
      imgSrc: "../img/Product1/80009802_original_original_1.jpg",
      name: "UV 50 Tinted Face Sunscreen",
      size: "1 light",
      oldPrice: 58.00,
      newPrice: 2.20,
      description: `Skin Type: Normal, Oily, Combination, Dry
Use: Apply to face and neck after moisturizing. Learn more
Benefits
Helps protect skin from photo-aging and dark spots
Fights free radicals
Contains Clarins’ Anti-Pollution Complex
Learn More
Formulated with Clarins’ Anti-Pollution Complex and Broad Spectrum SPF 50—this silky, oil-free day screen helps lock out skin-damaging UVA/UVB rays, pollution and free radicals. Forms an invisible shield that helps protect skin from the appearance of dark spots and the risk of early skin aging. Available in three skin-perfecting tints: Light, Medium, Deep.
Clarins Plus
Complete anti-UV and anti-pollution protection for skin that lives in the city.`
    },
    {
      id: 79,
      label: "",
      imgSrc: "../img/Product1/80050648_hero_original.jpg",
      name: "Dry Touch Facial Sunscreen SPF 50+",
      size: "30ml",
      oldPrice: "",
      newPrice: 58.00,
      description: `Skin Type: All Skin Types
Texture: Cream
Use: Apply 15 minutes before sun exposure. Reapply every 2 hours or after swimming, sweating or drying off. Learn more
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan. Hydrates.
Smooth melting texture.
Dry to the touch and matte finish.
Learn More
A broad spectrum protection SPF 50+ sunscreen for the face.

With 40 years of sun care expertise, Clarins' research goes further in skin protection with two proprietary Sun Complexes that preserve your skin’s youth and beauty with unrivaled results:
[SUNFILTERCOMPLEX] helps lock out harmful UVA/UVB rays that result in sun spots and wrinkles.
Antioxidant-rich [ENRICHED WITH PLANT EXTRACTS] combination is infused with free radical-fighting Plane Tree, Senna, Baobab, Olive Tree and Pea extracts to help protect skin from photoaging. Moisture-rich Aloe Vera extract soothes, softens and hydrates skin while you sun.
The ultra-sensorial, velvety, dry touch cream melts into the skin with a clear matte finish while its aromatic formula—including an exotic blend of Tangerine, Orange, Blackcurrant, Peony and Sandalwood—is sure to brighten your day.
Clarins Plus
Good for your skin
[SunPlantComplex]
Enriched with plant extracts`
    },
    {
      id: 80,
      label: "NEW",
      imgSrc: "../img/Product1/80050667_hero_original.webp",
      name: "Sunscreen Body Lotion Spray SPF 50+",
      size: "150ml",
      oldPrice: "",
      newPrice: 44.0,
      description:`Skin Type: All Skin Types
Texture: Splash
Use: Apply 15 minutes before sun exposure. Reapply every 2 hours or after swimming, sweating or drying off. Learn more
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan.
Hydrates.
Liquid texture in a spray that spreads easily.
Leaves the skin soft with no white streaks.
Learn More
A broad spectrum protection SPF 50+ Lotion Spray for the body.

With 40 years of sun care expertise, Clarins' research goes further in skin protection with two proprietary Sun Complexes that preserve your skin’s youth and beauty with unrivaled results:
New [SUNFILTERCOMPLEX] helps lock out harmful UVA/UVB rays that result in sun spots and wrinkles.
Antioxidant-rich [ENRICHED WITH PLANT EXTRACTS] combination is infused with free radical-fighting Plane Tree, Senna, Baobab, Olive Tree and Pea extracts to help protect skin from photoaging. Moisture-rich Aloe Vera extract soothes, softens and hydrates skin while you sun.
The ultra-sensorial, velvety, dry touch cream melts into the skin with a clear matte finish while its aromatic formula—including an exotic blend of Tangerine, Orange, Blackcurrant, Peony and Sandalwood—is sure to brighten your day.
Clarins Plus
Good for your skin
[SunPlantComplex]
Enriched with plant extracts`
    },
    {
      id: 81,
      label: "",
      imgSrc: "../img/Product1/80050632_hero_original.jpg",
      name: "Dry Touch Facial Sunscreen SPF 30",
      size: "50ml",
      oldPrice: "",
      newPrice: 38.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply 15 minutes before sun exposure. Reapply every 2 hours or after swimming, sweating or drying off. Learn more
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan. Hydrates.
Smooth melting texture.
Dry to the touch and matte finish.
Learn More
A broad spectrum protection SPF 30 sunscreen for the face.

With 40 years of sun care expertise, Clarins' research goes further in skin protection with two proprietary Sun Complexes that preserve your skin’s youth and beauty with unrivaled results:
New [SUNFILTERCOMPLEX] helps lock out harmful UVA/UVB rays that result in sun spots and wrinkles.
Antioxidant-rich [ENRICHED WITH PLANT EXTRACTS] combination is infused with free radical-fighting Plane Tree, Senna, Baobab, Olive Tree and Pea extracts to help protect skin from photoaging. Moisture-rich Aloe Vera extract soothes, softens and hydrates skin while you sun.
The ultra-sensorial, velvety, dry touch cream melts into the skin with a clear matte finish while its aromatic formula—including an exotic blend of Tangerine, Orange, Blackcurrant, Peony and Sandalwood—is sure to brighten your day.
Clarins Plus
Good for your skin
[SunPlantComplex]
Enriched with plant extracts`
    },
    {
      id: 82,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80050632_hero_original.jpg",
      name: "Sunscreen Body Cream SPF 30",
      size: "150ml",
      oldPrice: "",
      newPrice: 44.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply 15 minutes before sun exposure. Reapply every 2 hours or after swimming, sweating or drying off. Learn more
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan.
Hydrates.
Absorbs quickly without white streaks.
Smooth melting texture. Dry velvety soft finish.
Learn More
A broad spectrum protection SPF 30 sunscreen for the body.

With 40 years of sun care expertise, Clarins' research goes further in skin protection with two proprietary Sun Complexes that preserve your skin’s youth and beauty with unrivaled results:
New [SUNFILTERCOMPLEX] helps lock out harmful UVA/UVB rays that result in sun spots and wrinkles.
Antioxidant-rich [ENRICHED WITH PLANT EXTRACTS] combination is infused with free radical-fighting Plane Tree, Senna, Baobab, Olive Tree and Pea extracts to help protect skin from photoaging. Moisture-rich Aloe Vera extract soothes, softens and hydrates skin while you sun.
The ultra-sensorial, velvety, dry touch cream melts into the skin with a clear matte finish while its aromatic formula—including an exotic blend of Tangerine, Orange, Blackcurrant, Peony and Sandalwood—is sure to brighten your day.
Clarins Plus
Good for your skin
[SunPlantComplex]
Enriched with plant extracts`
    },
    {
      id: 83,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "",
      newPrice: 40.0,
      description:`A set of sun care essentials for the face, including SPF 50 protection, after-sun balm and a face moisturizer.
This set contains:
Dry Touch Facial Sunscreen SPF 50+
Dry Touch Facial Sunscreen SPF 50+
Moisturizes and protects against the harmful effects of the sun. 
50 ml
Soothing After Sun Balm 30 mL
Soothing After Sun Balm 30 mL
Soothing after sun balm for face and body, enriched with antioxydants & promotes a long-lasting tan. 
1 item
Hydra-Essentiel [HA²] Silky Cream 15 mL
Hydra-Essentiel [HA²] Silky Cream 15 mL
The daytime face cream that hydrates and plumps. 
1 item
Benefits
Protects against UVA & UVB, the harmful effects of the sun for a gorgeous tan
Promotes a long-lasting, intense tan that resists peeling and flaking
Hydrates and plumps skin`
    },
    {
      id: 84,
      label: "",
      imgSrc: "../img/Product1/80050669_original_original_x (1).jpg",
      name: "Soothing After Sun Balm",
      size: "150ml",
      oldPrice: "",
      newPrice: 42.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Smooth onto face and body skin immediately after sun exposure. Learn more
Benefits
Hydrates skin for 48 hours*
Promotes a long-lasting, intense tan that resists peeling and flaking
Leaves skin soft, smooth and comfortable
Non-sticky balm texture melts into the skin without leaving white residue
Tropical, woody-floral scent with a twist of citrus
Sleek take-along tube, great for travel!
*After Sun Balm (48h) : Hydration kinetics – 12 volunteers
Learn More
The ultimate in targeted post-sun skincare.
With 40 years of sun care expertise, now Clarins Research goes further in skin protection with a proprietary after sun formula that preserves your skin’s youth and beauty with unrivaled results.
Clarins’ ultra-sensorial, tan-enhancing face and body balm is infused with moisture-packed plant extracts—including Aloe Vera, Watermelon and Shea Butter—that hydrate skin for 48 hours!* Sunflower extract helps minimizes the feeling of sunburn and helps soothe. Safflower extract promotes an intense, long-lasting, glowing tan that resists peeling and flaking. Free radical-fighting Mimosa Tenuiflora leaves skin soft, smooth and incredibly comfortable—perfectly prepped for another day in the sun.
The aromatic scent—a tropical woody floral with a sparkling hint of citrus—is sure to brighten your day.`
    },
    {
      id: 85,
      label: "",
      imgSrc: "../img/Product1/80050679_original_original_x.jpg",
      name: "Refreshing After Sun Gel",
      size: "150ml",
      oldPrice: "",
      newPrice: 42.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Smooth onto face and body skin immediately after sun exposure. Learn more
Benefits
Hydrates skin for 24 hours*
Promotes a long-lasting, intense tan that resists peeling and flaking
Leaves skin soft, smooth and refreshed
Non-sticky gel texture melts into the skin without leaving white streaks
Tropical, woody-floral scent with a twist of citrus
Sleek take-along tube, great for travel!
*After Sun Gel (24h) : Hydration kinetics – 12 volunteers
Learn More
The ultimate in targeted post-sun skincare.
With 40 years of suncare expertise, now Clarins Research goes further in skin protection with a proprietary after sun formula that preserves your skin’s youth and beauty with unrivaled results.
Clarins’ ultra-sensorial, tan-enhancing face and body gel is infused with moisture-packed plant extracts—including Aloe Vera and Watermelon—that hydrate skin for 24 hours!* Sunflower extract helps minimizes the feeling of sunburn and helps soothe. Safflower extract promotes an intense, long-lasting, glowing tan that resists peeling and flaking. Free radical-fighting Mimosa Tenuiflora leaves skin soft, smooth and incredibly comfortable—perfectly prepped for another day in the sun.
The aromatic scent—a tropical woody floral with a sparkling hint of citrus—is sure to brighten your day.`
    },
    {
      id: 86,
      label: "",
      imgSrc: "../img/Product1/80061424_original_original_x.jpg",
      name: "SOS Sunburn Soother Mask",
      size: "100ml",
      oldPrice: "",
      newPrice: 40.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Apply to sunburned skin on face and body immediately after sun exposure. Reapply throughout the day. Learn more
Benefits
Hydrates skin for 48 hours
Soothes and cools down red, hot, sunburned skin
Leaves skin soft, smooth and comfortable
Helps protect skin from the effects of free radicals
Learn More
This cream-gel mask with instant cooling effect comforts the skin after exposure to the sun. It relieves and minimizes burning sensations with sunflower extract. It moisturizes deep down for 48 hours with organic aloe vera extract and nourishes the skin with shea oil. It also protects against free radicals with Mimosa tenuiflora extract.`
    },
    {
      id: 87,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "",
      newPrice: 38.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Liquid
Use: Mix 2-3 drops with your day or night moisturizer. Learn more
Benefits
Creates a natural-looking golden glow
Mistake-proof application is even and streak-free
Customizable results
Leaves skin soft, supple, and hydrated
Learn More
Why not add a little radiance and self-tanner to your skincare products when you have the chance? With Clarins’ Radiance Plus Golden Glow Booster, you can do exactly that - boost your luminous glow! To get this enhanced look, you can simply combine the Radiance Plus Booster with any Clarins’ face moisturizers and build your tan. Not only does this unique booster create a lovely, natural-looking self-tan effect, but it also keeps the moisturizing, anti-wrinkle and firming benefits of your usual day and night creams. So, for easy-to-achieve, one-step, 100% safe, radiant skin, treat your complexion to Radiance Plus Golden Glow Booster.
Dermatologically tested. Non comedogenic.`

    },
    {
      id: 88,
      label: "",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster for Body",
      size: "30ml",
      oldPrice: "",
      newPrice: 52.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Liquid
Use: Mix 4-6 drops with your body moisturizer. Learn more
Benefits
A customizable and natural-looking golden glow.
Learn More
Formulated with 99% ingredients from natural origin, this self-tanning liquid booster mixes with any Clarins body cream to create a beautiful, sun-free tan: 4 drops for a subtle sun-kissed effect, 6 for a deep, bronze tan. Easy-to-dose application - turn the bottle upside down and squeeze the bottom: 1 squeeze = 1 drop. An effortless, natural-looking and streakless tan that builds easily, according to your needs. Its plant-based formula with aloe vera does not contain sun protection filters and does not protect against sun exposure. Must be mixed with a moisturizer, never use alone.
Clarins Plus
Its innovative formula turns your everyday Clarins body moisturizers into self-tanners.

`
    },
    {
      id: 89,
      label: "",
      imgSrc: "../img/Product1/80074502_original_original_1.jpg",
      name: "Self Tanning Milky Lotion",
      size: "125ml",
      oldPrice: 45.0,
      newPrice: 40.5,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Milky Lotion Learn more
Benefits
A glowing, natural and long-lasting tan.
Hydrated skin.
Learn More
This self-tanning milky motion naturally and instantly gives skin a sun-kissed glow while hydrating it and leaving it smooth and soft so that it stays tanned for longer! Easy to apply with a fast-absorbing texture and a fresh fig fragrance that smells just like summer. Does not contain sun protection filters and does not protect against sun exposure.
Clarins Plus
To prevent skin from becoming dry and to prolong your tan, Clarins Laboratories formulated this self-tanning milky lotion with super-hydrating organic fig extract.`
    },
    {
      id: 90,
      label: "",
      imgSrc: "../img/Product1/80074503_original_original_A.jpg",
      name: "Self Tanning Instant Gel",
      size: "125ml",
      oldPrice: 45.0,
      newPrice: 40.5,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Gel Learn more
Benefits
Instantly tans.
Learn More
A very fresh, non-oily gel texture that naturally and evenly tans the skin thanks to the [SelfTanComplex], a combination of naturally-sourced DHA and Erythulose. Easy to apply, it instantly melts into your skin, meaning you can get dressed after applying it. Your skin is silky soft and left simply stunning!`
    },
    {
      id: 91,
      label: "",
      imgSrc: "../img/Product1/80033778_original_original_1.jpg",
      name: "Self-Tanner Body Applicator Mitt",
      size: "1 Item",
      oldPrice: "",
      newPrice: 13.0,
      description:`Use: Use with Clarins' self tanning formulas for quick, even application. Learn more
Benefits
Applies self-tanning product to the body quickly and evenly
Delivers natural-looking, streak-free results
Keeps hands dry and stain-free
Washable
Learn More
Washable self-tanning mitt for smooth, streak-free application of Clarins' self tanners for body. Soft exterior is comfortable on skin and distributes gel, lotion, and cream formulas quickly and evenly. Ensures smooth application for a flawless and completely natural-looking tan. A watertight layer keeps hands dry, clean, and stain-free.

Composition:
Polyurethane 52%, Polyester 30%, Vinyl Acetate 14%, Viscose 4%.`
    },
    {
      id: 92,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112641_original_original_1.webp",
      name: "ClarinsMen Hydration Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 79.0,
      description:`Gentlemen, here are your essentials for soft skin at all times: a toning shampoo and shower gel that washes your body and hair in a single step, an ultra-comforting super moisturizing balm to care for your skin, a foaming gel to cleanse the face and an after-shave oil for soft, soothed skin after razor burn. All with the added bonus of Double Serum in a light texture to target signs of ageing. The skin is smoothed, purified and strengthened. A sleek blue ClarinsMen case holds all these products.
This set contains:
ClarinsMen Super Moisture Balm
ClarinsMen Super Moisture Balm
Intensive moisture balm that helps a man’s skin rebound from extreme sports, recover from cold weather, and survive a rough shave. 
50 ml
ClarinsMen Active Face Wash
ClarinsMen Active Face Wash
Detox foaming gel 
125 ml
ClarinsMen Shampoo & Shower 30 mL
ClarinsMen Shampoo & Shower 30 mL
2-in-1 hair and body, toning and conditioning. 
1 item
ClarinsMen Shave + Beard Oil 3 mL
ClarinsMen Shave + Beard Oil 3 mL
A 2-in-1 treatment with a light oil texture that facilitates an ultra-comfortable close shave. Ideal for daily beard maintenance. 
1 item
Double Serum Light Texture 0.9 mL
Double Serum Light Texture 0.9 mL
The intensive anti-aging serum with 21 powerful plant extracts in a light texture, for everyone. 
1 item
Holiday ClarinsMen Pouch
Holiday ClarinsMen Pouch
Out of Stock 
1 item
Benefits
Cleanses
Prepares the skin for shaving
Moisturizes & softens`
    },
    {
      id: 93,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112640_original_original_1.webp",
      name: "ClarinsMen Energizing Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 46.0,
      description:`Gentlemen! Here are four essential face care products for healthy skin, even when life gets hectic! A moisturizing and strengthening gel with red ginseng extract to re-energize all skin types, a super-fresh, revitalizing gel specially formulated for the sensitive skin around the eyes, a foaming gel to cleanse the face and purify the skin and Double Serum Light Texture to target the signs of ageing. The perfect morning and evening routine. A sleek blue ClarinsMen case holds all these products.
This set contains:
ClarinsMen Energizing Gel
ClarinsMen Energizing Gel
A hydrating gel especially formulated to give men's skin a boost. 
50 ml
ClarinsMen Energizing Eye Gel 3 mL
ClarinsMen Energizing Eye Gel 3 mL
With organic red ginseng extract. 
1 item
ClarinsMen Active Face Wash 30 mL
ClarinsMen Active Face Wash 30 mL
Detox foaming gel. 
1 item
Double Serum Light Texture 0.9 mL
Double Serum Light Texture 0.9 mL
The intensive anti-aging serum with 21 powerful plant extracts in a light texture, for everyone. 
1 item
Holiday ClarinsMen Pouch
Holiday ClarinsMen Pouch
Out of Stock 
1 item
Benefits
Cleanses
Energizes
Moisturizes`
    },
    {
      id: 94,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112642_original_original_1.webp",
      name: "ClarinsMen Essentials Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 33.0,
      description:`This set will delight any man looking for maximum comfort in the shortest time possible. Use Active Face Wash foaming gel daily for cleansed skin. Softness all day long with the Super Moisture Balm, featuring organic leaf of life extract, a natural hydration activator. And energy with Energizing Gel, which moisturizes and strengthens the skin. A sleek blue ClarinsMen case holds all these products.
This set contains:
ClarinsMen Energizing Gel 12 mL
ClarinsMen Energizing Gel 12 mL
A hydrating gel especially formulated to give men's skin a boost. 
1 item
ClarinsMen Super Moisture Balm 12 mL
ClarinsMen Super Moisture Balm 12 mL
Intensive Moisture Balm to super-hydrates his skin. 
1 item
ClarinsMen Active Face Wash 30 mL
ClarinsMen Active Face Wash 30 mL
Detox foaming gel. 
1 item
Benefits
Cleanses
Energizes
Moisturizes`
    },
    {
      id: 95,
      label: "",
      imgSrc: "../img/Product1/80085975_original_original_x.jpg",
      name: "ClarinsMen Exfoliating Cleanser",
      size: "125ml",
      oldPrice: "",
      newPrice: 38.0,
      description:`Skin Type: All Skin Types
Use: Use daily, morning and/or evening. Learn more
Benefits
Removes excess dirt, oil, and dead skin cells
Deeply cleanses embedded impurities and clears out clogged pores
Dermatologist-tested
Learn More
This 2-in-1 creamy exfoliating face wash for men deeply cleanses embedded impurities and removes excess oil, dirt, and dead skin cells that make skin look dull and tired. Formulated with gentle exfoliants—including natural lava powder and salicylic acid microbeads—this daily face scrub for men helps clear out blackheads and clogged pores, leaving skin soft, purified, and shine-free.
Clarins Plus
A 2-in-1 face scrub to exfoliate and deep-clean men’s skin`
    },
    {
      id: 96,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80085184_original_original_1.webp",
      name: "ClarinsMen Active Face Wash",
      size: "125ml",
      oldPrice: 32.0,
      newPrice: 28.8,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Gel
Use: Use daily, morning and/or evening. Learn more
Benefits
Removes excess dirt, oil, and pollutants
Gently cleanses and tones, leaving skin soft, purified, and refreshed
Helps neutralize the drying effects of hard water
Learn More
Man up for an ultra-clean complexion with a gentle foaming cleanser that tackles dirt, grime and pollutants with the gentle purifying power of Grindelia and Gaultheria extracts. Leaves razor-burned skin soft, toned and geared-up to handle whatever comes its way. Mild enough to use twice a day.`
    },
    {
      id: 97,
      label: "",
      imgSrc: "../img/Product1/80092563_original_original_X.jpg",
      name: "ClarinsMen Shave + Beard Oil",
      size: "30ml",
      oldPrice: "$36.00",
      newPrice: 3240,
      description:`Skin Type: All Skin Types
Use: Morning and/or evening shaving. Beard maintenance whenever you want. Learn more
Benefits
Makes shaving easier.
Reduces irritation caused by shaving.
Allows for perfect beard care and structures, strengthens and softens hair.
Learn More
A 2-in-1 treatment with a light oil texture with plant extracts and a pleasant fragrance that makes daily shaving easier.

For an ultra-comfortable close shave, this oil softens the hair and makes it easier for the razor to glide over it. It also has a soothing effect to protect against the small irritations found on skin weakened by shaving.

For daily beard care, mastic shrub extract coats and strengthens the hair and castor oil softens the beard. The result? More structure and flexibility. A smooth and tamed beard, soft to the touch. Forget about rebellious frizz, and prevent dryness.
Innovation and plant expertise

Clarins has developed a new combination of plant extracts.
The coating and strengthening pistacia lentiscus extract is combined with nourishing castor oil to structure and soften the beard.
Clarins Plus
Formulated to meet the needs of performance and ease of use, this new range is ideal for men who demand the best in shaving. Already benefitting from ClarinsMen's skincare expertise, it has been developed with the advice of recognized master barbers.`
    },
    {
      id: 98,
      label: "",
      imgSrc: "../img/Product1/80092561_original_original_X.jpg",
      name: "ClarinsMen After Shave Soothing Toner",
      size: "100ml",
      oldPrice: "$36.00",
      newPrice: 3240,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Morning and/or evening Learn more
Benefits
Soothes the sensation of razor burn on skin.
Refreshes and invigorates the skin.
Reduces the appearance of pores.
Non-sticky, non-oily finish.
Lightweight, invisible texture.
Quickly absorbed.
Learn More
This intensely refreshing After Shave Toner both soothes and protects skin that has been weakened by shaving. It has an ultra-fresh, non-greasy, non-sticky texture, and a fresh, pleasant fragrance. Anti-razor burn action helps to lastingly calm the sensations of razor burn and irritation on skin weakened by shaving. Your skin will feel instantly fresh and healthy.
Innovation and plant expertise
Clarins has developed the new [Grooming Phytocomplex] :
Soothing organic blackcurrant bud extract combined with the duo of energizing gymnema extract + stimulating bison grass extract.
Clarins Plus
Formulated to be effective and easy to use, this new range is designed for men who want the best results from their shaving experience. Already benefitting from ClarinsMen's skincare expertise, it was developed with the advice of recognized master barbers.`
    },
    {
      id: 99,
      label: "",
      imgSrc: "../img/Product1/80092562_original_original_X.webp",
      name: "ClarinsMen After Shave Soothing Gel",
      size: "75ml",
      oldPrice: "$36.00",
      newPrice: 3240,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Morning and/or evening Learn more
Benefits
Soothes razor burn on skin.
Refreshes, moisturizes and matifies the skin.
Softens and strengthens the beard.
Non-oily, non-sticky finish.
Lightweight, invisible texture.
Quickly absorbed.
Learn More
A 2-in-1 after shave that moisturizes the skin and cares for the beard. An ideal combination for an easy daily routine that meets the needs of discerning men.

For the skin, it has a soothing action. Skin is immediately refreshed, moisturized, smoothed and mattified.

For the beard, pistacia lentiscus extract strengthens and softens the hair. It's the easy-to-use 2-in-1 expert gel that tames your beard in one simple step!
It has a fresh and pleasant fragrance.

This product won the ELLE Beauty Grand Prix 2024 in the after-shave category.
Innovation and plant expertise
Clarins has developed the new [Grooming Phytocomplex] :
Soothing organic blackcurrant bud extract combined with the duo of energizing gymnema extract + stimulating bison grass extract.
Clarins Plus
Formulated to meet the needs of performance and ease of use, this new range is designed for men who demand the best in shaving. Already benefitting from ClarinsMen's skincare expertise, it has been developed with the advice of recognized master barbers.`
    },
    {
      id: 100,
      label: "",
      imgSrc: "../img/Product1/80095098_original_original_X.jpg",
      name: "ClarinsMen Smooth Shave Foaming Gel",
      size: "150ml",
      oldPrice: "",
      newPrice: 2600,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Morning and/or evening Learn more
Benefits
Prepares shaving for a smoother glide of the razor.
Protects against the risk of irritation.
Softens the skin.
Leaves skin feeling comfortable.
Learn More
For a close, fast, efficient and very comfortable shave. Its pleasantly scented texture, fresh and foaming, spreads easily to facilitate the glide of the razor while caring for the skin. The gel will envelop and soften the hair: perfect preparation for the razor. It also provides a long-lasting soothing effect on the skin after shaving. It protects against the risk of cuts and irritation and leaves the skin feeling soft and moisturized, fresh and comfortable.
Innovation and plant expertise
Clarins has developed the new [Grooming Phytocomplex] :
Soothing organic blackcurrant bud extract combined with the duo of energizing gymnema extract + stimulating bison grass extract.
Clarins Plus
Formulated to meet the needs of performance and ease of use, this new range is ideal for men who demand the best in shaving. Already benefitting from ClarinsMen's skincare expertise, it has been developed with the advice of recognized master barbers.`
    },
    {
      id: 101,
      label: "",
      imgSrc: "../img/Product1/80085753_original_original_x (1).webp",
      name: "ClarinsMen Shampoo & Shower",
      size: "200ml",
      oldPrice: "$35.00",
      newPrice: 3150,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Gel
Use: Apply to damp skin and hair. Learn more
Benefits
Gently removes excess oil, sweat, and dirt from head to toe
Helps neutralize the drying effects of hard water
Awakens the senses for a complete fresh feeling
Suitable for all skin and hair types
Dermatologist-tested
Learn More
An invigorating, 2-in-1 wash that gently cleanses hair and body. Soothing bison grass (organic plant) and gymnema with energizing properties. Conditions hair with Provitamin B5. Gentle enough to use each morning and evening. For all hair and skin types, even sensitive skin.`
    },
    {
      id: 102,
      label: "",
      imgSrc: "../img/Product1/80080649_original_original_x.jpg",
      name: "ClarinsMen Antiperspirant Deo Roll-On",
      size: "50ml",
      oldPrice: "",
      newPrice: 2400,
      description:`Skin Type: Combination, Dry, Normal, Oily Learn more
Learn More
Clarins approaches the problem of perspiration from a skincare treatment perspective, so this Roll-On helps control the body's natural perspiration and odour for hours while respecting its natural process. It provides long-lasting odour control with a non-sticky, alcohol free formulation.`
    },
    {
      id: 103,
      label: "",
      imgSrc: "../img/Product1/80071984_original_original_X.jpg",
      name: "ClarinsMen Energizing Gel",
      size: "50ml",
      oldPrice: "$54.00",
      newPrice: 4860,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Gel
Use: Apply to the face and neck in the morning and at night. Learn more
Benefits
Energized and fortified skin with signs of fatigue visibly reduced.
Hydrates and refreshes.
Protects thanks to the plant-based Clarins anti-pollution Complex
Learn More
Men's skin naturally needs more energy. It is thicker than women's skin and needs to be hydrated regularly to stay in form. This fresh, non-sticky hydrating gel with its subtle scent is packed full of plant extracts to reenergize and brighten skin. With its red pump bottle, it delivers the perfect dose of vitality, recharging skin and leaving it toned, rested and healthy-looking. The fragrance of all our ClarinsMen products has evolved in line with the latest changes in cosmetic regulations.
Clarins Plus
ClarinsMen innovation: the [G-RED COMPLEX]: organic red ginseng extract is combined with bison grass extract (an organic plant) and gymnema to energize and stimulate the skin.`
    },
    {
      id: 104,
      label: "",
      imgSrc: "../img/Product1/80071985_original_original_1.jpg",
      name: "ClarinsMen Energizing Eye Gel",
      size: "15ml",
      oldPrice: "$44.00",
      newPrice: 3960,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Gel
Use: Apply in the morning and at night to the eye area. Learn more
Benefits
Visibly energizes (dark circles, puffiness).
Hydrates and strengthens the eye area.
Learn More
It’s the perfect skincare treatment for men who lead fast-paced lives. A true shot of energy, vitality and hydration for their overworked skin. The powerful action of organic red ginseng extract will help boost the skin’s energy production: to energize it, stimulate it, and help it fight off all kinds of aggressors (extreme temperatures, overwork, stress). For a smooth and energized eye area and bright, rested eyes.
Clarins Plus
ClarinsMen innovation: the [G-RED COMPLEX]: organic red ginseng extract is combined with bison grass extract (an organic plant) and gymnema to energize and stimulate the skin.`
    },
    {
      id: 105,
      label: "",
      imgSrc: "../img/Product1/80008269_original_original_1.jpg",
      name: "ClarinsMen Line-Control Eye Balm",
      size: "20ml",
      oldPrice: "",
      newPrice: 4700,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply morning and/or evening to the eye contour. Learn more
Benefits
Reduces the appearance of puffiness and dark circles in the under-eye area
Visibly firms and smooths deep creases and wrinkles in the eye contour
Visibly minimizes the appearance of crow's feet
Dermatologist-tested
Ophthalmologist-tested
Learn More
Rugged good looks is one thing. Deep crevices around eyes is another thing entirely. Kick off your anti-aging strategy with a revitalising balm that 'holds the line' on wrinkles and crows feet. Lifts, firms and takes down puffs for a bright-eyed, revitalised look. Apply each evening. Non-greasy, for a fresh matte finish.`
    },
    {
      id: 106,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: 3870,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream
Use: Apply to clean face and neck, morning and/or evening. Learn more
Benefits
Intensive Moisture Balm super-hydrates his skin
Tones, energizes and soothes
Calms razor burn
Nourishes skin
Tested by 6 divers under extreme arctic conditions
Anti-Pollution Complex
Learn More
Powered by ClarinsMens’ exclusive Hydra-Resist Phyto Complex—a blend of super-hydrating Organic Houseleek and Organic Leaf of Life extacts—this refreshing balm was tested by 6 divers under arctic conditions, to help a man’s skin withstand the most extreme temperatures.
Clarins Plus
Intensive moisture balm helps a man’s skin rebound from extreme sports, recover from cold weather, and survive a rough shave. Organic Sesame oil nourishes his skin, ClarinsMen Complex calms razor burn, and Bison Grass and Gymnema extracts soothe and energize.`
    },
    {
      id: 107,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80106218_original_original_1.jpg",
      name: "SOS Color Correcting Face Primer - Gold Glow",
      size: "30ml",
      oldPrice: "",
      newPrice: 4800,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Fluid
Use: Apply in the morning, by itself or before applying makeup. Learn more
Benefits
Brightened skin. Longer-lasting makeup.
Leaves skin supple, hydrated and radiant.
Learn More
SOS Primer can be applied either as a primer on the whole face to ease makeup application and extend its hold, or for a subtle touch of brightness. A radiant boost with rose gold highlights.

It responds to your skin’s needs to provide benefits that leave skin more beautiful and bright, even without makeup. Its unique formula is composed of 95% ingredients of natural origin and also contains 93% skincare ingredients for 24 hour hydration*.
*Instrumental test – 24 volunteers – 24 hours.

Its lightweight and melting texture glides sumptuously over the skin, leaving it supple and hydrated. A truly effective skincare concentrate, SOS Primer Gold Glow is enriched with organic edelweiss extract, a standout ingredient valued for its antioxidant properties.
Innovation and plant expertise
SOS Primer contains two Clarins complexes:
• The Clarins anti-pollution complex, which helps to protect the skin from the harmful effects of the environment.
• The microbiota complex, which helps to maintain the daily balance of the skin flora.

`
    },
    {
      id: 108,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/04700210_original_original_A.jpg",
      name: "Instant Smooth Perfecting Touch",
      size: "15ml",
      oldPrice: "$46.00",
      newPrice: 4140,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Use alone, under makeup or mix with your foundation. Learn more
Benefits
Smoothes away the look of imperfections and pores.
visibly fills in wrinkles and fine lines.
Leaves skin radiant.
Learn More
This primer is the perfect combination of make-up and skin care. It visibly smoothes away the appearance of pores and small imperfections, as well as lines and wrinkles.
Its lightweight texture and universal shade melts into skin, for an even, luminous and natural finish.
Nestled in a super cute red pot, it's the secret to a flawless complexion. Fragrance-free.`
    },
    {
      id: 109,
      label: "NEW",
      imgSrc: "../img/Product1/80095977_original_original_X.jpg",
      name: "SOS Color Correcting Face Primer - Matifying",
      size: "30ml",
      oldPrice: "$48.00",
      newPrice: 4320,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Fluid
Use: Apply in the morning, by itself or before applying makeup. Learn more
Benefits
Rebalanced skin
Luminous complexion with the universal light shade
Rested and radiant complexion with the rose shade
Even complexion with the peach shade
Smooth complexion with the green shade
Matte complexion with the mattifying shade
Learn More
More than just primers, these products offer effective results for beautiful skin, even without makeup!
They instantly brighten the complexion and adapt to the needs of your skin. Their secret: a filter-effect makeup finish, a plant-enriched formula and our [MICROBIOTE COMPLEX], developed in our Laboratories to promote the balance of the skin flora on a daily basis, with each application. 24-hour hydration. High-Lumitech Complex: instantly corrects, brightens and revives the complexion. Clarins anti-pollution complex. Results: the skin becomes more beautiful day after day and the complexion regains its balance, whatever your skin problems may be.
Innovation and plant expertise
To maintain the balance of the skin flora, Clarins Research has introduced the [MICROBIOTE COMPLEX] into the new SOS Primer, made with two marine ingredients (two types of algae: chlorella vulgaris extract and laminaria digitata extract) and one earth-based ingredient (Saffron flower polyphenols).`
    },
    {
      id: 110,
      label: "",
      imgSrc: "../img/Product1/80095975_original_original_X.webp",
      name: "SOS Color Correcting Face Primer - Imperfections",
      size: "30ml",
      oldPrice: "$48.00",
      newPrice: 4320,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Fluid
Use: Apply in the morning, by itself or before applying makeup. Learn more
Benefits
Rebalanced skin
Luminous complexion with the universal light shade
Rested and radiant complexion with the rose shade
Even complexion with the peach shade
Smooth complexion with the green shade
Matte complexion with the mattifying shade
Learn More
More than just primers, these products offer effective results for beautiful skin, even without makeup!
They instantly brighten the complexion and adapt to the needs of your skin. Their secret: a filter-effect makeup finish, a plant-enriched formula and our [MICROBIOTE COMPLEX], developed in our Laboratories to promote the balance of the skin flora on a daily basis, with each application. 24-hour hydration. High-Lumitech Complex: instantly corrects, brightens and revives the complexion. Clarins anti-pollution complex. Results: the skin becomes more beautiful day after day and the complexion regains its balance, whatever your skin problems may be.
Innovation and plant expertise
To maintain the balance of the skin flora, Clarins Research has introduced the [MICROBIOTE COMPLEX] into the new SOS Primer, made with two marine ingredients (two types of algae: chlorella vulgaris extract and laminaria digitata extract) and one earth-based ingredient (Saffron flower polyphenols).`
    },
    {
      id: 111,
      label: "NEW",
      imgSrc: "../img/Product1/80095976_original_original_X.jpg",
      name: "SOS Color Correcting Face Primer - Redness",
      size: "30ml",
      oldPrice: "$48.00",
      newPrice: 4320,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Fluid
Use: Apply in the morning, by itself or before applying makeup. Learn more
Benefits
Rebalanced skin
Luminous complexion with the universal light shade
Rested and radiant complexion with the rose shade
Even complexion with the peach shade
Smooth complexion with the green shade
Matte complexion with the mattifying shade
Learn More
More than just primers, these products offer effective results for beautiful skin, even without makeup!
They instantly brighten the complexion and adapt to the needs of your skin. Their secret: a filter-effect makeup finish, a plant-enriched formula and our [MICROBIOTE COMPLEX], developed in our Laboratories to promote the balance of the skin flora on a daily basis, with each application. 24-hour hydration. High-Lumitech Complex: instantly corrects, brightens and revives the complexion. Clarins anti-pollution complex. Results: the skin becomes more beautiful day after day and the complexion regains its balance, whatever your skin problems may be.
Innovation and plant expertise
To maintain the balance of the skin flora, Clarins Research has introduced the [MICROBIOTE COMPLEX] into the new SOS Primer, made with two marine ingredients (two types of algae: chlorella vulgaris extract and laminaria digitata extract) and one earth-based ingredient (Saffron flower polyphenols).`
    },
    {
      id: 112,
      label: "",
      imgSrc: "../img/Product1/80043392_original_original_x.jpg",
      name: "My Clarins PORE-LESS Mattifying Pore Eraser",
      size: "3,2ml",
      oldPrice: "",
      newPrice: 2300,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Compact
Use: Apply after daytime moisturizer, or as a touch-up over makeup throughout the day. Learn more
Benefits
Oil-absorbing formula takes down shine
Blurs the appearance of pores and imperfections
Leaves skin looking clean, smooth and matte
Bring on-the-go for touch-ups throughout the day
Dermatologist tested
Learn More
It's a magic eraser! Just one swipe over a trouble area instantly blurs pores and mattifies shine. Your skin is clean and smooth, silky, and velvety soft. With its blotting-effect smoothing blur texture, your pores are softened and shine is mattified – with just one swipe.
Provides immediate and long-lasting results.
Non-comedogenic.
Clarins Plus
My ClarinsFull of fruits and plants for beautiful skin in top form.`
    },
    {
      id: 113,
      label: "",
      imgSrc: "../img/Product1/80038815_original_original_1.jpg",
      name: "Flat Foundation Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: 4000,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: For application of liquid and cream foundations, concealers, and primers. Learn more
Benefits
Quick, even application
Streak-free results
Ultra-soft synthetic fibers
Sustainably-sourced birch handle
Learn More
This flat and rounded cat’s tongue foundation brush is made of incomparably soft synthetic fibers. It allows you to rapidly apply, blend, and layer liquid, cream or powder foundation, as well as dark circle treatments for a smooth & luminous complexion without overloading the skin.`
    },
    {
      id: 114,
      label: "",
      imgSrc: "../img/Product1/80038816_original_original_1.jpg",
      name: "Multi-use Foundation Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: 4100,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: For lighter application of liquid, cream, and powder foundations, concealers, and primers. Learn more
Benefits
Sheer, flawless results
Natural-looking, bare skin effect
Ultra-soft synthetic fibers
Sustainably-sourced birch handle
Learn More
A multi-use brush with incredibly soft synthetic fibers. Its flared shape makes it easier to apply liquid, cream, or powder foundation with finesse for a natural-looking ‘second skin’ effect without overloading on make-up. This foundation brush can also be used to apply dark circle treatments and primer.`
    },
    {
      id: 115,
      label: "",
      imgSrc: "../img/Product1/80104068_original_original_1.jpg",
      name: "Instant Concealer",
      size: "15ml",
      oldPrice: "$46.00",
      newPrice: 4140,
      description:`Skin Type: All Skin Types
Use: Apply to brighten the under eye area and conceal imperfections. Learn more
Benefits
Smoothes, brightens, and refreshes the eye area.
Conceals dark circles.
Reduces the appearance of puffiness.
Hydrates.
Learn More
Want refreshed, radiant eyes all day? Have you thought about using a liquid concealer?
Instant Concealer provides customized correction for all types of dark circles, this concealer answers a major cosmetics issue. It is tinted to mask the colour of dark circles while restoring the skin's natural tone.
Its fluid texture blends flawlessly into the skin and smoothes the eye contour area, leaving a velvet feel and hydrating the skin, while soothing potential redness.`
    },
    {
      id: 116,
      label: "",
      imgSrc: "../img/Product1/80068515_original_original_1.jpg",
      name: "Everlasting Concealer",
      size: "12ml",
      oldPrice: "",
      newPrice: 4600,
      description:`Skin Type: All Skin Types
Use: Apply to brighten the under eye area and conceal imperfections. Learn more
Benefits
Smoothes, brightens, and refreshes the eye area.
Conceals dark circles.
Reduces the appearance of puffiness.
Hydrates.
Learn More
Want refreshed, radiant eyes all day? Have you thought about using a liquid concealer?
Instant Concealer provides customized correction for all types of dark circles, this concealer answers a major cosmetics issue. It is tinted to mask the colour of dark circles while restoring the skin's natural tone.
Its fluid texture blends flawlessly into the skin and smoothes the eye contour area, leaving a velvet feel and hydrating the skin, while soothing potential redness.`
    },
    {
      id: 117,
      label: "",
      imgSrc: "../img/Product1/80068516_original_original_1.jpg",
      name: "Everlasting Concealer",
      size: "12ml",
      oldPrice: "",
      newPrice: 4600,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Fluid
Use: Apply every morning after your day skincare. Learn more
Benefits
High coverage
Matte finish Extreme comfort
Learn More
This high-coverage corrector withstands all tests. Rich in horse chestnut escin, quinoa and oat sugar extracts, Everlasting Concealer hides dark circles, brightens the eyes and blends into the skin thanks to its ultra-light texture.
Clarins Plus
Makeup made for skin. Developed with the same expertise as Clarins' skincare, we harness the power of the most potent plant extracts for makeup that delivers true skincare benefits.`
    },
    {
      id: 118,
      label: "",
      imgSrc: "../img/Product1/80068519_original_original_1.jpg",
      name: "Everlasting Concealer",
      size: "12ml",
      oldPrice: "",
      newPrice: 4600,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Fluid
Use: Apply every morning after your day skincare. Learn more
Benefits
High coverage
Matte finish Extreme comfort
Learn More
This high-coverage corrector withstands all tests. Rich in horse chestnut escin, quinoa and oat sugar extracts, Everlasting Concealer hides dark circles, brightens the eyes and blends into the skin thanks to its ultra-light texture.
Clarins Plus
Makeup made for skin. Developed with the same expertise as Clarins' skincare, we harness the power of the most potent plant extracts for makeup that delivers true skincare benefits.`
    },
    {
      id: 119,
      label: "",
      imgSrc: "../img/Product1/80106693_original_original_1.jpg",
      name: "Ombre 4 Couleurs Eyeshadow Palette",
      size: "4.2 g",
      oldPrice: "",
      newPrice: 4900,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Powder
Use: Apply in the morning or evening. Learn more
Benefits
Intense color
Multiple effects
Long-lasting
Learn More
The first Clarins eyeshadows with an integrated base. This gradient palette in 4 ultra-pigmented colors is enriched with bamboo powder, vitamin E with antioxidant and protective properties, and a base that helps the texture hold and look smooth for 12 hours.`
    },
    {
      id: 120,
      label: "",
      imgSrc: "../img/Product1/80099355_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 3000,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 121,
      label: "",
      imgSrc: "../img/Product1/80099359_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 3000,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 122,
      label: "",
      imgSrc: "../img/Product1/80099356_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 3000,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 123,
      label: "",
      imgSrc: "../img/Product1/80099360_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 30.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 124,
      label: "",
      imgSrc: "../img/Product1/80099357_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 30.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 125,
      label: "",
      imgSrc: "../img/Product1/80106696_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 30.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 126,
      label: "",
      imgSrc: "../img/Product1/80099358_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 30.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 127,
      label: "",
      imgSrc: "../img/Product1/80106698_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: 30.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Use: Every day, morning and/or night. Learn more
Benefits
Intense color
Lasts 12 hours
Nourished and moisturized skin.
Learn More
This eyeshadow dresses the skin with a layer of color without looking heavy. Upon application, the cosmetic results are natural, even and pigmented at the same time. A creamy, fine and light powder texture that melts delicately and blends immediately with the skin, leaving it incredibly soft to the touch. Its formula is enriched with mineral pigments and organic coconut oil, which helps to nourish the delicate skin of the eyelids and protect it from dehydration. It is combined with organic cassava root powder, known for its matifying and smoothing action. Its main strength? Ensuring long-lasting makeup results and providing perfect adhesion to the eyelids. The result: no need to apply a primer!
Innovation and plant expertise
Its formula is enriched with organic cassava root powder, known for its matifying and smoothing action. It ensures long-lasting makeup results and offers perfect adhesion to the eyelids.`
    },
    {
      id: 128,
      label: "",
      imgSrc: "../img/Product1/80038818_original_original_1.jpg",
      name: "Blending Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: For blending and shading with cream and powder eyeshadows. Learn more
Benefits
Seamlessly blends eyeshadows
Flexible, flared shape for effortless blending
Ultra-soft synthetic fibers
Sustainably-sourced birch handle
Learn More
This long blending brush with a slightly flared and rounded tip is made of synthetic fibers. Specially designed for effortless application and blending of all types of eyeshadow on the eyelids and brow bone and for creating smoky eyes and natural shading smoothly and precisely. Structures and accentuates the eyes.`
    },
    {
      id: 129,
      label: "",
      imgSrc: "../img/Product1/80038819_original_original_1.webp",
      name: "Eyeshadow Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: For applying and blending cream and powder eyeshadows, and smudging eyeliner. Learn more
Benefits
Smooth eyeshadow application
Dense, rounded brush for shaping and smudging
Ultra-soft synthetic fibers
Sustainably-sourced birch handle
Learn More
This short, round, dense eye brush is made of synthetic fibers. Perfect for eye make-up, it can be used for applying all types of eyeshadow and producing an effortlessly even and intense look over the entire eyelid or more specific areas. Also softens eye liner.`
    },
    {
      id: 130,
      label: "",
      imgSrc: "../img/Product1/80026978_original_original_1.webp",
      name: "Graphik Ink Liner",
      size: "0.4ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Apply along the lash line. Learn more
Benefits
Intense black color with a luminous finish
Creates a clean, precise line
Easy-to-use felt tip applicator
Long-wearing, transfer-proof formula
Learn More
Instead of a cat-eye, what about a doe-eyed or a graphic look? The Graphik Ink eyeliner allows women to let their personalities run wild: its precise, easy-to-use felt tip makes it easy to create any type of line. This new liner combines a perfect line and is intense black thanks to its pure "carbon black" pigments: they catch the light and provide a denser colour. An ultra-intense look all the time. This infallible, transfer-proof, long-wear eyeliner defines your eyes for hours on end: your liner stays clean and sharp all day long!`
    },
    {
      id: 131,
      label: "",
      imgSrc: "../img/Product1/0421721_original_original_1.webp",
      name: "3-Dot Liner",
      size: "0.7ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: All Skin Types
Use: Apply along the lash line. Learn more
Benefits
Mistake-proof, dot-by-dot application
Accentuates lashes and enhances eyes
Intense color pay-off and long-lasting wear
Contains Clarins' exclusive Be Long Complex to promote longer lashes
Learn More
This revolutionary pen combines the precision of liquid eye liner with the style of a pencil. The applicator's clever "trident" shape means the space between each lash can be filled in "dot by dot" to naturally accentuate the eyes and add volume to the lashes. A new and easy way to create captivating eyes. And, you can get longer, stronger lashes with the Be Long Lash Complex.`
    },
    {
      id: 132,
      label: "",
      imgSrc: "../img/Product1/80044965_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Glide along upper and/or lower lash line. Learn more
Benefits
Rich color pigments deliver an intense color payoff
Transfer-proof for 8 hours
Fine retractable pencil, built-in sharpener, and smudging tip for smoky eye looks
Sleek design for precision control
Learn More
A waterproof, extreme-wear gel eye pencil that lines and defines in 6 high-intensity hues that stay vivid and transfer-proof for 8 full hours.*

Infused with skin-loving pure plant extracts—the rich pigments and soft texture glide on effortlessly delivering a fluid line and an immediate, intense color payoff.

The pencil’s sleek design assures precision control. It includes a fine retractable tip for structured lining, a built-in sharpener, and a smudger for creating smoky eye looks.

*Satisfaction test conso - 97 women - 7 days`
    },
    {
      id: 133,
      label: "",
      imgSrc: "../img/Product1/80044964_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Glide along upper and/or lower lash line. Learn more
Benefits
Rich color pigments deliver an intense color payoff
Transfer-proof for 8 hours
Fine retractable pencil, built-in sharpener, and smudging tip for smoky eye looks
Sleek design for precision control
Learn More
A waterproof, extreme-wear gel eye pencil that lines and defines in 6 high-intensity hues that stay vivid and transfer-proof for 8 full hours.*

Infused with skin-loving pure plant extracts—the rich pigments and soft texture glide on effortlessly delivering a fluid line and an immediate, intense color payoff.

The pencil’s sleek design assures precision control. It includes a fine retractable tip for structured lining, a built-in sharpener, and a smudger for creating smoky eye looks.

*Satisfaction test conso - 97 women - 7 days`
    },
    {
      id: 134,
      label: "",
      imgSrc: "../img/Product1/80044966_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Glide along upper and/or lower lash line. Learn more
Benefits
Rich color pigments deliver an intense color payoff
Transfer-proof for 8 hours
Fine retractable pencil, built-in sharpener, and smudging tip for smoky eye looks
Sleek design for precision control
Learn More
A waterproof, extreme-wear gel eye pencil that lines and defines in 6 high-intensity hues that stay vivid and transfer-proof for 8 full hours.*

Infused with skin-loving pure plant extracts—the rich pigments and soft texture glide on effortlessly delivering a fluid line and an immediate, intense color payoff.

The pencil’s sleek design assures precision control. It includes a fine retractable tip for structured lining, a built-in sharpener, and a smudger for creating smoky eye looks.

*Satisfaction test conso - 97 women - 7 days`
    },
    {
      id: 135,
      label: "",
      imgSrc: "../img/Product1/80044966_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Glide along upper and/or lower lash line. Learn more
Benefits
Rich color pigments deliver an intense color payoff
Transfer-proof for 8 hours
Fine retractable pencil, built-in sharpener, and smudging tip for smoky eye looks
Sleek design for precision control
Learn More
A waterproof, extreme-wear gel eye pencil that lines and defines in 6 high-intensity hues that stay vivid and transfer-proof for 8 full hours.*

Infused with skin-loving pure plant extracts—the rich pigments and soft texture glide on effortlessly delivering a fluid line and an immediate, intense color payoff.

The pencil’s sleek design assures precision control. It includes a fine retractable tip for structured lining, a built-in sharpener, and a smudger for creating smoky eye looks.

*Satisfaction test conso - 97 women - 7 days`
    },
    {
      id: 136,
      label: "",
      imgSrc: "../img/Product1/80044963_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Glide along upper and/or lower lash line. Learn more
Benefits
Rich color pigments deliver an intense color payoff
Transfer-proof for 8 hours
Fine retractable pencil, built-in sharpener, and smudging tip for smoky eye looks
Sleek design for precision control
Learn More
A waterproof, extreme-wear gel eye pencil that lines and defines in 6 high-intensity hues that stay vivid and transfer-proof for 8 full hours.*

Infused with skin-loving pure plant extracts—the rich pigments and soft texture glide on effortlessly delivering a fluid line and an immediate, intense color payoff.

The pencil’s sleek design assures precision control. It includes a fine retractable tip for structured lining, a built-in sharpener, and a smudger for creating smoky eye looks.

*Satisfaction test conso - 97 women - 7 days`
    },
    {
      id: 137,
      label: "",
      imgSrc: "../img/Product1/80044962_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: 37.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Glide along upper and/or lower lash line. Learn more
Benefits
Rich color pigments deliver an intense color payoff
Transfer-proof for 8 hours
Fine retractable pencil, built-in sharpener, and smudging tip for smoky eye looks
Sleek design for precision control
Learn More
A waterproof, extreme-wear gel eye pencil that lines and defines in 6 high-intensity hues that stay vivid and transfer-proof for 8 full hours.*

Infused with skin-loving pure plant extracts—the rich pigments and soft texture glide on effortlessly delivering a fluid line and an immediate, intense color payoff.

The pencil’s sleek design assures precision control. It includes a fine retractable tip for structured lining, a built-in sharpener, and a smudger for creating smoky eye looks.

*Satisfaction test conso - 97 women - 7 days`
    },
    {
      id: 138,
      label: "",
      imgSrc: "../img/Product1/04223310_original_original_1.jpg",
      name: "Khôl Eye Pencil",
      size: "1.05 g",
      oldPrice: "",
      newPrice: 35.0,
      description:`Skin Type: All Skin Types Learn more
Learn More
Essential to intensify the eyes! The Kohl Eye Pencil can be used as kohl liner or liquid eye liner based on your desired look. Long-wearing.`
    },
    {
      id: 139,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80099349_original_original_1.jpg",
      name: "Wonder Volume Mascara XXL",
      size: "8ml",
      oldPrice: "",
      newPrice: 39.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Use: Every day. Learn more
Benefits
Extreme volume lashes.
12 hour hold*
Moisture-resistant, does not run.
Lashes are denser and stronger, looking more beautiful even after makeup is removed.
*Clinical test, 33 women
Learn More
Extra-black lashes and extreme 12 hour hold*, with each application your lashes become thicker, more intense, and are enveloped in lash care from root to tip.

The [Volumizing Wax Complex] composed of sunflower, jojoba and black acacia waxes, helps to boost lash volume. Its formula, rich in saturated black pigments, creates intense, hypnotic eyes, is moisture-resistant, does not run and can be removed in the blink of an eye. Its exclusive, innovative brush is made from castor fibre, contains no dyes and helps to maximize volume thanks to its 3 cut-outs, which act as formula-laden reservoirs.

Day after day, [Lash Boosting Complex] helps lashes appear longer and fuller, even after makeup is removed.

*Clinical test, 33 women
Innovation and plant expertise
Its exclusive, innovative brush is made from castor fibre, contains no dyes and helps to maximise volume thanks to its 3 cut-outs, which act as formula-laden reservoirs.
Clarins Plus
This mascara is enriched with LASH BOOSTING COMPLEX, the key complex found in all Clarins mascaras. It helps boost the volume of bare lashes, lengthening and strengthening them day after day.`
    },
    {
      id: 140,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80112881_original_original_1.jpg",
      name: "Wonder Volume Mascara XXL",
      size: "3ml",
      oldPrice: "",
      newPrice: 16.0,
      description:`Benefits
Extreme volume lashes.
12 hour hold*
Moisture-resistant, does not run.
Lashes are denser and stronger, looking more beautiful even after makeup is removed.
*Clinical test, 33 women
Learn More
Extra-black lashes and extreme 12 hour hold*, with each application your lashes become thicker, more intense, and are enveloped in lash care from root to tip.
The [Volumizing Wax Complex] composed of sunflower, jojoba and black acacia waxes, helps to boost lash volume. Its formula, rich in saturated black pigments, creates intense, hypnotic eyes, is moisture-resistant, does not run and can be removed in the blink of an eye. Its exclusive, innovative brush is made from castor fibre, contains no dyes and helps to maximize volume thanks to its 3 cut-outs, which act as formula-laden reservoirs.
Day after day, [Lash Boosting Complex] helps lashes appear longer and fuller, even after makeup is removed.
*Clinical test, 33 women`
    },
    {
      id: 141,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112644_original_original_1.webp",
      name: "Mascara Supra Volume Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: 41.0,
      description:`Skincare and makeup for your beautiful eyes only. First apply Total Eye Lift, the expert eye care product enriched with organic harungana extract, which helps to restore the skin, and cassie wax with its smoothing properties: its soft and light texture creates a lifting effect on the eyes in just 60 seconds* for 80% of women while replenishing the skin. Supra Volume to enhance lashes and Instant Make-up Remover to remove impurities and makeup in a flash. A small case holds all these products.
*Satisfaction test – 110 women.
This set contains:
Supra Volume Mascara
Supra Volume Mascara
Double volume effect mascara that provides extra care 
8 ml
Total Eye Lift 3 mL
Total Eye Lift 3 mL
Lift-Replenishing Eye Concentrate 
1 item
Instant Eye Make-Up Remover 30ml
Instant Eye Make-Up Remover 30ml
The bi-phase eye makeup remover that gently removes waterproof makeup. 
1 item
Small Holiday Pouch
Small Holiday Pouch
Small red pouch that holds all the products 
1 item
Benefits
Enhances the lashes and eyes.`
    },
    {
      id: 142,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112645_original_original_1.jpg",
      name: "4D Mascara Collection",
      size: "Unit",
      oldPrice: "103.00",
      newPrice: 83.0,
      description:`The ideal skincare and makeup set for your morning beauty routine. For a bright complexion, SOS Primer White boosts its radiance. For smouldering eyes: the SOS Lashes and Wonder Perfect 4D Mascara duo - volume, length, curl, high definition: lashes are enhanced. For moisturized, shiny lips: Lip Comfort Oil. A small case contains these products.
This set contains:
Wonder Perfect Mascara 4D
Wonder Perfect Mascara 4D
All-in-one, 4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
8 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
SOS Lashes Serum Mascara 3 mL
SOS Lashes Serum Mascara 3 mL
The new half-mascara, half lash-care treatment that provides volume, length, density, curl and definition with every stroke. 
1 item
SOS Primer white 5 mL
SOS Primer white 5 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
Small Holiday Pouch
Small Holiday Pouch
Small red pouch that holds all the products 
1 item
Benefits
Intensifies the eyes
Enhances the lips and complexion`
    },
    {
      id: 143,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112647_original_original_1 (1).jpg",
      name: "Mascaras Collection",
      size: "Unit",
      oldPrice: "44.00",
      newPrice: 39.0,
      description:`This set combines the 3 steps required for a perfect eye routine. First, a serum for your eyelashes that's part mascara, part treatment to add volume, length, density, curl and definition thanks to the Lash Boosting Complex developed by Clarins Laboratories. Then Wonder Perfect 4D Mascara to enhance, lengthen and curl lashes. Finally, use a top-coat mascara to set, tame and waterproof the makeup.
This set contains:
SOS Lashes Serum Mascara 3 mL
SOS Lashes Serum Mascara 3 mL
The new half-mascara, half lash-care treatment that provides volume, length, density, curl and definition with every stroke. 
1 item
Lash&Brow Double Fix Mascara 01 Eyes Miniature 3ml 2022
Lash&Brow Double Fix Mascara 01 Eyes Miniature 3ml 2022
Out of Stock 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Benefits
Lengthens lashes.
Strengthens lashes.
Enhances the eyes.
Fixes eye make-up in place.`
    },
    {
      id: 144,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112648_original_original_1.webp",
      name: "Holiday Mascara Set",
      size: "Unit",
      oldPrice: "49.00",
      newPrice: 39.0,
      description:`This set contains all the essentials for natural, easy and successful makeup. For the face and lips, the SOS Primer White corrects blemishes and restores radiance, paired with a subtly tinted, glossy, and nourishing lip oil. For the eyes, an instant eye make-up remover that gently removes make-up (suitable for sensitive eyes) and Wonder Perfect 4D Mascara that gives lashes volume, length and curl.
This set contains:
Instant Eye Make-Up Remover 30ml
Instant Eye Make-Up Remover 30ml
The bi-phase eye makeup remover that gently removes waterproof makeup. 
1 item
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
SOS Primer White 10 mL
SOS Primer White 10 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
Benefits
Enhances the complexion, lips and eyes.`
    },
    {
      id: 145,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80088551_original_original_1.webp",
      name: "SOS Lashes Serum Mascara",
      size: "8ml",
      oldPrice: "",
      newPrice: 42.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream-Gel
Use: Every day, morning and night. Learn more
Benefits
Best eyelash growth serum
Volume
Length and density
Curve and definition
Learn More
Are your lashes damaged by unsuitable makeup removal, extensions, or frequent use of an eyelash curler? SOS lash serum-infused mascara is the solution. The result is three times more volume for thicker, natural-looking lashes. At the cutting edge of innovation, SOS Lashes Serum Mascara is enriched with the LASH BOOSTING COMPLEX to visibly lengthen and strengthen lashes – making them visibly longer and thicker after every application. It’s formulated with 94% naturally-sourced ingredients – including organic castor oil, which has a coating and strengthening power that magnifies the lashes; organic oat sugar extract, which helps to coat lashes naturally; and pistachio extract, which helps to strengthen them from the base.
You’ll see how revitalized and refreshed your lashes look in just 28 days of using SOS Lashes Serum Mascara.
Clarins Plus
Once the texture is dry, SOS Lashes Serum Mascara adapts to the natural shade of your lashes for an elevated effect on bare lashes.`
    },
    {
      id: 146,
      label: "",
      imgSrc: "../img/Product1/80088557_original_original_1.jpg",
      name: "Lash & Brow Double Fix' Mascara",
      size: "8ml",
      oldPrice: "",
      newPrice: 39.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Cream-Gel
Use: Every day if needed. Learn more
Benefits
Waterproofs the lashes and eyebrows.
Tames and fixes.
Improves makeup hold.
Learn More
The new Lash & Brow Double Fix’ Mascara waterproofs lashes with its totally invisible gel and is applied over your usual Clarins mascara to make it water and sweat-resistant. Applied to bare or filled-in eyebrows, it perfectly holds and fixes their shape and reinforces the hold of the makeup. Its protective and nourishing formula contains 83% natural ingredients. Organic cranberry oil helps to protect lashes and eyebrows and the LASH BOOSTING COMPLEX visibly lengthens and strengthens lashes. Day after day, lashes appear thicker, fuller and visibly longer.
Clarins Plus
Makeup made for skin. Developed with the same expertise as Clarins' skincare, we harness the power of the most potent plant extracts for makeup that delivers true skincare benefits.`
    },
    {
      id: 147,
      label: "",
      imgSrc: "../img/Product1/80080009_original_original_1.webp",
      name: "Lift & Curl Mascara",
      size: "8ml",
      oldPrice: "39.00",
      newPrice: 35.1,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream Learn more
Benefits
Lashes are visibly lengthened.
Enveloping texture.
Eyes appear more open.
Water-resistant and smudgeproof.
Make-up and skincare hybrid formula.
Learn More
Lash-enhancing effect: thanks to the Supra Lift & Curl Mascara, you can now enhance lashes in the blink of an eye without damaging them! What does it do? Lashes are lifted, curled and perfectly defined with increased volume. Its formula rich in deep black and water-resistant mineral pigments doesn’t move from the lash. And the bitter orange blossom wax coasts, protects and curls lashes for easy application in a single sweep.
Clarins Plus
Make-up and skincare hybrid formula.`
    },
    {
      id: 148,
      label: "",
      imgSrc: "../img/Product1/80051985_original_original_1.jpg",
      name: "Supra Volume Mascara",
      size: "8ml",
      oldPrice: "39.00",
      newPrice: 35.1,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Gel/Liquid
Use: Apply from roots to tips for a full, fanned-out lash look. Learn more
Benefits
Double volume effect.
Visibly thickens and smoothes.
Fans out lashes.
Clump-free and long-wearing.
Easy one coat application.
Gentle on eyes.
Learn More
The Supra Volume Mascara intensifies and enhances eyelashes with extra care.
Cassia flower wax is used in the formula for instant volume and intense colour. With regular application, the Volume Boost complex increases the volume of your lashes by 17.6%*. Lashes can appear fuller after four weeks of use.
* Clinical study: Analysis of the treatment effect on bare lashes for 30 women over four weeks
Clarins Plus
Makeup made for skin. Developed with the same expertise as Clarins' skincare, we harness the power of the most potent plant extracts for makeup that delivers true skincare benefits.`
    },
    {
      id: 149,
      label: "",
      imgSrc: "../img/Product1/80060768_original_original_x.jpg",
      name: "Wonder Perfect Mascara 4D Waterproof",
      size: "8ml",
      oldPrice: "39.00",
      newPrice: 35.1,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Cream
Use: Apply from roots to tips of lashes. Learn more
Benefits
Visibly lengthens, curls, defines, and volumizes.
Waterproof formula resists humidity, sweat, and watery eyes.
Delivers intense, flake-proof, and smudge-proof color.
Gentle on eyes.
Learn More
Wonder Perfect Mascara 4D Waterproof gives your lashes volume, length, curve and definition for flawless four-dimensional eyes as it visibly lengthens and thickens lashes more every day. The more you wear it, the more beautiful your lashes will be. It's special power? The emotion-resistant waterproof formula can stand up to anything your day brings! This mascara won't budge, even when exposed to water, humidity, heat or tears (tears of joy, of course!). You can count on it to never let you down.
Clarins Plus
Contains Clarins’ exclusive Lash Boosting Complex formulated with Sphingosine and Panthenol to help protect lashes and promote visibly thicker, longer-looking lashes even after you've removed your mascara.`
    },
    {
      id: 150,
      label: "",
      imgSrc: "../img/Product1/80044967_original_original_1.webp",
      name: "Wonder Perfect Mascara 4D",
      size: "8ml",
      oldPrice: "39.00",
      newPrice: 35.1,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Gel / Fluid
Use: Apply from roots to tips of lashes. Learn more
Benefits
Visibly lengthens, curls, defines, and volumizes lashes with Lash Boosting Complex
Filmogenic Rose Wax provides long-wear color and hold
Learn More
An all-in-one, 4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized—for a captivating, wide-eyed look.
This unique formula combines intense carbon-black mineral pigments with filmogenic Rose Wax for long-wearing color and hold. Clarins’ exclusive Lash Boosting Complex of Sphingony and Panthenol protects lashes and promotes visibly thicker, longer-looking lashes even after you've removed your mascara.
Clarins' exclusive precision brush allows for the perfect balance of volume & definition so no lash goes unnoticed.
Clarins Plus
Makeup made for skin. Developed with the same expertise as Clarins' skincare, we harness the power of the most potent plant extracts for makeup that delivers true skincare benefits.`
    },
    {
      id: 151,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80084589_original_original_1.webp",
      name: "Lip Comfort Oil - Tinted Lip Oil",
      size: "7ml",
      oldPrice: "40.00",
      newPrice: 36.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Oil
Use: Any time of day! Learn more
Benefits
Shiny, glossy pout
Moisturized, nourished and comforted lips
Learn More
Clarins’ Lip Comfort Oil is a great base for colour: a tinted lip oil that doesn’t compromise on shine, nourishment or comfort. Its formula has been perfected and enriched with 93% naturally-sourced ingredients, including 30% ultra-nourishing botanical oils – namely organic jojoba, hazelnut, and organic rosehip star extract oil. What does lip oil do? In addition to providing nourishment and comfort, this extract helps strengthen the barrier function and, therefore, protects against environmental damage.
A cocktail of unique oils that provides lips with thirst-quenching hydration, nourishment, protection and repair. Lips are immediately and durably calmed, soothed, and moisturized.
Clarins Plus
To wake up to more beautiful lips, apply Lip Comfort Oil before bed after removing all traces of makeup.`
    },
    {
      id: 152,
      label: "",
      imgSrc: "../img/Product1/80105092_original_original_1.webp",
      name: "Lip Comfort Oil - Power of colours",
      size: "7ml",
      oldPrice: "",
      newPrice: 40.0,
      description:`Benefits
Lips are left soft, supple.
Lips are hydrated and enhanced.
Learn More
The Lip Comfort Oil Power of Colours reveals 3 new vibrant shades.

- Joyful yellow: shining like the sun’s rays.
This yellow gives you an extra boost: shine and radiate positive energy as your bright lips smile for themselves.
- Daring orange: sparkle, dare, radiate.
Giving you more oomph and self-confidence, daring orange provides the ideal makeup look for shining, surprising others and asserting yourself.
- Passionate pink: For lips to be fallen in love with.
This shade exudes passion and is perfect for adding a sensual touch to your look, spreading love wherever you go.

Does not compromise on hydration, comfort or shine!
The uniquely soft, light and comforting texture offers maximum sensoriality and extreme comfort when applied. Its formula reflects the light for an irresistible glossy finish!
Innovation and plant expertise
Inspired by colour-therapy, the Power of Colours collection allows you to connect with your emotions. Colours boost our mood and give us energy!
Clarins Plus
Made with unique savoir-faire, Lip Comfort Oil is a representation of Clarins’ expertise. The Lip Comfort Oil Power of Colours formula is enriched with 90% ingredients of natural origin. A unique* cocktail of organic jojoba and hazelnut oils combined with organic sweet briar rose oil extract.*At Clarins`
    },
    {
      id: 153,
      label: "NEW",
      imgSrc: "../img/Product1/80107192_original_original_1.webp",
      name: "Lip Comfort Oil - Black & White Edition",
      size: "7ml",
      oldPrice: "",
      newPrice: 40.0,
      description:`Benefits
The beauty of lips is enhanced.
Lips are hydrated and beautified.
Provides lips with an intense moisturizing treatment.
Learn More
Lip Comfort Oil is available in two new shades: black and white, embodying the duality of a chess game.

- The Black shade, enriched with golden mother-of-pearl, develops into a subtle shade of plum upon contact with the lips.
- The White shade, enriched with white and silver mother-of-pearl, enhances the lips with its iridescent sheen.

What’s more: it serves a dual purpose of being both makeup and skincare! Lip Comfort Oil combines the subtle colour and shine of a gloss with the comfort of an oil. Provides immediate and long-lasting hydration to the lips.
Innovation and plant expertise
The Black shade contains an intelligent pigment that adapts to the pH of the lips, revealing a subtle plum shade.
Clarins Plus
The result of unique expertise in skincare and plant oils, Lip Comfort Oil reflects 65 years of Clarins expertise. A truly colourful skincare elixir enriched with 90% ingredients of natural origin, including 24% vegetable oils (hazelnut and jojoba).`
    },
    {
      "id": 154,
      "label": "",
      "imgSrc": "../img/Product1/80106558_original_original_1.webp",
      "name": "Lip Oil Balm Hydrating Peptide Balm",
      "size": "2.9 g",
      "oldPrice": "$40.00",
      "newPrice": 36.00,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Balm
Use: Use as often as you wish. Learn more
Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 155,
      label: "",
      imgSrc: "../img/Product1/80074351_original_original_1.jpg",
      name: "Lip Comfort Oil - Tinted Lip Oil",
      size: "7ml",
      oldPrice: "",
      newPrice: 40.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Oil Learn more
Benefits
Nourishes.
Leaves the lips comfortable.
Leaves a non-sticky, shimmering veil on the lips.
Learn More
Lip Comfort Oil Shimmer offers bright color and 3D shine thanks to its combination of intense pigments and highly-concentrated fine shimmer: your lips are visibly plumped and enhanced. It also doesn't sacrifice care: its ultra rich trio of oils nourishes, comforts and protects the lips.`
    },
    {
      id: 156,
      label: "",
      imgSrc: "../img/Product1/80060075_original_original_1.jpg",
      name: "Intense Lip Comfort Oil",
      size: "7ml",
      oldPrice: "",
      newPrice: 38.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Oil
Use: Apply on the lips any time of the day whenever you feel like it. Learn more
Benefits
Intense color
Mirror-like shine
Soft texture
Cocktail of three botanical oils
Learn More
Intense Lip Comfort Oil is a powerhouse of lip care, color and shine. Intense Lip Comfort Oil hydrates and softens your lips with three ultra-nourishing organic oils: hazelnut, jojoba and cranberry. Made with a mirror-shine formula. You can almost see your reflection!`
    },
    {
      id: 157,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112650_original_original_1.jpg",
      name: "12-Day Advent Calendar",
      size: "Unit",
      oldPrice: "251.00",
      newPrice: 135.0,
      description:`This 12-Day Advent Calendar celebrates the magic of the festive season with 3 carefully selected beauty routines for face care, body care and makeup: the very best of Clarins’ expertise to enhance your skin and look after yourself throughout December.
With its plastic-free case and 100% FSC-certified and recyclable paper, this eco-designed calendar is part of our commitment to reducing our environmental impact.

Ready for a cosmic party? Embark on the most fabulous journey, to the planet of Clarins.
This Advent calendar celebrates the magic of the festive season with a constellation of beauty surprises: 3 face care, body care and makeup routines carefully selected to pamper you throughout December.

The calendar's Parisian façade is a nod to Clarins' origins, celebrating 70 years of plant-based beauty and professional expertise.

In line with the brand's commitments, this calendar is eco-designed, with a plastic-free case made from FSC-certified paper, printed with plant-based and recyclable inks.
This set contains:
Beauty Flash Balm
Beauty Flash Balm
Face tightening cream that instantly erases signs of fatigue and restores radiance to the complexion for glowing skin. 
50 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Hydrating Toning Lotion 50 mL
Hydrating Toning Lotion 50 mL
The toning lotion that moisturizes, softens and helps to maintain the balance of normal to dry skin types. 
1 item
One-Step Gentle Exfoliating Cleanser 30 mL
One-Step Gentle Exfoliating Cleanser 30 mL
This refreshing exfoliating cleanser removes makeup, cleanses and gently exfoliates, all while maintaining the skin’s balance. 
1 item
Hydra-Essentiel Mask 15ml
Hydra-Essentiel Mask 15ml
The mask enriched with hyaluronic acids and ceramides for intense hydration and a strengthened skin barrier. 
1 item
Total Eye Lift 7 mL
Total Eye Lift 7 mL
Lift-Replenishing Eye Concentrate 
1 item
SOS Primer white 5 mL
SOS Primer white 5 mL
The lifesaving primer that will brighten your complexion and meet your skin’s needs. 
1 item
SOS Lashes Serum Mascara 3 mL
SOS Lashes Serum Mascara 3 mL
The new half-mascara, half lash-care treatment that provides volume, length, density, curl and definition with every stroke. 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Moisture-Rich Body Lotion 30 mL
Moisture-Rich Body Lotion 30 mL
The perfect moisturizer for intense hydration on even the driest skin. 
1 item
Exfoliating Body Scrub For Smooth Skin 30 mL
Exfoliating Body Scrub For Smooth Skin 30 mL
Soften, smooth and firm with bamboo powder 
1 item
Hand and Nail Treatment Cream 30 mL
Hand and Nail Treatment Cream 30 mL
A moisturizer that softens, protects, hydrates, and strengthens your hands and nails. 
1 item`
    },
    {
      id: 158,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112649_original_original_1.webp",
      name: "Radiant Lips Collection",
      size: "Unit",
      oldPrice: "160.00",
      newPrice: 140.0,
      description:`This is a collection that will put a smile on your face. Clarins' iconic Lip Oil in four ultra-glossy shades. It enhances and brightens the lips while caring for them with its moisturizing and nourishing formula. With its mousse applicator, applying makeup is as easy as it is pleasant. Its texture leaves behind an addictive feeling of softness and a delicious fragrance on the lips. A small case holds these 4 Oils.
This set contains:
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Small Holiday Pouch
Small Holiday Pouch
Small red pouch that holds all the products 
1 item
Benefits
Nourishes
Moisturizes
Enhances lips`
    },
    {
      id: 159,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80116648_original_original_1.webp",
      name: "Beautiful Lips Collection – Red Edition",
      size: "1 item",
      oldPrice: "",
      newPrice: 42.0,
      description:`This is a collection that will put a smile on your face. Clarins' iconic Lip Comfort Oil in four ultra-glossy shades. It enhances and brightens the lips while caring for them with its moisturizing and comforting formula. With its mousse applicator, applying makeup is as easy as it is pleasant. Its texture leaves behind an addictive feeling of softness and a delicious fragrance on the lips.
This set contains:
Mini Lip Comfort Oil - 01 honey 1.4 mL
Mini Lip Comfort Oil - 01 honey 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Mini Lip Comfort Oil - 03 cherry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Mini Lip Comfort Oil - 04 pitaya 1.4 mL
Mini Lip Comfort Oil - 04 pitaya 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Mini Lip Comfort Oil - 08 strawberry 1.4 mL
Mini Lip Comfort Oil - 08 strawberry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Benefits
Hydrates
Softens & comforts the lips`
    },
    {
      id: 160,
      label: "",
      imgSrc: "../img/Product1/80109498_original_original_1.webp",
      name: "Clarins Icons Collection",
      size: "Unit",
      oldPrice: "154.00",
      newPrice: 131.0,
      description:`This set, created to celebrate the brand’s 70th anniversary, brings together the iconic skincare and makeup products that have made Clarins so successful over the last 70 years. The legendary Hand and Nail Treatment Cream, which is like a true glove of beauty that moisturizes and beautifies the skin. Eau Dynamisante, the first Treatment Fragrance to combine a fragrance with the benefits of plants. Beauty Flash Balm, a magic treatment that boosts radiance. Our Lip Comfort Oil in the shade Cherry, which uses the power of Clarins oils to nourish and enhance lips. Wonder Perfect Mascara, for a mesmerising look. A red velvet vanity case that contains this innovative collection of Clarins products.
This set contains:
Eau Dynamisante
Eau Dynamisante
An invigorating Clarins Treatment Fragrance that takes care of the skin and mind. 
50 ml
Beauty Flash Balm
Beauty Flash Balm
Face tightening cream that instantly erases signs of fatigue and restores radiance to the complexion for glowing skin. 
50 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Hand and Nail Treatment Cream 30 mL
Hand and Nail Treatment Cream 30 mL
A moisturizer that softens, protects, hydrates, and strengthens your hands and nails. 
1 item
Wonder Perfect Mascara 4D mini
Wonder Perfect Mascara 4D mini
4D mascara that takes lashes to bold new dimensions: visibly lengthened, curled, defined and volumized. 
1 item
Benefits
Hydrated, toned and rested skin
Shiny lips
Enhanced eyes`
    },
    {
      id: 161,
      label: "",
      imgSrc: "../img/Product1/80109499_original_original_1.webp",
      name: "Iconic Lip Oils Collection",
      size: "Unit",
      oldPrice: "96.00",
      newPrice: 82.0,
      description:`Oils have been at the heart of Clarins’ expertise ever since the brand was founded: initially just used to moisturize, nourish and firm the face and/or body, they are now also available for the lips. The Lip Comfort Oils nourish and enhance lips thanks to the power of the plant oils they contain. This special set, created to celebrate the brand’s 70th anniversary, brings together 4 different shades: Honey and Pitaya in our full-sized format (7mL) and Raspberry and Strawberry in our mini format (1.4 mL) to suit your mood and outfit.
This set contains:
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Lip Comfort Oil - Tinted Lip Oil
Lip Comfort Oil - Tinted Lip Oil
Our most nourishing lip oil for shiny, enhanced lips, with added protection and comfort. 
7 ml
Mini Lip Comfort Oil - 02 raspberry 1.4 mL
Mini Lip Comfort Oil - 02 raspberry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Mini Lip Comfort Oil - 08 strawberry 1.4 mL
Mini Lip Comfort Oil - 08 strawberry 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Benefits
Shiny and moisturized lips`
    },
    {
      id: 162,
      label: "",
      imgSrc: "../img/Product1/80112882_original_original_1.webp",
      name: "SLip Comfort Oil Duo",
      size: "2 x 1,4 ml",
      oldPrice: "",
      newPrice: 21.0,
      description:`Oils have been at the heart of Clarins’ expertise ever since the brand was founded: initially just used to moisturize, nourish and firm the face and body, they are now also available for the lips. The Lip Comfort Oils nourish and enhance lips thanks to the power of the plant oils they contain. This set brings together 2 different shades: Honey and Pitaya in our mini format (1.4 mL) to suit your mood and outfit.
This set contains:
Mini Lip Comfort Oil - 04 pitaya 1.4 mL
Mini Lip Comfort Oil - 04 pitaya 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Mini Lip Comfort Oil - 01 honey 1.4 mL
Mini Lip Comfort Oil - 01 honey 1.4 mL
Nourishing oil for shiny, enhanced lips. 
1 item
Benefits
Shiny and moisturized lips`
    },
    {
      id: 163,
      label: "",
      imgSrc: "../img/Product1/80106558_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "40.00",
      newPrice: 36.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Balm
Use: Use as often as you wish. Learn more
Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 164,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80114832_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Benefits
Plumped & nourished lips.
Radiant and natural finish.
Learn More
This all-in-one cream gloss glides over the lips, leaving them shiny and sparkling in just one swipe. It enhances the lips, intensifying their radiance, and its gel texture with plumping peptides provide a plumping effect: they look as good as they feel. The Lip Highlighter Complex with two types of pearls makes lips look plump, bright and luminous.
96% skincare formula including shea butter, shea unsaponifiable (organic plant) and wild mango butter that have been selected to help restore the hydrolipidic film of the lips. Intensely nourished and moisturized, they are soft, supple and smoothed. A unique and naturally derived plumping peptide, the "peptide volume booster", provides intense hydration for your lips. Lastly, gamma-oryzanol from rice care oil for deliciously dewy and protected lips.

This product won the ELLE Beauty Grand Prix 2024 in the category of best lip glosses priced at $20 and over.
Innovation and plant expertise
Clarins NEW Lip Perfector Highlighter Complex contains 2 mother-of-pearls —Ronastar Silver for its bright, sparkling finish and Ronastar Red Sparks for its warm pink, golden and coppery tones. The whiteness and large size of these pearls provide optimal light reflection resulting in pure, vivid colors and multi-directional 3-D shine.
Clarins Plus
Lip Perfector can also be applied on cheeks. It provides an ultra-natural healthy glow and the cheeks are left plumped and smooth.`
    },
    {
      id: 165,
      label: "NEW",
      imgSrc: "../img/Product1/80098702_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Benefits
Plumped & nourished lips.
Radiant and natural finish.
Learn More
This all-in-one cream gloss glides over the lips, leaving them shiny and sparkling in just one swipe. It enhances the lips, intensifying their radiance, and its gel texture with plumping peptides provide a plumping effect: they look as good as they feel. The Lip Highlighter Complex with two types of pearls makes lips look plump, bright and luminous.

96% skincare formula including shea butter, shea unsaponifiable (organic plant) and wild mango butter that have been selected to help restore the hydrolipidic film of the lips. Intensely nourished and moisturized, they are soft, supple and smoothed. A unique and naturally derived plumping peptide, the "peptide volume booster", provides intense hydration for your lips. Lastly, gamma-oryzanol from rice care oil for deliciously dewy and protected lips.

This product won the ELLE Beauty Grand Prix 2024 in the category of best lip glosses priced at $20 and over.
Innovation and plant expertise
Clarins NEW Lip Perfector Highlighter Complex contains 2 mother-of-pearls —Ronastar Silver for its bright, sparkling finish and Ronastar Red Sparks for its warm pink, golden and coppery tones. The whiteness and large size of these pearls provide optimal light reflection resulting in pure, vivid colors and multi-directional 3-D shine.
Clarins Plus
Lip Perfector can also be applied on cheeks. It provides an ultra-natural healthy glow and the cheeks are left plumped and smooth.`
    },
    {
      id: 166,
      label: "",
      imgSrc: "../img/Product1/80098704_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply throughout the day Learn more
Benefits
Plumped & nourished lips.
Radiant and natural finish.
Learn More
This all-in-one cream gloss glides over the lips, leaving them shiny and sparkling in just one swipe. It enhances the lips, intensifying their radiance, and its gel texture with plumping peptides provide a plumping effect: they look as good as they feel. The Lip Highlighter Complex with two types of pearls makes lips look plump, bright and luminous.

96% skincare formula including shea butter, shea unsaponifiable (organic plant) and wild mango butter that have been selected to help restore the hydrolipidic film of the lips. Intensely nourished and moisturized, they are soft, supple and smoothed. A unique and naturally derived plumping peptide, the "peptide volume booster", provides intense hydration for your lips. Lastly, gamma-oryzanol from rice care oil for deliciously dewy and protected lips.

This product won the ELLE Beauty Grand Prix 2024 in the category of best lip glosses priced at $20 and over.
Innovation and plant expertise
Clarins NEW Lip Perfector Highlighter Complex contains 2 mother-of-pearls —Ronastar Silver for its bright, sparkling finish and Ronastar Red Sparks for its warm pink, golden and coppery tones. The whiteness and large size of these pearls provide optimal light reflection resulting in pure, vivid colors and multi-directional 3-D shine.
Clarins Plus
Lip Perfector can also be applied on cheeks. It provides an ultra-natural healthy glow and the cheeks are left plumped and smooth.`
    },
    {
      id: 167,
      label: "",
      imgSrc: "../img/Product1/80098705_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply throughout the day Learn more
Benefits
Plumped & nourished lips.
Radiant and natural finish.
Learn More
This all-in-one cream gloss glides over the lips, leaving them shiny and sparkling in just one swipe. It enhances the lips, intensifying their radiance, and its gel texture with plumping peptides provide a plumping effect: they look as good as they feel. The Lip Highlighter Complex with two types of pearls makes lips look plump, bright and luminous.

96% skincare formula including shea butter, shea unsaponifiable (organic plant) and wild mango butter that have been selected to help restore the hydrolipidic film of the lips. Intensely nourished and moisturized, they are soft, supple and smoothed. A unique and naturally derived plumping peptide, the "peptide volume booster", provides intense hydration for your lips. Lastly, gamma-oryzanol from rice care oil for deliciously dewy and protected lips.

This product won the ELLE Beauty Grand Prix 2024 in the category of best lip glosses priced at $20 and over.
Innovation and plant expertise
Clarins NEW Lip Perfector Highlighter Complex contains 2 mother-of-pearls —Ronastar Silver for its bright, sparkling finish and Ronastar Red Sparks for its warm pink, golden and coppery tones. The whiteness and large size of these pearls provide optimal light reflection resulting in pure, vivid colors and multi-directional 3-D shine.
Clarins Plus
Lip Perfector can also be applied on cheeks. It provides an ultra-natural healthy glow and the cheeks are left plumped and smooth.`
    },
    {
      id: 168,
      label: "",
      imgSrc: "../img/Product1/80098707_original_original_X.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply throughout the day Learn more
Benefits
Plumped & nourished lips.
Radiant and natural finish.
Learn More
This all-in-one cream gloss glides over the lips, leaving them shiny and sparkling in just one swipe. It enhances the lips, intensifying their radiance, and its gel texture with plumping peptides provide a plumping effect: they look as good as they feel. The Lip Highlighter Complex with two types of pearls makes lips look plump, bright and luminous.

96% skincare formula including shea butter, shea unsaponifiable (organic plant) and wild mango butter that have been selected to help restore the hydrolipidic film of the lips. Intensely nourished and moisturized, they are soft, supple and smoothed. A unique and naturally derived plumping peptide, the "peptide volume booster", provides intense hydration for your lips. Lastly, gamma-oryzanol from rice care oil for deliciously dewy and protected lips.

This product won the ELLE Beauty Grand Prix 2024 in the category of best lip glosses priced at $20 and over.
Innovation and plant expertise
Clarins NEW Lip Perfector Highlighter Complex contains 2 mother-of-pearls —Ronastar Silver for its bright, sparkling finish and Ronastar Red Sparks for its warm pink, golden and coppery tones. The whiteness and large size of these pearls provide optimal light reflection resulting in pure, vivid colors and multi-directional 3-D shine.
Clarins Plus
Lip Perfector can also be applied on cheeks. It provides an ultra-natural healthy glow and the cheeks are left plumped and smooth.`
    },
    {
      id: 169,
      label: "",
      imgSrc: "../img/Product1/80114808_original_original_X.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: All Skin Types
Use: Wear alone, or top off your Clarins lipstick for added shine. Learn more
Benefits
4-hour hydration* with Shea butter
Radiant shine, wet effect
Melting, non-sticky cream-gel texture
Addictive vanilla scent
Comforting cushion applicator
*Instrumental test - 11 women
Learn More
Four new bolder shades that plump up your lips and give them a wet-look gloss. The "cushion" applicator is designed to expertly hug every curve of your lips as it dispenses the perfect amount of high-sensory melting gel for a uniform finish.`
    },
    {
      id: 170,
      label: "",
      imgSrc: "../img/Product1/80114815_original_original_X.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Benefits
Plumps and shines
Nourishes and hydrates
Melting cream texture
Vanilla scent
Pampering cushion applicator
Learn More
A softly textured lip gel with a deliciously sweet scent. Lips are left looking soft, smooth, shiny and plump. Sheer, but has enough colour to wear alone or to complement your favourite lip shade.

This product won the Grand Prix Beauté ELLE 2024 in the category of best lip gloss priced at $20 and above.`
    },
    {
      id: 171,
      label: "",
      imgSrc: "../img/Product1/80114823_original_original_1.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Benefits
Plumps and shines
Nourishes and hydrates
Melting cream texture
Vanilla scent
Pampering cushion applicator
Learn More
A softly textured lip gel with a deliciously sweet scent. Lips are left looking soft, smooth, shiny and plump. Sheer, but has enough colour to wear alone or to complement your favourite lip shade.

This product won the Grand Prix Beauté ELLE 2024 in the category of best lip gloss priced at $20 and above.`
    },
    {
      id: 172,
      label: "",
      imgSrc: "../img/Product1/80114821_original_original_1.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Benefits
Plumps and shines
Nourishes and hydrates
Melting cream texture
Vanilla scent
Pampering cushion applicator
Learn More
A softly textured lip gel with a deliciously sweet scent. Lips are left looking soft, smooth, shiny and plump. Sheer, but has enough colour to wear alone or to complement your favourite lip shade.

This product won the Grand Prix Beauté ELLE 2024 in the category of best lip gloss priced at $20 and above.`
    },
    {
      id: 173,
      label: "",
      imgSrc: "../img/Product1/80062529_original_original_1.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: 28.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply any time of day. Learn more
Benefits
Matte powder finishBlurring effect & smooth lips
Intense color Extreme comfort
Learn More
This enhancer adds color to the lips with an intense shade and delivers a velvety, powdered makeup effect with a gentle blurring effect. Its ultra-light, non-drying and creamy texture melts into the lips. Its formula enriched with shea butter plumps and shapes the lips, leaving them moisturized, soft and more toned.`
    },
    {
      id: 174,
      label: "",
      imgSrc: "../img/Product1/80106560_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: 40.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Balm
Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 175,
      label: "",
      imgSrc: "../img/Product1/80106557_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: 40.0,
      description:`Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 176,
      label: "",
      imgSrc: "../img/Product1/80106562_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: 40.0,
      description:`Skin Type: Combination, Dry, Normal, Oily
Texture: Balm
Use: Use as often as you wish. Learn more
Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 177,
      label: "",
      imgSrc: "../img/Product1/80106559_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: 40.0,
      description:`Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 178,
      label: "",
      imgSrc: "../img/Product1/80106559_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: 40.0,
      description:`Benefits
Instant Baby Lips effect: even color and shine, smooth and ultra-shiny lips, with a plumping effect.
Skincare formula: smoothing effect on the lips, comfort and suppleness, nourishment.
Light, non-sticky texture.
Learn More
It’s the perfect blend of color and lip care without compromising on comfort, offering a cocoon of hydration, nourishment and protection. It has a lightweight and melting texture.

It is formulated from 90% naturally-derived ingredients, including its powerful trio of plant oils:
- Sweetbriar rose oil helps to comfort and nourish lips.
- Jojoba oil provides nourishment to the lips.
- Hazelnut oil helps to nourish and preserve lips’ hydration, while the plumping peptide action perfectly hydrates and plumps lips for a Baby Lips effect.

All the power of the iconic Lip Comfort Oil infused in a lip balm, with a 95% skincare formula for immediate and long-lasting beautiful lips.
An irresistible shine: 6 delicious shades to enhance your lips in one simple step.
Innovation and plant expertise
Makeup that instantly enhances your lips, while also taking care of them.
Thanks to the unique skincare formula, lips look more beautiful day after day, even when bare.
Clarins Plus
65 years of expertise are concentrated in this unique formula composed of 30% plant oils with 90% naturally-derived ingredients.`
    },
    {
      id: 179,
      label: "",
      imgSrc: "../img/Product1/80106561_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: 40.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply to dry lips as often as needed. Learn more
Benefits
Lips are repaired and protected
Lips are hydrated, plumped and nourished
Lips regain their shine
Learn More
This lip balm with a melting, luxurious texture instantly and intensely protects, moisturizes and nourishes dry lips.

At the heart of this formula is the [HYALURONIC LIP TECHNOLOGY]. Plant-based hyaluronic acid pearls and plumping peptides restore the lips’ plumped appearance and natural shine. Organic cocoa extract hydrates the lips.

The lips regain their natural shine and plumped appearance, and they are left feeling softer, smoother and more comfortable.
The Moisture Replenishing Lip Balm melts instantly into the lips, like a gentle caress. Rich but non-sticky, it enhances lips with a beautiful glow.
Innovation and plant expertise
For the first time, Clarins Laboratories have integrated hyaluronic acid into a lip care formula.`
    },
    {
      id: 180,
      label: "",
      imgSrc: "../img/Product1/80107590_original_original_1.jpg",
      name: "Total Eye Lift - Under Eye Tightening Cream",
      size: "15ml",
      oldPrice: "105.00",
      newPrice: 94.5,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply to dry lips as often as needed. Learn more
Benefits
Lips are repaired and protected
Lips are hydrated, plumped and nourished
Lips regain their shine
Learn More
This lip balm with a melting, luxurious texture instantly and intensely protects, moisturizes and nourishes dry lips.

At the heart of this formula is the [HYALURONIC LIP TECHNOLOGY]. Plant-based hyaluronic acid pearls and plumping peptides restore the lips’ plumped appearance and natural shine. Organic cocoa extract hydrates the lips.

The lips regain their natural shine and plumped appearance, and they are left feeling softer, smoother and more comfortable.
The Moisture Replenishing Lip Balm melts instantly into the lips, like a gentle caress. Rich but non-sticky, it enhances lips with a beautiful glow.
Innovation and plant expertise
For the first time, Clarins Laboratories have integrated hyaluronic acid into a lip care formula`
    },
   
    {
      id: 182,
      label: "",
      imgSrc: "../img/Product1/01063100_original_original_X.jpg",
      name: "Extra-Firming Lip & Contour Balm",
      size: "15ml",
      oldPrice: "56.00",
      newPrice: 50.4,
      description:`Texture: Cream
Use: Use as desired. Learn more
Benefits
Visibly smoothes fine lines and wrinkles
Nourishes and comforts dry lips
Softens, replenishes and plumps
Contains Clarins’ Anti-Pollution Complex
Learn More
Melting lip contour balm visibly replenishes, softens, and smoothes the appearance of fine lines and wrinkles around the lip contour. Raspberry Oil, rich in antioxidants and Vitamin E, works together with Shea Butter to visibly smooth, nourish, and protect. Lips appear fuller, younger, and beautifully defined.`
    },
    {
      id: 183,
      label: "",
      imgSrc: "../img/Product1/80070833_original_original_1.jpg",
      name: "my SWEETY BALM",
      size: "3,5 g",
      oldPrice: "",
      newPrice: 15.0,
      description:`Skin Type: Normal, Oily, Combination, Dry
Texture: Balm
Use: Apply any time of day. Learn more
Benefits
Slightly rosy and nourishing
Vegan friendly
Learn More
Sheer lip balm—enriched with nourishing Organic Cacao butter—reacts to the pH of your lips to reveal your personal shade of rose. Soft & nourishing Cacao plumps, comforts and shines. Experience a mood boost with the refreshing scent of peach.`
    },


  ];

    // Tìm sản phẩm dựa trên id từ URL
    useEffect(() => {
      const foundProduct = products.find((product) => product.id === parseInt(id)); // Tìm sản phẩm khớp với id
      if (foundProduct) {
        setProduct(foundProduct); // Nếu tìm thấy, cập nhật trạng thái sản phẩm
      } else {
        setProduct(null); // Nếu không, đặt sản phẩm thành null
      }
    }, [id]); // Chạy lại khi id thay đổi
  
    // Hàm xử lý khi nhấn "Add to Cart"
    const handleBuyClick = () => {
      if (product) {
        // Hiển thị hộp thoại xác nhận
        const userConfirmed = window.confirm(
          `Are you sure you want to add "${product.name}" to your cart?`
        );
  
        if (userConfirmed) {
          const size = product.size; // Lấy thông tin kích thước sản phẩm
          addToCart(product, size, quantity); // Thêm sản phẩm vào giỏ hàng
          navigate("/shopping-cart"); // Chuyển hướng đến trang ShoppingCart
        }
      }
    };
  
    // Hàm xử lý nút See More
    const handleSeeMore = () => {
      setShowMore(!showMore);
    };
  
    // Trường hợp không tìm thấy sản phẩm
    if (!product) {
      return <div>Product not found</div>; // Hiển thị thông báo nếu không tìm thấy sản phẩm
    }
  
    return (
      <div className="product-detail">
        {/* Phần hình ảnh sản phẩm */}
        <div className="product-imagebb">
          <img src={product.imgSrc} alt={product.name} />
        </div>
  
        {/* Phần thông tin sản phẩm */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="reviews2">
          <span>★★★★★</span> <span>999 Reviews</span>
        </div>
          <p>Size: {product.size}</p>
          <p>
            Old Price: <del>{product.oldPrice}</del>
          </p>
          <h1>New Price: ${product.newPrice.toFixed(2)}</h1>
  
          {/* Nhập số lượng sản phẩm */}
          <div>
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
          {/* Nút thêm vào giỏ hàng */}
          <button className="but" onClick={handleBuyClick}>
            Add to Cart
          </button>
          <div className="additional-info">
          <p>✅ Free carbon-neutral shipping on this item</p>
          <p>🎁 Earn 1350 points with this purchase!</p>
          
        </div>
        </div>
        
  
        {/* Phần mô tả sản phẩm */}
        <div className="product-description">
          <h3>Description:</h3>
          {product.description ? (
            <p>
              {showMore
                ? product.description
                : `${product.description.substring(0, 300)}...`}
            </p>
          ) : (
            <p>No description available.</p>
          )}
          <button className="see-more-btncc" onClick={handleSeeMore}>
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

      </div>
    );
  };
  
  export default ProductDetail;

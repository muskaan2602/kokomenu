export interface SubItem {
  name: string;
  description: string;
  price: number | null;
  image: string;
  isVeg: boolean;
}

export interface WrapItem {
  name: string;
  description: string;
  regular: number | null;
  jumbo: number | null;
  image: string;
  isVeg: boolean;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number | null;
  image: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
  flavourNote?: string;
}

export const wraps: WrapItem[] = [
  {
    name: "Paneer Tikka Wrap",
    description: "Smoky grilled paneer with tandoori spices, onions & mint chutney.",
    regular: 159,
    jumbo: 179,
    image: "/wraps/paneer_tikka.jpg",
    isVeg: true,
  },
  {
    name: "Paneer Peri Peri Wrap",
    description: "Spiced paneer with fiery peri peri sauce, lettuce & fresh veggies.",
    regular: 159,
    jumbo: 179,
    image: "/wraps/paneer_periperi.jpg",
    isVeg: true,
  },
  {
    name: "Paneer Patty Wrap",
    description: "Classic seasoned paneer patty with crisp veggies and tangy sauce.",
    regular: 169,
    jumbo: 209,
    image: "/wraps/paneer_wrap.jpg",
    isVeg: true,
  },
  {
    name: "Aloo Patty Wrap",
    description: "Crispy potato patty with chutneys, onions & fresh herbs.",
    regular: 139,
    jumbo: 159,
    image: "/wraps/Aloo_Tikki_Wrap.jpg",
    isVeg: true,
  },
  {
    name: "Hara Bhara Patty Wrap",
    description: "Wholesome green patty with spinach, peas & mint mayo.",
    regular: 169,
    jumbo: 199,
    image: "/wraps/hara_bhara.jpg",
    isVeg: true,
  },
  {
    name: "Veggie Patty Wrap",
    description: "Juicy veggie patty loaded with fresh greens and house sauce.",
    regular: 139,
    jumbo: 159,
    image: "/wraps/veggie_patty.jpg",
    isVeg: true,
  },
  {
    name: "Falafel Patty Wrap",
    description: "Crispy falafel with hummus, pickles, lettuce & tahini drizzle.",
    regular: 169,
    jumbo: 189,
    image: "/wraps/falafal_wrap.jpg",
    isVeg: true,
  },
  {
    name: "Tandoori Chicken Wrap",
    description: "Marinated tandoori chicken with onions, chutney & yogurt sauce.",
    regular: 179,
    jumbo: 209,
    image: "/wraps/tandoori_chicken_wrap.jpg",
    isVeg: false,
  },
  {
    name: "Peri Peri Chicken Wrap",
    description: "Grilled chicken tossed in bold peri peri sauce with fresh slaw.",
    regular: 179,
    jumbo: 209,
    image: "/wraps/peri_peri_chicken_wrap.jpg",
    isVeg: false,
  },
  {
    name: "Chicken Seekh Kabab Wrap",
    description: "Tender chicken seekh kabab with mint chutney, onions & crisp lettuce.",
    regular: 179,
    jumbo: 209,
    image: "/wraps/chicken_kabab.jpg",
    isVeg: false,
  },
  {
    name: "Krispy Chicken Wrap",
    description: "Crunchy fried chicken with coleslaw, pickles & smoky mayo.",
    regular: 189,
    jumbo: 219,
    image: "/wraps/krispy_chicken.jpg",
    isVeg: false,
  },
  {
    name: "Pesto Chicken Wrap",
    description: "Grilled chicken with fresh basil pesto, sun-dried tomatoes & greens.",
    regular: 229,
    jumbo: 259,
    image: "/wraps/Pesto_Chicken_Wrap.jpg",
    isVeg: false,
  },
];

export const subs: SubItem[] = [
  // ── VEG ──
  {
    name: "Paneer Tikka Sub",
    description: "Smoky grilled paneer with tandoori spices, onions & mint chutney in a toasted sub.",
    price: 179,
    image: "/subs/pesto_paneer_sub.jpg",
    isVeg: true,
  },
  {
    name: "Paneer Peri Peri Sub",
    description: "Spiced paneer with fiery peri peri sauce, lettuce & fresh veggies in a soft sub.",
    price: 179,
    image: "/subs/pesto_paneer_sub.jpg",
    isVeg: true,
  },
  {
    name: "Paneer Patty Sub",
    description: "Classic seasoned paneer patty with crisp veggies and tangy sauce in a toasted sub.",
    price: 209,
    image: "/subs/pesto_paneer_sub.jpg",
    isVeg: true,
  },
  {
    name: "Aloo Patty Sub",
    description: "Crispy potato patty with chutneys, onions & fresh herbs in a soft sub roll.",
    price: 159,
    image: "/subs/veggi_patty_sub.jpg",
    isVeg: true,
  },
  {
    name: "Hara Bhara Patty Sub",
    description: "Wholesome green patty with spinach, peas & mint mayo in a toasted sub.",
    price: 199,
    image: "/subs/veggi_patty_sub.jpg",
    isVeg: true,
  },
  {
    name: "Veggie Patty Sub",
    description: "Juicy veggie patty loaded with fresh greens and house sauce in a toasted sub.",
    price: 159,
    image: "/subs/veggi_patty_sub.jpg",
    isVeg: true,
  },
  {
    name: "Falafel Sub",
    description: "Crispy falafel with hummus, pickles, lettuce & tahini in a soft sub roll.",
    price: 189,
    image: "/subs/falafal_sub.jpg",
    isVeg: true,
  },
  {
    name: "Pesto Paneer Sub",
    description: "Grilled paneer with fresh basil pesto, sun-dried tomatoes & greens.",
    price: 209,
    image: "/subs/pesto_paneer_sub.jpg",
    isVeg: true,
  },
  // ── NON-VEG ──
  {
    name: "Tandoori Chicken Sub",
    description: "Marinated tandoori chicken with onions, chutney & yogurt sauce in a toasted sub.",
    price: 209,
    image: "/subs/chicken_sub.jpg",
    isVeg: false,
  },
  {
    name: "Peri Peri Chicken Sub",
    description: "Grilled chicken tossed in bold peri peri sauce with fresh slaw in a sub.",
    price: 209,
    image: "/subs/chicken_sub.jpg",
    isVeg: false,
  },
  {
    name: "Chicken Seekh Kabab Sub",
    description: "Tender chicken seekh kabab with mint chutney, onions & crisp lettuce in a sub.",
    price: 209,
    image: "/subs/chicken_sub.jpg",
    isVeg: false,
  },
  {
    name: "Krispy Chicken Sub",
    description: "Crunchy fried chicken with coleslaw, pickles & smoky mayo in a toasted sub.",
    price: 219,
    image: "/subs/krispy_chicken_sub.jpg",
    isVeg: false,
  },
  {
    name: "Chicken Sub",
    description: "Seasoned grilled chicken with fresh veggies & sauces in a toasted sub bun.",
    price: 209,
    image: "/subs/chicken_sub.jpg",
    isVeg: false,
  },
  {
    name: "Pesto Chicken Sub",
    description: "Grilled chicken with basil pesto, sun-dried tomatoes & fresh greens.",
    price: 259,
    image: "/subs/pesto_chicken_sub.jpg",
    isVeg: false,
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    icon: "☕",
    items: [
      {
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk & thick foam.",
        price: 129,
        image: "/drinks/Cappuccino.jpg",
      },
      {
        name: "Latte",
        description: "Rich espresso, steamed milk & a light layer of creamy foam.",
        price: 139,
        image: "/drinks/latte.jpg",
      },
      {
        name: "Macchiato",
        description: "Bold espresso with a touch of steamed milk foam.",
        price: 139,
        image: "/drinks/macchiato.jpg",
      },
      {
        name: "Flat White",
        description: "Rich espresso with velvety steamed milk for a smooth, balanced taste.",
        price: 159,
        image: "/drinks/flat_white.jpg",
      },
      {
        name: "Mocha",
        description: "Rich espresso with chocolate, steamed milk & creamy foam.",
        price: 149,
        image: "/drinks/Cafe_Mocha.jpg",
      },
      {
        name: "Hot Chocolate",
        description: "Rich velvety hot chocolate made with real cocoa & steamed milk.",
        price: 149,
        image: "/drinks/Cafe_Mocha.jpg",
      },
      {
        name: "Americano",
        description: "Rich espresso diluted with hot water for a smooth bold taste.",
        price: 99,
        image: "/drinks/americano.jpg",
      },
      {
        name: "Espresso",
        description: "A shot of pure coffee. Rich, bold and intense.",
        price: 79,
        image: "/drinks/espresso.jpg",
      },
    ],
    flavourNote: "Add any flavour shot for +₹20",
  },
  {
    id: "cafe-frappe",
    title: "Cafe Frappe",
    icon: "🥤",
    items: [
      {
        name: "Cafe Frappe",
        description: "Rich coffee, chilled milk, ice & a creamy blend. Smooth, bold & refreshing.",
        price: 139,
        image: "/drinks/cafe_frappe.jpg",
      },
      {
        name: "Iced Mocha",
        description: "Espresso, chocolate, chilled milk & ice. Rich, creamy & indulgent.",
        price: 149,
        image: "/drinks/iced_mocha.jpg",
      },
      {
        name: "Iced Latte",
        description: "Smooth espresso, chilled milk & ice. Light, balanced & refreshing.",
        price: 139,
        image: "/drinks/iced_latte.jpg",
      },
      {
        name: "Brownie Frappe",
        description: "Rich brownie, chocolate, coffee, chilled milk & ice. Creamy, fudgy & irresistible.",
        price: 179,
        image: "/drinks/brownie_frappe.jpg",
      },
      {
        name: "Vanilla Frappe",
        description: "Classic vanilla blended with chilled milk & ice. Sweet & smooth.",
        price: 159,
        image: "/drinks/cafe_frappe.jpg",
      },
      {
        name: "Hazelnut Frappe",
        description: "Rich hazelnut flavour blended with coffee, milk & ice.",
        price: 159,
        image: "/drinks/cafe_frappe.jpg",
      },
      {
        name: "Tiramisu Frappe",
        description: "Tiramisu-inspired frappe with espresso, mascarpone & cocoa dust.",
        price: 159,
        image: "/drinks/iced_mocha.jpg",
      },
    ],
    flavourNote: "Vanilla · Hazelnut · Caramel · Rose Pistachio · Irish · Roasted Hazelnut · Tiramisu · Cheese Cake",
  },
  {
    id: "matcha",
    title: "Matcha",
    icon: "🍵",
    items: [
      {
        name: "Iced Matcha",
        description: "Smooth ceremonial matcha over ice with chilled milk.",
        price: 159,
        image: "/drinks/matcha_latte.jpg",
      },
      {
        name: "Strawberry Matcha",
        description: "Vibrant matcha layered with fresh strawberry.",
        price: 189,
        image: "/drinks/matcha_strawberry.jpg",
      },
      {
        name: "Mango Matcha",
        description: "Refreshing matcha topped with tropical mango.",
        price: 189,
        image: "/drinks/matcha_mango.jpg",
      },
    ],
  },
  {
    id: "ice-tea",
    title: "Ice Tea",
    icon: "🍋",
    items: [
      {
        name: "Peach Ice Tea",
        description: "Cool brewed tea with a sweet peach twist.",
        price: 129,
        image: "/drinks/peach_iced_tea.jpg",
      },
      {
        name: "Lemon Ice Tea",
        description: "Classic chilled tea with a zesty lemon finish.",
        price: 129,
        image: "/drinks/lemon_iced_tea.jpg",
      },
    ],
  },
];

export const flavours = [
  "Hazelnut",
  "Caramel",
  "Irish",
  "Vanilla",
  "Tiramisu",
  "Roasted Hazelnut",
  "Rose",
  "Cheese Cake",
];

export interface MocktailItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ShakeItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const mocktails: MocktailItem[] = [
  { name: "Blueberry", description: "Fresh blueberry cooler bursting with fruity sweetness.", price: 109, image: "/mockatails/blueberry.jpg" },
  { name: "Green Mint", description: "Refreshing mint cooler with a cool zesty finish.", price: 109, image: "/mockatails/green_mint.jpg" },
  { name: "Green Apple", description: "Crisp green apple mocktail, tangy & refreshing.", price: 109, image: "/mockatails/green_apple.jpg" },
  { name: "Peach Garden", description: "Sweet peach with a garden-fresh floral twist.", price: 129, image: "/mockatails/peach_garden.jpg" },
  { name: "Watermelon", description: "Chilled watermelon cooler, light & summery.", price: 129, image: "/mockatails/watermelon.jpg" },
  { name: "Masala Lemonade", description: "Spiced lemonade with a bold Indian masala kick.", price: 139, image: "/mockatails/masala_lemonade.jpg" },
  { name: "Bubblegum", description: "Fun & fruity bubblegum cooler with a pop of colour.", price: 139, image: "/mockatails/bubblegum.jpg" },
  { name: "Anardana", description: "Classic pomegranate cooler with a tangy depth.", price: 139, image: "/mockatails/anadrana.jpg" },
  { name: "Mango Passion Fruit", description: "Tropical mango meets passion fruit in a refreshing blend.", price: 129, image: "/mockatails/mango_passion_fruit.jpg" },
  { name: "Fresh Lime", description: "Simple, zesty fresh lime cooler. Classic and clean.", price: 99, image: "/mockatails/fresh_lime.jpg" },
  { name: "Aam Panna", description: "Traditional raw mango cooler with spices. Desi & delicious.", price: 129, image: "/mockatails/aam_panna.jpg" },
];

export const shakes: ShakeItem[] = [
  { name: "Oreo Shake", description: "Thick creamy shake loaded with crushed Oreo cookies.", price: 139, image: "/shakes/oreo_shake.jpg" },
  { name: "Nutella Shake", description: "Rich & indulgent Nutella hazelnut chocolate shake.", price: 199, image: "/shakes/nutella_shake.jpg" },
  { name: "Kit Kat Shake", description: "Creamy shake with crunchy Kit Kat pieces blended in.", price: 159, image: "/shakes/kitkat_shake.jpg" },
  { name: "Banoffee Shake", description: "Banana & toffee blended into a dreamy creamy shake.", price: 149, image: "/shakes/banoffee_shake.jpg" },
  { name: "Lotus Biscoff Shake", description: "Velvety shake with caramelised Lotus Biscoff crunch.", price: 199, image: "/shakes/lotus_biscoff_shake.jpg" },
  { name: "Mix Berry Shake", description: "A blend of fresh berries in a thick, fruity shake.", price: 179, image: "/shakes/mix_berry_shake.jpg" },
  { name: "Strawberry Shake", description: "Classic thick strawberry shake, sweet & creamy.", price: 179, image: "/shakes/strawberry_shake.jpg" },
  { name: "Mango Colada Shake", description: "Tropical mango with a creamy colada twist.", price: 159, image: "/shakes/mango_colada_shake.jpg" },
  { name: "Dubai Kunafa Shake", description: "Inspired by viral Dubai chocolate kunafa — rich & indulgent.", price: 199, image: "/shakes/dubai_kunafa_shake.jpg" },
  { name: "Bubblegum Shake", description: "Fun pastel bubblegum shake, sweet & playful.", price: 149, image: "/shakes/bubblegum_shake.jpg" },
  { name: "Iced Chocolate Shake", description: "Classic rich chocolate shake served cold & thick.", price: 149, image: "/shakes/iced_chocolate_shake.jpg" },
];

export interface PizzaItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export interface BurgerItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export const pizzas: PizzaItem[] = [
  {
    name: "Farm House Pizza",
    description: "Loaded with fresh farm veggies, capsicum, onions & olives on a rich tomato base.",
    price: 348,
    image: "/pizzas/veggie_pizza.jpg",
    isVeg: true,
  },
  {
    name: "Paneer Tikka Pizza",
    description: "Smoky tandoori paneer, peppers & onions with mint chutney drizzle.",
    price: 368,
    image: "/pizzas/paneer_tikka_pizza.jpg",
    isVeg: true,
  },
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomato sauce & basil.",
    price: 298,
    image: "/pizzas/margherita_pizza.jpg",
    isVeg: true,
  },
  {
    name: "Chicken Kabab Pizza",
    description: "Juicy chicken kabab pieces with peppers, onions & spiced tomato base.",
    price: 378,
    image: "/pizzas/bbq_chicken_pizza.jpg",
    isVeg: false,
  },
  {
    name: "Chicken Tikka Pizza",
    description: "Marinated tandoori chicken tikka with capsicum, onions & creamy sauce.",
    price: 388,
    image: "/pizzas/chicken_tikka_pizza.jpg",
    isVeg: false,
  },
];

export interface SaladItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export interface SandwichItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export const salads: SaladItem[] = [
  { name: "Paneer Tikka Salad",        description: "Smoky tandoori paneer with fresh greens, veggies & zesty dressing.",           price: 158, image: "/salads/paneer_salad.jpg",           isVeg: true  },
  { name: "Paneer Peri Peri Salad",    description: "Fiery peri peri paneer over crisp salad greens with a punchy sauce.",          price: 158, image: "/salads/paneer_salad.jpg",           isVeg: true  },
  { name: "Krispy Paneer Salad",       description: "Crispy fried paneer strips on a bed of fresh greens with house dressing.",     price: 198, image: "/salads/paneer_salad.jpg",           isVeg: true  },
  { name: "Hara Bhara Kebab Salad",    description: "Green spinach-pea kebabs over a vibrant salad with mint yogurt dressing.",    price: 198, image: "/salads/hara_bhara_salad.jpg",       isVeg: true  },
  { name: "Falafel Salad",             description: "Crispy falafel over hummus, fresh greens, tomatoes & tahini drizzle.",         price: 198, image: "/salads/falafel_salad.jpg",          isVeg: true  },
  { name: "Classic Sauté Veggies",     description: "Seasonal vegetables sautéed in garlic butter with herbs & seasoning.",        price: 199, image: "/salads/classic_saute_veggies.jpg",   isVeg: true  },
  { name: "Paneer Sauté Veggies",      description: "Tender paneer with stir-fried vegetables in a rich buttery sauce.",            price: 239, image: "/salads/paneer_saute_veggies.jpg",   isVeg: true  },
  { name: "Tandoori Chicken Salad",    description: "Grilled tandoori chicken over fresh greens with a cooling mint dressing.",    price: 188, image: "/salads/chicken_salad.jpg",          isVeg: false },
  { name: "Peri Peri Chicken Salad",   description: "Spicy peri peri chicken on crisp greens with a tangy citrus dressing.",      price: 188, image: "/salads/chicken_salad.jpg",          isVeg: false },
  { name: "Chicken Seekh Kebab Salad", description: "Succulent seekh kebab slices over a fresh garden salad with raita dressing.", price: 188, image: "/salads/chicken_salad.jpg",          isVeg: false },
  { name: "Chicken Sauté Veggies",     description: "Tender chicken with stir-fried seasonal vegetables in a bold sauce.",         price: 249, image: "/salads/chicken_saute_veggies.jpg",  isVeg: false },
];

export const sandwiches: SandwichItem[] = [
  { name: "Bombay Sandwich",        description: "Classic Mumbai street-style sandwich with potatoes, chutneys & masala.",   price: 119, image: "/sandwich/bombay_sandwich.jpg",       isVeg: true  },
  { name: "Classic Veg Sandwich",   description: "Fresh vegetables, cheese & house sauce in toasted bread.",                 price: 139, image: "/sandwich/classic_veg_sandwich.jpg",   isVeg: true  },
  { name: "Paneer Sandwich",        description: "Spiced paneer filling with veggies & mint chutney in toasted bread.",      price: 149, image: "/sandwich/paneer_sandwich.jpg",        isVeg: true  },
  { name: "Two Tier Sandwich",      description: "A double-decker loaded sandwich with layers of fresh fillings & sauces.",  price: 159, image: "/sandwich/two_tier_sandwich.jpg",     isVeg: true  },
  { name: "Mushroom Melt Sandwich", description: "Sautéed mushrooms with melted cheese in crispy toasted bread.",            price: 169, image: "/sandwich/mushroom_melt_sandwich.jpg", isVeg: true  },
  { name: "Chicken Sandwich",       description: "Grilled chicken with cheese, veggies & smoky sauce in toasted bread.",     price: 169, image: "/sandwich/chicken_sandwich.jpg",      isVeg: false },
];

export interface PastaItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface SideItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export const pastas: PastaItem[] = [
  { name: "Alfredo Pasta",    description: "Classic creamy white sauce pasta with garlic & parmesan.",                     price: 198, image: "/pasta/alfredo_pasta.jpg"       },
  { name: "Mix Sauce Pasta",  description: "A rich blend of red & white sauce tossed with veggies & herbs.",               price: 219, image: "/pasta/mix_sauce_pasta.jpg"     },
  { name: "Makhni Pasta",     description: "Desi twist — pasta in a rich, spiced butter tomato makhni sauce.",             price: 219, image: "/pasta/makhni_pasta.jpg"        },
  { name: "Alio Olio Pasta",  description: "Classic Italian garlic & olive oil pasta with chilli flakes & parsley.",       price: 209, image: "/pasta/alio_olio_pasta.jpg"     },
  { name: "Pesto Pasta",      description: "Fresh basil pesto tossed with pasta, pine nuts & parmesan.",                   price: 249, image: "/pasta/pesto_pasta.jpg"         },
  { name: "Mushroom Pasta",   description: "Earthy sautéed mushrooms in a creamy garlic sauce with herbs.",                price: 249, image: "/pasta/mushroom_pasta.jpg"      },
  { name: "Chef Special",     description: "Chef's secret sauce with chicken, veggies & a signature seasoning blend.",    price: 249, image: "/pasta/chef_special_pasta.jpg"  },
];

export const sides: SideItem[] = [
  { name: "Salted Fries",               description: "Crispy golden fries with a classic salt seasoning.",                          price: 99,  image: "/sides/salted_fries.jpg",               isVeg: true  },
  { name: "Cheesy Fries",               description: "Golden fries loaded with melted cheese sauce.",                               price: 159, image: "/sides/cheesy_fries.jpg",               isVeg: true  },
  { name: "Peri Peri Fries",            description: "Crispy fries tossed in bold peri peri seasoning.",                           price: 119, image: "/sides/peri_peri_fries.jpg",            isVeg: true  },
  { name: "Toasties",                   description: "Toasted bread bites with a savoury filling & melted cheese.",                 price: 179, image: "/sides/toasties.jpg",                   isVeg: true  },
  { name: "Nachos",                     description: "Crispy tortilla chips with salsa, sour cream & cheese sauce.",                price: 149, image: "/sides/nachos.jpg",                     isVeg: true  },
  { name: "Maggie",                     description: "Classic masala Maggi noodles — a forever comfort snack.",                     price: 119, image: "/sides/maggie.jpg",                     isVeg: true  },
  { name: "Cheese Maggie",              description: "Masala Maggi topped with a generous layer of melted cheese.",                 price: 139, image: "/sides/cheese_maggie.jpg",              isVeg: true  },
  { name: "Korean Cream Cheese Burger", description: "Soft bun with cream cheese garlic butter & Korean-style filling.",           price: 179, image: "/sides/korean_cream_cheese_burger.jpg", isVeg: true  },
  { name: "Chicken Nachos",             description: "Loaded nachos with seasoned chicken, cheese sauce & jalapeños.",              price: 189, image: "/sides/chicken_nachos.jpg",             isVeg: false },
];

export interface DessertItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const desserts: DessertItem[] = [
  { name: "Plain New York Cheesecake",   description: "Classic New York style baked cheesecake — smooth, dense & indulgent.",           price: 179, image: "/desserts/plain_croissant.jpg"          },
  { name: "Lotus Biscoff Cheesecake",    description: "Creamy cheesecake with a crunchy Lotus Biscoff base & caramel drizzle.",         price: 209, image: "/desserts/lotus_biscoff_cheesecake.jpg" },
  { name: "Nutella Cheesecake",          description: "Velvety cheesecake with a rich Nutella swirl & hazelnut crunch.",                 price: 199, image: "/desserts/nutella_cheesecake.jpg"       },
  { name: "Blueberry Cheesecake",        description: "Classic cheesecake topped with a fresh blueberry compote.",                       price: 199, image: "/desserts/blueberry_cheesecake.jpg"     },
  { name: "Strawberry Cheesecake",       description: "Creamy cheesecake with a luscious strawberry topping & biscuit base.",            price: 199, image: "/desserts/strawberry_cheesecake.jpg"   },
  { name: "Pistachio Cheesecake",        description: "Elegant cheesecake with pistachio cream, rose & a buttery base.",                 price: 209, image: "/desserts/pistachio_cheesecake.jpg"    },
  { name: "Butter Croissant",            description: "Freshly baked flaky butter croissant — golden, layered & classic.",               price: 139, image: "/desserts/butter_croissant.jpg"         },
  { name: "Nutella Croissant",           description: "Flaky croissant generously filled with rich Nutella hazelnut spread.",            price: 169, image: "/desserts/nutella_croissant.jpg"       },
  { name: "Tiramisu",                    description: "Classic Italian tiramisu — espresso-soaked layers with mascarpone cream.",        price: 279, image: "/desserts/tiramisu.jpg"                },
  { name: "Brownie",                     description: "Rich fudgy chocolate brownie — warm, gooey & irresistible.",                      price: 59,  image: "/desserts/brownie.jpg"                  },
];

export const burgers: BurgerItem[] = [
  {
    name: "Aloo Patty Burger",
    description: "Crispy spiced potato patty with lettuce, tomato & tangy sauces.",
    price: 119,
    image: "/burgers/veggie_burger.jpg",
    isVeg: true,
  },
  {
    name: "Falafel Burger",
    description: "Crispy falafel patty with hummus, pickles & fresh greens.",
    price: 139,
    image: "/burgers/paneer_burger.jpg",
    isVeg: true,
  },
  {
    name: "Spicy Korean Paneer Burger",
    description: "Grilled paneer with fiery Korean sauce, slaw & pickled veggies.",
    price: 159,
    image: "/burgers/kimchi_burger.jpg",
    isVeg: true,
  },
  {
    name: "Smashed Mushroom Burger",
    description: "Juicy smashed mushroom patty with melted cheese & garlic aioli.",
    price: 169,
    image: "/burgers/mushroom_burger.jpg",
    isVeg: true,
  },
  {
    name: "Krispy Chicken Burger",
    description: "Crunchy fried chicken with coleslaw, pickles & smoky mayo.",
    price: 159,
    image: "/burgers/crispy_chicken_burger.jpg",
    isVeg: false,
  },
  {
    name: "Chicken Smashed Burger",
    description: "Double smashed chicken patty with cheese, caramelised onions & secret sauce.",
    price: 199,
    image: "/burgers/chicken_burger.jpg",
    isVeg: false,
  },
];

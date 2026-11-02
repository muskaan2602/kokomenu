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
        name: "Latte",
        description: "Rich espresso, steamed milk & a light layer of creamy foam.",
        price: 159,
        image: "/drinks/latte.jpg",
      },
      {
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk & thick foam.",
        price: 149,
        image: "/drinks/Cappuccino.jpg",
      },
      {
        name: "Americano",
        description: "Rich espresso diluted with hot water for a smooth bold taste.",
        price: 119,
        image: "/drinks/americano.jpg",
      },
      {
        name: "Mocha",
        description: "Rich espresso with chocolate, steamed milk & creamy foam.",
        price: 169,
        image: "/drinks/Cafe_Mocha.jpg",
      },
      {
        name: "Flat White",
        description: "Rich espresso with velvety steamed milk for a smooth, balanced taste.",
        price: 149,
        image: "/drinks/flat_white.jpg",
      },
      {
        name: "Macchiato",
        description: "Bold espresso with a touch of steamed milk foam.",
        price: 139,
        image: "/drinks/macchiato.jpg",
      },
      {
        name: "Espresso",
        description: "A shot of pure coffee. Rich, bold and intense.",
        price: 99,
        image: "/drinks/espresso.jpg",
      },
    ],
    flavourNote: "Add any flavour shot for +₹30",
  },
  {
    id: "cafe-frappe",
    title: "Cafe Frappe",
    icon: "🥤",
    items: [
      {
        name: "Cafe Frappe",
        description: "Rich coffee, chilled milk, ice & a creamy blend. Smooth, bold & refreshing.",
        price: null,
        image: "/drinks/cafe_frappe.jpg",
      },
      {
        name: "Iced Mocha",
        description: "Espresso, chocolate, chilled milk & ice. Rich, creamy & indulgent.",
        price: null,
        image: "/drinks/iced_mocha.jpg",
      },
      {
        name: "Iced Latte",
        description: "Smooth espresso, chilled milk & ice. Light, balanced & refreshing.",
        price: null,
        image: "/drinks/iced_latte.jpg",
      },
      {
        name: "Brownie Frappe",
        description: "Rich brownie, chocolate, coffee, chilled milk & ice. Creamy, fudgy & irresistible.",
        price: null,
        image: "/drinks/brownie_frappe.jpg",
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
        name: "Matcha Latte",
        description: "Smooth ceremonial matcha with creamy chilled milk.",
        price: null,
        image: "/drinks/matcha_latte.jpg",
      },
      {
        name: "Matcha Strawberry",
        description: "Vibrant matcha layered with fresh strawberry.",
        price: null,
        image: "/drinks/matcha_strawberry.jpg",
      },
      {
        name: "Matcha Mango",
        description: "Refreshing matcha topped with tropical mango.",
        price: null,
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
        price: null,
        image: "/drinks/peach_iced_tea.jpg",
      },
      {
        name: "Lemon Ice Tea",
        description: "Classic chilled tea with a zesty lemon finish.",
        price: null,
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

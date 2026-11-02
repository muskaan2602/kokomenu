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
        // Latte with latte art — matches menu image
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&q=80",
        tag: "Popular",
      },
      {
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk & thick foam.",
        price: 149,
        // Cappuccino layered foam — matches menu image
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
      },
      {
        name: "Americano",
        description: "Rich espresso diluted with hot water for a smooth bold taste.",
        price: 119,
        // Black americano in clear mug — matches menu image
        image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&q=80",
      },
      {
        name: "Mocha",
        description: "Rich espresso with chocolate, steamed milk & creamy foam.",
        price: 169,
        // Mocha with chocolate drizzle — matches menu image
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80",
        tag: "Bestseller",
      },
      {
        name: "Flat White",
        description: "Rich espresso with velvety steamed milk for a smooth, balanced taste.",
        price: 149,
        // Flat white with latte art — matches menu image
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
      },
      {
        name: "Macchiato",
        description: "Bold espresso with a touch of steamed milk foam.",
        price: 139,
        // Macchiato layers — matches menu image
        image: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400&q=80",
      },
      {
        name: "Espresso",
        description: "A shot of pure coffee. Rich, bold and intense.",
        price: 99,
        // Espresso shot in small glass — matches menu image
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80",
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
        // Tall iced coffee with whipped cream & caramel drizzle — exactly like menu image
        image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=400&q=80",
        tag: "Signature",
      },
      {
        name: "Iced Mocha",
        description: "Espresso, chocolate, chilled milk & ice. Rich, creamy & indulgent.",
        price: null,
        // Iced mocha with chocolate whip — matches menu image
        image: "https://images.unsplash.com/photo-1572490122747-3e9197aa5e3e?w=400&q=80",
      },
      {
        name: "Iced Latte",
        description: "Smooth espresso, chilled milk & ice. Light, balanced & refreshing.",
        price: null,
        // Iced latte with foam top — matches menu image
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80",
      },
      {
        name: "Brownie Frappe",
        description: "Rich brownie, chocolate, coffee, chilled milk & ice. Creamy, fudgy & irresistible.",
        price: null,
        // Chocolate frappe in glass mug with whip — matches menu image
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
        tag: "Must Try",
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
        // Green matcha latte — matches menu image exactly
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80",
        tag: "New",
      },
      {
        name: "Matcha Strawberry",
        description: "Vibrant matcha layered with fresh strawberry.",
        price: null,
        // Matcha with strawberry layer — matches menu image
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
      },
      {
        name: "Matcha Mango",
        description: "Refreshing matcha topped with tropical mango.",
        price: null,
        // Matcha with mango layer — matches menu image
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&q=80",
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
        // Peach iced tea with peach slice — matches menu image exactly
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
      },
      {
        name: "Lemon Ice Tea",
        description: "Classic chilled tea with a zesty lemon finish.",
        price: null,
        // Lemon iced tea with lemon wheel — matches menu image exactly
        image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80",
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

export interface MenuItem {
  name: string;
  description: string;
  price: number | null; // null = price TBD
  emoji: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  flavourNote?: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    items: [
      {
        name: "Latte",
        description: "Rich espresso, steamed milk & a light layer of creamy foam.",
        price: 159,
        emoji: "☕",
      },
      {
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk & thick foam.",
        price: 149,
        emoji: "☕",
      },
      {
        name: "Americano",
        description: "Rich espresso diluted with hot water for a smooth bold taste.",
        price: 119,
        emoji: "☕",
      },
      {
        name: "Mocha",
        description: "Rich espresso with chocolate, steamed milk & creamy foam.",
        price: 169,
        emoji: "☕",
      },
      {
        name: "Flat White",
        description: "Rich espresso with velvety steamed milk for a smooth, balanced taste.",
        price: 149,
        emoji: "☕",
      },
      {
        name: "Macchiato",
        description: "Bold espresso with a touch of steamed milk foam.",
        price: 139,
        emoji: "☕",
      },
      {
        name: "Espresso",
        description: "A shot of pure coffee. Rich, bold and intense.",
        price: 99,
        emoji: "☕",
      },
    ],
    flavourNote: "Add any flavour shot for +₹30",
  },
  {
    id: "cafe-frappe",
    title: "Cafe Frappe",
    items: [
      {
        name: "Cafe Frappe",
        description: "Rich coffee, chilled milk, ice & a creamy blend. Smooth, bold & refreshing.",
        price: null,
        emoji: "🥤",
      },
      {
        name: "Iced Mocha",
        description: "Espresso, chocolate, chilled milk & ice. Rich, creamy & indulgent.",
        price: null,
        emoji: "🥤",
      },
      {
        name: "Iced Latte",
        description: "Smooth espresso, chilled milk & ice. Light, balanced & refreshing.",
        price: null,
        emoji: "🥤",
      },
      {
        name: "Brownie Frappe",
        description: "Rich brownie, chocolate, coffee, chilled milk & ice. Creamy, fudgy & irresistible.",
        price: null,
        emoji: "🥤",
      },
    ],
    flavourNote: "Available flavours: Vanilla · Hazelnut · Caramel · Rose Pistachio · Irish · Roasted Hazelnut · Tiramisu · Cheese Cake",
  },
  {
    id: "matcha",
    title: "Matcha",
    items: [
      {
        name: "Matcha Latte",
        description: "Smooth ceremonial matcha with creamy milk.",
        price: null,
        emoji: "🍵",
      },
      {
        name: "Matcha Strawberry",
        description: "Vibrant matcha layered with fresh strawberry.",
        price: null,
        emoji: "🍵",
      },
      {
        name: "Matcha Mango",
        description: "Refreshing matcha topped with tropical mango.",
        price: null,
        emoji: "🍵",
      },
    ],
  },
  {
    id: "ice-tea",
    title: "Ice Tea",
    items: [
      {
        name: "Peach Ice Tea",
        description: "Cool brewed tea with a sweet peach twist.",
        price: null,
        emoji: "🍑",
      },
      {
        name: "Lemon Ice Tea",
        description: "Classic chilled tea with a zesty lemon finish.",
        price: null,
        emoji: "🍋",
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

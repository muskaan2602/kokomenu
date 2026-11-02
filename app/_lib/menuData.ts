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

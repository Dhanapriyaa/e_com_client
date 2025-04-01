const productsData = [
  {
    id: 1,
    name: "👞 Casual Shoe",
    image: "/images/smartwatch.jpg", 
    description: "Comfortable and lightweight casual shoes designed for everyday wear. Perfect for walking, travel, or casual outings..",
    features: ["Bluetooth 5.0", "12-hour battery", "Comfortable fit"],
    price:  999,
  },
  {
    id: 2,
    name: "👕 Casual T-Shirt",
    image: "/images/smartwatch.jpg",
    description: "A soft and stylish casual t-shirt made from premium cotton fabric. Perfect for daily wear.",
    features: ["✔️ 100% Cotton / Cotton Blend","✔️ Breathable & Lightweight","✔️ Available in Multiple Colors & Sizes"],
    price: 1500,
  },
  {
    id: 3,
    name: "Fashion Watch",
    image: "/images/mouse.jpg",
    description: "A stylish and modern fashion watch designed to complement any outfit. Perfect for casual and formal occasions.",
    features: ["✔️ Stainless Steel or Leather Strap","✔️ Water-Resistant Design","✔️ Quartz Movement"],
    price: 800,
  },
  {
    id: 4,
    name: "SunGlasses",
    image: "/images/mouse.jpg",
    description: "Stylish and protective sunglasses with UV400 protection. Perfect for outdoor adventures and everyday wear.",
    features: ["✔️ UV400 Protection","✔️ Polarized Lenses","✔️ Scratch-Resistant"],
    price: 2000,
  },
  {
    id: 5,
    name: "🧥 Leather Jacket",
    image: "/images/mouse.jpg",
    description: "A premium leather jacket crafted for style and comfort. Perfect for casual and biker looks.",
    features: ["✔️ 100% Genuine Leather","✔️ Soft Inner Lining","✔️ Zipper Closure"],
    price: 1899,
  },
  {
    id: 6,
    name: "🎒 Backpack",
    image: "/images/mouse.jpg",
    description: "Spacious and durable backpack designed for work, travel, or school. Ergonomic and water-resistant.",
    features: ["✔️ Waterproof Material","✔️ Laptop Compartment","✔️ Adjustable Straps"],
    price: 999,
  },
  {
    id: 7,
    name: "🎧 Headphones",
    image: "/images/mouse.jpg",
    description: "High-quality over-ear headphones with noise cancellation and deep bass. Perfect for music lovers.",
    features: ["✔️ Active Noise Cancellation","✔️ Wireless Bluetooth 5.0","✔️ 20-Hour Battery Life"],
    price: 1500,
  },
  {
    id: 8,
    name: "📱 Smartphone",
    image: "/images/mouse.jpg",
    description: "A powerful smartphone with a stunning display and a high-resolution camera for the best experience.",
    features: ["✔️ 6.7” OLED Display","✔️ 128MP Triple Camera","✔️ 5G Connectivity"],
    price: 80000,
  },
  {
    id: 9,
    name: "🖱️ Gaming Mouse",
    image: "/images/mouse.jpg",
    description: "Ergonomic gaming mouse with customizable RGB lighting and adjustable DPI settings.",
    features: ["✔️ 7 Programmable Buttons","✔️ 16000 DPI Sensor","✔️ RGB Lighting"],
    price: 1200,
  },
  {
    id: 10,
    name: "⌨️ Mechanical Keyboard",
    image: "/images/mouse.jpg",
    description: "High-performance mechanical keyboard with responsive keys and customizable backlighting.",
    features: ["✔️ RGB Backlit Keys","✔️ Blue/Brown Switches","✔️ Anti-Ghosting Technology"],
    price: 2000,
  },
  {
    id: 11,
    name: "🎵 Wireless Earbuds",
    image: "/images/mouse.jpg",
    description: "Compact and lightweight earbuds with superior sound quality and long battery life.",
    features: ["✔️ Noise Isolation","✔️ 24-Hour Battery Life","✔️ Water-Resistant"],
    price: 3000,
  },
  {
    id: 12,
    name: "⌚ Smartwatch",
    image: "/images/mouse.jpg",
    description: "Stylish smartwatch with fitness tracking, notifications, and heart rate monitoring.",
    features: ["✔️ Heart Rate & Sleep Tracking","✔️ GPS & Step Counter","✔️ 7-Day Battery Life"],
    price: 4000,
  },
  {
    id: 13,
    name: "👟 Running Shoes",
    image: "/images/mouse.jpg",
    description: "Lightweight running shoes designed for comfort and durability. Ideal for workouts and casual wear.",
    features: ["✔️ Breathable Mesh Fabric","✔️ Shock-Absorbing Sole","✔️ Slip-Resistant Grip"],
    price: 2059,
  },
  {
    id: 14,
    name: "🧤 Winter Gloves",
    image: "/images/mouse.jpg",
    description: "Warm and comfortable gloves designed to keep your hands cozy in cold weather.",
    features: ["✔️ Touchscreen Compatible","✔️ Wind & Water-Resistant","✔️ Soft Thermal Lining"],
    price: 300,
  },
  {
    id: 15,
    name: "👜 Designer Handbag",
    image: "/images/mouse.jpg",
    description: "Elegant and stylish designer handbag perfect for casual or formal occasions.",
    features: ["✔️ Premium Vegan Leather","✔️ Multiple Compartments","✔️ Adjustable Strap"],
    price: 9999,
  },
  {
    id: 16,
    name: "🔊 Portable Speaker",
    image: "/images/mouse.jpg",
    description: "A powerful and compact Bluetooth speaker with rich bass and long battery life.",
    features: ["✔️ 360° Surround Sound","✔️ 12-Hour Battery Life","✔️ Water-Resistant"],
    price: 3000,
  },
  {
    id: 17,
    name: "👖 Denim Jeans",
    image: "/images/mouse.jpg",
    description: "Classic denim jeans with a comfortable fit and stylish design.",
    features: ["✔️ Stretchable Fabric","✔️ Multiple Pockets","✔️ Slim & Regular Fit Options"],
    price: 1700,
  },
  {
    id: 18,
    name: "🧥 Hoodie",
    image: "/images/mouse.jpg",
    description: "Soft and cozy hoodie for casual wear, available in multiple colors.",
    features: ["✔️ Soft Cotton Blend","✔️ Kangaroo Pocket","✔️ Adjustable Hood"],
    price: 699,
  },
  {
    id: 19,
    name: "🏃 Fitness Tracker",
    image: "/images/mouse.jpg",
    description: "Track your steps, heart rate, and sleep patterns with this advanced fitness tracker.",
    features: ["✔️ Heart Rate Monitor","✔️ Step & Calorie Tracker","✔️ Waterproof Design"],
    price: 3999,
  },
  {
    id: 20,
    name: "☕ Coffee Mug",
    image: "/images/mouse.jpg",
    description: "A stylish and durable ceramic coffee mug for your daily caffeine fix..",
    features: ["✔️ 350ml Capacity","✔️ Heat-Resistant Handle","✔️ Microwave Safe"],
    price: 100,
  }
];

export default productsData;
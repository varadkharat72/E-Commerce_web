const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 3499,
    discount: 14,
    rating: 4.5,
    detail:
      'Experience crystal-clear sound with deep bass and immersive noise isolation. Designed for long listening sessions with ultra-soft ear cushions and extended battery life. Perfect for music lovers and professionals alike.',
    image:
      'https://th.bing.com/th/id/OIP.ipWYq5mIp6sPHM8bTpWEvwHaHa?w=140&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Rahul Mehta',
        profileImg: 'https://randomuser.me/api/portraits/men/11.jpg',
        rating: 5,
        comment: 'Sound is crisp and the battery backup is excellent.',
      },
      {
        name: 'Aisha Khan',
        profileImg: 'https://randomuser.me/api/portraits/women/12.jpg',
        rating: 4,
        comment: 'Very comfortable fit and great value for this price.',
      },
    ],
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 3999,
    discount: 12,
    rating: 4.2,
    detail:
      'Track your health, workouts, and daily performance with precision sensors and real-time analytics. Features heart rate monitoring, sleep tracking, and smart notifications. Built to keep up with your active lifestyle.',
    image:
      'https://th.bing.com/th/id/OIP.HEGwaxvVhL7wfUqAKLuZKAHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Arjun Patel',
        profileImg: 'https://randomuser.me/api/portraits/men/21.jpg',
        rating: 4,
        comment: 'Step tracking is accurate and the display is bright.',
      },
      {
        name: 'Sneha Iyer',
        profileImg: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 5,
        comment: 'Excellent companion app and good battery performance.',
      },
    ],
  },
  {
    id: 3,
    name: 'Minimal Leather Wallet',
    price: 1999,
    discount: 35,
    rating: 4.1,
    detail:
      'Crafted from premium genuine leather with a sleek, slim design. Offers multiple card slots while maintaining a compact profile. A perfect blend of elegance and everyday practicality.',
    image:
      'https://th.bing.com/th/id/OIP.i7_nhoShvGROOYCeWHE2sgHaEL?w=323&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Accessories',
    reviews: [
      {
        name: 'Vivek Sharma',
        profileImg: 'https://randomuser.me/api/portraits/men/31.jpg',
        rating: 4,
        comment: 'Premium leather feel and very practical layout.',
      },
      {
        name: 'Nidhi Verma',
        profileImg: 'https://randomuser.me/api/portraits/women/32.jpg',
        rating: 4,
        comment: 'Slim profile fits perfectly in jeans pockets.',
      },
    ],
  },
  {
    id: 4,
    name: 'Luxury Analog Watch',
    price: 6999,
    discount: 14,
    rating: 4.3,
    detail:
      'A timeless masterpiece with a precision quartz movement and stainless-steel finish. Designed to elevate your formal and casual looks effortlessly. Built for those who value sophistication and durability.',
    image:
      'https://th.bing.com/th/id/OIP.q1uNXf1KR7X5KpE6WNShCgHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Accessories',
    reviews: [
      {
        name: 'Karan Malhotra',
        profileImg: 'https://randomuser.me/api/portraits/men/41.jpg',
        rating: 5,
        comment: 'Looks classy and the build quality feels solid.',
      },
      {
        name: 'Ritika Sood',
        profileImg: 'https://randomuser.me/api/portraits/women/42.jpg',
        rating: 4,
        comment: 'Elegant finish and perfect for formal occasions.',
      },
    ],
  },
  {
    id: 5,
    name: 'Mens Casual Sneakers',
    price: 3499,
    discount: 28,
    rating: 4.5,
    detail:
      'Lightweight, breathable, and engineered for all-day comfort. The modern design pairs perfectly with casual and streetwear outfits. Durable sole ensures long-lasting performance.',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.vAo-2-fCvbkV8-yui9dD0QHaJ4?pid=ImgDet&w=184&h=245&c=7&dpr=1.3&o=7&rm=3',
    category: 'Fashion',
    reviews: [
      {
        name: 'Sarthak Jain',
        profileImg: 'https://randomuser.me/api/portraits/men/51.jpg',
        rating: 5,
        comment: 'Comfortable for long walks and daily commute.',
      },
      {
        name: 'Pooja Bansal',
        profileImg: 'https://randomuser.me/api/portraits/women/52.jpg',
        rating: 4,
        comment: 'Good cushioning and trendy design.',
      },
    ],
  },
  {
    id: 6,
    name: "Women's Handbag",
    price: 4499,
    discount: 11,
    rating: 4.1,
    detail:
      'Stylish and spacious with premium stitching and elegant hardware. Perfect for office, travel, or special occasions. Designed to combine fashion with functionality.',
    image:
      'https://th.bing.com/th/id/OIP.lkOQQNGCuWCh25d7S4PrjgHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Fashion',
    reviews: [
      {
        name: 'Ishita Arora',
        profileImg: 'https://randomuser.me/api/portraits/women/61.jpg',
        rating: 4,
        comment: 'Looks premium and has enough storage sections.',
      },
      {
        name: 'Megha Nair',
        profileImg: 'https://randomuser.me/api/portraits/women/62.jpg',
        rating: 5,
        comment: 'Perfect size for office use and daily essentials.',
      },
    ],
  },
  {
    id: 7,
    name: 'Blutooth Portalable Speaker',
    price: 2999,
    discount: 26,
    rating: 4.5,
    detail:
      'Compact yet powerful, delivering rich bass and clear vocals. Waterproof and travel-friendly for outdoor adventures. Long battery life ensures uninterrupted entertainment.',
    image:
      'https://th.bing.com/th/id/OIP.NbSgINGGnqu4LiakyzZofgHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Rohit Kulkarni',
        profileImg: 'https://randomuser.me/api/portraits/men/71.jpg',
        rating: 5,
        comment: 'Loud output and bass is impressive for the size.',
      },
      {
        name: 'Ananya Das',
        profileImg: 'https://randomuser.me/api/portraits/women/72.jpg',
        rating: 4,
        comment: 'Great travel speaker and battery lasts long.',
      },
    ],
  },
  {
    id: 8,
    name: 'Gaming Mouse RGB',
    price: 1999,
    discount: 25,
    rating: 4.3,
    detail:
      'Precision-engineered with high DPI sensitivity for competitive gaming. Customizable RGB lighting adds a dynamic touch to your setup. Ergonomic design ensures comfort during long gaming sessions.',
    image:
      'https://th.bing.com/th/id/OIP.lER3YZebzgAqm9sp2AA1kwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Devansh Rao',
        profileImg: 'https://randomuser.me/api/portraits/men/81.jpg',
        rating: 4,
        comment: 'Smooth tracking and comfortable grip for gaming.',
      },
      {
        name: 'Priyanka Gill',
        profileImg: 'https://randomuser.me/api/portraits/women/82.jpg',
        rating: 5,
        comment: 'RGB looks great and clicks feel precise.',
      },
    ],
  },
  {
    id: 9,
    name: 'Stylish Sunglasses',
    price: 1499,
    discount: 33,
    rating: 4.7,
    detail:
      'UV-protected lenses with a sleek and modern frame design. Lightweight and comfortable for daily wear. Elevate your style while protecting your eyes.',
    image:
      'https://th.bing.com/th/id/OIP.1ESK5seDQPR1dvi3MzWoBQHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Accessories',
    reviews: [
      {
        name: 'Aman Chawla',
        profileImg: 'https://randomuser.me/api/portraits/men/91.jpg',
        rating: 5,
        comment: 'Stylish frame and very lightweight for daily use.',
      },
      {
        name: 'Simran Kaur',
        profileImg: 'https://randomuser.me/api/portraits/women/92.jpg',
        rating: 5,
        comment: 'Good UV protection and premium finish.',
      },
    ],
  },
  {
    id: 10,
    name: 'Classic Denim Jacket',
    price: 3499,
    discount: 20,
    rating: 4.1,
    detail:
      'Made from premium denim fabric with a structured yet comfortable fit. A timeless wardrobe essential that never goes out of style. Perfect layering piece for every season.',
    image:
      'https://th.bing.com/th/id/OIP.51stv7__eWr_rltKPWF14gHaHQ?w=208&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Fashion',
    reviews: [
      {
        name: 'Nikhil Tandon',
        profileImg: 'https://randomuser.me/api/portraits/men/10.jpg',
        rating: 4,
        comment: 'Fabric quality is good and fitting is modern.',
      },
      {
        name: 'Lavanya Sen',
        profileImg: 'https://randomuser.me/api/portraits/women/19.jpg',
        rating: 4,
        comment: 'Great layering piece and looks premium.',
      },
    ],
  },
  {
    id: 11,
    name: 'Modern Office Backpack',
    price: 2499,
    discount: 24,
    rating: 4.3,
    detail:
      'Spacious compartments with a padded laptop sleeve for secure storage. Water-resistant material keeps your essentials safe. Designed for professionals and students alike.',
    image:
      'https://th.bing.com/th/id/OIP.lmsFoJv2EfOM4nnKxwTVNgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Accessories',
    reviews: [
      {
        name: 'Harsh Vardhan',
        profileImg: 'https://randomuser.me/api/portraits/men/27.jpg',
        rating: 4,
        comment: 'Lots of storage and very practical layout.',
      },
      {
        name: 'Kavya Menon',
        profileImg: 'https://randomuser.me/api/portraits/women/28.jpg',
        rating: 5,
        comment: 'Great for office and travel, laptop fits safely.',
      },
    ],
  },
  {
    id: 12,
    name: '4K Action Camera',
    price: 7999,
    discount: 12,
    rating: 4.6,
    detail:
      'Capture ultra-high-definition videos with stunning clarity and detail. Built with waterproof casing for adventure seekers. Compact design makes it ideal for travel and sports.',
    image:
      'https://th.bing.com/th/id/OIP.JaRH5t773-DWjuRdA1HdowHaHa?w=181&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Yash Bhatia',
        profileImg: 'https://randomuser.me/api/portraits/men/35.jpg',
        rating: 5,
        comment: 'Video quality is superb and stabilization works well.',
      },
      {
        name: 'Rhea Kapoor',
        profileImg: 'https://randomuser.me/api/portraits/women/36.jpg',
        rating: 4,
        comment: 'Excellent for travel vlogs and adventure shots.',
      },
    ],
  },
  {
    id: 13,
    name: 'Wireless Charging Pad',
    price: 1999,
    discount: 40,
    rating: 4.4,
    detail:
      'Fast and efficient charging with sleek minimal design. Compatible with all Qi-enabled devices. Declutter your desk while powering up in style.',
    image:
      'https://th.bing.com/th/id/OIP.GJ2lwq9YXTenEepKF1mzFQHaHa?w=256&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Manav Sethi',
        profileImg: 'https://randomuser.me/api/portraits/men/43.jpg',
        rating: 4,
        comment: 'Charges quickly and keeps my desk neat.',
      },
      {
        name: 'Tanya Roy',
        profileImg: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        comment: 'Slim design and works perfectly with my phone.',
      },
    ],
  },
  {
    id: 14,
    name: 'Cotton Printed T-Shirt',
    price: 1199,
    discount: 33,
    rating: 4.7,
    detail:
      'Soft, breathable cotton fabric ensures all-day comfort. Modern prints add personality to your outfit. Perfect for casual and street-style fashion.',
    image:
      'https://th.bing.com/th/id/OIP.2FzPp6-rS1y_gLtICt0XLAHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Fashion',
    reviews: [
      {
        name: 'Aditya Joshi',
        profileImg: 'https://randomuser.me/api/portraits/men/53.jpg',
        rating: 5,
        comment: 'Fabric feels soft and print quality is excellent.',
      },
      {
        name: 'Manya Gupta',
        profileImg: 'https://randomuser.me/api/portraits/women/54.jpg',
        rating: 5,
        comment: 'Very comfortable for summer and true to size.',
      },
    ],
  },
  {
    id: 15,
    name: 'Noise Cancelling Earbuds',
    price: 3299,
    discount: 21,
    rating: 4.5,
    detail:
      'Active noise cancellation blocks unwanted background sounds. Compact charging case ensures portability and convenience. Experience immersive sound wherever you go.',
    image:
      'https://th.bing.com/th/id/OIP.Z1j85YoylpnQTGR3xgDXcAHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Electronics',
    reviews: [
      {
        name: 'Rajat Dhingra',
        profileImg: 'https://randomuser.me/api/portraits/men/63.jpg',
        rating: 5,
        comment: 'ANC works really well and sound is balanced.',
      },
      {
        name: 'Sia Mallick',
        profileImg: 'https://randomuser.me/api/portraits/women/64.jpg',
        rating: 4,
        comment: 'Compact case and good battery backup.',
      },
    ],
  },
  {
    id: 16,
    name: 'Noir Signature Perfume',
    price: 3499,
    discount: 29,
    rating: 4.8,
    detail:
      'A bold and luxurious fragrance crafted with deep woody and spicy notes. Long-lasting scent designed to leave a powerful impression. Perfect for evening wear and special occasions.',
    image:
      'https://th.bing.com/th/id/OIP.lN86KOcrnTK-gdpnrCiCXgHaHa?w=167&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    category: 'Perfume',
    reviews: [
      {
        name: 'Kabir Ahuja',
        profileImg: 'https://randomuser.me/api/portraits/men/73.jpg',
        rating: 5,
        comment: 'Rich fragrance and lasts all day.',
      },
      {
        name: 'Naina Chopra',
        profileImg: 'https://randomuser.me/api/portraits/women/74.jpg',
        rating: 5,
        comment: 'Luxurious scent profile and elegant bottle.',
      },
    ],
  },
]

export default products

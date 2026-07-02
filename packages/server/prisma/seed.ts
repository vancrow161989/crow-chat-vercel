import { prisma } from "./prisma";

async function main() {
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: "Smart Mug",
        description: "Temperature-controlled mug for coffee and tea",
        price: 79.99,
      },
    }),
    prisma.product.create({
      data: {
        name: "Desk Lamp",
        description: "Adjustable LED desk lamp with brightness controls",
        price: 45.99,
      },
    }),
    prisma.product.create({
      data: {
        name: "Travel Backpack",
        description: "Water-resistant backpack with laptop compartment",
        price: 69.99,
      },
    }),
    prisma.product.create({
      data: {
        name: "Fitness Watch",
        description: "Smart fitness watch with heart rate and sleep tracking",
        price: 119.99,
      },
    }),
    prisma.product.create({
      data: {
        name: "Air Fryer",
        description: "Compact air fryer with digital temperature controls",
        price: 89.99,
      },
    }),
  ]);

  await prisma.review.createMany({
    data: [
      {
        productId: products[0].id,
        author: "Mia",
        rating: 5,
        content:
          "This smart mug has made my morning routine much better. I usually forget about my coffee while working, but this keeps it warm without making it taste burnt. The size is comfortable to hold, and the temperature control feels accurate enough for daily use.",
      },
      {
        productId: products[0].id,
        author: "Daniel",
        rating: 4,
        content:
          "The mug works really well for keeping tea at a steady temperature during long meetings. I like the simple design and the charging base is easy to use. My only complaint is that the battery could last a little longer when I take it away from my desk.",
      },
      {
        productId: products[0].id,
        author: "Grace",
        rating: 5,
        content:
          "I bought this because I drink coffee slowly, and it has been exactly what I needed. The drink stays warm for a long time, and the mug feels sturdy and premium. It is especially useful during busy workdays when I cannot finish my drink right away.",
      },
      {
        productId: products[0].id,
        author: "Owen",
        rating: 4,
        content:
          "The smart mug is convenient and does what it promises. It keeps my coffee at a comfortable drinking temperature and looks nice on my desk. Cleaning it takes a little more care than a normal mug, but the convenience makes up for that.",
      },
      {
        productId: products[0].id,
        author: "Nina",
        rating: 5,
        content:
          "This is one of those products I did not think I needed until I started using it every day. My coffee stays warm while I answer emails, and the mug has a clean, minimal look. It feels reliable and has become part of my daily setup.",
      },

      {
        productId: products[1].id,
        author: "Liam",
        rating: 5,
        content:
          "This desk lamp is excellent for working at night. The brightness levels are easy to adjust, and the light does not feel harsh on my eyes. I also like that I can angle it exactly where I need it without lighting up the whole room.",
      },
      {
        productId: products[1].id,
        author: "Sophia",
        rating: 4,
        content:
          "The lamp is compact, bright, and very practical for studying. The adjustable arm makes it easy to use with books, notebooks, or a laptop. I wish the base were slightly heavier, but overall it feels stable enough for regular desk use.",
      },
      {
        productId: products[1].id,
        author: "Ethan",
        rating: 5,
        content:
          "I use this lamp every evening, and it has been a great addition to my desk. The different brightness settings help a lot depending on whether I am reading, typing, or sketching. It looks modern without taking up too much space.",
      },
      {
        productId: products[1].id,
        author: "Ava",
        rating: 4,
        content:
          "This is a solid desk lamp for the price. The LED light is bright enough for focused work, and the controls are simple. It does not flicker, which was important to me because I spend several hours at my desk each day.",
      },
      {
        productId: products[1].id,
        author: "Noah",
        rating: 5,
        content:
          "The lamp feels well designed and makes my workspace much more comfortable. I especially like being able to dim it when I am working late. It gives enough light without creating glare on my monitor, which is a big plus.",
      },

      {
        productId: products[2].id,
        author: "Emma",
        rating: 5,
        content:
          "This backpack is great for commuting and short trips. The laptop compartment feels secure, and there is enough room for chargers, notebooks, and a change of clothes. The water-resistant material has already helped during light rain.",
      },
      {
        productId: products[2].id,
        author: "Lucas",
        rating: 4,
        content:
          "I have been using this backpack for work, and it holds everything I need without feeling bulky. The straps are comfortable even when the bag is full. I would have liked one extra small pocket inside, but the layout is still very useful.",
      },
      {
        productId: products[2].id,
        author: "Isabella",
        rating: 5,
        content:
          "The backpack feels durable and thoughtfully organized. My laptop fits well, and the separate compartments make it easy to find smaller items. It is comfortable enough for daily use and still looks clean and professional.",
      },
      {
        productId: products[2].id,
        author: "Mason",
        rating: 4,
        content:
          "This is a reliable travel backpack with a good amount of space. I used it for a weekend trip and was able to fit my laptop, clothes, and toiletries without any trouble. The zippers feel strong, and the material seems easy to clean.",
      },
      {
        productId: products[2].id,
        author: "Chloe",
        rating: 5,
        content:
          "I like how lightweight this backpack is even when packed. The laptop section is padded well, and the main compartment opens wide enough to organize things easily. It has become my everyday bag for work and travel.",
      },

      {
        productId: products[3].id,
        author: "James",
        rating: 5,
        content:
          "The fitness watch tracks my workouts accurately and is comfortable to wear all day. I especially like the heart rate and sleep tracking features because they give me a better idea of my overall routine. The screen is clear and easy to read outdoors.",
      },
      {
        productId: products[3].id,
        author: "Ella",
        rating: 4,
        content:
          "This watch is a good balance of fitness features and everyday convenience. Step tracking, workout modes, and notifications all work smoothly. The sleep tracking is helpful, though I wish the app gave a little more detail in the weekly reports.",
      },
      {
        productId: products[3].id,
        author: "Benjamin",
        rating: 5,
        content:
          "I use this fitness watch mostly for running and gym sessions, and it has been very consistent. The heart rate monitor responds quickly, and the battery lasts through several days of normal use. It is lightweight enough that I forget I am wearing it.",
      },
      {
        productId: products[3].id,
        author: "Harper",
        rating: 4,
        content:
          "The watch has helped me stay more active throughout the day. I like the reminders to move and the simple workout summaries after exercising. It looks nice enough to wear outside the gym, which makes it more useful than I expected.",
      },
      {
        productId: products[3].id,
        author: "Logan",
        rating: 5,
        content:
          "This fitness watch is easy to set up and gives me the information I actually care about. The heart rate tracking, step count, and sleep data all feel reliable for everyday use. For the price, it offers a strong set of features.",
      },

      {
        productId: products[4].id,
        author: "Amelia",
        rating: 5,
        content:
          "This air fryer is perfect for quick dinners. It heats up fast, cooks evenly, and makes vegetables and frozen foods much crispier than my oven. The basket is easy to clean, which makes me more likely to use it during busy weekdays.",
      },
      {
        productId: products[4].id,
        author: "Henry",
        rating: 4,
        content:
          "The air fryer works well and is a good size for one or two people. Fries, chicken, and leftovers come out nicely crisp without needing much oil. The controls are simple, though it took a few tries to figure out the best cooking times.",
      },
      {
        productId: products[4].id,
        author: "Charlotte",
        rating: 5,
        content:
          "I use this air fryer several times a week now. It is compact enough for my counter but still holds enough food for a small meal. The digital temperature controls are easy to read, and cleanup is much faster than using a pan.",
      },
      {
        productId: products[4].id,
        author: "William",
        rating: 4,
        content:
          "This is a very convenient appliance for quick meals and snacks. It does a great job crisping food without making the kitchen hot. The fan is a little noticeable while running, but it is not loud enough to bother me.",
      },
      {
        productId: products[4].id,
        author: "Lily",
        rating: 5,
        content:
          "The air fryer has been great for cooking healthier versions of foods I normally fry. It handles chicken, potatoes, and roasted vegetables really well. The compact design is helpful because I do not have a lot of counter space.",
      },
    ],
  });

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

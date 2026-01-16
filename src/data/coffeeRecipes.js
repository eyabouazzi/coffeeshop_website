// Coffee recipes data
export const coffeeRecipes = [
  {
    id: 1,
    name: "Classic Espresso",
    description: "The foundation of all coffee drinks. A concentrated shot of pure coffee essence that captures the true flavor of your coffee beans.",
    difficulty: "Medium",
    brewTime: "2-3 min",
    rating: 4.8,
    gradient1: "#8B4513",
    gradient2: "#A0522D",
    icon: "☕",
    imageKey: "espresso",
    ingredients: [
      "18-21g fresh coffee beans (medium-dark roast recommended)",
      "Espresso machine with 9-bar pressure",
      "Filtered water (195-205°F/90-96°C)",
      "Espresso tamper (58mm for standard portafilter)",
      "Digital scale (for precise dosing)",
      "Timer",
      "Clean portafilter and basket"
    ],
    steps: [
      {
        number: 1,
        title: "Preheat Your Machine",
        description: "Turn on your espresso machine and let it warm up for 15-20 minutes. Run a blank shot through the portafilter to heat it up.",
        time: "15-20 min"
      },
      {
        number: 2,
        title: "Grind and Dose",
        description: "Grind 18-21g of coffee to a fine consistency (like table salt). The grind should be fine enough to create resistance but not so fine it chokes the machine.",
        time: "1-2 min"
      },
      {
        number: 3,
        title: "Distribute and Tamp",
        description: "Evenly distribute grounds in the portafilter. Tamp with 30-35 pounds of pressure until the surface is level and smooth. Polish with a gentle twist.",
        time: "30-45 sec"
      },
      {
        number: 4,
        title: "Lock and Extract",
        description: "Lock the portafilter into the machine. Start the shot and aim for 25-30 seconds to extract 30-35ml (1-1.2 oz) of espresso.",
        time: "25-30 sec"
      },
      {
        number: 5,
        title: "Check and Serve",
        description: "Look for a rich, dark crema on top. The shot should have a balanced taste - not too bitter or sour. Serve immediately in a pre-warmed cup.",
        time: "Serve"
      }
    ],
    tips: [
      "Use freshly roasted coffee beans (within 2-3 weeks of roast date)",
      "Keep your machine clean and descale monthly",
      "The grind size is crucial - adjust one click at a time",
      "Practice your tamping technique for consistent results",
      "Water temperature should be between 195-205°F (90-96°C)",
      "Aim for a 1:2 ratio (18g coffee to 36g espresso)",
      "The crema should be thick and golden-brown"
    ],
    category: "espresso"
  },
  {
    id: 2,
    name: "Creamy Latte",
    description: "Smooth espresso combined with steamed milk and a light layer of foam. The perfect balance of coffee and milk for a comforting drink.",
    difficulty: "Easy",
    brewTime: "5-7 min",
    rating: 4.6,
    gradient1: "#DEB887",
    gradient2: "#F5DEB3",
    icon: "🥛",
    imageKey: "latte",
    ingredients: [
      "1 shot of espresso (30ml)",
      "150-180ml cold whole milk (3.25% fat)",
      "Stainless steel milk pitcher (12-16oz)",
      "Steam wand with proper tip",
      "Digital thermometer (140-150°F target)",
      "Clean steam wand",
      "Latte cup (8-12oz)"
    ],
    steps: [
      {
        number: 1,
        title: "Brew Fresh Espresso",
        description: "Brew a fresh shot of espresso using the classic espresso method. Pour it into your latte cup immediately.",
        time: "25-30 sec"
      },
      {
        number: 2,
        title: "Prepare Milk Pitcher",
        description: "Fill your milk pitcher 1/3 full with cold milk (about 150-180ml). Cold milk creates better microfoam.",
        time: "30 sec"
      },
      {
        number: 3,
        title: "Purge Steam Wand",
        description: "Briefly purge the steam wand to remove any water condensation. Wipe the tip with a clean cloth.",
        time: "5 sec"
      },
      {
        number: 4,
        title: "Steam and Aerate",
        description: "Insert steam wand tip just below milk surface. Turn on steam and create a gentle whirlpool. Listen for a quiet 'paper tearing' sound.",
        time: "1-2 min"
      },
      {
        number: 5,
        title: "Temperature Check",
        description: "Steam until milk reaches 140-150°F (60-65°C). The pitcher should feel hot but not burning. Tap pitcher to remove large bubbles.",
        time: "30 sec"
      },
      {
        number: 6,
        title: "Pour and Create Art",
        description: "Pour steamed milk into espresso, holding back foam with a spoon. Top with a small amount of microfoam. Practice latte art if desired.",
        time: "30 sec"
      }
    ],
    tips: [
      "Use whole milk for the creamiest texture and best foam",
      "Keep milk cold until steaming - warm milk doesn't foam well",
      "The 'paper tearing' sound indicates proper aeration",
      "Don't over-steam - milk should be silky, not bubbly",
      "Aim for 1:3 ratio (espresso to milk)",
      "Tap and swirl the pitcher to integrate foam",
      "Practice your pouring technique for beautiful latte art"
    ],
    category: "milk-based"
  },
  {
    id: 3,
    name: "Perfect Cappuccino",
    description: "Equal parts espresso, steamed milk, and milk foam for the ideal balance. A classic Italian coffee drink with perfect proportions.",
    difficulty: "Medium",
    brewTime: "6-8 min",
    rating: 4.7,
    gradient1: "#CD853F",
    gradient2: "#D2B48C",
    icon: "☕",
    imageKey: "cappuccino",
    ingredients: [
      "1 shot of espresso (30ml)",
      "120ml cold whole milk",
      "Stainless steel milk pitcher (12oz)",
      "Steam wand with proper tip",
      "Digital thermometer",
      "Cappuccino cup (150-180ml)",
      "Clean steam wand"
    ],
    steps: [
      {
        number: 1,
        title: "Brew Fresh Espresso",
        description: "Brew a fresh shot of espresso using the classic espresso method. Pour into your cappuccino cup immediately.",
        time: "25-30 sec"
      },
      {
        number: 2,
        title: "Prepare Milk",
        description: "Fill your milk pitcher with 120ml of cold whole milk. The extra milk will allow for proper foam creation.",
        time: "30 sec"
      },
      {
        number: 3,
        title: "Create Dense Foam",
        description: "Insert steam wand tip just below milk surface. Turn on steam and create a gentle whirlpool. Focus on creating dense, velvety foam.",
        time: "1-2 min"
      },
      {
        number: 4,
        title: "Temperature Control",
        description: "Steam until milk reaches 140-150°F (60-65°C). The foam should be thick and creamy, not airy or bubbly.",
        time: "30 sec"
      },
      {
        number: 5,
        title: "Tap and Settle",
        description: "Tap the pitcher on counter to remove large bubbles. Gently swirl to integrate foam and milk. Let it settle for 10 seconds.",
        time: "10 sec"
      },
      {
        number: 6,
        title: "Layer Perfectly",
        description: "Pour steamed milk into espresso first, then spoon the dense foam on top. Aim for equal thirds: 1/3 espresso, 1/3 milk, 1/3 foam.",
        time: "30 sec"
      }
    ],
    tips: [
      "The traditional ratio is 1:1:1 (espresso:steamed milk:foam)",
      "Use whole milk for the best foam structure",
      "The foam should be dense and creamy, not light and airy",
      "Don't stir a cappuccino - enjoy the distinct layers",
      "Practice your milk steaming technique for perfect foam",
      "Aim for 140-150°F (60-65°C) for optimal temperature",
      "The foam should hold its shape when spooned"
    ],
    category: "milk-based"
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "Smooth, low-acid coffee brewed with cold water over 12-24 hours. Perfect for hot summer days or when you want a refreshing coffee drink.",
    difficulty: "Easy",
    brewTime: "12-24 hours",
    rating: 4.9,
    gradient1: "#2F4F4F",
    gradient2: "#696969",
    icon: "🧊",
    imageKey: "coldBrew",
    ingredients: [
      "1 cup (100g) coarse coffee grounds",
      "4 cups (950ml) cold filtered water",
      "Large mason jar or container (1-quart)",
      "Fine mesh strainer",
      "Coffee filter or cheesecloth",
      "Refrigerator space",
      "Measuring cup",
      "Stirring spoon"
    ],
    steps: [
      {
        number: 1,
        title: "Prepare Container",
        description: "Clean and dry your brewing container thoroughly. A 1-quart mason jar works perfectly for this recipe.",
        time: "5 min"
      },
      {
        number: 2,
        title: "Measure and Add Coffee",
        description: "Add 1 cup (100g) of coarse coffee grounds to the container. Use a coarse grind to prevent over-extraction.",
        time: "2 min"
      },
      {
        number: 3,
        title: "Add Cold Water",
        description: "Slowly pour 4 cups (950ml) of cold filtered water over the grounds. Stir gently to ensure all grounds are saturated.",
        time: "3 min"
      },
      {
        number: 4,
        title: "Cover and Refrigerate",
        description: "Cover the container tightly and place in the refrigerator. Let it steep for 12-24 hours (18 hours is optimal).",
        time: "12-24 hours"
      },
      {
        number: 5,
        title: "Strain the Coffee",
        description: "Strain through a fine mesh strainer lined with a coffee filter or cheesecloth. Remove all grounds completely.",
        time: "10 min"
      },
      {
        number: 6,
        title: "Store and Serve",
        description: "Transfer to a clean container and refrigerate. Serve over ice, diluted 1:1 with water or milk. Keeps for 2 weeks.",
        time: "5 min"
      }
    ],
    tips: [
      "Use coarse coffee grounds to prevent over-extraction and sediment",
      "Cold brew is naturally 67% less acidic than hot coffee",
      "You can store cold brew concentrate in the fridge for up to 2 weeks",
      "Dilute with water, milk, or serve over ice to taste",
      "Experiment with different coffee beans for unique flavor profiles",
      "18 hours is the optimal steeping time for balanced flavor",
      "Use filtered water for the best taste"
    ],
    category: "cold-brew"
  },
  {
    id: 5,
    name: "Pour Over",
    description: "Clean, bright coffee using a manual pour-over method for maximum control. Perfect for highlighting the subtle flavors of single-origin beans.",
    difficulty: "Hard",
    brewTime: "4-5 min",
    rating: 4.5,
    gradient1: "#8B7355",
    gradient2: "#A0522D",
    icon: "💧",
    imageKey: "pourOver",
    ingredients: [
      "20g medium-fine coffee grounds",
      "300ml hot water (200°F/93°C)",
      "Pour-over cone (Hario V60, Chemex, etc.)",
      "Filter paper (size 2 for V60)",
      "Gooseneck kettle",
      "Digital scale",
      "Timer",
      "Coffee cup or carafe"
    ],
    steps: [
      {
        number: 1,
        title: "Prepare Setup",
        description: "Place filter in pour-over cone and rinse with hot water to remove paper taste and warm the cone. Discard rinse water.",
        time: "1 min"
      },
      {
        number: 2,
        title: "Add Coffee and Bloom",
        description: "Add 20g of coffee grounds. Pour 60ml of hot water (200°F) in a circular motion, ensuring all grounds are saturated. Let bloom for 30 seconds.",
        time: "30 sec"
      },
      {
        number: 3,
        title: "First Pour",
        description: "Pour water in slow, concentric circles until you reach 150ml total. Maintain a steady, controlled pour. This should take about 1 minute.",
        time: "1 min"
      },
      {
        number: 4,
        title: "Second Pour",
        description: "Continue pouring in circles until you reach 300ml total. Keep the water level consistent. The entire process should take 3-4 minutes.",
        time: "1-2 min"
      },
      {
        number: 5,
        title: "Final Drip",
        description: "Allow the coffee to finish dripping completely. The total brew time should be 3-4 minutes for optimal extraction.",
        time: "30-60 sec"
      },
      {
        number: 6,
        title: "Serve Fresh",
        description: "Remove the cone and serve your coffee immediately. Pour-over coffee is best enjoyed fresh and hot.",
        time: "Serve"
      }
    ],
    tips: [
      "Use a gooseneck kettle for precise control over water flow",
      "The grind size should be medium-fine, like sea salt",
      "Water temperature should be 195-205°F (90-96°C)",
      "Practice your pouring technique for consistent results",
      "Keep your pour steady and controlled throughout the process",
      "Aim for a 1:15 coffee-to-water ratio",
      "The total brew time should be 3-4 minutes"
    ],
    category: "manual-brew"
  },
  {
    id: 6,
    name: "French Press",
    description: "Full-bodied coffee with rich flavors using the immersion brewing method. Simple yet effective for a robust cup of coffee.",
    difficulty: "Easy",
    brewTime: "4-5 min",
    rating: 4.4,
    gradient1: "#654321",
    gradient2: "#8B4513",
    icon: "🫖",
    imageKey: "frenchPress",
    ingredients: [
      "30g coarse coffee grounds",
      "500ml hot water (200°F/93°C)",
      "French press (1L capacity)",
      "Digital scale",
      "Timer",
      "Kettle or pot for heating water",
      "Coffee cup"
    ],
    steps: [
      {
        number: 1,
        title: "Heat Water",
        description: "Bring water to a boil, then let it cool for 30 seconds to reach the optimal brewing temperature of 200°F (93°C).",
        time: "3-4 min"
      },
      {
        number: 2,
        title: "Add Coffee Grounds",
        description: "Add 30g of coarse coffee grounds to the French press. The coarse grind prevents grounds from passing through the filter.",
        time: "30 sec"
      },
      {
        number: 3,
        title: "Pour and Stir",
        description: "Pour 500ml of hot water over the grounds. Give it a gentle stir with a wooden spoon to ensure all grounds are saturated.",
        time: "30 sec"
      },
      {
        number: 4,
        title: "Place Lid and Steep",
        description: "Place the lid on the French press but don't plunge yet. Let the coffee steep for exactly 4 minutes.",
        time: "4 min"
      },
      {
        number: 5,
        title: "Plunge Slowly",
        description: "Slowly press the plunger down with steady pressure. Take about 20-30 seconds to complete the plunge.",
        time: "20-30 sec"
      },
      {
        number: 6,
        title: "Pour and Serve",
        description: "Pour all the coffee out immediately into your cup. Don't let it sit in the press to prevent over-extraction.",
        time: "30 sec"
      }
    ],
    tips: [
      "Use coarse coffee grounds to prevent sediment in your cup",
      "Don't over-steep - 4 minutes is the sweet spot for optimal flavor",
      "Pour all the coffee out after plunging to prevent over-extraction",
      "Clean your French press thoroughly after each use",
      "Experiment with different coffee-to-water ratios (1:15 to 1:17)",
      "Use filtered water for the best taste",
      "The coarse grind is essential - fine grounds will clog the filter"
    ],
    category: "manual-brew"
  },
  {
    id: 7,
    name: "Mocha",
    description: "Delicious combination of espresso, chocolate, and steamed milk. A perfect treat for chocolate lovers who also enjoy coffee.",
    difficulty: "Easy",
    brewTime: "6-8 min",
    rating: 4.6,
    gradient1: "#8B4513",
    gradient2: "#654321",
    icon: "🍫",
    imageKey: "mocha",
    ingredients: [
      "1 shot of espresso (30ml)",
      "2 tablespoons chocolate syrup or 1 tablespoon cocoa powder",
      "150-180ml cold whole milk",
      "Stainless steel milk pitcher",
      "Steam wand",
      "Digital thermometer",
      "Mocha cup (8-12oz)",
      "Whipped cream (optional)",
      "Chocolate shavings (optional)"
    ],
    steps: [
      {
        number: 1,
        title: "Brew Fresh Espresso",
        description: "Brew a fresh shot of espresso using the classic espresso method. Pour into your mocha cup immediately.",
        time: "25-30 sec"
      },
      {
        number: 2,
        title: "Add Chocolate",
        description: "Add 2 tablespoons of chocolate syrup or 1 tablespoon of cocoa powder to the espresso. Stir until well combined.",
        time: "30 sec"
      },
      {
        number: 3,
        title: "Steam Milk",
        description: "Steam 150-180ml of whole milk to create smooth, creamy texture. Aim for 140-150°F (60-65°C).",
        time: "1-2 min"
      },
      {
        number: 4,
        title: "Combine and Pour",
        description: "Pour the steamed milk into your chocolate-espresso mixture, holding back the foam with a spoon.",
        time: "30 sec"
      },
      {
        number: 5,
        title: "Add Foam and Garnish",
        description: "Top with a small amount of milk foam. Add optional whipped cream and chocolate shavings for extra indulgence.",
        time: "30 sec"
      }
    ],
    tips: [
      "Use high-quality chocolate syrup or cocoa powder for the best flavor",
      "Don't over-steam your milk - you want it creamy, not frothy",
      "You can adjust the chocolate amount to your preference",
      "Try different types of chocolate for unique variations",
      "Serve immediately while hot for the best experience",
      "Dark chocolate syrup provides a richer flavor than milk chocolate",
      "The chocolate should complement, not overpower, the coffee"
    ],
    category: "milk-based"
  },
  {
    id: 8,
    name: "Americano",
    description: "Espresso diluted with hot water for a lighter, more approachable drink. Perfect for those who find espresso too strong.",
    difficulty: "Easy",
    brewTime: "3-4 min",
    rating: 4.3,
    gradient1: "#A0522D",
    gradient2: "#CD853F",
    icon: "☕",
    imageKey: "americano",
    ingredients: [
      "1-2 shots of espresso (30-60ml)",
      "Hot water (200°F/93°C)",
      "Large cup or mug (8-12oz)",
      "Espresso machine",
      "Kettle or hot water source",
      "Digital scale (optional)"
    ],
    steps: [
      {
        number: 1,
        title: "Brew Fresh Espresso",
        description: "Brew 1-2 shots of espresso using the classic espresso method. The quality of your espresso determines the quality of your Americano.",
        time: "25-60 sec"
      },
      {
        number: 2,
        title: "Heat Water",
        description: "While your espresso is brewing, heat water to just below boiling (200°F/93°C). Use filtered water for the best taste.",
        time: "2-3 min"
      },
      {
        number: 3,
        title: "Pour Espresso First",
        description: "Pour your espresso into a large cup first. This preserves the crema and allows for better integration.",
        time: "10 sec"
      },
      {
        number: 4,
        title: "Add Hot Water",
        description: "Add hot water to dilute. The traditional ratio is 1:1 or 1:2 espresso to water. Start with 1:1 and adjust to taste.",
        time: "30 sec"
      },
      {
        number: 5,
        title: "Stir and Serve",
        description: "Give your Americano a gentle stir to ensure the espresso and water are well combined. Serve immediately while hot.",
        time: "10 sec"
      }
    ],
    tips: [
      "The traditional ratio is 1:1 or 1:2 espresso to hot water",
      "Use hot water, not boiling, to preserve the coffee's flavor",
      "You can adjust the strength by changing the water ratio",
      "An Americano should have the same caffeine content as the original espresso",
      "Try different espresso beans to discover new flavor profiles",
      "Pour espresso first, then water, to preserve the crema",
      "Use filtered water for the best taste"
    ],
    category: "espresso"
  }
];

export const categories = [
  { id: 'all', name: 'All Recipes' },
  { id: 'espresso', name: 'Espresso' },
  { id: 'milk-based', name: 'Milk Based' },
  { id: 'manual-brew', name: 'Manual Brew' },
  { id: 'cold-brew', name: 'Cold Brew' }
];

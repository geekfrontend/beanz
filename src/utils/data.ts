export interface IRecipe {
  name: string;
  materials: string[];
  steps: string[];
}

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  sideEffects: string[];
  recipes: IRecipe[];
}

export const coffees: ICoffee[] = [
  {
    id: 1,
    name: "Arabica",
    description:
      "Arabica coffee is one of the most popular and widely consumed types of coffee in the world. Arabica coffee was discovered in the mountainous regions of Ethiopia and spread by Arab traders to Yemen. The Arabs began popularizing Arabica coffee beans extracted and brewed with hot water as a refreshing drink. In the 15th century, the popularity of coffee began to spread to Europe. Initially, Europeans purchased coffee from Arab traders. Later, they succeeded in cultivating the plant in Asia and the Americas. Since then, coffee has become a highly popular global commodity, even briefly being the second-largest traded commodity after oil.",
    sideEffects: [
      "Anxiety and Restlessness",
      "Increased Heart Rate",
      "Sleep Disturbances",
      "Digestive Issues",
      "Improved Mood",
    ],
    recipes: [
      {
        name: "Black Coffee",
        materials: [
          "1-2 tablespoons of freshly ground Arabica coffee beans (depending on desired strength)",
          "180-200 ml of hot water (around 90-95°C)",
        ],
        steps: [
          "Grind coffee beans: Use a coffee grinder to grind Arabica beans according to the brewing method (coarser for French Press, finer for pour-over).",
          "Boil water: Bring water to a boil, then let it sit for 30 seconds to cool slightly (around 90-95°C).",
          "Brew coffee: Place the ground coffee in a cup or brewing tool like a French Press, pour-over, or V60. Slowly pour hot water over the coffee and let it steep.",
          "Stir and strain: If using a French Press, press the plunger down after 3-4 minutes. For pour-over, allow the water to drip through completely.",
          "Enjoy: Arabica coffee is ready to be enjoyed black, without any sugar or milk.",
        ],
      },
      {
        name: "Arabica Latte",
        materials: [
          "1 shot of espresso (around 30 ml Arabica coffee)",
          "200 ml milk",
        ],
        steps: [
          "Grind Arabica coffee beans finely and brew using an espresso machine to get 1 shot of espresso (around 30 ml).",
          "Heat the milk until warm and froth it using a steam wand or milk frother until it forms fine foam.",
          "Pour the espresso into a cup, then slowly add the frothed milk.",
          "Decorate with latte art if desired and serve immediately.",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Robusta",
    description:
      "Robusta coffee was first discovered in Congo in 1898 by a Belgian botanist. Robusta is native to Africa, covering areas such as Congo, Sudan, Liberia, and Uganda. Robusta coffee was developed on a large scale in the early 20th century by the Dutch colonial government in Indonesia. With higher caffeine content and a stronger taste, Robusta coffee is often used in instant coffee blends and espresso. Although less appreciated than Arabica in terms of flavor, Robusta remains an essential part of the global coffee industry.",
    sideEffects: [
      "Anxiety and Restlessness",
      "Increased Heart Rate",
      "Sleep Disturbances",
      "Digestive Issues",
      "Improved Mood",
    ],
    recipes: [
      {
        name: "Robusta Espresso",
        materials: ["1 shot of espresso (30 ml Robusta coffee)"],
        steps: [
          "Grind Robusta coffee beans finely.",
          "Use an espresso machine to extract the coffee and obtain 1 shot (30 ml).",
          "Serve immediately while hot.",
        ],
      },
      {
        name: "Robusta Milk Coffee",
        materials: [
          "1 shot of espresso (30 ml Robusta coffee)",
          "200 ml milk",
          "1-2 teaspoons sugar (optional)",
        ],
        steps: [
          "Brew Robusta coffee using an espresso machine to get 1 shot (30 ml).",
          "Heat the milk until warm, then add sugar if desired.",
          "Combine the espresso with the heated milk and stir well.",
          "Serve in your favorite cup.",
        ],
      },
    ],
  },
];

export const getCoffeeByName = (name: string) => {
  return coffees.find(
    (coffee) => coffee.name.toLowerCase() === name.toLowerCase()
  );
};

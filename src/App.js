import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component.jsx";
import Menu from "./components/menu/menu.component";
import Home from "./routes/Home/home.component.jsx";

const App = () => {
  const [menus, setMenus] = React.useState([
    {
      sectionContainer: [
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "BLT Salad",
                  price: 10.99,
                  description: [
                    "Iceberg&Romain mix",
                    "tomato",
                    "onions",
                    "crisp bacon bites",
                    "hard-boiled eggs",
                    "avocados",
                  ],
                },
                {
                  name: "The Greek",
                  price: 10.99,
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                    "peppers",
                    "red onion",
                    "cheese",
                    "olives",
                    "chicken",
                  ],
                },
                {
                  name: "Fiesta",
                  price: 10.99,

                  description: [
                    "Iceberg lettuce",
                    " tomates",
                    "red onions",
                    "shredded cheeese",
                    "jalapenos",
                    "black beans",
                    "corn",
                    "avocado",
                    "and grilled chicken",
                  ],
                },
                {
                  name: "Cesar Chicken",
                  price: 10.99,

                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                    "grilled chicken",
                    "cesar dressing",
                    "parmagane cheese",
                  ],
                },
                {
                  name: "Tuna Salad",
                  price: 10.99,

                  description: [
                    "Mixed greens",
                    "cherry tomatoes",
                    "cucumber",
                    "onions",
                    "cucumbers",
                    "carrots",
                    "topped w/ tuna salad",
                  ],
                },
                {
                  name: "Grilled Chicken Garden",
                  price: 10.99,

                  description: [
                    "Salad mixed with iceburg",
                    "red onions",
                    "tomatoes",
                    "carrots",
                    "onions",
                    "peppers",
                    "broccoli",
                    "grilled chicken",
                  ],
                },
                {
                  name: "Chefs Salad",
                  price: 10.99,

                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Olympians",
                  price: 10.99,

                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
              ],
            },
          ],
          header: {
            title: "FRESH SALADS",
            price: 10.99,

            color: "green",
            subHeader: {
              name: "",
            },
          },
        },
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "Triple Threat",
                  price: 10.99,

                  description: [
                    "Pepper Jack",
                    "Cheddar Cheese",
                    "Mozzarella Cheese",
                  ],
                },
                {
                  name: "American Grilled Cheese",
                  price: 10.99,

                  description: ["Bacon", "Americano"],
                },
                {
                  name: "Bellian Grilled Cheese",
                  price: 10.99,

                  description: ["Fresh Mozzarella Cheese", "tomato", "basil"],
                },
                {
                  name: "California Grilled Cheese",
                  price: 10.99,

                  description: ["Avocado", "Provolone cheese", "chipotle mayo"],
                },
              ],
            },
          ],
          header: {
            title: "Grilled Cheeses",
            color: "blue",
            description: "",
            subHeader: {
              name: "",
            },
          },
        },
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "Step : 1 choose 2 items",
                  price: 10.99,

                  description: [
                    "Potatoes",
                    "yellow rice",
                    "pastas",
                    "brown rice",
                    "salad",
                    "broccoli & Carrots",
                  ],
                },
                {
                  name: "Step 2: Choose 1 protein",
                  description: [
                    "grilled chicken",
                    "hallah chicken",
                    "fish + 1",
                    " grillled Something (Cant read the menu)",
                    "Lamb",
                  ],
                },
                {
                  name: "Step 3: add extras",
                  description: [
                    "hummus",
                    "fallafas",
                    "avocado",
                    "extra meat + 2.00",
                  ],
                },
                {
                  name: "",
                  description: [
                    "Chicken over rice",
                    "Lamb over rice",
                    "combo",
                    "Lamb gyro",
                    "chicken gyro",
                  ],
                },
              ],
            },
          ],
          header: {
            title: "HALAL FOOD",
            color: "purple",
            subHeader: {
              name: "HEALTHY PLATTERS",
            },
          },
        },
      ],
    },
    {
      sectionContainer: [
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "The Deli classic",
                  description: [
                    "any one boardshead meat,",
                    "1 cheese",
                    "2 veggies",
                  ],
                },
                {
                  name: "Torta",
                  description: [
                    "grilled chicken",
                    "onions",
                    "peppers",
                    "beans",
                    "shredded cheese",
                    "avocado",
                    "lettuce",
                    "chipotle mayo",
                  ],
                },
                {
                  name: "Chicken Club",
                  description: [
                    "Grilled chicken",
                    "cheese",
                    "bacon",
                    " lettuce & tomatoes",
                  ],
                },
                {
                  name: "Chicken Capri",
                  description: [
                    "Chicken stuff",
                    "roasted peppers",
                    "fresh mozzerella & basil",
                  ],
                },
                {
                  name: "Chicken Cordon Bleu",
                  description: [
                    "more chicken stuff ",
                    "swiss cheese",
                    "lettuce & tomatoes",
                    "Bleu cheese dressing",
                  ],
                },
                {
                  name: "The Italian job",
                  description: [
                    "fresh mozzerella & basil",
                    "tomatoes & ",
                    "olive oil",
                  ],
                },
                {
                  name: "Caribbean fiesta",
                  description: [
                    "jerk chicken",
                    "chipotle something cheese",
                    "peppers",
                    "onions",
                    "jalapenos",
                    "lettuce & tomatoes",
                    "ranch",
                  ],
                },
                {
                  name: "Have it your way chicken",
                  description: [
                    "Any Flavor of grilled chicken",
                    "w/ cheese",
                    "& 2 veggie toppings",
                  ],
                },
                {
                  name: "Chicken Cesar",
                  description: [
                    "grilled chicken",
                    "csesar dressing",
                    "& 2 veggie toppings",
                    "some type of cheese 😂",
                  ],
                },
                {
                  name: "Tuna Melt",
                  description: [
                    "Classic Tuna Salad",
                    "Cheddar Cheese",
                    "Lettuce & Tomatoes",
                  ],
                },
                {
                  name: "California Fresh",
                  description: [
                    "Grilled Chicken",
                    "something something",
                    "avocado",
                    " mixed greens and tomatoes",
                  ],
                },
                {
                  name: "Spartan SuperStar",
                  description: [
                    "Grilled Chicken",
                    "turkey bacon",
                    "avocado",
                    "spianch and avocado",
                  ],
                },
                {
                  name: "Monte Cristo",
                  description: [
                    "T-ham",
                    "turkey",
                    "swiss",
                    " lettuce & tomatoes",
                    "mustard",
                  ],
                },
                {
                  name: "The Katz Special",
                  description: [
                    "roast beef",
                    "pastrami",
                    "swiss",
                    " onions and mustard",
                  ],
                },
                {
                  name: "Fort Washington Garden",
                  description: [
                    "seassoned broccoli",
                    "carrots",
                    "corn",
                    " beans",
                    "something",
                    "mozzerella cheese",
                  ],
                },
                {
                  name: "Chicken Parmesan",
                  description: [
                    "breasted chicken breast",
                    "parmasan cheese",
                    "avocado & mozzarella",
                  ],
                },
                {
                  name: "Chopped Cheese",
                  description: [
                    "beef",
                    "american cheese",
                    "lettuce & tomatoes",
                    " mayo & ketchup",
                  ],
                },
              ],
            },
          ],
          header: {
            title: "SIGNATURE SANDWICHES",
            subHeader: {
              name: "ROLLS/HEROS - WRAPS",
            },
          },
        },
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "Philly Style Steak",
                  description: ["onions", "peppers", "provolone cheese"],
                },
                {
                  name: "Pizza Cheesesteak",
                  description: [
                    "mushrooms",
                    "marinara",
                    "Fresh Mozzarella Cheese",
                  ],
                },
                {
                  name: "Mexican Steak",
                  description: [
                    "onions",
                    "peppers",
                    "jalapeno",
                    "beans",
                    "avocado",
                    "shredded cheese",
                  ],
                },
                {
                  name: "Texas Steak",
                  description: [
                    "onions",
                    "peppers",
                    "pepperjack cheese",
                    "fried eggs",
                  ],
                },
                {
                  name: "Southwest Steak",
                  description: ["onions", "peppers", "cheese", "bacon and bbq"],
                },
                {
                  name: "Chicken Cheesesteak",
                  description: [
                    "onions",
                    "peppers",
                    "jalapeno",
                    "mushrooms",
                    "cheese",
                  ],
                },
                {
                  name: "Quesadilla",
                  description: ["cheese", "chicken", "or PhillyCheese Steak"],
                },
              ],
            },
          ],
          header: {
            title: "STEAKS N' CHEESE",
            color: "orange",
            subHeader: {
              name: "",
            },
          },
        },
      ],
    },
    {
      sectionContainer: [
        {
          section: [
            {
              name: "OMELETTES",
              subSection: [
                {
                  name: "Meat Omelette",
                  description: [
                    "Turkey",
                    "ham",
                    "sausage or bacon",
                    "onions",
                    "peppers",
                  ],
                },
              ],
            },
          ],
          header: {
            title: "BREAKFAST",
            subHeader: {
              name: "",
            },
          },
        },
        {
          section: [
            {
              subSection: [
                {
                  name: "Cheeseburger",
                  description: [
                    "w/cheese",
                    "lettuce",
                    "tomatoes",
                    "pickle",
                    "ketch",
                  ],
                },
                {
                  name: "Jalapeno Burger",
                  description: ["Jalapenos", "cheddar cheese"],
                },
              ],
            },
          ],
          header: {
            title: "ANGUS BURGERS",
            color: "brown",
            subHeader: {
              name: "",
            },
          },
        },
      ],
    },
    {
      sectionContainer: [
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "Mango Sunrise",
                  description: ["mango", "pineapple", "apple juice"],
                },
                {
                  name: "Passionate Peach",
                  description: [
                    "peach",
                    "banana",
                    "strawberries",
                    "mango nectar",
                  ],
                },
              ],
            },
          ],
          header: {
            title: "FRUIT SMOOTHIES",
            color: "pink",
            subHeader: {
              name: "Medium - 5.99   LARGE - 6.99",
            },
          },
        },
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "Oats of Glory",
                  description: [
                    "strawberries",
                    "banana",
                    "raw oatmeal",
                    "vanilla",
                    "protein & milk",
                  ],
                },
                {
                  name: "Banana Madness",
                  description: [
                    "Banana",
                    "peanut butter",
                    "chocolate protein",
                    "milk",
                  ],
                },
              ],
            },
          ],
          header: {
            title: "PROTEIN SMOOTHIES",
            color: "coral",
            subHeader: {
              name: "MEDIUM - 6.99  LARGE - 7.99",
            },
          },
        },
        {
          section: [
            {
              name: "",
              subSection: [
                {
                  name: "Pure Carrot",
                  description: [""],
                },
                {
                  name: "California Sunset",
                  description: ["carrot", "beetks", "read apple", "ginger"],
                },
                {
                  name: "Green Power",
                  description: ["cucumbers", "green apples", "calery", "kale"],
                },
              ],
            },
          ],
          header: {
            title: "SQUEEZED JUICE",
            color: "cyan",
            subHeader: {
              name: "MEDIUM - 6.99  LARGE - 7.99",
            },
          },
        },
      ],
    },
  ]);

  // const getData = async () => {
  //   const response = await fetch("http://localhost:5000/");
  // };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home menus={menus} />} />
        {menus.map((menuObj, index) => {
          console.log(menuObj);
          let pathName = `menu${index === 0 ? "" : index}`;

          return (
            <Route
              exact
              key={index}
              path={pathName}
              element={<Menu menu={menuObj} />}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;

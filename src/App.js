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
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Olympians",
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
                  description: [
                    "Pepper Jack",
                    "Cheddar Cheese",
                    "Mozzarella Cheese",
                  ],
                },
                {
                  name: "American Grilled Cheese",
                  description: ["Bacon", "Americano"],
                },
                {
                  name: "Bellian Grilled Cheese",
                  description: ["Fresh Mozzarella Cheese", "tomato", "basil"],
                },
                {
                  name: "California Grilled Cheese",
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
                  name: "BLT Salad",
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
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
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
                  name: "BLT Salad",
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
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
                  description: [
                    "Romain lettuce",
                    "cherry tomatoes",
                    "sliced cucumber",
                  ],
                },
                {
                  name: "The Greek",
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

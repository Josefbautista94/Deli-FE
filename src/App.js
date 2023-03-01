import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component.jsx";
import Menu from "./components/menu/menu.component";
import Home from "./routes/Home/home.component.jsx";

// class App extends React.Component {
//   constructor() {
//     // this is where we manage the state
//     super();
//     this.state = {
//       menu: [
//         {
//           sectionContainer: [
//             {
//               section: [
//                 {
//                   subSection: [
//                     {
//                       name: "BLT Salad",
//                       description: [
//                         "Iceberg&Romain mix",
//                         "tomato",
//                         "onions",
//                         "crisp bacon bites",
//                         "hard-boiled eggs",
//                         "avocados",
//                       ],
//                     },
//                     {
//                       name: "The Greek",
//                       description: [
//                         "Romain lettuce",
//                         "cherry tomatoes",
//                         "sliced cucumber",
//                       ],
//                     },
//                   ],
//                 },
//               ],
//               header: {
//                 title: "FRESH SALADS",
//                 subHeader: {
//                   name: "",
//                 },
//               },
//             },
//             {
//               section: [
//                 {
//                   subSection: [
//                     {
//                       name: "Triple Threat",
//                       description: [
//                         "Pepper Jack",
//                         "Cheddar Cheese",
//                         "Mozzarella Cheese",
//                       ],
//                     },
//                     {
//                       name: "American Grilled Cheese",
//                       description: ["Bacon", "Americano"],
//                     },
//                     {
//                       name: "Bellian Grilled Cheese",
//                       description: [
//                         "Fresh Mozzarella Cheese",
//                         "tomato",
//                         "basil",
//                       ],
//                     },
//                     {
//                       name: "California Grilled Cheese",
//                       description: [
//                         "Avocado",
//                         "Provolone cheese",
//                         "chipotle mayo",
//                       ],
//                     },
//                   ],
//                 },
//               ],
//               header: {
//                 title: "Grilled Cheeses",
//                 description: "",
//                 subHeader: {
//                   name: "HEALTHY PLATTERS",
//                 },
//               },
//             },
//             {
//               section: [
//                 {
//                   subSection: [
//                     {
//                       name: "",
//                     },
//                   ],
//                 },
//               ],
//               header: {
//                 title: "HALAL FOOD",
//                 subHeader: {
//                   name: "HEALTHY PLATTERS",
//                 },
//               },
//             },
//           ],
//         },
//         {},
//         {},
//       ],
//     };
//   }

//   // renderMenuRoutes = () => {
//   //   return this.state.menu.map((menuObj, index) => {
//   //     console.log(index);

//   //     <Route
//   //       exact
//   //       key={index}
//   //       path={`menu${index === 0 ? "" : index + 1}`}
//   //       element={<Menu menu={menuObj} />}
//   //     />;
//   //   });
//   // };

//   render() {
//     console.log(this.state.menu);
//     return (
//       <Routes>
//         <Route path="/" element={<Navigation />}>
//           <Route index element={<Home menu={this.state.menu} />} />
//           <Route exact path="menu" element={<Menu />} />
//           {/* {this.state.menu.map((menuObj, index) => {
//               let pathName = `menu${index === 0 ? "" : index}`;
//               console.log(pathName);
//               <Route exact key={index} path={pathName}>
//                 <Menu menu={menuObj} />
//               </Route>;
//             })} */}
//         </Route>
//       </Routes>
//     );
//   }
// }

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
                  name: "",
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
                  name: "The Deli Classic",
                  description: [
                    "any 1 boarshead meat",
                    "1 cheese",
                    "2 veggies",
                  ],
                },
                {
                  name: "The Torta",
                  description: [
                    "Grilled chicken",
                    "onions",
                    "peppers",
                    "beans",
                    "shredded cheese",
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
            subHeader: {
              name: "MEDIUM - 6.99  LARGE - 7.99",
            },
          },
        },
      ],
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home menus={menus} />} />
        {menus.map((menuObj, index) => {
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

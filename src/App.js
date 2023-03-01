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
  const [menu, setMenu] = React.useState([
    {
      sectionContainer: [
        {
          section: [
            {
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
            description: "",
            subHeader: {
              name: "HEALTHY PLATTERS",
            },
          },
        },
        {
          section: [
            {
              subSection: [
                {
                  name: "",
                },
              ],
            },
          ],
          header: {
            title: "HALAL FOOD",
            subHeader: {
              name: "HEALTHY PLATTERS",
            },
          },
        },
      ],
    },
    {},
    {},
  ]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home menu={menu} />} />
        {menu.map((menuObj, index) => {
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

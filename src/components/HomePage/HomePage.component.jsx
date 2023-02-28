import React from "react";
import "./HomePage.styles.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section
          className="section"
          style={{ backgroundColor: "rgb(55, 166, 30)" }}
        >
          <h2>Fresh Salads</h2>
        </section>
        <p>Menu items go here</p>
        <section
          className="section"
          style={{ backgroundColor: "rgb(19, 54, 88)" }}
        >
          <h2>Grilled Cheese</h2>
        </section>
        <p>Menu items go here</p>
        <section
          className="section"
          style={{ backgroundColor: "rgb(88, 0, 77)" }}
        >
          <h2>Halal Food</h2>
        </section>
        <p>Menu items go here</p>
        <section
          className="section"
          style={{ backgroundColor: "rgb(32, 73, 155 )" }}
        >
          <h2>Signature Sandwiches</h2>
        </section>
        <p>Menu items go here</p>
        <section
          className="section"
          style={{ backgroundColor: "rgb(241, 86, 30)" }}
        >
          <h2>Steaks n' Cheese</h2>
        </section>
        <p>Menu items go here</p>
        <section
          className="section"
          style={{ backgroundColor: "rgb(239, 197, 26)" }}
        >
          <h2>Breakfast</h2>
        </section>
        <p>Menu items go here</p>

        <section
          className="section"
          style={{ backgroundColor: "rgb(42, 42, 41)" }}
        >
          <h2>Angus Burgers</h2>
        </section>
        <p>Menu items go here</p>
        <section
          className="section"
          style={{ backgroundColor: "rgb(30, 150, 136)" }}
        >
          <h2>Fruit Smoothies</h2>
        </section>
        <p>Menu items go here</p>

        <section
          className="section"
          style={{ backgroundColor: "rgb(50, 162, 239)" }}
        >
          <h2>Protein Smoothies</h2>
        </section>
        <p>Menu items go here</p>

        <section
          className="section"
          style={{ backgroundColor: "rgb(55, 172, 70)" }}
        >
          <h2>Squeezed Juice</h2>
        </section>
        <p>Menu items go here</p>
      </div>
    );
  }
}

export default HomePage;

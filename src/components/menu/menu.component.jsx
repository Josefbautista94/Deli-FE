import { Fragment } from "react";
import SectionContainer from "../sectionContainer/sectionContainer.component";

const Menu = ({ menu }) => {
  const { sectionContainer } = menu;
  return (
    <div className="contentContainer">
      {sectionContainer.map((sectionContainer, index) => {
        return sectionContainer ? (
          <div>
            <SectionContainer key={index} sectionContainer={sectionContainer} />
          </div>
        ) : (
          <></>
        );
      })}
    </div>

    /* { <>
      <Section
        id="fresh-salads"
        className="section"
        style={{ backgroundColor: "rgb(55, 166, 30)" }}
        numSections={2}
        header={(headerName = "Fresh Salads")}
      />
      <Section
        id="grilled-cheese"
        className="section"
        style={{ backgroundColor: "rgb(19, 54, 88)" }}
        numSections={2}
        header={(headerName = "Grilled Cheese")}
      />
      <Section
        id="halal-food"
        className="section"
        style={{ backgroundColor: "rgb(88, 0, 77)" }}
      >
        <h2>Halal Food</h2>
      </Section>
      <p>Menu items go here</p>
      <section
        id="signature-sandwiches"
        className="section"
        style={{ backgroundColor: "rgb(32, 73, 155 )" }}
      >
        <h2>Signature Sandwiches</h2>
      </section>
      <p>Menu items go here</p>
      <section
        id="steaks-n-cheese"
        className="section"
        style={{ backgroundColor: "rgb(241, 86, 30)" }}
      >
        <h2>Steaks n' Cheese</h2>
      </section>
      <p>Menu items go here</p>
      <section
        id="breakfast"
        className="section"
        style={{ backgroundColor: "rgb(239, 197, 26)" }}
      >
        <h2>Breakfast</h2>
      </section>
      <p>Menu items go here</p>
      <section
        id="angus-burgers"
        className="section"
        style={{ backgroundColor: "rgb(42, 42, 41)" }}
      >
        <h2>Angus Burgers</h2>
      </section>
      <p>Menu items go here</p>
      <section
        id="fruit-smoothies"
        className="section"
        style={{ backgroundColor: "rgb(30, 150, 136)" }}
      >
        <h2>Fruit Smoothies</h2>
      </section>
      <p>Menu items go here</p>
      <section
        id="protein-smoothies"
        className="section"
        style={{ backgroundColor: "rgb(50, 162, 239)" }}
      >
        <h2>Protein Smoothies</h2>
      </section>
      <p>Menu items go here</p>
      <section
        id="squeezed-juice"
        className="section"
        style={{ backgroundColor: "rgb(55, 172, 70)" }}
      >
        <h2>Squeezed Juice</h2>
      </section>
    </> } */
  );
};

export default Menu;

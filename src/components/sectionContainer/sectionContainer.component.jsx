import Header from "../header/header.component";
import Section from "../section/section.component";
import "./sectionContainer.styles.css";

const SectionContainer = ({ sectionContainer }) => {
  const { section, header } = sectionContainer;
  return (
    <div className="contentContainer">
      <Header headerItem={header} />
      {section.map((section, index) => {
        return <Section key={index} section={section} numSection={index + 1} />;
      })}
    </div>
  );
};

export default SectionContainer;

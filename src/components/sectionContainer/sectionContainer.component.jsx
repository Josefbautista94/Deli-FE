import Header from "../header/header.component";
import Section from "../section/section.component";

const sectionContainer = ({ sectionContainer }) => {
  const { header } = sectionContainer;
  const jsxSection = sectionContainer.map(({ section, header }, index) => {
    return <Section key={index} section={section} numSection={index + 1} />;
  });
  console.log(jsxSection);
  return (
    <div>
      <Header headerItem={header} />
      {jsxSection}
    </div>
  );
};

export default sectionContainer;

import Header from "../header/header.component";
import Section from "../section/section.component";

const sectionContainer = ({ sectionContainer }) => {
  // console.log(section);
  const { section, header } = sectionContainer;
  return (
    <div>
      <Header headerItem={header} />
      {section.map((section, index) => {
        return <Section key={index} section={section} numSection={index + 1} />;
      })}
    </div>
  );
};

export default sectionContainer;

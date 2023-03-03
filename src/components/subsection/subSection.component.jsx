import "./subSection.styles.css";

const subSection = ({ description, name }) => {
  return (
    <div>
      <ul>
        <li className="subSec">{name}</li>

        <div>
          <ul>
            {description ? (
              description.map((item, index) => (
                <li key={index} className="description">
                  {item}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default subSection;

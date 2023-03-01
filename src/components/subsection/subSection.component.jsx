const subSection = ({ description, name }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <p>{description}</p>
      </ul>
    </div>
  );
};

export default subSection;

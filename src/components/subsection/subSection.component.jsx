const subSection = ({ description, name }) => {
  return (
    <div>
      <p>Menu items go here</p>;
      <ul>
        <li>{name}</li>
        <p>{description}</p>
      </ul>
    </div>
  );
};

export default subSection;

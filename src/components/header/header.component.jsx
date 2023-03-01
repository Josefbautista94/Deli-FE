const header = ({ title, subHeader }) => {
  /* {
          title: "HALAL FOOD",
          subHeader: {
            name: "HEALTHY PLATTERS",
          },
        } */
  return (
    <div>
      <h1>{title}</h1>
      {subHeader ? (
        <div>
          <h2>{subHeader.name}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default header;

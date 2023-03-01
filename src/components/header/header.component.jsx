const header = ({ headerItem }) => {
  /* {
          title: "HALAL FOOD",
          subHeader: {
            name: "HEALTHY PLATTERS",
          },
        } */
  console.log(headerItem);
  const { title, subHeader } = headerItem;
  return (
    <div>
      <h1>{title}</h1>
      {subHeader ? (
        <div>
          <h2>
            <b>This is where the subheader goes: </b>
            {subHeader.name}
          </h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default header;

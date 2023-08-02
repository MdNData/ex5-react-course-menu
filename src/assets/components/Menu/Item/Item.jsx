export const Item = ({ item, setSelectedMenu }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        setSelectedMenu(item);
      }}
    >
      {item}
    </button>
  );
};

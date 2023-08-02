import { Item } from "./Item/Item";

export const Menu = ({ menu, setSelectedMenu }) => {
  return (
    <nav className="btn-container">
      {menu == null
        ? ""
        : menu.map((item, key) => {
            return <Item item={item} key={key} setSelectedMenu={setSelectedMenu} />;
          })}
    </nav>
  );
};

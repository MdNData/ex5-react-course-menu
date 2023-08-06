import { useState } from "react";
import menus from "./data";
import { Header } from "./assets/components/Header/Header";
import { useEffect } from "react";
import { Menu } from "./assets/components/Menu/Menu";
import { ItemsContainer } from "./assets/components/ItemsContainer/ItemsContainer";

const App = () => {
  const [data, setData] = useState(menus);
  //all the categories for the menu
  const [menu, setMenu] = useState(null);
  //current menu selected
  const [selectedMenu, setSelectedMenu] = useState("All");

  const searchUniques = () => {
    let categoryArray = [];
    categoryArray.push("All");
    data.forEach((item) => {
      if (categoryArray.length == 1) {
        categoryArray.push(item.category);
      } else if (categoryArray.indexOf(item.category) != -1) {
        return;
      } else {
        categoryArray.push(item.category);
      }
    });
    setMenu(categoryArray);
  };

  useEffect(() => {
    searchUniques();
  }, []);
  return (
    <main className="menu">
      <Header />
      <Menu menu={menu} setMenu={setMenu} setSelectedMenu={setSelectedMenu} />
      <ItemsContainer selectedMenu={selectedMenu} data={data} />
    </main>
  );
};
export default App;

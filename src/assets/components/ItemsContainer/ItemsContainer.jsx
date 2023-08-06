import { Item } from "./Item/Item";

export const ItemsContainer = ({ selectedMenu, data }) => {
  return (
    <section className="section-center">
      {data.map((item, key) => {
        const { id, title, category, price, img, desc } = item;
        return selectedMenu === "All" ? (
          <Item
            key={key}
            id={id}
            title={title}
            price={price}
            img={img}
            desc={desc}
          />
        ) : category == selectedMenu ? (
          <Item
            key={key}
            id={id}
            title={title}
            price={price}
            img={img}
            desc={desc}
          />
        ) : undefined;
      })}
    </section>
  );
};

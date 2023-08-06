export const Item = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="menu-item" id={id}>
      <img src={img} alt={img} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

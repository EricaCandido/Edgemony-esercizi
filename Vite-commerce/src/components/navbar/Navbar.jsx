import "./index.css";

const Navbar = ({ setInputValue, setCartModalVisibility, cartListLength }) => {
  const onHandleChange = (e) => {
    setInputValue(() => e.target.value);
  };

  const onHandleClickCart = () => {
    setCartModalVisibility((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>

      <select
        className="nav__select"
        onChange={onHandleChange}
        name="categories"
        id="categories"
      >
        <option value="">All products</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home-decoration</option>
      </select>
      <div onClick={onHandleClickCart} className="header_cart">
        🛒
        <p className="header_cart-length">{cartListLength}</p>
      </div>
    </div>
  );
};

export default Navbar;

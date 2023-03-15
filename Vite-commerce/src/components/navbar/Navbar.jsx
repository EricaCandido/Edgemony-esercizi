import "./index.css";

const Navbar = ({ setInputValue }) => {
  // const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleChange = (e) => {
    // e.preventDefault();
    setInputValue(() => e.target.value);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      {/* <form onSubmit={onHandleSubmit}> */}

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
      {/* <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        /> */}
      {/* </form> */}
    </div>
  );
};

export default Navbar;

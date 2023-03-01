import "./index.css";

const Header = ({ title, section1, section2, section3, section4 }) => {
  return (
    <div className="header">
      <hr className="color-hr" />
      <li className="my-npm">{title}</li>
      <ul>
        <li>
          <a href="https://www.npmjs.com/pSroducts/pro">{section1}</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/products/teams">{section2}</a>
        </li>

        <li>
          <a href="https://www.npmjs.com/products">{section3}</a>
        </li>
        <li>
          <a href="https://docs.npmjs.com/">{section4}</a>
        </li>
      </ul>
      <hr className="bottom-hr" />
    </div>
  );
};

export default Header;

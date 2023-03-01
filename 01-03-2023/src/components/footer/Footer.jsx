import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="wrapper">
        <div className="support">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="https://docs.npmjs.com/"> Help</a>
            </li>
            <li>
              <a href="https://github.com/advisories"> Advisories</a>
            </li>
            <li>
              <a href="https://status.npmjs.org/"> Status</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/support"> Contact npm</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="https://www.npmjs.com/about"> About</a>
            </li>
            <li>
              <a href="https://github.blog/tag/npm/"> Blog</a>
            </li>
            <li>
              <a href="https://github.com/about/press"> Press</a>
            </li>
          </ul>
        </div>
        <div className="terms-policies">
          <h2>Terms & Policies</h2>
          <ul>
            <li>
              <a href="https://docs.npmjs.com/policies"> Policies</a>
            </li>
            <li>
              <a href="https://docs.npmjs.com/policies/terms"> Terms of use</a>
            </li>
            <li>
              <a href="https://docs.npmjs.com/policies/conduct">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="https://docs.npmjs.com/policies/privacy"> Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="color-hr" />
    </div>
  );
};

export default Footer;

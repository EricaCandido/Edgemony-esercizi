import styles from "./index.module.scss";
import { BsFillMoonStarsFill, BsArrowUp } from "react-icons/bs";

const Header = ({
  setBackground,
  setRose,
  setOrange,
  setGreen,
  setPurple,
  rose,
  orange,
  green,
  purple,
}) => {
  const roseTheme = () => {
    setRose(true);
    setOrange(false);
    setGreen(false);
    setPurple(false);
  };
  const orangeTheme = () => {
    setRose(false);
    setOrange(true);
    setGreen(false);
    setPurple(false);
  };
  const greenTheme = () => {
    setRose(false);
    setOrange(false);
    setGreen(true);
    setPurple(false);
  };
  const purpleTheme = () => {
    setRose(false);
    setOrange(false);
    setGreen(false);
    setPurple(true);
  };

  const onHandleDark = () => {
    setBackground((prev) => !prev);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`${styles.Header} ${rose && "_1"} ${orange && "_2"} ${
        green && "_3"
      } ${purple && "_4"}`}
    >
      <span className={styles.header__font}>Fonts</span>
      <span className={styles.header__darkMode} onClick={onHandleDark}>
        <BsFillMoonStarsFill />
      </span>
      <span onClick={scrollTop} className={styles.header__add}>
        <BsArrowUp />
      </span>
      <div className={styles.colorBtns}>
        <button
          onClick={roseTheme}
          className={`${styles.colorBtn} _1`}
        ></button>
        <button
          onClick={orangeTheme}
          className={`${styles.colorBtn} _2`}
        ></button>
        <button
          onClick={greenTheme}
          className={`${styles.colorBtn} _3`}
        ></button>
        <button
          onClick={purpleTheme}
          className={`${styles.colorBtn} _4`}
        ></button>
      </div>
    </div>
  );
};

export default Header;

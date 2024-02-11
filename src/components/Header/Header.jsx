import "./header.css";
import SwitchIcon from "../../assets/switch_button.svg";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">Where in the world?</h1>
          <button className="header__switch-btn">
            <img src={SwitchIcon} alt="Switch icon" />
            Dark mode
          </button>
        </div>
      </div>
    </header>
  );
};

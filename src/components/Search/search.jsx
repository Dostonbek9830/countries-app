import "./search.css";

export const Search = ({ handleInputValue, handleSelectValue }) => {
  return (
    <div className="container">
      <div className="search__wrapper">
        <form className="form">
          <input
            onChange={handleInputValue}
            className="search__input"
            type="search"
            placeholder="Search for a country..."
          />
        </form>
        <select onChange={handleSelectValue} name="select__country">
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

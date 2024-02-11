import "./search.css";

export const Search = () => {
  return (
    <div className="search__wrapper">
      <form className="form">
        <input
          className="search__input"
          type="search"
          placeholder="Search for a country..."
        />
      </form>
      <select name="select__country">
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

import "./list.css";

export const List = () => {
  return (
    <ul className="country__list">
      <li className="country__card">
        <img className="country__img" src="" alt="Germany flag" />
        <h3 className="country__name">Germany</h3>
        <ul className="country__detail-info-list">
          <li className="country__detail-item">
            <p className="country__population">
              <strong>Population:</strong> 81,770,900
            </p>
          </li>
          <li className="country__detail-item">
            <p className="country__region">
              <strong>Region:</strong> Europe
            </p>
          </li>
          <li className="country__detail-item">
            <p className="country__capital">
              <strong>Capital:</strong> Berlin
            </p>
          </li>
        </ul>
        <a href="#" className="btn__more-info">
          More...
        </a>
      </li>
    </ul>
  );
};

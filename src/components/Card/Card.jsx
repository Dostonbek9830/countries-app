import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ img, alt, country, population, region, capital, cca2 }) => {
  return (
    <>
      <li className="country__card">
        <Link to={"/single/" + cca2}>
          <div>
          <img className="country__img" src={img} alt={alt} />
        <h3 className="country__name">{country}</h3>
        <ul className="country__detail-info-list">
          <li className="country__detail-item">
            <p className="country__population">
              <strong>Population:</strong> {population}
            </p>
          </li>
          <li className="country__detail-item">
            <p className="country__region">
              <strong>Region:</strong> {region}
            </p>
          </li>
          <li className="country__detail-item">
            <p className="country__capital">
              <strong>Capital:</strong> {capital}
            </p>
          </li>
        </ul>
          </div>
        </Link>
      </li>
    </>
  );
};

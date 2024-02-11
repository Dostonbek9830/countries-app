import "./list.css";
import { Card } from "../Card/Card";

export const List = ({ countryData }) => {
  return (
    <>
      <div className="container">
        <ul className="country__list">
          {countryData.map((item) => {
            return (
              <Card
                key={item.name.common}
                alt={item.name.common}
                img={item.flags.png}
                country={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                cca2={item.cca2}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

import { Search } from "../../components/Search/search";
import { List } from "../../components/List/List";
import { useEffect, useState } from "react";

export const MainComp = () => {
  const [countryData, SetCountryDara] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => SetCountryDara(data));
  }, []);

  const handleInputValue = (evt) => {
    const url = evt.target.value.length
      ? "https://restcountries.com/v3.1/name/" + evt.target.value
      : "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetCountryDara(data));
  };

  const handleSelectValue = (evt) => {
     const url = evt.target.value === "all" ? "https://restcountries.com/v3.1/all" : "https://restcountries.com/v3.1/region/" + evt.target.value;

     fetch(url)
      .then((res) => res.json())
      .then((data) => SetCountryDara(data));
  };

  return (
    <>
      <Search handleInputValue={handleInputValue} handleSelectValue={handleSelectValue} />
      <List countryData={countryData} />
    </>
  );
};

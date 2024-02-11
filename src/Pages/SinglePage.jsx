import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const SinglePage = () => {
  const {name} = useParams()

  const navigate = useNavigate()

  const [data, setData] = useState([])
   
 useEffect(() => {
  fetch("https://restcountries.com/v3.1/alpha?codes=" + name)
  .then(res => res.json())
  .then(data => setData(data))
 }, [name])

  return (
    <div className=" container my-10">
      <button onClick={() => navigate(-1)} className="bg-white rounded mx-5 my-3 py-3 px-6 text-black">Back</button>
      <div className="container flex justify-between gap-8">
      <div>
        <img src={data[0]?.flags?.svg} alt={data[0]?.flags?.alt} width={560}  height={401}/>
      </div>
      <div className="flex-grow text-white my-4 items-center">
        <h1 className="text-2xl font-bold mb-4">{data[0]?.name.common}</h1>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p>
              <strong>Native Name: </strong> {data[0]?.name.nativeName[Object.keys(data[0]?.name.nativeName)[0]].common}
            </p>
            <p>
              <strong>Population: </strong> {data[0]?.population}
            </p>
            <p>
              <strong>Region:</strong> {data[0]?.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {data[0]?.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {data[0]?.capital[0]}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {data[0]?.tld[0]}
            </p>
            <p>
              <strong>Currencies:</strong> {data[0]?.currencies[Object.keys(data[0]?.currencies)[0]].name}
            </p>
            <p>
              <strong>Languages: </strong> {data[0] ? [Object.values(data[0]?.languages).join(", ")] : ""}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Border Countries:</h2>
          <div className="flex gap-2 flex-wrap">
            { data[0]?.borders &&
              data[0]?.borders.map(item => <Link to={"/single/" + item}  key={item} className="bg-gray-200 text-sm text-black p-2">{item}</Link>)
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};




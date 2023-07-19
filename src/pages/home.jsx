import { useEffect, useState } from "react";

import axios from "axios";


export default function Home() {
  const [letter, setLetter] = useState("a");
  
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

  useEffect(() => {
    setLoading(true);
    setCocktails([]);
    axios
      .get(baseURL)
      .then((results) => {
        console.log(results);
        if (results.data.drinks) setCocktails(results.data.drinks);
      })
      .catch((error) => alert(error));
    setLoading(false);
  }, [baseURL]);

  const search = (event) => {
    event.preventDefault();
    setLetter(event.target.value);
  };

  return (
    <div className="app w-full rounded-xl ">
    
      <div className="  w-full flex h-8 justify-center  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <input
          placeholder="Buscar por letra  "
          maxLength={1}
          value={letter}
          onChange={search}
        />
      </div>
      <div className=" w-full  bg-slate-500">
        <a href="Sname"> Ir al siguiente contenido</a>
      </div>
      {loading ? (
        <h1>Cargando....</h1>
      ) : (
        <div className="bg-black  grid grid-cols-4 gap-5 p-4">
          {cocktails.map((drink, index) => {
            return <CardDrinck key={index} drink={drink} />;
          })}
        </div>
      )}
    </div>
  );
}

const CardDrinck = ({ drink }) => {
  return (


    
    <div>

      <div className=" p-4 text text-white w-52 h-auto items-center justify-center  rounded-xl ">
        <img
          className="transition ease-in-out delay-150 hover:scale-105 p-2 rounded-xl border shadow-xl shadow-cyan-500/50"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          onClick={CardDrinck.Details}

        />
        <h1 className="p-4  text-text font-serif flex justify-center">
          <p className="underline decoration-solid">{drink.strDrink}</p>
      </h1>
      </div>
    </div>
  );
};




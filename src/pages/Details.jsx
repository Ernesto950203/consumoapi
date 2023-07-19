export  default function Details(){
    //const {detalles} =.data.drinks; //ObjectArray
    //const detallesStringArray = detalles.map( detallesObject => { return detallesObject.detalles.name } );
    const CardDrinck = ({ drink }) => {
    
        return (
          <div>
            <div className=" p-4 text text-white w-52 h-auto items-center justify-center  rounded-xl ">
              <img
                className="transition ease-in-out delay-150 hover:scale-105 p-2 rounded-xl border shadow-xl shadow-cyan-500/50"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
      
              />
              <h1 className="p-4  text-text font-serif flex justify-center">
                <p className="underline decoration-solid">{drink.strDrink}</p>
              </h1>
      
              <div className="p-4 border border-gray-50">
                <ul className="list-decimal  justify-center  ">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (index) => {
                      const ingredient = drink[`strIngredient${index}`];
                      return ingredient && <li key={index}>{ingredient}</li>;
                    }
                  )}
                </ul>
      
                <li className="list-disc">{drink.strInstructionsES}</li>
              </div>
            </div>
          </div>
        );
      };

}
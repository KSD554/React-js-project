const Book = () => {
    return (
      <section className="bg-gray-200 px-4 py-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h1 className="font-bold text-3xl text-center mb-4 text-gray-800">
            Réservation
          </h1>
          <p className="text-lg text-center text-gray-600">
            Entrez votre date de réservation
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="location"
              >
                Votre localisation :
              </label>
              <input
                id="location"
                className="appearance-none block w-full rounded-md border border-gray-300 p-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="text"
                placeholder="Entrez votre localisation"
              />
            </div>
  
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="date"
              >
                Votre date de réservation :
              </label>
              <input
                id="date"
                className="appearance-none block w-full rounded-md border border-gray-300 p-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="date"
              />
            </div>
  
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="price"
              >
                Faites votre choix :
              </label>
              <select
                id="price"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="15000 fcfa">15 000 FCFA</option>
                <option value="20000 fcfa">20 000 FCFA</option>
                <option value="30000 fcfa">30 000 FCFA</option>
              </select>
            </div>
  
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="payment"
              >
                Mode de paiement :
              </label>
              <select
                id="payment"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="mobile_money">Mobile Money</option>
                <option value="cash">Cash</option>
                <option value="carte_bancaire">Carte Bancaire</option>
              </select>
            </div>
  
            <div>
              <button className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-300">
                Réserver
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default Book;
  
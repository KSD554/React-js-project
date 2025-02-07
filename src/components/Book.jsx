

const Book = () => {
  return (
    <section className='bg-gray-300 px-4 py-2 '>
<div className="">
    <h1 className='font-bold text-4xl  text-center mb-4 '>Reservation</h1>
    <p className='text-xl '>Entrer votre date de reservation</p>
    <form className='mt-4 space-y-6 '>
        <div className='' >
            <label  className='block text-sm font-medium  text-gray-700' htmlFor="">Votre localisation: </label>
            <input className='apparence-none block w-full rounded border border-gray-600 ' type="text" />

        </div>
        <div>
            
            <label  className='block text-sm font-medium  text-gray-700' htmlFor="">votre date de reservation</label>
            <input  className='apparence-none block w-full rounded border border-gray-600 ' type="date"/>
        </div>
        <div>
<label  className='block  text-sm font-medium  text-gray-700' htmlFor="">faite votre choix </label>
        <select className='w-full' id="">
        <option value="15000 fcf">15000fcf</option>
        <option value="15000 fcf">20000fcf</option>
        <option value="15000 fcf">30000fcf</option>
            </select>
           
            </div>
            <div>
                <label  className='block text-sm font-medium  text-gray-700' htmlFor="">mode de paiement</label>
                <select className='w-full' name="" id="">
                    <option value="">
                        Mobile money
                    </option>
                    <option value="">
                        Cash
                    </option>
                    <option value="">
                        carte bancaire
                    </option>
                </select>
            </div>

            <div>
                <button className='flex justify-center w-full text-white bg-slate-600 px-4 py-2 rounded-lg  hover:bg-slate-500 '>Reserver</button>
            </div>
        
    </form>
</div>
    </section>
  )
}

export default Book
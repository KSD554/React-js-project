import React from 'react'
const Hero = () => {
  return (
    <section 
    className='bg-[url("../assets/hero-1.jpeg")] bg-cover bg-center h-[600px] flex justify-center items-center'>
      
    <div className="text-center text-white ">
      <h1 className='text-2xl md:text-6xl font-bold'>Welcome sur Horizon Hôtel</h1>
      <p className='text-[12px] md:text-xl'>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Laboriosam, quos. 
        
        </p>
        <p className='text-[12px] md:text-xl'>
        nam a, architecto dolorem pariatur laboriosam reprehenderit explicabo  quia, eveniet tempora est in provident 
        
        </p>

        <button className='mt-4'>
      <a href="#" className='bg-white text-black px-4 py-2 rounded-lg hover:bg-slate-500 hover:text-white'>
        Réserver maintenant
      </a>
    </button>
        </div>
    
    </section>
  )
}

export default Hero
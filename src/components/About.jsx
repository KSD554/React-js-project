import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex-row p-8 md:flex md:justify-between'>
        

        {/* Gauche */}
        <div className="">
           <img className='rounded md:w-[1000px]' src="./hero-2.jpeg" alt="ogo" />
        </div>

        {/* droite */}
        <div className="mt-8 md:ml-8">
            <h1 className='text-3xl font-bold italic '>A propos de Horizon Hôtel</h1>
            <p className='bg-slate-200 px-4 py-2 mt-3 shadow-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est. Aliquid cumque dolorum accusantium, maxime quidem, consequuntur odio sed doloremque
                 reiciendis nemo dicta accusamus voluptatem 
                 tempora minima saepe nobis sit.</p>

                 <button className='bg-slate-200 px-4 py-2 mt-5 rounded-sm hover:bg-slate-600 hover:text-white duration-300'>
                <a href="">En savoir plus</a>
                </button>
        </div>
        
        </section>
  )
}

export default About
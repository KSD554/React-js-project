<section className='flex px-4 items-center gap-12 container mx-auto'>
      <div className='py-10 h-full'>
        {heading1}

        <div className='flex justify-between mt-12'>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Basic Room</p>
            <CountUpNumber duration={5000} endValue={50} />
          </div>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
            <CountUpNumber duration={5000} endValue={120} />
          </div>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Suite</p>
            <CountUpNumber duration={5000} endValue={60} />
          </div>
        </div>
      </div>

      {section2}
    </section>


<h1 className='font-heading mb-6'>Découvrez Notre Hôtel d'Exception</h1>
<p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
  Vivez une expérience unique dans un hôtel imprégné d'histoire et d'une élégance intemporelle.
</p>
<button className='btn-primary'>Commencer</button>

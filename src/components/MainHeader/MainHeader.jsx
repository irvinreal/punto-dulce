const postres = [
  'Postres',
  'Tartas',
  'Pasteles',
  'Galletas',
  'Budines',
  'Pan Salado',
  'Pedidos personalizados'
]

const MainHeader = () => {
  return (
    <main className="bg-[url('../../public/assets/imgs/bg-reposteria.jpg')] w-full h-90vh bg-no-repeat bg-cover relative">
      <div className='h-full bg-gradient-to-t from-white from-5% '>
        <div className='flex justify-center items-center h-full'>
          <div className='md:h-max md:p-0 w-max md:max-w-5xl mt-72 md:mt-20'>
            <div className='text-white text-2xl md:text-7xl italic font-extrabold w-full h-full '>
              {postres.map((postre) => (
                <h5
                  key={postre}
                  className='px-3 inline-flex md:w-auto bg-black bg-opacity-20 m-2 rounded-md border-double border-4 border-white'
                >
                  {postre}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainHeader

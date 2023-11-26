import Image from 'next/image'

const ObjectThree = (props) => {
  return (
        <div className="relative h-72 w-full overflow-hidden">
            <div className="relative px-20 w-full h-full">
                <Image
                    src={props.img}
                    alt={props.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="absolute top-0 z-10 px-16 py-5 text-white bg-gradient-to-t from-black from-0% h-full w-full flex flex-col justify-end">
                <h3 className="text-2xl font-medium"> {props.titulo} </h3>
                <p className="text-sm font-extralight max-w-sm ">
                    {props.descripcion}
                </p>
            </div>
        </div>
  )
}

export default ObjectThree

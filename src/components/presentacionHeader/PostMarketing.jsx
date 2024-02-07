import Image from 'next/image'
import Link from 'next/link'

function PostMarketing ({ img, alt, title, subtitle, link }) {
  return (
    <Link
    className='w-96 flex flex-col items-center justify-center group'
    href={link}
  >
    <div className='h-16 w-20 md:h-20 md:w-28 my-2 relative text-center transition-all duration-200 ease-in-out group-hover:scale-150 group-hover:saturate-200'>
      <Image
        src={img}
        alt={alt}
        fill
        sizes='100'
        style={{ objectFit: 'cover' }}
        className='shadow-md shadow-gray-300 transition-all duration-500 ease-in-out group-hover:shadow-teal-300 rounded group-hover:-translate-y-8'
      />
    </div>
    <h3 className='text-lg md:text-xl text-center font-semibold text-teal-400 transition-all duration-500 ease-in-out group-hover:-translate-y-6'>
      {title.toUpperCase()}
    </h3>
    <p className='w-4/5 text-sm text-center mt-1 text-gray-400 duration-500 ease-in-out group-hover:-translate-y-6'>
      {subtitle.toUpperCase()}
    </p>
  </Link>
  )
}

export default PostMarketing

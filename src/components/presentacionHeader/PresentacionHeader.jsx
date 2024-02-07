import img1 from '@/assets/imgs/postsMarketing/personalizar1.png'
import img2 from '@/assets/imgs/postsMarketing/personalizar2.png'
import cotizar from '@/assets/imgs/postsMarketing/ticket.svg'
import PostMarketing from './PostMarketing'
import ThreeObjects from './ThreeObjects'

const PresentacionHeader = () => {
  return (
    <section className='min-h-full md:h-screen flex flex-col w-full'>
      <ThreeObjects />
      <div className='h-full flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20 my-20 md:mt-28'>
        <PostMarketing
          img={img2}
          alt='INSPIRATE CON MILES DE IDEAS'
          title='Personalización a tu gusto'
          subtitle='Decoración personalizada a tus necesidades'
          link='/menu'
        />
        <PostMarketing
          img={img1}
          alt='Imagen de pastel decorado'
          title='Postres para eventos grandes'
          subtitle='restaurantes, auditorios, cumpleaños, bodas...'
          link='/menu'
        />
        <PostMarketing
          img={cotizar}
          alt='Imagen de cotización'
          title='Cotización para todo presupuesto'
          subtitle='Capacidad de producción para diferentes presupuesto.'
          link='/menu'
        />
      </div>
    </section>
  )
}

export default PresentacionHeader

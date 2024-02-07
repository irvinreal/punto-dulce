import JuanFotoImg from '@/assets/imgs/juan-foto.png'
import Image from 'next/image'

function JuanFoto () {
  return (
    <div className='w-24 h-24'>
      <Image src={JuanFotoImg} alt='foto de Juan A. Talavera Valadez' fill />
    </div>
  )
}

export default JuanFoto

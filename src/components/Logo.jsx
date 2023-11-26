import Image from 'next/image'
import logoPuntoDulce from '../../public/assets/imgs/punto-dulce.svg'

const Logo = (props) => {
  return (
        <Image src={logoPuntoDulce} alt="logotipo punto dulce" />
  )
}

export default Logo

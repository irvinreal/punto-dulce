import Footer from '@/components/Footer'
import MainHeader from '../components/MainHeader/MainHeader'
import PresentacionHeader from '../components/presentacionHeader/PresentacionHeader'
import SectionLinkToMenu from '@/components/SectionLinkToMenu'

// const API_KEY = 'BZqwksOABENq97B3A7pY3jQagekwzcgmvmmicr2NR6d12neB1IsPvRqS'

export default function Home () {
  return (
    <div className='relative w-full min-h-screen'>
        <MainHeader />
      <PresentacionHeader />
      <SectionLinkToMenu />
      <Footer />
    </div>
  )
}

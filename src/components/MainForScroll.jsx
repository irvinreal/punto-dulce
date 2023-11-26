'use client'

const MainForScroll = ({ children }) => {
  const handleScroll = () => {
    console.log('scroll')
  }
    <div onScroll={handleScroll}>{children}</div>
}

export default MainForScroll

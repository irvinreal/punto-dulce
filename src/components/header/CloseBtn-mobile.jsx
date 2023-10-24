function CloseBtnMobile ({ handleBtnMenu, open }) {
  return (
    <div
      className={
        open
          ? 'h-16 flex flex-grow justify-end items-center px-7 z-50 lg:hidden'
          : 'h-16 flex flex-grow justify-end items-center px-7 z-50 lg:hidden'
      }
    >
      <div className='flex justify-center items-center'>
        {/* Open Menu svg Icon */}
        <button
          type='button'
          onClick={handleBtnMenu}
          className={open ? 'hidden' : 'inline-block'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-border-width fill-gray-500 opacity-100'
            viewBox='0 0 16 16'
          >
            <path d='M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z' />
          </svg>
        </button>
        {/* Close Menu svg Icon */}
        <button
          type='button'
          onClick={handleBtnMenu}
          className={open ? 'inline-block' : 'hidden'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-x-lg text-gray-500 fill-gray-500 opacity-100'
            viewBox='0 0 16 16'
          >
            <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CloseBtnMobile

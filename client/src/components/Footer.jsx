import React from 'react'


const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full h-10 text-center'>
        <p className='text-[#ccc] text-base'>Copyright ⓒ {new Date().getFullYear()}</p>
    </footer>
  )
}

export default  Footer;
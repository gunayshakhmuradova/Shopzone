import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft'
import NavbarRight from './navbaritem/NavbarRight'

export const navbar = () => {
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default navbar
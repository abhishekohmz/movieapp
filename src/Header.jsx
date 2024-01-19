import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  import './Header.css'
function Header() {
    const [openNavColor, setOpenNavColor] = useState(false);
  return (
    <>
    <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
            <img id='img1'
              src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3210075/movie-search-icon-md.png'
              height='40'
              alt=''
              loading='lazy'
            /><b id='nav'>Find Movie</b>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          
        </MDBContainer>
      </MDBNavbar>
      
      </>
  )
}

export default Header
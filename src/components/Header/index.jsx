import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()
  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.scrollY <= 150) {
      setChangeBackground(false)
    }
  }
  return (
    <Container changeBackground={changeBackground}>
      <Link to="/">
        <img src={Logo} alt="logo-dev-movies" />
      </Link>

      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header

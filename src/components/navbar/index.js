import { Nav, NavLink, IconWrapper, IconPizza } from "./styles";

export const NavBar = ({ openclose }) => {
  return (
    <>
      <Nav>
        <NavLink href='./ ' >Menú</NavLink>
        <IconWrapper onClick={openclose} >
          <p>Menú</p>
          <IconPizza />
        </IconWrapper>
      </ Nav>
    </>
  )
}

import React, {useState} from 'react'
import { NavBar } from '../navbar'
import SideBar from '../sidebar'
import { HeroWrapper, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './styles'

export const Hero = () => {
  const [status, setStatus] = useState(false);

  const openclose = () =>{
    setStatus(!status);
  }

  return (
    <HeroWrapper>
      <NavBar openclose={openclose} />
      <SideBar status={status} openclose={openclose} />
      <HeroContent>
        <HeroItems>
          <HeroH1>La mejor pizza de la historia</HeroH1>
          <HeroP>Lista en 15 minutos</HeroP>
          <HeroBtn>Ordena Aqui</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroWrapper>
  )
}

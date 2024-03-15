'use client'
import { useState } from 'react'

import {
  ContentHeader,
  WrapperHeader,
  LogoBranding,
  ControlHamburger,
  RowHamburger,
  WrapperLinks,
  DisplayLink,
  ViewLogoBranding,
  InnerBlockLinks
} from './styles'

import Brand from 'assets/img/Brand.png'

export default function Menu() {
  //CONFIGURAÇÂO SIDEBAR
  const [isActive, setIsActive] = useState(false)

  const toggleHamburger = () => {
    setIsActive(!isActive)
  }

  //REDIRECIONAMENTO DE PAGINA
  // const [urlDeRedirecionamento, setUrlDeRedirecionamento] = useState('')

  // const handleClick = () => {
  //   setUrlDeRedirecionamento('https://wa.me/message/YYUXQPZORC3ZO1')
  // }

  // useEffect(() => {
  //   if (urlDeRedirecionamento) {
  //     window.location.href = urlDeRedirecionamento
  //   }
  // }, [urlDeRedirecionamento])

  return (
    <WrapperHeader>
      <ContentHeader>
        <ViewLogoBranding>
          <LogoBranding src={Brand} alt='SaúdePsi Logo' priority={true} />
        </ViewLogoBranding>
        <ControlHamburger onClick={toggleHamburger}>
          <RowHamburger active={isActive} />
          <RowHamburger active={isActive} />
          <RowHamburger active={isActive} />
        </ControlHamburger>
        <WrapperLinks active={isActive}>
          <InnerBlockLinks>
            <DisplayLink href='#'>Home</DisplayLink>
            <DisplayLink href='#'>equipa</DisplayLink>
            <DisplayLink href='#'>consultas</DisplayLink>
            <DisplayLink href='#'>intervenções</DisplayLink>
            <DisplayLink href='#'>contactos</DisplayLink>
          </InnerBlockLinks>
        </WrapperLinks>
      </ContentHeader>
    </WrapperHeader>
  )
}

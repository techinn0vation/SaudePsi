import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { MenuTypes } from './MenuTypes'

export const WrapperHeader = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: auto;
  z-index: 2;
  padding: 1.6rem 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      max-width: 55rem;
      margin: 0;

      position: absolute;
      top: 0;
      left: 0;

      background-color: ${(props) => props.theme.colors.Verde};
      z-index: -1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 1.6rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    padding: 1.6rem 6rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    padding: 1.6rem 10rem;

    &::before {
      max-width: 110rem;
    }
  }
`
export const ContentHeader = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
export const ViewLogoBranding = styled.div`
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: auto;
  }
`

export const LogoBranding = styled(Image)`
  width: 100%;
  max-width: 16.6rem;
  margin: 0 auto;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
export const ControlHamburger = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.6rem;

  padding: 2rem;
  z-index: 9;
  cursor: pointer;

  position: relative;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.Verde};
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    display: none;
  }
`
export const RowHamburger = styled.div<MenuTypes>`
  width: 2.3rem;
  height: 0.2rem;
  background: ${(props) => props.theme.colors.Branco};
  position: relative;
  transform: ${(props) => (props.active ? 'rotate(45deg)' : 'none')};
  border-radius: 0.2rem;
  transition: transform 0.3s ease;
  -webkit-transition: -webkit-transform 0.3s ease;
  z-index: 6;

  &:nth-child(-n + 2) {
    display: ${(props) => (props.active ? 'none' : 'block')};
  }

  &:before,
  &:after {
    content: '';
    width: 2.3rem;
    height: 0.2rem;
    background: ${(props) => props.theme.colors.Branco};
    position: absolute;
  }
  &:before {
    transform: ${(props) => (props.active ? 'rotate(-90deg)' : 'none')};
    transition: transform 0.3s ease;
    -webkit-transition: -webkit-transform 0.3s ease;
  }
  &:after {
    transform: ${(props) => (props.active ? 'rotate(90deg)' : 'none')};
    transition: transform 0.3s ease;
    -webkit-transition: -webkit-transform 0.3s ease;
  }
`
export const WrapperLinks = styled.div<MenuTypes>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: end;

  position: fixed;
  left: ${({ active }) => (active ? '0' : '100%')};
  top: 0;
  transition: left 0.2s ease-in;
  -webkit-transition: left 0.2s ease-in-out;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.colors.Sombra};
      position: absolute;
      z-index: -1;
      opacity: 0.8;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: static;

    &::before {
      display: none;
    }
  }
`
export const InnerBlockLinks = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  padding: 2rem;

  background-color: ${(props) => props.theme.colors.Verde};

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 45%;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: auto;

    flex-direction: row;
    -ms-flex-direction: row;
    background-color: transparent;
  }
`

export const DisplayLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 600;
  font-style: normal;
  line-height: 2.1rem;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.Branco};

  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.3rem);
  }
`

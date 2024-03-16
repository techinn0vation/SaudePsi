import Image from 'next/image'

import styled from 'styled-components'

export const WrapperConstPsicologia = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: relative;

    &::before {
      content: '';
      width: 2rem;
      height: 23rem;

      position: absolute;
      top: 75%;
      left: 0;
      z-index: -1;

      background-color: ${(props) => props.theme.colors.Verde};
    }
  }
`
export const ContentConstPsicologia = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10rem;

  padding: 6rem 1.4rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 73rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 87.5rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    width: 99rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    width: 110rem;
  }
`
export const ViewConstPsicologia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 2.3rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.45rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.1rem;
      color: ${(props) => props.theme.colors.CinzaEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    align-items: center;

    & > div {
      width: 65rem;

      h1,
      p {
        text-align: center;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    align-items: center;

    & > div {
      width: 80rem;

      h1,
      p {
        text-align: center;
      }
    }
  }
`
export const WrapperConstPsicologiaCards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    place-items: start;
    align-items: start;
  }
`
export const InnerCardConstPsicologia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
    align-items: center;

    &:nth-child(even) {
      flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
    }
  }
`
export const BodyCardConstPsicologia = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

  & > div {
    width: auto;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.1rem;
      color: ${(props) => props.theme.colors.CinzaEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  button {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;
    cursor: pointer;

    &::first-letter {
      text-transform: capitalize;
    }
    padding: 0.875rem 2rem;
    border-radius: 0.375rem;
    background: ${(props) => props.theme.colors.Verde};

    &::first-letter {
      text-transform: capitalize;
    }

    transition: ease-in 0.03s;
    -webkit-transition: ease-in 0.03s;

    &:active {
      transform: translateY(0.2rem);
      -webkit-transform: translateY(0.2rem);
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    align-items: start;
    & > div {
      justify-content: start;
      align-items: start;

      h1,
      p {
        text-align: left;
      }
    }
  }
`
export const HeaderCardConstPsicologia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 0;
  }
`
export const BGCardConstPsicologia = styled(Image)`
  width: 100%;
  height: auto;
  box-shadow: 1rem 1rem 0 0 ${(props) => props.theme.colors.Verde};

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`

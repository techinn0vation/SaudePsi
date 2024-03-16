import Image from 'next/image'

import styled from 'styled-components'

export const WrapperAreaIntervencao = styled.section`
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
      height: 19rem;

      position: absolute;
      top: 85%;
      right: 0;
      z-index: -1;

      background-color: ${(props) => props.theme.colors.Verde};
    }
  }
`
export const ContentAreaIntervencao = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 6rem;

  padding: 6rem 1.4rem;

  button {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;
    cursor: pointer;
    margin-top: 5rem;

    &::first-letter {
      text-transform: capitalize;
    }
    padding: 0.875rem 2rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme.colors.Verde};

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
    width: 73rem;
    gap: 15rem;
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
export const ViewAreaIntervencao = styled.div`
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

export const WrapperConstPsicoterapiaCards = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    align-items: center;
    place-items: center;

    & > div {
      &:nth-child(2) {
        margin-top: -15rem;
      }
      &:nth-child(4) {
        margin-top: -15rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div {
      max-width: 36rem;
      height: 46rem;
    }
  }
`
export const InnerCardPsicoterapia = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  height: 45.5rem;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Verde};
  border-radius: 2rem 0 2rem 0;
`
export const FrameCardPsicoterapia = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  background-color: ${(props) => props.theme.colors.VerdeEscuro};
  padding: 2rem;
  border-radius: 100%;
`
export const HeaderCardPsicoterapia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const InnerFrameCardPsicoterapia = styled(Image)`
  width: 5rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`

export const BodyCardPsicoterapia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 1.4rem 3rem 1.4rem;

  & > div {
    width: auto;

    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.Branco};
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
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`

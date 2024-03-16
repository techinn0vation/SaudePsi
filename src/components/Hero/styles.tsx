import styled from 'styled-components'

import BGHero from 'assets/img/BGHero.webp'

export const WrapperHero = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: url(${BGHero.src}) no-repeat center fixed;
    background-size: cover;
    z-index: -1;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: ${(props) => props.theme.colors.Sombra};
    opacity: 0.5;
    z-index: -1;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &::before {
      top: -5rem;
      left: 5rem;
    }

    &::after {
      width: 40rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    &::after {
      width: 45rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    &::after {
      width: 75rem;
    }
  }
`
export const ContentHero = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15rem 1.4rem;

  @media (max-width: ${(props) => props.theme.screenSize.XS}) {
    padding: 15rem 1.4rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    align-items: start;
    padding: 15rem 6rem;

    &::after {
      content: '';
      width: 30rem;
      height: 23rem;

      position: absolute;
      top: 80%;
      right: 0;
      z-index: -1;

      background-color: ${(props) => props.theme.colors.Verde};
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    padding: 18rem 10rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    padding: 18rem 15rem;
  }
`
export const ViewHero = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1 {
      font-size: 2.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 4.2rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::after {
        content: 'psicologia & psicoterapia';
        color: ${(props) => props.theme.colors.Verde};
      }

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  button {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;

    &::first-letter {
      text-transform: capitalize;
    }

    padding: 0.875rem 2rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme.colors.Verde};
    cursor: pointer;

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

  &::before,
  &::after {
    content: '';
    width: 0.2rem;
    height: 10rem;

    display: block;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.Branco};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 50rem;
    align-items: start;

    &::before,
    &::after {
      margin: 0;
    }

    & > div {
      justify-content: start;
      align-items: start;

      h1,
      p {
        text-align: left;
      }

      h1 {
        font-size: 3.8rem;
        line-height: 5.7rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 65rem;

    & > div {
      h1 {
        font-size: 4.8rem;
        line-height: 7.2rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    width: 85rem;

    & > div {
      h1 {
        font-size: 5.8rem;
        line-height: 8.7rem;
      }
    }
  }
`

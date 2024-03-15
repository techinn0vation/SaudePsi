import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: auto;
  background: #1d373f;
  overflow-x: hidden;
`

export const FactsContainer = styled.div`
  padding: 0em 2em;
  text-align: center;
  /* line-height: 10vh; */
`

export const FactsContainerSm = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 300px;
  background-color: red;
`

export const Fact = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  flex: 1;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
  color: #f0c368;

  img {
    width: 25vw;
    height: 25vh;
    margin: 1em;
  }
`

export const SocialContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

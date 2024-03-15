'use client'


import { Wrapper, FactsContainer, FactsContainerSm, Fact } from './styles'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FactsComponent = () => {
  useEffect(() => {
    const scroll_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.factsContainer',
        start: 'top satrt',
        scrub: false,
        end: '+=100'
      }
    })

    const facts = document.querySelectorAll('.fact')

    scroll_tl.to('.factsContainer h2', {
      scale: 1.5,
      duration: 1,
      ease: 'slow'
    })

    scroll_tl.to(facts, {
      xPercent: -50 * (facts.length - 1),
      scrollTrigger: {
        trigger: '.factsContainerSm',
        start: 'center center',
        pin: true,
        scrub: 1,
        snap: 1 / (facts.length - 1),
        end: () => `+=1320`
      }
    })
  }, [])

  return (
    <Wrapper>
      <FactsContainer>
        <h2>Few Facts about me</h2>
        <FactsContainerSm className='factsContainerSm'>
          <Fact className='fact'>
            <h3>3 words to describe me: </h3>
            <img src='https://source.unsplash.com/random' alt='' />
            <h3>Creative , Adventurous , Hardworking</h3>
          </Fact>
          <Fact className='fact'>
            <h3>3 words to describe me: </h3>
            <img src='https://source.unsplash.com/random' alt='' />
            <h3>Creative , Adventurous , Hardworking</h3>
          </Fact>
          <Fact className='fact'>
            <h3>3 words to describe me: </h3>
            <img src='https://source.unsplash.com/random' alt='' />
            <h3>Creative , Adventurous , Hardworking</h3>
          </Fact>
          <Fact className='fact'>
            <h3>3 words to describe me: </h3>
            <img src='https://source.unsplash.com/random' alt='' />
            <h3>Creative , Adventurous , Hardworking</h3>
          </Fact>
          <Fact className='fact'>
            <h3>3 words to describe me: </h3>
            <img src='https://source.unsplash.com/random' alt='' />
            <h3>Creative , Adventurous , Hardworking</h3>
          </Fact>
          {/* ... other facts */}
        </FactsContainerSm>
      </FactsContainer>
    </Wrapper>
  )
}

export default FactsComponent

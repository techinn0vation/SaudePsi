'use client'

import Button from '../Ui/Button'
import Headline from '../Ui/Headline'
import { ContentHero, ViewHero, WrapperHero } from './styles'

interface PropsHero {
  title: string
  text: string
}

export default function Hero({ title, text }: PropsHero) {
  return (
    <WrapperHero>
      <ContentHero>
        <ViewHero>
          <Headline title={title} text={text} />
          <Button text='marcar consulta' onClick={() => {}} />
        </ViewHero>
      </ContentHero>
    </WrapperHero>
  )
}

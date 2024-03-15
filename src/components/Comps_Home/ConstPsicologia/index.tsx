'use client'

// import { useRef, useEffect } from 'react'

import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

import {
  BGCardConstPsicologia,
  BodyCardConstPsicologia,
  ContentConstPsicologia,
  HeaderCardConstPsicologia,
  InnerCardConstPsicologia,
  ViewConstPsicologia,
  WrapperConstPsicologia,
  WrapperConstPsicologiaCards
} from './styles'

import BGV2 from 'assets/img/Adolecente.webp'
import BGV3 from 'assets/img/Adulto.webp'
import BGV4 from 'assets/img/Idoso.webp'
import BGV1 from 'assets/img/Infatil.webp'

export default function ConstPsicologia() {
  return (
    <WrapperConstPsicologia>
      <ContentConstPsicologia>
        <ViewConstPsicologia>
          <Headline
            title='consultas de psicologia'
            text='A consulta de psicologia e psicoterapia é um espaço confidencial, contentor, de escuta, reflexão e partilha, onde através da relação terapeuta/paciente se convida a pensar aprofundando o sentir e a forma de refletir e agir sobre a sua vida para experimentar novas formas de ser e de estar promovendo um processo de desenvolvimento e crescimento pessoal consigo e com os outros.
            “O nosso cérebro é um músculo. Quando pensamos bem, sentimo-nos bem.” 
            Carl Sagan. Marque a sua consulta de Psicologia e Psicoterapia e conte com uma equipa de profissionais dedicados.'
          />
        </ViewConstPsicologia>
        {/*  */}
        <WrapperConstPsicologiaCards>
          {/*  */}
          <InnerCardConstPsicologia className='innerCard'>
            <HeaderCardConstPsicologia>
              <BGCardConstPsicologia
                src={BGV1}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardConstPsicologia>
            <BodyCardConstPsicologia>
              <Headline
                title='psicologia infatil'
                text='Nem sempre é fácil perceber o que vai na cabeça das crianças. É importante prestar atenção aos seus comportamentos para que qualquer problema seja detetado cedo.
              As consultas de psicologia infantil são uma mais valia nesta fase de crescimento e aprendizagem.
              É muito importante estabelecer bases de crescimento sólidas para que as crianças se desenvolvam de forma saudável.'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardConstPsicologia>
          </InnerCardConstPsicologia>
          {/*  */}
          {/*  */}
          <InnerCardConstPsicologia className='innerCard'>
            <HeaderCardConstPsicologia>
              <BGCardConstPsicologia
                src={BGV2}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardConstPsicologia>
            <BodyCardConstPsicologia>
              <Headline
                title='psicologia do adolecente'
                text='A adolescência é sempre tida como uma das fases mais difíceis. Os adolescentes podem demonstrar alguma dificuldade em desabafar, com receio de julgamentos ou de não serem compreendidos.
                É uma fase propícia a muitos sintomas de ansiedade e/ou depressão.
                As consultas de psicologia ajudam os adolescentes a lidar melhor com as transformações físicas e psicológicas.'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardConstPsicologia>
          </InnerCardConstPsicologia>
          {/*  */}
          {/*  */}
          <InnerCardConstPsicologia className='innerCard'>
            <HeaderCardConstPsicologia>
              <BGCardConstPsicologia
                src={BGV3}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardConstPsicologia>
            <BodyCardConstPsicologia>
              <Headline
                title='psicologia do adulto'
                text='À medida que o mundo se transforma, também se transformam as nossas ideias, comportamentos e objetivos.
                Por vezes, pode ser difícil lidar com a pressão no trabalho, crises familiares ou com sentimentos de insegurança e impotência perante situações complicadas.
                O primeiro passo é procurar ajuda e marcar uma consulta de psicologia, para expor o que sente, a partir daí encontrar soluções para melhorar a sua qualidade de vida e torná-la mais produtiva e mais feliz.'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardConstPsicologia>
          </InnerCardConstPsicologia>
          {/*  */}
          {/*  */}
          <InnerCardConstPsicologia className='innerCard'>
            <HeaderCardConstPsicologia>
              <BGCardConstPsicologia
                src={BGV4}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardConstPsicologia>
            <BodyCardConstPsicologia>
              <Headline
                title='psicologia do idoso'
                text='O processo de envelhecimento implica saber lidar com muitas transformações e perdas.
                Não é fácil lidar com as mudanças físicas e psicológicas que vão acontecendo, podendo manifestar-se em estados depressivos e de ansiedade.
                A consulta de Psicologia do Idoso irá ajudá-lo aceitar as mudanças, a tomar consciência doque poderá fazer e a vida ainda tem muito para lhe oferecer.'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardConstPsicologia>
          </InnerCardConstPsicologia>
          {/*  */}
        </WrapperConstPsicologiaCards>
      </ContentConstPsicologia>
    </WrapperConstPsicologia>
  )
}

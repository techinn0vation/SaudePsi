'use client'

import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

import {
  BGCardAreaIntervencao,
  BodyCardAreaIntervencao,
  ContentAreaIntervencao,
  HeaderCardAreaIntervencao,
  InnerCardAreaIntervencao,
  ViewAreaIntervencao,
  WrapperAreaIntervencao,
  WrapperAreaIntervencaoCards
} from './styles'

import BGV3 from 'assets/img/Ansiedade.webp'
import BGV2 from 'assets/img/DepInfatil.webp'
import BGV1 from 'assets/img/Depressão.webp'

export default function AreaDeIntervenção() {
  return (
    <WrapperAreaIntervencao>
      <ContentAreaIntervencao>
        <ViewAreaIntervencao>
          <Headline
            title='área de intervenção'
            text='a consulta de Psicologia e Psicoterapia é decisiva para resolver ansiedade, depressão, ataques de pânico e outras angústias.'
          />
        </ViewAreaIntervencao>
        {/*  */}
        <WrapperAreaIntervencaoCards>
          {/*  */}
          <InnerCardAreaIntervencao className='innerCard'>
            <HeaderCardAreaIntervencao>
              <BGCardAreaIntervencao
                src={BGV1}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardAreaIntervencao>
            <BodyCardAreaIntervencao>
              <Headline
                title='depressão'
                text='sente uma sensação persistente de “vazio”? Sente mais cansaço e irritabilidade? 
                Não consegue dormir ou então dorme em demasia? Sente uma tristeza ou angústia que não consiga explicar? 
                Falta de interesse por actividades que antes lhe davam prazer? Pensamentos negativos ou dificuldades a nível sexual? 
                Alguns destes sintomas poderão indicar que sofre de depressão. 
                O tratamento é iniciado por si ao marcar uma consulta de Psicologia.'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardAreaIntervencao>
          </InnerCardAreaIntervencao>
          {/*  */}
          {/*  */}
          <InnerCardAreaIntervencao className='innerCard'>
            <HeaderCardAreaIntervencao>
              <BGCardAreaIntervencao
                src={BGV2}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardAreaIntervencao>
            <BodyCardAreaIntervencao>
              <Headline
                title='depressão infantil'
                text='às vezes nem tudo se resume a fazer birra. Alguns comportamentos (embora aparentemente expectáveis em crianças) poderão indicar outros problemas. Infelizmente, a depressão infantil é uma realidade e poderá ser difícil identificá-la.
                É fundamental obter um diagnóstico, o quanto antes, para dar início ao tratamento.
                Procure por um dos nossos profissionais e marque uma consulta de Psicologia Infantil'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardAreaIntervencao>
          </InnerCardAreaIntervencao>
          {/*  */}
          {/*  */}
          <InnerCardAreaIntervencao className='innerCard'>
            <HeaderCardAreaIntervencao>
              <BGCardAreaIntervencao
                src={BGV3}
                alt='SaúdePsi Consultas de psicologia'
                priority={true}
              />
            </HeaderCardAreaIntervencao>
            <BodyCardAreaIntervencao>
              <Headline
                title='psicologia do adulto'
                text='sente ansiedade relativamente a coisas simples como ir para o trabalho ou para escola? Sintomas fisicos com aperto no peito que não consegue explicar? 
                Palpitações ou agitação interna? Sensação de falta de ar? Dores de cabeça ou tonturas constantes que parecem impedir o seu dia de correr dentro da normalidade? 
                Alguns destes sintomas mais intensos poderão levar a uma sensação de morte originando uma crise de pânico.
                Começe o tratamento ao marcar a sua consulta de Psicologia.'
              />

              <Button text='ver mais' onClick={() => {}} />
            </BodyCardAreaIntervencao>
          </InnerCardAreaIntervencao>
          {/*  */}
        </WrapperAreaIntervencaoCards>
      </ContentAreaIntervencao>
    </WrapperAreaIntervencao>
  )
}

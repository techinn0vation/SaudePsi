'use client'

import Headline from 'components/Ui/Headline'

import {
  InnerFrameCardPsicoterapia,
  BodyCardPsicoterapia,
  ContentAreaIntervencao,
  FrameCardPsicoterapia,
  HeaderCardPsicoterapia,
  InnerCardPsicoterapia,
  ViewAreaIntervencao,
  WrapperAreaIntervencao,
  WrapperConstPsicoterapiaCards
} from './styles'

import BGV3 from 'assets/img/Adult.webp'
import BGV4 from 'assets/img/Couple.webp'
import BGV1 from 'assets/img/Ludo.webp'
import BGV2 from 'assets/img/Young.webp'

export default function ConstPsicoterapia() {
  return (
    <WrapperAreaIntervencao>
      <ContentAreaIntervencao>
        <ViewAreaIntervencao>
          <Headline
            title='consultas de psicoterapia'
            text='para além das consultas de Psicologia benefecie também das consultas de Psicoterapia. As consultas de Psicoterapia vão ajudá-lo (a) a promover o autoconhecimento de forma a reconhecer e aceitar que alguns padrões mentais se foram cristalizando ao longo da vida.
            Padrões estes que precisam de ser “desprogramados” através de técnicas específicas e eficazes para que novas ligações mentais possam ser criadas com o objectivo de um maior equilíbrio emocional e cognitivo.'
          />
        </ViewAreaIntervencao>
        {/*  */}
        <WrapperConstPsicoterapiaCards>
          {/*  */}
          <InnerCardPsicoterapia>
            <HeaderCardPsicoterapia>
              <FrameCardPsicoterapia>
                <InnerFrameCardPsicoterapia
                  src={BGV1}
                  alt='SaúdePsi Consultas de psicologia'
                  priority={true}
                />
              </FrameCardPsicoterapia>
            </HeaderCardPsicoterapia>
            {/*  */}
            <BodyCardPsicoterapia>
              <Headline
                title='ludoterapia'
                text='estas consultas de Psicoterapia destinam-se a crianças para que consigam exteriorizar os seus sentimentos e preocupações através do brincar.
                  Desta forma, serão capazes de reorganizar o seu aparelho psíquico promovendo um crescimento saudável e harmonioso.'
              />
            </BodyCardPsicoterapia>
          </InnerCardPsicoterapia>
          {/*  */}
          <InnerCardPsicoterapia>
            <HeaderCardPsicoterapia>
              <FrameCardPsicoterapia>
                <InnerFrameCardPsicoterapia
                  src={BGV2}
                  alt='SaúdePsi Consultas de psicologia'
                  priority={true}
                />
              </FrameCardPsicoterapia>
            </HeaderCardPsicoterapia>
            {/*  */}
            <BodyCardPsicoterapia>
              <Headline
                title='psicoterapia do adolecente'
                text='na adolescencia surgem inúmeras questões, dúvidas e transformações, com as quais os adolescentes poderão ter dificuldade em lidar.
                Na consulta de psicologia e psicoterapia o adolescente é convidado a “pensar-se” de forma a promover uma melhor relação consigo mesmo e com o mundo.'
              />
            </BodyCardPsicoterapia>
          </InnerCardPsicoterapia>
          {/*  */}
          <InnerCardPsicoterapia>
            <HeaderCardPsicoterapia>
              <FrameCardPsicoterapia>
                <InnerFrameCardPsicoterapia
                  src={BGV3}
                  alt='SaúdePsi Consultas de psicologia'
                  priority={true}
                />
              </FrameCardPsicoterapia>
            </HeaderCardPsicoterapia>
            {/*  */}
            <BodyCardPsicoterapia>
              <Headline
                title='psicoterapia do adulto'
                text='são muitos os desafios e as responsabilidades na vida adulta, podendo levar a altos níveis de ansiedade, tendo como consequência o mal estar fisíco e psicológico.
                Remeter para mais tarde o que pode ser resolvido no “Agora” é procurar prevenir e não adiar o bem mais precisoso da sua vida, a Saúde.'
              />
            </BodyCardPsicoterapia>
          </InnerCardPsicoterapia>
          {/*  */}
          <InnerCardPsicoterapia>
            <HeaderCardPsicoterapia>
              <FrameCardPsicoterapia>
                <InnerFrameCardPsicoterapia
                  src={BGV4}
                  alt='SaúdePsi Consultas de psicologia'
                  priority={true}
                />
              </FrameCardPsicoterapia>
            </HeaderCardPsicoterapia>
            {/*  */}
            <BodyCardPsicoterapia>
              <Headline
                title='psicoterapia de casal'
                text='nem sempre o amor resolve todos os problemas. Procurar ajuda não tem de ser motivo de embaraço.
                Se a relação afetiva do casal está com dificuldades, ambos poderão procurar uma consulta de Psicologia e Psicoterapia para obterem ajuda na compreensão das questões que possam estar a interferir no relacionamento.'
              />
            </BodyCardPsicoterapia>
          </InnerCardPsicoterapia>
          {/*  */}
        </WrapperConstPsicoterapiaCards>
      </ContentAreaIntervencao>
    </WrapperAreaIntervencao>
  )
}

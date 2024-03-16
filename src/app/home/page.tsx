import {
  AreaDeIntervenção,
  ConstPsicologia,
  ConstPsicoterapia,
  Hero
} from 'components/GeralComponents'

export default function Home() {
  return (
    <>
      <Hero
        title='consultas de '
        text='um espaço disponível, de conhecimento, compreensão e confidencialidade. '
      />
      <ConstPsicologia />
      <AreaDeIntervenção />
      <ConstPsicoterapia />
    </>
  )
}

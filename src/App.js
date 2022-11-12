import React, { useState } from 'react'
import { Container, Button, Image, H1, P } from './styles'



function App() {

  let images = {
    lampOn: 'https://media.discordapp.net/attachments/971165654352793643/998612731269759186/lampOn.gif',
    lampOff: 'https://media.discordapp.net/attachments/971165654352793643/998612760504045618/lampOff.gif'
  }

  const turnOn = () => {
    setImagem(state => 'lampOn')
  }

  const turnOff = () => {
    setImagem(state => 'lampOff')
  }

  const [imagem, setImagem] = useState('lampOff')


  return (
<>
    <H1>HISTÓRIA DA LÂMPADA</H1>
    <P>Em 1879, Thomas Edison criou a lâmpada incandescente, seu primeiro invento comercialmente viável. Para fazê-la funcionar, desenvolveu um sistema de distribuição elétrico para luz e força, inclusive geradores, motores, soquetes de luz, caixas de junção, fusíveis de segurança, condutores subterrâneos e outros dispositivos.</P>

    <Container>
      <Button id='on' onClick={turnOn}> ON </Button>
      <Image id='lamp' alt='lamp-off' src={images[imagem]} />
      <Button id='off' onClick={turnOff}> OFF </Button>
    </Container>

    <P>Ele foi um gênio na aplicação prática de princípios científicos e um dos maiores e mais prolíficos inventores de seu tempo. Sua educação formal estava reduzida a três meses de escolaridade em Port Huron, no Michigan (EUA), em 1854. Durante anos, trabalhou como jornaleiro e foi nesse período que passou a sofrer da surdez que só aumentou com o correr dos anos. Mais tarde, trabalhou como telegrafista em várias cidades.</P>

    </>
  )

}

export default App;
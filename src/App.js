import React, { useState } from 'react'
import { Container, Button, Image } from './styles'



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

    
    <Container>
      <Button id='on' onClick={turnOn}> ON </Button>
      <Image id='lamp' alt='lamp-off' src={images[imagem]} />
      <Button id='off' onClick={turnOff}> OFF </Button>
    </Container>
    
  )

}

export default App;
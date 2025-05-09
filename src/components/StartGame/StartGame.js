import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

function StartGame(props) {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE-GAME</h1>
        <Button onClick={props.toggle} >Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width : 1180px;
    height : 100vh;
    display : flex;
    margin : 0 auto;
    align-items : center;

    .content{
        display : flex;
        flex-direction : column;
        align-items : end;
        h1{
            font-size : 96px;
            white-space : nowrap;
        }
    }
`;


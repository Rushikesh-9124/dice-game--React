import styled from 'styled-components'

function RoleDice({currentDice, rollDice}) {
    
  return (
    <DiceContainer>
      <div className='Dice'>
      <img src={`./images/dice_${currentDice}.png`} alt="dice 1"  onClick={rollDice}/>

      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div `
    margin-top : 48px;
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;

    p{
        font-size : 24px;
    }
    .Dice{
        cursor : pointer;
    }
`
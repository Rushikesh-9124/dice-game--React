import styled from 'styled-components'

function NumberSelector(props) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (value) => {
    props.setState(value);
    props.setError("");
  }
  
  return (
    <Container>
    <p className='error'>{props.error}</p>
      <div className="flex">
        {
          arrNumber.map((value, i) => {
            return <Box
            isSelected = {value == props.state}
            key={i} onClick={() => NumberSelectorHandler(value)}>{value}</Box>
          })
        }
      </div>
      <p>Select Number</p>
     
    </Container>
  )
}

export default NumberSelector

const Container = styled.div`
  .error{
    color : red;
  }

  display : flex;
  flex-direction : column;
  align-items : end;
  gap : 10px;
  
  .flex{
    display : flex;
    gap : 24px;
    
  }
  p{
    font-size : 18px;
    font-weight : 400;
  }
`

const Box = styled.div `
    height : 72px;
    width : 72px;
    border : 1px solid black;

    display : grid;
    place-content : center;
    font-weight : 700;
    font-size : 24px;
    background-color : ${(props)=> (props.isSelected ? "black" : "white")};
    color : ${(props)=> (props.isSelected ? "white" : "black")};
    cursor : pointer;

`
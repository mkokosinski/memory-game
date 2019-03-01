// import React from 'react'
import React from 'react'
import styled from 'styled-components'



const SquareSize = styled.div`
  width:100%;
  height:100%;
`

const Container = styled(SquareSize)`
  align-items: center;
  display: flex;
  justify-content: center;
  perspective: 1000px;
`

const Card = styled(SquareSize)`
  align-items:center;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  left:0;
  position:absolute;
  top:0;
  user-select:none;

`

const Front = styled(Card)`
  background:turquoise;
  transform: rotateY(180deg);
`

const Back = styled(Card)`
  background-color:${props => props.matched ? 'lightsalmon' : 'lightblue'} ;
  transition: background-color 0.3s ease 0.3s;
  transform: ${props => props.turned ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`
const Flipper = styled(SquareSize)`
	transition: transform 0.6s;
	transform-style: preserve-3d;
  position: relative;
  transform: ${props => props.turned ? 'rotateY(0deg)' : 'rotateY(180deg)'};
`

const Square = ({ onTurn, turned, matched, content }) => {
  return (
    <Container onClick={!turned && !matched ? onTurn : () => { }}>
      <Flipper turned={turned}>
        <Front>

        </Front>
        <Back matched={matched}>
          {turned && content}
        </Back>
      </Flipper>
    </Container>
  )
}

export default Square
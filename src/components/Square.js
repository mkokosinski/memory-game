// import React from 'react'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  perspective: 1000px;
  height: 100px;
  width: 100px;
`

const Card = styled.div`
  align-items:center;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  height: 100px;
  left:0;
  position:absolute;
  top:0;
  width: 100px;
`

const Front = styled(Card)`
  background:turquoise;
  transform: rotateY(180deg);
`

const Back = styled(Card)`
  background-color:${props => props.matched ? 'lightsalmon' : 'lightblue' } ;
  transition:background-color 0.3s ease 0.3s;
`
const Flipper = styled.div`
	transition: 0.6s;
	transform-style: preserve-3d;
  position: relative;
  height: 100px;
  width: 100px;
  transform: ${props => props.turned ? 'rotateY(0deg)' : 'rotateY(180deg)'};
`

const Square = ({onTurn, turned, matched,content}) => {
    return (
    <Container onClick={!turned && !matched ? onTurn : () =>alert(`Don't cheating`)}>
      <Flipper turned={turned}>
        <Front>
          
        </Front>
        <Back matched={matched}>
          {content}
        </Back>
      </Flipper>
    </Container>
    )  
}

export default Square
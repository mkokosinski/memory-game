// import React from 'react'
import React from 'react'
import styled from 'styled-components'

const TileSize = styled.div`
  width:100%;
  height:100%;
`
const Container = styled(TileSize)`
  align-items: center;
  display: flex;
  justify-content: center;
  perspective: 1000px;
`
const Card = styled(TileSize)`
  align-items:center;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  left:0;
  position:absolute;
  top:0;
  user-select:none;

  img{
    width:60%;
  }
`
const Front = styled(Card)`
  background:turquoise;
  transform: rotateY(180deg);
`
const Back = styled(Card)`
  background-color:${props => props.isMatched ? 'lightsalmon' : 'lightblue'} ;
  transition: background-color 0.3s ease 0.3s;
  transform: ${props => props.isTurned ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`
const Flipper = styled(TileSize)`
	transition: transform 0.6s;
	transform-style: preserve-3d;
  position: relative;
  transform: ${props => props.isTurned ? 'rotateY(0deg)' : 'rotateY(180deg)'};
`
class Tile extends React.Component {

  shouldComponentUpdate = (nextProps) => {
    
    const {isTurned, isMatched} = this.props;
    const {isTurned: newTurned, isMatched: newMatched} = nextProps;
    return isTurned !== newTurned || isMatched !== newMatched;
  }
  
  render() {
    const { onTurn, isTurned, isMatched, content } = this.props;
    return (
      <Container onClick={!isTurned && !isMatched ? onTurn : () => { }}>
        <Flipper isTurned={isTurned}>
          <Front>
          </Front>
          <Back isMatched={isMatched}>
            {isTurned && <img src={content} alt="Tile" />}
          </Back>
        </Flipper>
      </Container>
    )
  }
}

export default Tile
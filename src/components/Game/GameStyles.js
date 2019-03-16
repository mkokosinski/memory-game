import styled from 'styled-components'
import {media} from '../../MobileBreakpoints'

export const GameContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px -3px rgba(0,0,0,0.7);
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  grid-gap: 5px;
  justify-content:center;
  margin: 0 auto;
  padding: 20px 10px;
  width: 90%;

  ${media.phablet`padding: 20px 20px;`}
  ${media.tablet`padding: 40px 40px; width: auto;`}
  ${media.desktop`padding:40px 40px; `}
  ${media.giant`padding:40px 60px; `}
`

export const BoardContainer = styled.div`
  align-items:stretch;
  display:grid;
  grid-template-columns: ${props => `repeat(${props.repeat}, 1fr);`};
  justify-content:stretch;
  grid-template-rows: ${props => `repeat(${props.repeat}, 1fr);`};
  grid-gap: 5px;
  width: 90vw; 
  height:90vw;
  
  ${media.tablet`width:calc(100vh - 200px); height:calc(100vh - 200px)`} 
`

export const TurnCounter = styled.div`
  display: block; 
  font-size: .6em;

  ${media.phablet`font-size: 0.7em;`}
  ${media.tablet`font-size: 0.9em;`}
  ${media.desktop`font-size: 1em;`}
`

export const Button = styled.div`
  background-color:#555555;
  border: 1px solid gray;
  color: #fff;
  display: block; 
  font-size: .6em;
  padding: 10px 6px;
  text-align: center; 

  ${media.phablet`font-size: 0.7em; padding: 12px 8px`}
  ${media.tablet`font-size: 0.9em; padding: 16px 10px`}
  ${media.desktop`font-size: 1em; padding: 20px 10px`}

  :hover{
  background-color:#666;
  cursor: pointer;
  transition: background-color ease 500ms;
  }
`
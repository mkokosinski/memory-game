import styled from 'styled-components'
import {media} from '../MobileBreakpoints'


export const GameContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px -3px rgba(0,0,0,0.7);
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  grid-gap: 5px;
  padding: 40px 60px;
  justify-content:center;
  

  ${media.desktop`padding:40px 60px; `}
  ${media.tablet`padding: 40px 40px;`}
  ${media.phablet`padding: 20px 20px;width: 100%;`}
  ${media.phone`padding: 20px 10px;width: 100%;`}
`


export const BoardContainer = styled.div`
  align-items:stretch;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content:stretch;
  /* grid-template-rows: ${props => `repeat(${props.repeat}, 120px);`}; */
  grid-template-rows: ${props => `repeat(${props.repeat}, 1fr);`};
  grid-gap: 5px;
  width: 600px; height: 600px;

  
  ${media.desktop`width: 600px; height: 600px`}
  ${media.tablet`width: 500px; height: 500px`} 
  ${media.phablet`width: 100%; height:56vh`}
  ${media.phone`width: 100%; height: 55vh`}
`



export const TurnCounter = styled.div`
  display: block; 


  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 0.9em;`}
  ${media.phablet`font-size: 0.7em;`}
  ${media.phone`font-size: .6em;`}
`




export const Button = styled.div`
  background-color:#555555;
  border: 1px solid gray;
  color: #fff;
  display: block; 
  padding: 20px 10px;
  text-align: center; 

  ${media.desktop`font-size: 1em; padding: 20px 10px`}
  ${media.tablet`font-size: 0.9em; padding: 16px 10px`}
  ${media.phablet`font-size: 0.7em; padding: 12px 8px`}
  ${media.phone`font-size: .6em; padding: 10px 6px`}

  :hover{
  background-color:#666;
  cursor: pointer;
  transition: background-color ease 500ms;
  }
`
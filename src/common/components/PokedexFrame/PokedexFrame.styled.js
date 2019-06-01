import styled from 'styled-components';
import {
  SCREEN_MIN_WIDTH,
  FRAME_RIGHT_CALC,
} from '../../constants/pokedexCssCalculation.js';

export const Container = styled.div`
  display: none;
  @media only screen and (min-width: ${SCREEN_MIN_WIDTH}) {
    display: flex;
    height: 100%;
    position: fixed;
    left: ${FRAME_RIGHT_CALC};
    right: ${FRAME_RIGHT_CALC};
  }
`;

const FrameTemplate = styled.div`
  background-color: #fc5849;
  border-radius: 16px;
  flex: 1;
  position: relative;
  box-shadow: inset -2px -4px 2px 4px #c0362d;
`;

export const LeftFrame = styled(FrameTemplate)`
  border-right: 1px solid #14aa9f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftFrameLines = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #fc5849;
  width: 14.5%;
  height: 33%;
  border: 8px solid #c0362d;
  border-width: 8px 0;
  &:before {
    content: "";
    width: 80%;
    height: 30%;
    border: 8px solid #c0362d;
    border-width: 8px 0;
  }
  &:after {
    content: "";
    position: absolute;
    width: 300px;
    height: 0;
    border: 4px solid #c0362d;
  }
`;

export const BigCircleBorder = styled.div`
  width: 100%;
  display: flex;
  border: 8px solid #c0362d;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    padding-bottom: 100%;
  }
  &:after {
    content: "";
  }
`;

export const PokeballLogo = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  background-color: #c0362d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    width: 10%;
    height: 100%;
    background-color: #fc5849;
  }
  &:after {
    content: "";
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: #c0362d;
    border: 18px solid #fc5849;
    border-radius: 50%;
  }
`;

export const Recess = styled.div`
  position: absolute;
  right: 40px;
  width: 36px;
  height: 100%;
  background-color: #fc5849;  
  box-shadow: inset 1px 0px 6px 2px #c0362d;
`;

export const RightFrame = styled(FrameTemplate)``;

export const LedWire = styled.div`
  position: absolute;
  top: 8px;
  right: 18px;
  width: 2px;
  height: 110px;
  background-color: black;
  box-shadow: inset 1px 1px 2px gray;
`;

const TemplateLED = styled.div`
  position: absolute;
  height: 12px;
  width: 12px;
  right: 13px;
  border-radius: 50%;
  /*background: radial-gradient(circle at 50% 120%, #323232, #0a0a0a 80%, #000000 100%);*/
  box-shadow: 1px 1px 2px black;
  &:before { /* bottom light */
    content: "";
    position: absolute;
    background: radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    bottom: 2.5%;
    left: 5%;
    opacity: 0.6;
    height: 100%;
    width: 90%;
    filter: blur(1px);
    z-index: 2;
  }
  &:after { /* shine */
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: 10%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
    transform: translateX(-32%) translateY(-32%) skewX(-20deg);
    filter: blur(1px);
  }
`;

export const LargeLED = styled(TemplateLED)`
  background-color: black;
  height: 20px;
  width: 20px;
  top: 8px;
  right: 9px;
`;

export const SmallLED = styled(TemplateLED)`
  background-color: ${props => props.color};
  top: ${props => props.top};
`;

export const BezelDecorationLine = styled.div`
  position: absolute;
  background-color: #7ff6f3;
  width: 2px;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    background-color: #7ff6f3;
    width: 2px;
    height: 16px;
    transform: rotate(-45deg);
  }
`;

export const LeftVerticalLine = styled(BezelDecorationLine)`
  bottom: 50%;
  left: 15px;
  &:after {
    left: 6px;
    bottom: -13px;
  }
`;
export const RightVerticalLine = styled(BezelDecorationLine)`
  top: 50%;
  right: 20px;
  &:after {
    top: -13px;
    left: -6px;
  }
`;

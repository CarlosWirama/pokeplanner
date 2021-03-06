import React from 'react';
import {
  Container,
  LeftFrame,
  TopButtonsContainer,
  BottomButtonsContainer,
  WhiteButton,
  RectangleButtonsContainer,
  PlusAndCircleButtonsContainer,
  MiddleShapesContainer,
  LeftFrameLines,
  BigCircleBorder,
  PokeballLogo,
  Recess,
  RightFrame,
  LedWire,
  LargeLED,
  SmallLED,
  LeftVerticalLine,
  RightVerticalLine,
} from './PokedexFrame.styled';

export default function PokedexFrame() {
  return (
    <Container>
      <LeftFrame>
        <TopButtonsContainer>
          <WhiteButton shape="circle" size="24px" left="40px" />
          <WhiteButton shape="circle" size="72px" left="55px" />
          <WhiteButton shape="circle" size="24px" left="70px" />
          <WhiteButton width="9px" height="48px" left="66%"
            top="4%" position="absolute" />
        </TopButtonsContainer>
        <MiddleShapesContainer>
          <BigCircleBorder>
            <PokeballLogo size={180} color="#c0362d" background="#fc5849"/>
          </BigCircleBorder>
          <LeftFrameLines/>
        </MiddleShapesContainer>
        <BottomButtonsContainer>
          <RectangleButtonsContainer>
            <WhiteButton width="45px" height="24px" left="40px" />
            <WhiteButton width="45px" height="24px" left="50px" />
            <WhiteButton width="45px" height="24px" left="60px" />
          </RectangleButtonsContainer>
          <PlusAndCircleButtonsContainer>
            <WhiteButton shape="plus" size="36px" left="40px" />
            <WhiteButton shape="circle" size="30px" left="135px" />
          </PlusAndCircleButtonsContainer>
        </BottomButtonsContainer>
        <Recess />
      </LeftFrame>
      <RightFrame>
        <LedWire/>
        <LargeLED/>
        <SmallLED top="60px" color="red"/>
        <SmallLED top="80px" color="yellow" />
        <SmallLED top="100px" color="green"/>
        <LeftVerticalLine/>
        <RightVerticalLine/>
      </RightFrame>
    </Container>
  );
}

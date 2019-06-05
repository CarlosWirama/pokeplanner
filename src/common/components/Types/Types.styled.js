import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: white;
`;

export const TypeBaloon = styled.div`
  display: flex;
  color: white;
  text-transform: uppercase;
  background-color: ${props => props.color};
  font-size: 12px;
  padding: 2px 8px 4px;
  letter-spacing: -0.3px;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.4);

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

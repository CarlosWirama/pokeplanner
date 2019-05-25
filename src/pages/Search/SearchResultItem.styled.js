import styled from 'styled-components';
import Card from '../../common/components/Card';

export const ResultItem = styled(Card)`
  font-size: 20px;
  position: relative;
  && {
    background-color: rgba(32, 129, 255, 0.3);
    box-shadow: 0 0 8px 10px rgba(182, 237, 255, 0.3);
    border: solid 3px rgba(176, 235, 255, 0.8);
    margin: 16px 0;
    padding: 4px 8px;
    :before {
      content: " ";
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border: 3px solid rgba(32, 129, 255, 0.3);
      border-radius: 12px 32px;
    }
  }
`;

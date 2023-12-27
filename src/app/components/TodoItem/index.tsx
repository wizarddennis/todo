import * as React from 'react';
import styled from 'styled-components';
import Block from '../Block';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

export default function TodoItem() {
  return (
    <Box>
      위에꺼
      <Block marginLeft="50px" />
      아래꺼
    </Box>
  );
}

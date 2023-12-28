import * as React from 'react';
import styled from 'styled-components';

// true이면 빨간색으로 표현
const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 3px;

  //Circle 의 자기자신을 지칭
  & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%; // 원으로
    background: red;
  }
`;

export default function Checkbox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}>
        {checked ? <div className="checkbox-icon" /> : null}
      </Circle>
    </>
  );
}

import * as React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

// 컨텐츠가 길어지면 자동으로 다음줄로 넘어가도록 하는 기능(cursor 위까지),
// clamp 3은 text-overflow가 ellipsis이니, 3줄이상되면 점으로 표시해라
const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden; //
  text-overflow: ellipsis;
  word-wrap: break-work;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through ' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

// toDo 는 여러개이므로, 상위 컴포넌트에서 주는 걸 받아서 처리해야 함.
export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <Checkbox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}

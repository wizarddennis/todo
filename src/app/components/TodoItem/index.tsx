import * as React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    padding: 10px 15px 10px 25px;
    & > .delete-button {
      display: flex;
    }
  }
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
      {/* 태그안에 인라인으로 style 을 넣으려면, object 형태로 넣어야 함   */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={todo.completed} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput />
        ) : (
          <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
        )}
      </div>
      {/* 아이콘을 Prop 으로 보내는 방식을 사용함. */}
      <CircleButton
        className="delete-button"
        onClick={() => {}}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      />
    </Box>
  );
}

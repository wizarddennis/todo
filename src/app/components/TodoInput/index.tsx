import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px;')};
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;
// 빈태그는 정의상 컴포넌트를 단순하게 코드상으로 연결하는 기능
// import * as React from 'react'; 를 맨위에 넣지 않으면 아래 에러가 뜬다.
// TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
// 다른 파일에서 import 할수 있도록 export default 달아줌.
export default function TodoInput({
  setTodoList,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  setTodoList?: (todo: ITodoItem) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content: string) => void;
  editModeTodo?: () => void;
}) {
  const [content, setContent] = React.useState<string>('');

  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="여기다가 할일을 입력하세요."
        value={content}
        // 입력도중, 다른 컴포넌트및 창을 클릭하여 입력 하는상태가 사라지는 경우 발생하는 이벤트
        onBlur={e => {
          // onBlur가 있는 태크와 실제 이벤트가 발생한 태그가 동일한지 체크한다.
          if (e.currentTarget === e.target) editTodo && editTodo(content);
        }}
        onChange={e => setContent(e.target.value)}
        // onKeyPress 는 deprecated라고해서 onKeyDown을 사용함.
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            // setTodoList 함수가 존재할 때만, 함수를 실행한다.
            setTodoList &&
              setTodoList({
                id: '0',
                content: content,
                completed: false,
                editing: false,
              });
          }
          setContent('');
        }}
      />
    </Box>
  );
}

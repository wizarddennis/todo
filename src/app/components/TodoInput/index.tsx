import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%auto;
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
}: {
  setTodoList: (todo: ITodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');

  return (
    <Box>
      <Input
        placeholder="여기다가 할일을 입력하세요."
        value={content}
        onChange={e => setContent(e.target.value)}
        // onKeyPress 는 deprecated라고해서 onKeyDown을 사용함.
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          setTodoList({
            id: '0',
            content: content,
            completed: false,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}

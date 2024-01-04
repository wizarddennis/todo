//import * as React from 'react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  // React를 빼고 싶으면...상단에...import시 아래와 같이 사용하면 됨.
  //import React, { useState } from 'react';

  // const [todoList, setTodoList] = React.useState<ITodoItem[]>([
  const [todoList, setTodoList] = useState([
    {
      id: '1',
      content: '첫번째 투두',
      completed: true,
      editing: true,
    },
    {
      id: '2',
      content: '두번째 투두',
      completed: false,
      editing: true,
    },
    {
      id: '3',
      content: '세번째 투두',
      completed: false,
      editing: true,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Main 이 왜 안바뀌노??</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할일</Title>
          <TodoInput
            setTodoList={(todo: ITodoItem) => setTodoList([todo, ...todoList])}
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}

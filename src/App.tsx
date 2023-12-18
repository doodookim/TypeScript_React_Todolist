import React, { ChangeEvent, FormEvent, useState } from 'react';
import Todolist from './component/Todolist';
import styled from 'styled-components';
import GlobalStyle from './styled/GlobalStyle';

// state 타입 지정 -> 이 친구로 짝 맞춰주면 됨.
export type obj = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [form, setForm] = useState<obj>({
    id: Date.now(),
    title: '',
    content: '',
    isDone: false,
  });
  const [listIsDone, setListIsDone] = useState(false);
  // state의 타입은 상단에서 지정해준 obj객체가 배열에 담기는 형태
  const [todolist, setTodolist] = useState<obj[]>([]);
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const onSubmitList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    setTitle(``);
    setContent('');
    setTodolist([...todolist, newTodo]);
  };

  return (
    <>
      <GlobalStyle />
      <StHeader>MY TODO LIST</StHeader>

      <StMain>
        <StForm onSubmit={onSubmitList}>
          <StInput
            type='text'
            placeholder={'제목을 입력해주세요.'}
            value={title}
            onChange={onChangeTitle}
          />
          <StInput
            type='text'
            placeholder={'내용을 입력해주세요.'}
            value={content}
            onChange={onChangeContent}
          />
          <StButton>등록하기</StButton>
        </StForm>

        <Todolist
          todolist={todolist}
          setTodolist={setTodolist}
          listIsDone={false}
        />
        <Todolist
          todolist={todolist}
          setTodolist={setTodolist}
          listIsDone={true}
        />
      </StMain>
      <StFooter>오늘의 할 일을 적어보자 !</StFooter>
    </>
  );
}

export default App;

const StHeader = styled.header`
  background-color: #0b2f11;
  color: white;
  padding: 4rem;
  font-size: 3rem;
  text-align: center;
`;

const StMain = styled.main`
  background-color: #1cb09f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const StForm = styled.form`
  width: 20rem;
  /* height: 10rem; */
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  flex-direction: column;
  padding: 1rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
`;

const StInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

const StFooter = styled.footer`
  background-color: #0b2f11;
  color: white;
  padding: 5rem;
  font-size: 2rem;
  text-align: center;
`;

const StButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #1cb09f;
  color: white;
  border: none;
  margin-right: 0.5rem;

  &:hover {
    background-color: #0b2f11;
    transition: background-color 0.5s;
  }
`;

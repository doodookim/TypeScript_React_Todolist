import React from 'react';
import { obj } from '../App';
import { idText } from 'typescript';
import styled from 'styled-components';
type SetStateProps = React.Dispatch<React.SetStateAction<obj[]>>;
// type SetStateProps = React.Dispatch<React.SetStateAction< //! state의 타입 넣어주기>>
const Todolist = ({
  todolist,
  setTodolist,
  listIsDone,
}: {
  todolist: obj[];
  setTodolist: SetStateProps;
  listIsDone: boolean;
}) => {
  // map, filter는 담아줄 변수가 무조건 필요하다 !!
  const deleteButton = (id: number) => {
    const newArr = todolist.filter((todo) => todo.id !== id);
    setTodolist(newArr);
  };

  const onChangeHandler = (id: number) => {
    const newList = todolist.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTodolist(newList);
  };

  // const currentTodolist = todolist.filter((todo) => todo.isDone === false);
  // const doneTodolist = todolist.filter((todo) => todo.isDone === true);

  return (
    <>
      {/* listIsDone 이용해서 상태 별로 리스트 담기 */}
      <StTodo> {listIsDone ? '⭐️완료한 목록⭐️' : '🔥할 일 목록💻'}</StTodo>
      <StTodolistContainer>
        {todolist
          .filter((todo) => todo.isDone === listIsDone)
          .map((todo) => {
            return (
              <StTodolist key={todo.id}>
                <StH3tag>{todo.id}</StH3tag>
                <StTitle>{todo.title}</StTitle>
                <StContent>{todo.content}</StContent>
                <StButtonHandler>
                  {' '}
                  <StButton
                    onClick={() => {
                      deleteButton(todo.id);
                    }}
                  >
                    삭제
                  </StButton>
                  <StButton
                    onClick={() => {
                      onChangeHandler(todo.id);
                    }}
                  >
                    {listIsDone ? '완료 취소' : '완료'}
                  </StButton>
                </StButtonHandler>
              </StTodolist>
            );
          })}
      </StTodolistContainer>
    </>
  );
};

export default Todolist;

const StTodolistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StTodo = styled.h1`
  font-size: 3rem;
  padding: 3rem;
`;

const StTodolist = styled.div`
  background-color: #fff;
  border: 0.1rem solid #0b2f11;
  width: 30rem;
  min-height: 20rem;
  text-align: center;
  margin: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 1rem 0;
  }
`;

const StH3tag = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

const StTitle = styled.h1`
  font-size: 2rem;
  padding: 3rem;
`;
const StContent = styled.p`
  font-size: 1.5;
  padding: 1rem;
`;

const StButtonHandler = styled.div`
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
`;

const StButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.5rem;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #0d3a34;
  color: white;
  border: none;
  margin-left: 0.5rem;
  /* margin-top: 3rem; */

  &:hover {
    background-color: #0b2f11;
    transition: background-color 0.5s;
  }
`;

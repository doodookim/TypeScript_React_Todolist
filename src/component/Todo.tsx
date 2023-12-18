import React from 'react';
import { obj } from '../App';
type Obj2 = {
  newTodo: obj;
};
// 프롭스 타입은 받는 쪽에서 지정하기
const Todo = ({ newTodo }: Obj2) => {
  console.log(newTodo);
  return <div>Todo</div>;
};

export default Todo;

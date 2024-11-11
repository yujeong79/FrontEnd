import { ref, computed } from 'vue';
import { defineStore } from 'pinia'; // store에 정의하기 위해서

export const useTodosStore = defineStore('todos', () => {
  let id = 0;

  // state
  const todos = ref([
    {id: id++, text: '돈 넣기', isDone: false},
    {id: id++, text: '관통 백엔드 마무리하기', isDone: false},
    {id: id++, text: '수요일 A형 시험 준비하기', isDone: false},
  ]);

  // action
  const addTodo = function(todoText) {
    todos.value.push({
      id: id++,
      text: todoText, // 만약 parameter 이름이 text이면 ES6 문법으로 key:value 따로 써주지 않고 text 만 써도 가능
      isDone: false,
    });
  };

  const deleteTodo = function(id) {
    const idx = todos.value.findIndex((todo) => {
      return todo.id === id;
    });

    todos.value.splice(idx, 1);
  };

  const updateTodo = function(id) {
    // map : 배열을 순회하며 콜백함수를 호출
    todos.value = todos.value.map((todo) => { 
      if(todo.id == id) 
        todo.isDone = !todo.isDone

      return todo;
    });
  };

  // getters
  const doneTodoCount = computed(() => {
    // filter : 조건에 부합하는 요소들만 모아서 새로운 배열을 만듦
    return todos.value.filter((todo) =>  todo.isDone).length;
  })

  return { todos, addTodo, deleteTodo, updateTodo, doneTodoCount };
}, {persist: true}

);


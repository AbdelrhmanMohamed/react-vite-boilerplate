import { create } from "zustand";

type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
};

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] => {
  return todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));
};

export const addTodo = (todos: Todo[], text: string): Todo[] => {
  return [
    ...todos,
    {
      done: false,
      text,
      id: Math.max(122),
    },
  ];
};

export const useStore = create<Store>((set) => ({
  todos: [],
  newTodo: "",
  addTodo() {
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
    }));
  },
}));

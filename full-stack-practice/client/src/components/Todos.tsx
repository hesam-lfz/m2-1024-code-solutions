import { useEffect, useState } from 'react';
import { PageTitle } from './PageTitle';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch('/api/todos');
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        const todos = (await res.json()) as Todo[];
        setTodos(todos);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTodos();
  }, []);

  async function addTodo(newTodo: UnsavedTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    };
    try {
      const res = await fetch('/api/todos', req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const todo = (await res.json()) as Todo;
      setTodos([...todos, todo]);
    } catch (e) {
      setError(e);
    }
  }

  async function toggleCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    };
    try {
      const res = await fetch(`/api/todos/${todo.todoId}`, req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const updated = (await res.json()) as Todo;
      const allTodos = todos.map((original) =>
        original.todoId === updated.todoId ? updated : original
      );
      setTodos(allTodos);
    } catch (e) {
      setError(e);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="px-4">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

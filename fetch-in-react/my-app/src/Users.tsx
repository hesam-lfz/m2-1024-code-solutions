/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useCallback, useEffect, useState } from 'react';
import { UserDetails } from './UserDetails';
import { UserCard } from './UserCard';
import './Users.css';

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};
export function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = (await response.json()) as User[];
      setUsers(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <UserDetails userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

type ListProps = {
  users: User[];
  onClick: (user: User) => void;
};
function UserList({ users, onClick }: ListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

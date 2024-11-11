/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`
  useEffect(() => {
    async function retrieveData() {
      // do the asynchronous work here
      // Option 1: Using promise wait/catch:
      /*
      readItems()
        .then((res) => {
          setIsLoading(false);
          setItems(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
      */
      // Option 2: Using promise async await
      try {
        setItems(await readItems());
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    retrieveData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}

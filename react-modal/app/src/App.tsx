import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

export default function App() {
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete(): void {
    alert('You deleted me!');
    setIsDeleting(false);
  }

  return (
    <>
      <button onClick={() => setIsDeleting(true)}>Delete Me!</button>
      <Modal isOpen={isDeleting} onClose={() => setIsDeleting(false)}>
        <p>Are you sure you want to delete?</p>
        <button onClick={() => setIsDeleting(false)}>Cancel</button>
        <button onClick={handleDelete} autoFocus>
          Delete!
        </button>
      </Modal>
    </>
  );
}

// Pre-modularization solution
// ----------------
// export default function App() {
//   const modal = useRef<HTMLDialogElement>(null);

//   function handleDelete(): void {
//     alert('You deleted me!');
//     modal.current?.close();
//   }

//   return (
//     <>
//       <button onClick={() => modal.current?.showModal()}>Delete Me!</button>
//       <dialog ref={modal}>
//         <p>Are you sure you want to delete?</p>
//         <button onClick={() => modal.current?.close()}>Cancel</button>
//         <button onClick={handleDelete} autoFocus>
//           Delete!
//         </button>
//       </dialog>
//     </>
//   );
// }

import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { UserForm } from './UserForm';
import './App.css';

function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <br />
      <RegistrationFormControlled />
      <br />
      <UserForm />
      <br />
      <UserForm user={{ username: 'fu', password: 'bar' }} />
    </>
  );
}

export default App;

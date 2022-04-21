import './App.css';
import { Navbar } from "./components/layouts/Navbar";
import { Users } from './components/users/Users';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <Users></Users>
      </div>
    </>
  );
}

export default App;

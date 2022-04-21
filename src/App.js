import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/layouts/Navbar";
import { UserProfile } from './components/users/UserProfile';
import { Users } from './components/users/Users';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Users />} />
            <Route exact path='/user/:login' element={<UserProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

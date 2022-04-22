import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/layouts/Navbar";
import { UserProfile } from './components/users/UserProfile';
import { Users } from './components/users/Users';
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';


const App = () => {
  return (
    <UserState>
      <AlertState>
        <Router>
          <Navbar></Navbar>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Users />} />
              <Route exact path='/user/:login' element={<UserProfile />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </UserState>
  );
}

export default App;

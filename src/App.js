import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LeaveForm from './components/Leave/LeaveForm';
import Status from  './components/Status_cmp/Status';
import Login from '../src/components/Login_cmp/Login'
import SignIn from './components/Sign_up/Sign_up';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Login/>}/>
      <Route path='/Report' element= {<Home/>}/>
      <Route path='/leave' element={<LeaveForm/>}/>
      <Route path='/Status' element={<Status/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Sign-in' element={<SignIn/>}/>
      <Route path='/Home' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

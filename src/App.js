import {Routes,Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import UserHome from './components/User/UserHome';
import ViewCatagory from './components/User/ViewCatagory';
import Registration from './components/LoginDetails/RegistrationForm';
import Login from './components/LoginDetails/Login'




function App() {

  return (
    <div>
    <Router>
      <Routes>
      <Route path="/register" Component={Registration}></Route>
      <Route path="/login" component={Login} />
      <Route path="/user" Component={UserHome}></Route>
      <Route path="/viewCatagory" Component={ViewCatagory}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;

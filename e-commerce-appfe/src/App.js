import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MerchantLogin from './Components/MerchantLogin';
import UserLogin from './Components/UserLogin';
import MerchantSignup from './Components/MerchantSignup';
import MerchantHomePage from './Components/MerchantHomePage';
import Error from './Components/Error';
import Protect from './Components/Protect';
import UseLocation from './Components/UseLocation';
import UserHomePage from './Components/UserHomePage';
import UserNavBar from './Components/UserNavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<UseLocation/>}/> */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/*' element={<Error />} />
        <Route path='/merchant' element={<MerchantLogin />} />
        <Route path='/user' element={<UserLogin />} />
        <Route path='/merchantsignup' element={<MerchantSignup />} />
        <Route path='/merchanthomepage/*' element={<Protect Child={MerchantHomePage} />} />


        <Route path='/userhomepage/*' element={<UserHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

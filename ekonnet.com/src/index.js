import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import HeaderNav from "./components/HeaderNav";

// import BuyCrypto from './components/BuyCrypto/BuyCrypto';
import OneClickBuy from './components/BuyCrypto/OneClickBuy';
import P2pTradingFees from './components/BuyCrypto/P2pTradingFees';
import FiatDeposite from './components/BuyCrypto/FiatDeposite';
import MarketOverview from './components/Markets/MarketOverview';
import Traders from './components/Traders/Traders';
import Features from './components/Traders/Features';
import MobileApp from './components/Traders/MobileApp';
import Wallets from './components/Traders/Wallets';
import Security from './components/Traders/Security';
import Explore from './components/Explore/Explore';
import Future from  './components/Future/Future';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Markets from './components/Markets/Markets';
import MarketData from './components/Markets/MarketData';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   <Router>
      <HeaderNav/>
   <Routes>
        <Route path="/" element={<App/>}/> 
        <Route path="/one-click-buy" element={<OneClickBuy/>}/> 
        <Route path="/p2p-trading" element={<P2pTradingFees/>}/>
        <Route path="/fiat-deposite" element={<FiatDeposite/>}/>
        <Route path="/market-overview" element={<MarketOverview/>}/>
        <Route path="/traders" element={<Traders/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/mobile-app" element={<MobileApp/>}/>
        <Route path="/wallets" element={<Wallets/>}/>
        <Route path="/security" element={<Security/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/future" element={<Future/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/markets" element={<Markets/>}/>
        <Route path="/market-data" element={<MarketData/>}/>
      </Routes>
      </Router>

   </React.StrictMode>

);



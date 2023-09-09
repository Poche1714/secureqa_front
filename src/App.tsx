import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page/home/home';
import Intro from './components/page/intro/intro';
import Signin from './components/page/signin/signin';
import LanguageSwitcher from './components/module/changeLanguage/LanguageSwitcher';
import Header from './elements/header/header';
import './i18n';

import logo from './images/Image 1.png';
const App: React.FC<any> = () => {
  return (
    <div className="App">
      <LanguageSwitcher />
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} >
         

          </Route>
          <Route path="/signin" element={<Signin nombre="test2" edad={3} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

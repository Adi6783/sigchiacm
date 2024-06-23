// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/Contactus';
import Members from './pages/Members';

import Respage from './pages/Res';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import MockCodingTests from './pages/MockCodingTests';
import InfoPage from './pages/InfoPage';
import Resource from './pages/AboutUs';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import CodeEditor from './pages/CodeEditor';
import './App.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contactus" Component={ContactUs} />
            <Route path="/members" Component={Members} />
           
            <Route path="/res" Component={Respage} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/faqs" Component={FAQs} />
            <Route path="/mock-coding-tests" Component={MockCodingTests} />
            <Route path="/info" Component={InfoPage} />
            <Route path="/resource" Component={Resource} />
            <Route path="/codeeditor" Component={CodeEditor} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

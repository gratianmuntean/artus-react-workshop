import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';


import Ex01 from './ex01/Ex01';
import Ex02 from './ex02/Ex02';
import Ex03 from './ex03/Ex03';
import Ex04 from './ex04/Ex04';
import Ex05 from './ex05/Ex05';
import Ex06 from './ex06/Ex06';

import Ex01solved from './ex01/Ex01solved';
import Ex02solved from './ex02/Ex02solved';
import Ex03solved from './ex03/Ex03solved';
import Ex04solved from './ex04/Ex04solved';
import Ex05solved from './ex05/Ex05solved';
import Ex06solved from './ex06/Ex06solved';

const App = () => {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to React Workshop (15-16 Dec 2021)
          </h1>

          <ul className='list'>
            <li>
              <Link to="/ex01">Ex01</Link>
            </li>

            <li>
              <Link to="/ex02">Ex02</Link>
            </li>

            <li>
              <Link to="/ex03">Ex03</Link>
            </li>

            <li>
              <Link to="/ex04">Ex04</Link>
            </li>

            <li>
              <Link to="/ex05">Ex05</Link>
            </li>

            <li>
              <Link to="/ex06">Ex06</Link>
            </li>

          </ul>


          <ul className='list'>
            <li>
              <Link to="/ex01solved">Ex01solved</Link>
            </li>
            <li>
              <Link to="/ex02solved">Ex02solved</Link>
            </li>
            <li>
              <Link to="/ex03solved">Ex03solved</Link>
            </li>

            <li>
              <Link to="/ex04solved">Ex04solved</Link>
            </li>
            <li>
              <Link to="/ex05solved">Ex05solved</Link>
            </li>
            <li>
              <Link to="/ex06solved">Ex06solved</Link>
            </li>
          </ul>

          {/* Router */}
          <Routes>
            <Route path="/" element={<Ex01 />} />
            <Route path="/ex01" element={<Ex01 />} />
            <Route path="/ex01solved" element={<Ex01solved />} />
            <Route path="/ex02" element={<Ex02 />} />
            <Route path="/ex02solved" element={<Ex02solved />} />
            <Route path="/ex03" element={<Ex03 />} />
            <Route path="/ex03solved" element={<Ex03solved />} />
            <Route path="/ex04" element={<Ex04 />} />
            <Route path="/ex04solved" element={<Ex04solved />} />
            <Route path="/ex05" element={<Ex05 />} />
            <Route path="/ex05solved" element={<Ex05solved />} />
            <Route path="/ex06" element={<Ex06 />} />
            <Route path="/ex06solved" element={<Ex06solved />} />
          </Routes>

        </header>
      </div>
    </Router>
  );
}

export default App;

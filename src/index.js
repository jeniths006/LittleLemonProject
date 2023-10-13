import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import BookingPage from './components/BookingPage';
import BookingSuccess from './components/BookingSuccess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <Routes> 
          <Route path="/" exact element={<App/>}></Route>
          <Route path="/reservations" element={<BookingPage />}></Route>
          <Route path="/success" element={<BookingSuccess />}> </Route>
        </Routes>
      </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
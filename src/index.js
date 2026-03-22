import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Quote from "./pages/Quote";
import ViewWedding from "./pages/ViewWedding";
import QuoteSent from "./pages/QuoteSent";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services/>} />
          <Route path="testimonials" element={<Testimonials/>} />
          <Route path="quote" element={<Quote/>} />
          <Route path="viewwedding" element={<ViewWedding/>} />
          <Route path="quotesent" element={<QuoteSent/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);


import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Merchants } from './pages/Merchants';
import { MerchantAcademy } from './pages/MerchantAcademy';
import { Events } from './pages/Events';
import { GetStarted } from './pages/GetStarted';
import { Contact } from './pages/Contact';
import { Donate } from './pages/Donate';
import { Blog } from './pages/Blog';
import { Community } from './pages/Community';
import { John316 } from './pages/John316';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="merchant-academy" element={<MerchantAcademy />} />
          <Route path="events" element={<Events />} />
          <Route path="community" element={<Community />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="contact" element={<Contact />} />
          <Route path="give" element={<Donate />} />
          <Route path="articles" element={<Blog />} />
          <Route path="john316" element={<John316 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
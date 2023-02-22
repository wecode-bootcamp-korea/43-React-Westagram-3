import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JisuLogin from './pages/oh/Login/JisuLogin';
import JisuMain from './pages/oh/Main/JisuMain';

import SumiLogin from './pages/kim/Login/SumiLogin';
import SumiMain from './pages/kim/Main/SumiMain';

import JeounghoLogin from './pages/shin/Login/JeounghoLogin';
import JeounghoMain from './pages/shin/Main/JeounghoMain';

import JeonginLogin from './pages/yu/Login/JeonginLogin';
import JeonginMain from './pages/yu/Main/JeonginMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jisu-Login" element={<JisuLogin />} />
        <Route path="/jisu-Main" element={<JisuMain />} />

        <Route path="/sumi-Login" element={<SumiLogin />} />
        <Route path="/sumi-Main" element={<SumiMain />} />

        <Route path="/jeoungho-Login" element={<JeounghoLogin />} />
        <Route path="/jeoungho-Main" element={<JeounghoMain />} />

        <Route path="/jeongin-Login" element={<JeonginLogin />} />
        <Route path="/jeongin-Main" element={<JeonginMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

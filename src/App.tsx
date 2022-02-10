import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";

import './App.css';
import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Listagem } from './pages/Listagem';
import { Cadastro } from './pages/Cadastro';



function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Listagem />} />

        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;


{/*  */ }
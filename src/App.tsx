import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Listagem } from './pages/Listagem';
import { Cadastro } from './pages/Cadastro';

import { ProductsProvider } from './hooks/useProducts';

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Listagem />} />

          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}

export default App;
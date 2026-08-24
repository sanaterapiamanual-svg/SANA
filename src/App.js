import { useEffect, useState } from 'react';
import Atendimento from './pages/atendimento';
import Footer from './components/Footer';
import Header from './components/Header';
import Historia from './pages/historia';
import Home from './pages/home';
import Tratamentos from './pages/tratamentos';
import TratamentosDetalhes from './pages/tratamentosDetalhes';
import LoaderWidget from './components/LoaderWidget';
import WhatsAppLink from './components/WhatsAppLink';
import { isLoading, onDomContentLoaded } from './utils/utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

const SiteLayout = ({ children }) => (
  <div className="Sana">
    <Header />
    {children}
    <Footer />
    <WhatsAppLink />
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const HomePage = () => (
  <>
    <Home />
    <Historia />
    <Tratamentos />
    <Atendimento />
  </>
);

function App() {
  const [isDomLoading, setIsDomLoading] = useState(() => isLoading());

  useEffect(() => {
    if (!isDomLoading) return undefined;

    return onDomContentLoaded(() => setIsDomLoading(false));
  }, [isDomLoading]);

  if (isDomLoading) {
    return <LoaderWidget />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/tratamentos/detalhes/*"
          element={<SiteLayout><TratamentosDetalhes /></SiteLayout>}
        />
        <Route
          path="*"
          element={<SiteLayout><HomePage /></SiteLayout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

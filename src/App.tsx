import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import Layout from './components/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
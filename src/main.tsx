import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ProductProvider from "./components/ProductContext.tsx";




let queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </QueryClientProvider>
  </StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {chakraProvider, theme} from "@chakra-ui/react";
import { ChakraProvider, theme } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
  <App />
  </ChakraProvider>
    
  </React.StrictMode>
);

export const server= `https://api.coingecko.com/api/v3`;


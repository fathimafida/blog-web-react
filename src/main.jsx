import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { NextUIProvider } from '@nextui-org/system'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NextUIProvider>
          {" "}
          <App />
        </NextUIProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

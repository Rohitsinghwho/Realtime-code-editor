import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustomThemeProvider from './context/ThemeContext/CustomThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
)

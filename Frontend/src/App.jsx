import './App.css'
import AppRoutes from './routes/AppRoutes'
import { SettingsProvider } from './contexts/SettingsContext.jsx'
function App() {
  return(
    <SettingsProvider>
      <AppRoutes/>
    </SettingsProvider>
  ) 
}

export default App

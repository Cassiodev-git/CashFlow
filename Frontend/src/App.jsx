import './App.css'
import AppRoutes from './routes/AppRoutes'
import { SettingsProvider } from './contexts/SettingsContext.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <AppRoutes />
      </SettingsProvider>
    </QueryClientProvider>
  )
}

export default App
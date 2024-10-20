import 'remixicon/fonts/remixicon.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './Context/SearchContext.jsx'
import { ScrollProvider } from './Context/ScrollContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SearchProvider>
<ScrollProvider>

    <App />
</ScrollProvider>
  </SearchProvider>
  </BrowserRouter>
)

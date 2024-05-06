import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>

  
    <App />
  </Provider>
  
)

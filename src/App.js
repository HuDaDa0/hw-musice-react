import { renderRoutes } from 'react-router-config'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

import routes from './router'


function App() {
  return (
    <div className="App">
      <AppHeader />

      { renderRoutes(routes) }

      <AppFooter />
    </div>
  )
}

export default App

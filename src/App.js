import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

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

export default withRouter(App)

import { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayBar from './pages/player/app-player-bar'
import { Skeleton } from 'antd';

import routes from './router'


function App() {
  return (
    <div className="App">
      <AppHeader />

      <Suspense fallback={ <Skeleton active paragraph={{ rows: 10 }} /> }>
        { renderRoutes(routes) }
      </Suspense>

      <AppFooter />
      <AppPlayBar />
    </div>
  )
}

export default withRouter(App)

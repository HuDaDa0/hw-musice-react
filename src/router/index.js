import Discover from '../pages/discover'
import Friend from '../pages/friend'
import Mine from '../pages/mine'
import Player from '../pages/player'


const routes = [
  {
    path: '/',
    exact: true,
    component: Discover
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/player',
    component: Player
  }
]


export default routes

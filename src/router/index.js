import React from 'react'
import { Redirect } from 'react-router-dom'

// import Discover from '../pages/discover'
// import Friend from '../pages/friend'
// import Mine from '../pages/mine'
// import Player from '../pages/player'

// import Album from '../pages/discover/c-pages/album'
// import Artist from '../pages/discover/c-pages/artist'
// import Djradio from '../pages/discover/c-pages/djradio'
// import Ranking from '../pages/discover/c-pages/ranking'
// import Recommend from '../pages/discover/c-pages/recommend'
// import Songs from '../pages/discover/c-pages/songs'

const Discover = React.lazy(() => import('../pages/discover'))
const Friend = React.lazy(() => import('../pages/friend'))
const Mine = React.lazy(() => import('../pages/mine'))
const Player = React.lazy(() => import('../pages/player'))

const Album = React.lazy(() => import('../pages/discover/c-pages/album'))
const Artist = React.lazy(() => import('../pages/discover/c-pages/artist'))
const Djradio = React.lazy(() => import('../pages/discover/c-pages/djradio'))
const Ranking = React.lazy(() => import('../pages/discover/c-pages/ranking'))
const Recommend = React.lazy(() => import('../pages/discover/c-pages/recommend'))
const Songs = React.lazy(() => import('../pages/discover/c-pages/songs'))


const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover" />
    }
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      // {
      //   path: '/discover',
      //   exact: true,
      //   render: () => {
      //     return <Redirect to="/discover/recommend" />
      //   }, 
      // },
      {
        path: '/discover',
        exact: true,
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
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

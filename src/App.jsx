import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {
  return (
  <>
      <Header/>
      <Outlet/>
  </>
  )
}

export default App

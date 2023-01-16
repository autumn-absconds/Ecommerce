import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import ErrorPage from './pages/ErrorPage'
import {GlobalStyle} from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
     <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/cart' exact element={<Cart/>} />

        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/products' exact element={<Products/>} />
        <Route path='/singleproduct/:id' exact element={<SingleProduct/>} />
        <Route path='*' exact element={<ErrorPage/>} />
      
     </Routes>
     </ThemeProvider>
    </div>
  )
}

export default App

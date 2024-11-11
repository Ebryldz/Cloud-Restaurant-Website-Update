import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Button from './component/Button'
import BrandsPage from './pages/BrandsPage'
import AboutUsPage from './pages/AboutUsPage'
import CareerPage from './pages/CareerPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {
  const [page, setPage] = useState({ name: "brands", params: {} });

  const renderPage = () => {
    switch (page.name) {
      case 'brands':
        return <BrandsPage params={page.params} />;
      case 'aboutUs':
        return <AboutUsPage params={page.params} />;
      case 'career':
        return <CareerPage params={page.params} />;
      case 'contact':
        return <ContactPage params={page.params} />;
      case 'home':
        return <HomePage params={page.params} />;
      default:
        return 'not found';
    }
    /*

    setPage({
      name: 'brand',
      params: {
        brandId: 1,
      }
    })
      */
  }

  return (
    <>
      <Navbar setPage={setPage} />
      <main>
        {
          renderPage()
        }
      </main >
      <Footer />
    </>
  )
}

export default App

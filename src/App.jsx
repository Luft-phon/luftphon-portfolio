
import '../src/css/App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import MainPage from './page/MainPage'

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <MainPage />
      </main>
      <Footer />
    </div>
  )
}

export default App

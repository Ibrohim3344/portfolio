import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'


function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App




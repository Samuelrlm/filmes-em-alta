import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { DetailsPage } from './pages/Details'
import { Mainpage } from './pages/Main'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
          <Routes>
              <Route path='/' element={<Mainpage />}/>
              <Route path='/details/:id' element={<DetailsPage/>}/>

          </Routes>
      </Router>
    </>
  )
}

export default App

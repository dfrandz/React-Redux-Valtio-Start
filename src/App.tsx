import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Accueil, HomeLayout, Login } from './routes/routes'

function App() {

  return (
    <>
          <Routes>
              <Route path="/" element={<HomeLayout/>}>
                <Route index element={<Accueil/>}/>
              </Route>
            <Route path='login' element={<Login/>}/>
          </Routes>
        
    </>
  )
}

export default App

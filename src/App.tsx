import { Route, Routes } from 'react-router-dom'
import { SignIn } from './router/sign-in'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
      </Routes>
    </>
  )
}

export default App

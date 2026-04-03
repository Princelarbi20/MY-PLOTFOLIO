import { NavBar } from "./component/NavBar"
import {PagesRout} from "./PagesRout"
import { Rootlayer } from "./Rootlayer"
import { HomePage } from './Pages/HomePage'
import {AboutPage} from './Pages/AboutPage'
import {SkillPage} from './Pages/SkillPage'
import {ContactPage} from './Pages/ContactPage'
import { createBrowserRouter,createRoutesFromElements, RouterProvider,Route } from "react-router-dom"
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayer />}>
        <Route path="home" element={<HomePage/>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skill" element={<SkillPage />} />
        <Route path="contact" element={<ContactPage />} />

      </Route>

    )
  )
  return (
    <>
    <RouterProvider router={router} />
      <PagesRout />
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header'
import Content from './pages/Content'
import Footer from './components/Footer'
import Landing from './pages/landing'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import SearchResults from './pages/SearchResults'
import RecipeDetails from "./pages/RecipeDetails"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Header/> <Landing /> <Footer/> </>
    },
    {
      path: "/content",
      element: <> <Header/> <Content /> <Footer/> </>
    },
    {
      path: "/login",
      element: <> <Header/> <Login /> <Footer/> </>
    },
    {
      path: "/Contact",
      element: <> <Header/> <Contact /> <Footer/> </>
    },
    {
      path: "/About",
      element: <> <Header/> <About /> <Footer/> </>
    },
    {
      path: "/search",
      element: <> <Header/> <SearchResults /> <Footer/> </>
    },
    {
      path: "/recipe/:id",
      element: <> <Header/> <RecipeDetails /> <Footer/> </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

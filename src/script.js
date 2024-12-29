import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Cojntact from "./Components/Cojntact"
import About from "./Components/About"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import ResMenu from "./Components/ResMenu"
import Shimmer from "./Components/Shimmer"
import UserContext from "./Components/UserContext"
import Service from "./Components/Service"
import { Provider } from "react-redux"
import AppStore from "./utils/AppStote"











const Grocery = lazy(() => import("./Components/Grocery"))

const MainApp = () => {
  const [username, setusername] = useState()

  useEffect(() => {
    const data = {
      name: "Anonymous"
    }
    setusername(data.name)


  }, [])
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ logged: username, setusername }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
      },
      {
        path: "/contact",
        element: <Cojntact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />
      },
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
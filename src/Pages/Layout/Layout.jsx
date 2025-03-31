import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import "./Layout.scss"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </>
  )
}

export default Layout
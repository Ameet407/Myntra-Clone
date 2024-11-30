import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import FetchItems from "../components/Fetchitem"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const fetchStatus = useSelector((store) =>store.fetchStatus);

  return (
    <>
     <Header></Header>
     <FetchItems></FetchItems>
     {fetchStatus.currentlyFetching? <LoadingSpinner /> : <Outlet />}
    <Footer></Footer>
    </>
  )
}

export default App

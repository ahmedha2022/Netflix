import Featured from "../../compnents/featured/Featured"
import List from "../../compnents/list/List"
import Navbar from "../../compnents/navbar/Navbar"
import "./Home.scss"



const Home = () => {
    return (
        <div className='Home'>   
        <Navbar/>
        <Featured/>
        <List/>
        <List/>
        <List/>
        </div>
    )  
}

export default Home

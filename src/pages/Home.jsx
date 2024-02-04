import { useEffect } from "react"
import { useNavigate } from "react-router"
import PreLoader from "../components/PreLoader";


const Home = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/auth/login")
        },1000)
    },[])
    return (
        <div className="w-screen h-screen bg-[#000] flex items-center justify-center">
        <PreLoader />
        </div>
    )
}

export default Home

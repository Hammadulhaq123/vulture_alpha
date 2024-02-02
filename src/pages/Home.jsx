import { useEffect } from "react"
import { useNavigate } from "react-router"


const Home = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/auth/login")
        },1000)
    },[])
    return (
        <>
        </>
    )
}

export default Home

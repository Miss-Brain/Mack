import iconn from "../assets/ikon.png"
import { Link } from 'react-router-dom';



const Homepage = () => {
    return ( 
        <div className="bg-white bg-image home w-full h-screen space-y-13">

            {/* nav bar */}
            <nav className=" container mx-auto p-6 flex flex-row justify-between">
                <div>
                    <img className="object-cover my-0 h-16 w-20" src={iconn} alt="" />
                </div>
                <div className="flex space-x-8 justify-between">
                    <button className="font-bold font-sans text-1xl hover:text-lightGreen">HOME</button>
                    <button><Link to="/about" className="flex items-center font-bold font-sans text-1xl hover:text-lightGreen" >ABOUT</Link></button>
                    <button className="font-bold font-sans text-1xl hover:text-lightGreen">LISTEN NOW</button>
                </div>
            </nav>

            {/* Hero */}
            <div className="container h-[550px] flex flex-col-reverse w-full items-center mx-auto px-6 mt-10 
            md:space-x-13 md:space-y-0 md:flex-row ">
                {/* text */}
                <div className="my-auto md:w-1/2  space-y-14 flex-row items-center">
                    <h1 className="text-8xl font-mono font-bold md:text-7xl md:text-left text-left">
                        JUKE
                    </h1>
                    <p className="text-left font-sans md:text-left text-2xl">
                        Unleash the power of our state-of-the-art 
                        Recommendation System to explore 
                        music tailored to your taste, creating a 
                        personalized musical journey
                    </p>
                   
                    <div className="flex p-2 mt-4 w-full justify-between">
                        <button className="border-4 ml-0 shadow-md border-black 
                        hover:shadow-darkGrey hover:shadow-lg m-auto 
                        md-[768px]:ml-0 p-3 rounded-full font-bold hover:text-lightGreen ">LISTEN NOW</button>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;
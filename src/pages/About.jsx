import LeftArrow from "../assets/left.png"
import { Link } from 'react-router-dom';


const About = () => {
    return ( 
        <div id="about" className="w-full h-screen mt-10 items-center relative justify-center">
            
            {/* <div className="h-40 mt-10 "></div> */}
            
                <div className="flex items-start ml-6">
                    <Link to="/jkk" >
                        <img className="object-cover my-0 h-14 w-16" src={LeftArrow} alt="" />
                    </Link>
                </div>
            
            <div className="md:flex justify-between mt-10 px-4" >
               {/* About Mack */}
               
               <div className="md:w-1/2 mt-10 md:mt-0 mx-4">   
                    <h1 className="text-2xl font-bold font-sans my-4">Mack</h1>
                    <p className="max-h-[510] max-w-auto font-mono text-1xl text-left">
                    Mack is an innovative AI-powered music recommendation system that revolutionizes the way you discover and enjoy music. 
                        It is the brainchild of a talented team of developers, including Chioma and Emma, who are passionate about music and artificial intelligence.
                        Driven by their expertise and love for music,<b> Chioma and Emmah</b> came together to create Mack, a cutting-edge 
                        pck analyzes song titles and genres to provide accurate and tailored recommendations.
                        With Mack, you can effortlessly explore a world of musical possibilities based on your favorite genres and 
                        song titles. The intelligent algorithms of Mack, crafted by Chioma and Emma curate a 
                        custom-tailored selection just for you, expanding your musical horizons and introducing you to new tracks, artists, 
                        and genres that resonate with your preferences.
                        
                        Beyond its exceptional recommendation capabilities,Mack offers a seamless and intuitive interface for a 
                        delightful music playback experience. Enjoy high-quality streaming without any interruptions, immersing yourself
                        in the music carefully selected by Chioma and Emma
                        
                        Embrace the power of AI and let Mack, developed by this talented team, take your musical journey to new heights. 
                        Get ready to unlock a world of musical wonders with Mack!platform that brings personalized music recommendations to music enthusiasts worldwide. Leveraging state-of-the-art 
                        language models (LLM),
                    </p>

                </div>

            {/* contact details */}
                <div className="flex flex-col md:w-1/2 mt-10 md:mt-0 mx-4 md:pl-28">
                    <h1 className="text-2xl text-lightGreen font-bold font-sans my-4 ">DEVELOPERS</h1>
                    <a href="https://github.com/Miss-Brain/Mack" className="font-mono font-bold text-xl text-left hover:underline hover:underline-offset-8 mt-4">[ SOURCE CODE ]</a>

                </div>

            </div>
            <div className="flex justify-center md:justify-start my-14 mb-8 ml-8">
                <span className="mb-4 font-mono text-sm ">&copy; {new Date().getFullYear()} MACK. ALX</span>
            </div>.

        </div>
     );
}
 
export default About;

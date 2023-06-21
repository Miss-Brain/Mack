import Sub from "../assets/refresh.png"
import Recom from "../assets/thumbs-up.png"
import Play from "../assets/play.png"

const Feature = () => {
    return ( 
        <div className="flex justify-center items-center w-full h-screen ">
            
        <div className="md:flex flex-cols mx-6 my-auto md:space-y-0 ">

            {/* First Feature */}
            <div className="flex-col items-center md-[768px]:mx-4 ">
                <div className="flex-col space-y-6 justify-evenly">
                    <div className="flex justify-center">
                        <img className="object-cover my-0 h-16 w-20" src={Play} alt="" />
                    </div>
                    <h1 className="font-bold text-2xl font-sans text-center">PLAY MUSIC</h1>
                </div>
                <p className=" pt-4 font-sans text-2xl  text-left">Dive into a world of instant musical enjoyment 
                as you effortlessly access and indulge in your favorite
                tracks anytime, anywhere.</p>
            </div>

            {/* Second Feature */}
            <div className="flex-col mt-11 items-center md-[768px]:mr-4 ">
                <div className="flex-col space-y-6 justify-evenly">
                    <div className="flex justify-center">
                        <img className="object-cover my-0 h-16 w-20" src={Recom} alt="" />
                    </div>
                    <h1 className="font-bold text-2xl font-sans text-center">MUSIC RECOMMENDATION</h1>
                </div>
                <p className=" pt-4 font-sans text-2xl  text-left">Discover personalized music suggestions tailored 
                to your unique taste, expanding your musical horizons
                and introducing you to new songs, artists, and playlists
                that resonate with you.</p>
            </div>

            {/* Third Feature */}
            <div className="flex-col my-11 items-center  ">
                <div className="flex-col space-y-6 justify-evenly">
                    <div className="flex justify-center">
                        <img className="object-cover my-0 h-16 w-20" src={Sub} alt="" />
                    </div>
                    <h1 className="font-bold text-2xl font-sans text-center">NO SUBSCRIPTION</h1>
                </div>
                <p className=" pt-4 font-sans text-2xl text-left ">Experience premium music features without paying 
                for subscriptions, offering a cost-effective solution 
                for music lovers to enjoy high-quality music without 
                financial obligations</p>
            </div>
        </div>
            .
        </div>
     );
}
 
export default Feature;
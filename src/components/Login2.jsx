import loginimg from "../assets/signup.jpeg"
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
const Login2 = () => {
    return ( 
        <div className="relative w-full h-screen bg-zinc-900/90">
            <img src={loginimg} className="absolute w-full h-full object-cover mix-blend-overlay" alt="" />

            <div className="flex justify-center items-center h-full">
                <form className="max-w-[400px] w-full mx-auto relative bg-white p-8">
                    <h2 className="text-4xl font-bold text-center py-4">JUKE</h2>

                    <div className="flex justify-between py-8">
                        <p className="border shadow-lg hover:shadow-xl px-6 py-2 relatives flex items -center"><AiFillFacebook className="mr-2"/> facebook</p>
                        <p className="border shadow-lg hover:shadow-xl px-6 py-2 relatives flex items -center"><FcGoogle className="mr-2"/> Google</p>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="">Username</label>
                        <input type="text" className="border relative bg-gray-100 p-2"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type="password" className="border relative bg-gray-100 p-2"/>
                    </div>
                    <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">Login</button>

                    <div className="my-3">
                        <p><input type="checkbox"className="mr-2"/>Remember me</p>
                    </div>
                    

                    
                    <p className="text-center mt-8">Not a member? Sign up now</p>
                    
                    
                </form>
            </div>
        </div>
     );
}
 
export default Login2;
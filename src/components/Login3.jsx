import login3 from "../assets/login3.jpeg"


const Login3 = () => {
    return ( 
        <div className="w-full h-screen flex">
            <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
                <div className="w-full h-[550px] hidden md:block">
                    <img className="w-full h-full" src={login3} alt="" />
                </div>
                <div className="p-4 flex flex-col justify-around">
                    <form action="">
                        <h2 className="text-4xl font-bold text-center mb-8">JUKE</h2>
                        <div>
                            <input className="border p-2 mr-2" type="text" name="" id="" placeholder="Username"/>
                            <input className="border p-2 " type="text" name="" id="" placeholder="Password"/>
                        </div>

                        <button className="w-full my-4 py-2 bg-green-600 hover:bg-green-500">Login In</button>
                        <p className="text-center">Forgot Username or Password</p>
                    </form>

                    <p className="text-center" >Sign up</p>

                </div>
            </div>
        </div>
     );
}
 
export default Login3;
import loginImg from '../assets/login - Copy.jpeg'

const Login = () => {
    return ( 
        <div  className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img src={loginImg} className="w-full h-full object-cover" alt="" />
            </div>

            <div className='bg-gray-200 flex flex-col justify-center'>
                <form className="max-w-[400px] w-full mx-auto bg-white p-4">
                    <h2 className='text-4xl font-bold text-center py-6'>JUKE</h2>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="">Username</label>
                        <input className='border' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="">Password</label>
                        <input className='border' type="Password" />
                    </div>
                    <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Login</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center '> <input className='mr-2' type="checkbox" />Remember Me</p>
                        <p className=''>Create an account</p>
                    </div>
                </form>
            </div>
            
        </div>
     );
}
 
export default Login;
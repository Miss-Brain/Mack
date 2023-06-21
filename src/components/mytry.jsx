

const Mytry = () => {
    return ( 
        <div className="justify-center login-page w-full h-screen">
            <div className="flex w-full h-full">
                <form className="bg-white m-auto max-h-[400px] h-full " action="">
                    <div className="flex flex-col my-2">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Mytry;
// className={`login-page bg-cover bg-center bg-no-repeat ${imageUrl}`}
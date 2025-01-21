
import React,{useState} from "react";

import { FcGoogle } from "react-icons/fc";
import Pursuit from "./pursuit future.jpg"


const Index = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center border-purple-400 h-screen">
                <form className="flex flex-col gap-10 p-10 w-[500px] rounded-md h-screen justify-center">
                    <h1 className="font-serif text-[30px]">Signup</h1>
                    <div className="flex flex-col">
                        <input
                            required
                            className="border-b-2 p-3 outline-none border-purple-600"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            required
                            className="border-b-2 p-3 outline-none border-purple-600"
                            type="text"
                            placeholder="Email"
                        />
                    </div>

                    <div className="flex flex-col relative">
                        <input
                            required
                            type={passwordVisible ? 'text' : 'password'}
                            className="border-b-2 p-3 outline-none border-purple-600"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-2 bg-none border-none cursor-pointer"
                        >
                            {passwordVisible ? '👁️' : '🙈'}
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <div
                            type="submit"
                            className="border-2 text-purple-600 border-purple-600 bg-purple-200 p-2 rounded-md text-[20px] h-auto w-auto hover:bg-purple-600 hover:text-white cursor-pointer"
                        >
                            Register
                        </div>
                        <a href="" className="flex text-slate-500">
                            Login
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p>or</p>
                        <div
                            type="submit"
                            className="flex items-center justify-center gap-5 border-2 text-purple-600 border-purple-600 bg-purple-200 p-2 rounded-md text-[20px] h-auto w-auto hover:bg-purple-600 hover:text-white cursor-pointer"
                        >
                            <FcGoogle /> Sign with Google
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <img className="h-screen w-full" src={Pursuit} />
            </div>
        </div>
    );
};

export default Index;


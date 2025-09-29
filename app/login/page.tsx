"use client";

import axios from "axios";
import  Cookie  from "js-cookie";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const data = axios({
    //     url: "api",
    //     method: "POST",
    //     data: {
    //         username: username,
    //         password: password
    //     }
    // })

    const handleLogin = () => {

    

    const response = {
        token: "1d52457f5102c26b3816bcb5c821394cf148cdfb37251b7ee99b729017a6ca001ccf87d87e7e297e43bb7a111f733b3274145ab233e14cdddbac65f8eeb9898b",
        expire: 7,
    }

    Cookie.set("token", response.token, { expires: response.expire });
    redirect("/dashbord")
};
    return (
        <div className="container mx-auto">


            <div className="mt-64 flex flex-col lg:w-1/2 mx-auto justify-center gap-6 border  border-pink-50 p-14 rounded-2xl "  >
                <p className="text-2xl font-bold items-center mx-auto text-pink-100">Login</p>
                <input className="px-4 py-3 bg-gray-900 rounded-xl focus:bg-gray-950 focus:border-0  autofill:bg-gray-950 autofill:text-white" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email" />
                <input className="px-4 py-3 bg-gray-900 rounded-xl focus:bg-gray-950 focus:border-0  autofill:bg-gray-950 autofill:text-white" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passwprd" />
                <button className="bg-pink-900 text-xl text-white py-2 px-8 w-fit justify-center items-center mx-auto rounded-xl cursor-pointer hover:bg-pink-950 " onClick={() => { console.log("rr") }}>Login</button>
            </div>
        </div>
    );
}

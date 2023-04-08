import React, {useState, useEffect} from 'react';
import logo from "../../img/png/logo-no-background.png";
import Navbar from '../../components/Navbar';
import axios from "axios";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false)

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await axios.post("http://127.0.0.1:3001/auth/register", {
            name: name,
            email: email,
            telephone: phone,
            password: password
        })

        let data = await res.data;
        if(data.status !== 200)
            setErr(true);

        window.location.href('/login');
    }

    return (
        <> 
        <Navbar />
        <section className="h-screen bg-gradient-to-l from-[#06ef68] from-0% to-[#3758d1]">
            <div className="h-full">
                {/* <!-- Left column container with background--> */}
                <div
                className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div
                    className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img
                    src={logo}
                    className="w-full"
                    alt="Sample image" />
                </div>

                {/* <!-- Right column container --> */}
                <div className="mb-12 h-[50vh] bg-white p-[5vh] rounded-sm md:mb-0 md:w-8/12 lg:w-9/12 xl:w-5/12">
                    <form onSubmit={handleSubmit}>
                    {/* <!--Sign in section--> */}
                    <div
                        className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="mb-0 mr-4 text-lg">Sign up</p>
                    </div>
                        
                    <div
                        className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    </div>

                    {/* <!-- Name input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Name address" 
                        onChange={handleName}/>
                        <label
                        for="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Name
                        </label>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                        onChange={handleEmail} />
                        <label
                        for="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Email address
                        </label>
                        </div>

                    {/* <!-- Phone input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Telephone "
                        onChange={handlePhone} />
                        <label
                        for="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Phone
                        </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput22"
                        placeholder="Password"
                        onChange={handlePassword} />
                        <label
                        for="exampleFormControlInput22"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Password
                        </label>
                    </div>

                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left">
                        <button
                        type="submit"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal bg-[#4ad880] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init>
                        Register
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
            {err && <p class="text-red-600">This text is in the red color.</p>}
        </>
    )
}

export default Login
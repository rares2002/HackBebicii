import React, {useState, useEffect} from 'react'
import axios from "axios"
import Navbar from '../../components/Navbar';

function Profile() {
    const [user, setUser] = useState({});

    const getUser = async () => {
        let tkn = localStorage.getItem('token');
        let res = await axios.get("http://127.0.0.1:3001/auth/profile/", {
            headers: {
                'Authorization': `Bearer ${tkn}`
            }
        });
        let data = await res.data;

        console.log(data);
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div class="h-screen flex items-center justify-center">
            <Navbar />
            <div class="border-b-2 block md:flex">

                <div class="w-full p-8 bg-white lg:ml-4 shadow-md">
                    <div class="rounded shadow p-6">
                        <div class="pb-6">
                        <label for="name" class="font-semibold text-gray-700 block pb-2">Name</label>
                        <div class="flex">
                            <p class="border-1 rounded-r px-4 py-2 w-full">{user.name}</p>
                        </div>
                        </div>
                        <div class="pb-5">
                            <label for="about" class="font-semibold text-gray-700 block pb-2">Email</label>
                            <div class="flex">
                                <p class="border-1 rounded-r px-4 py-2 w-full">{user.email}</p>
                            </div>
                            <label for="about" class="font-semibold text-gray-700 block pb-2">Phone</label>
                            <div class="flex">
                                <p class="border-1 rounded-r px-4 py-2 w-full">{user.telephone}</p>
                            </div>
                            <label for="about" class="font-semibold text-xl text-gray-700 block pb-4 pt-4">Amount</label>

                            <div class="flex">
                                <p class="border-1 rounded-r text-lg px-4 py-2 w-full">{user.amount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Profile
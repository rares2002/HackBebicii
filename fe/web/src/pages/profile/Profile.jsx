import React, {useState, useEffect} from 'react'
import axios from "axios"
import Navbar from '../../components/Navbar';
import Achievement from '../../components/Achievement';
import Cards from '../../components/Cards';

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
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div class="h-screen bg-fixed w-full flex items-center justify-center bg-gradient-to-l from-[#06ef68] from-0% to-[#3758d1] to-100%">
            <Navbar />
            <div class="w-[95vw] flex flex-row justify-between items-start ">
                {/* PROFILE COMPONENT */}
                <div class="w-auto p-8 rounded-[20px] bg-[#222c57] text-[#6ec995] lg:ml-4">
                    <div class="rounded p-6">
                        <div class="pb-6">
                            <label for="name" class="font-semibold block pb-2">Name</label>
                            <div class="flex">
                                <p class="border-1 rounded-r px-4 py-2 w-full">{user.name}</p>
                            </div>
                        </div>
                        <div class="pb-5">
                            <label for="about" class="font-semibold block pb-2">Email</label>
                            <div class="flex">
                                <p class="rounded-r px-4 py-2 w-full">{user.email}</p>
                            </div>
                            <label for="about" class="font-semibold block pb-2">Phone</label>
                            <div class="flex">
                                <p class="border-1 rounded-r px-4 py-2 w-full">{user.telephone}</p>
                            </div>
                            <label for="about" class="font-semibold text-xl block pb-4 pt-4">Amount</label>

                            <div class="flex">
                                <p class="rounded-r text-lg px-4 py-2 w-full">{user.amount}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ACHIEVEMENTS LIST */}
                <div className='relative w-2/3'>
                    <h1 className='relative font-bold text-[2vw] border-b-1 rounded-r text-white mb-[3vh]'>Cards: </h1>
                    <Cards />
                    
                    <h1 className='relative font-bold text-[2vw] border-b-1 rounded-r text-white mb-[3vh]'>Achievements: </h1>
                    <Achievement />                    
                </div>
                
            </div>    
        </div>
    )
}

export default Profile
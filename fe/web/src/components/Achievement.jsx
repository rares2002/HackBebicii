import React, {useState, useEffect} from 'react'
import Modal from './Modal'
import axios from 'axios'

function Achievement(props) {
    const [achievements, setAchievements] = useState([]);
    
    const getAchievements = async () => {
        let res = await axios.get("http://127.0.0.1:3001/achievements/my-achievements", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        let data = await res.data;
        console.log(data)
        setAchievements(data);
    }

    useEffect(() => {
        getAchievements();
    }, [])

    return (
        <ul class="w-full">
            {achievements.map((elem) => {
                return (
                    <li
                        class="w-full flex flex-row justify-between mb-[2vh] pl-[5vw] pr-[5vw] text-[#6ec995] font-bold text-[1.25rem] bg-[#222c57] rounded-xl items-center border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                        <p>{elem.achievement.name}</p>
                        <Modal title={elem.achievement.name} description={elem.achievement.reward} />
                    </li>
                )
            })}
            
        </ul>
    )
}

export default Achievement
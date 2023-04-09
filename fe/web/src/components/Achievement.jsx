import Modal from './Modal'
import React, { useEffect, useState } from 'react'
import { SimpleGrid, Card, CardHeader, CardBody, Heading, CardFooter } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import axios from 'axios'

function Achievement() {
    const [achievements, setAchievements] = useState([])
    const [show, setShow] = useState(false)
    const fetchach = async () => {
        console.log(localStorage.getItem('token'));
        const response = await axios.get('http://localhost:3001/achievements/my-achievements', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response)
        setAchievements(response.data)
    }

    useEffect(() => {
        fetchach();
    }, [])
    return (
        <>
            {achievements.map((achievement) => (
                <SimpleGrid columns={3} spacing={10}>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{achievement.achievement.name}</Heading>
                        </CardHeader>
                        <CardFooter>
                            <Modal show={show} setShowModal={setShow} title={achievement.achievement.name} description={achievement.achievement.reward}></Modal>
                            <Button onClick={() => setShow(true)}>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            ))
            }
        </>
    )
}

export default Achievement
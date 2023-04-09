import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';

export default function Subscription() {
    const [subscriptions, setSubscriptions] = useState([]);

    const fetchSubs = async () => {
        const result = await axios.get('http://localhost:3001/subscriptions/all-subscriptions', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(result.data)
        setSubscriptions(result.data);
    }
    useEffect(() => {
        fetchSubs();
    }, [])
    return (
        <>
            <Navbar />
            {subscriptions.map((sub) => (
                <SimpleGrid class="mt-100" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{sub.name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Heading>{sub.price}</Heading>
                            <Text>{sub.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>

            ))}
        </>

    )
}
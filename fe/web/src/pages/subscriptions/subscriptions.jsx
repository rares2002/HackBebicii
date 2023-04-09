import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import { Box } from '@mui/material';

export default function Subscription() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [subscriptions, setSubscriptions] = useState([]);
    const [cards, setCards] = useState([]);

    const getCards = async () => {
        let res = await axios.get("http://127.0.0.1:3001/card/get-my-cards", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        let data = await res.data;
        setCards(data);
        }

    const sendSubscribe = async (id, card) => {
        console.log(card)
        let res = await axios.post("http://127.0.0.1:3001/subscriptions/subscribe/" + id,  {
            card: card
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }   
        })
        let data = await res.data;
        console.log(data);
    }

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
        getCards();
    }, [])
    return (
        <div className='bg-gradient-to-r from-[#06ef68] from-40% to-[#3758d1] to-100% scroll-smooth w-full h-screen'>
            <Navbar />
            <div className="m-[5vw] h-[80vh] ">
                <h1 className='relative mt-[10vh] mb-[5vh] text-center text-[5rem]'>Subscriptions</h1>
                <SimpleGrid spacingX="10vw" spacingY="3vh" templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {subscriptions.map((sub) => (
                        <Card>
                            <CardHeader>
                                <Heading size='md'>{sub.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Heading>{sub.price}</Heading>
                                <Text>{sub.description}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={onOpen}>View here</Button>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>Select a card</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                    </ModalBody>
                                        {cards.map((card, key) => {

                                            return (
                                                <Box className="flex flex-row items-center justify-between ml-[2vw] mr-[2vw] mt-[1vh]" bg="tomato" display="flex" w="100%">
                                                    <Box>
                                                        **** **** **** {card.card.last4}
                                                    </Box>
                                                    <Button onClick={() => {sendSubscribe(key+1, card.id)}}>Select Card</Button>
                                                    {/* {sub.user.find(a => {
                                                        console.log(a)
                                                        return a.card === card.id}) && <p>Done!</p>} */}
                                                </Box>
                                            )
                                        })}
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                        </Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </CardFooter>
                        </Card>
                ))}
                </SimpleGrid>
            </div>
        </div>

    )
}
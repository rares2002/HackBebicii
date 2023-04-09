import React, { useState, useEffect } from 'react'
import axios from "axios"

function Cards() {
    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [cards, setCards] = useState([]);

    const handleNumber = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
    }

    const handleExpDate = (e) => {
        e.preventDefault();
        setExpDate(e.target.value);
    }

    const handleCvc = (e) => {
        e.preventDefault();
        setCvc(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let exp_month = expDate.split('/')[0];
        let exp_year = "20" + expDate.split('/')[1];

        console.log(exp_month + "/" + exp_year);

        let res = await axios.post("http://127.0.0.1:3001/card/create", {
            number: number,
            exp_month: parseInt(exp_month),
            exp_year: parseInt(exp_year),
            cvc: parseInt(cvc)
        })

        let data = await res.data;
        console.log(data);
    }

    const getCards = async () => {
        let res = await axios.get("http://127.0.0.1:3001/card/get-my-cards", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        let data = await res.data;
        console.log(data);
        setCards(data);
    }

    useEffect(() => {
        getCards();
    }, [])

    return (
        <div className='h-full w-full flex flex-col'>
            <button
                className="bg-[#222c57] w-[10vw] text-gray-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add Card
            </button>
            <>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Add your card
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, fugiat.
                        </p> */}
                        <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Card number:
                                </label>
                                <input onChange={handleNumber} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="4213 **** **** ****" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Valid Thru
                                </label>
                                    <input onChange={handleExpDate} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="MM/YY" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        CSV 
                                    </label>
                                    <input onChange={handleCvc} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="***" />
                                </div>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                    onClick={() => {
                                        setTimeout(() => {
                                            setShowModal(false);
                                        }, 1000)
                                    }}  
                                >
                                    Add Card
                                </button>
                            </div>
                            </form>
                            
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            </>
            <div class="h-full w-full flex flex-row">
                {cards.map((card) => {
                    
                    return (
                        <div class="container p-3 flex justify-center items-center">
                            <div class="w-[20vw] p-3 bg-gradient-to-r from-gray-600 to-black rounded-lg">
                                <h1 class="text-3xl font-semibold text-gray-100 pb-4">{card.card.brand}</h1>
                                {/* <span class="text-xs  text-gray-200 shadow-2xl"></span> */}
                                <div class="flex justify-between items-center pt-4">
                                    <div class="flex flex-col">
                                        <span class="text-xs text-gray-300 font-bold">**** **** **** {card.card.last4}</span>
                                        <span class="text-xs text-gray-300 font-bold">{"0" + card.card.exp_month.toString() + "/" + (card.card.exp_year - 2000).toString()}</span>
                                    </div>
                                    <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
}

export default Cards
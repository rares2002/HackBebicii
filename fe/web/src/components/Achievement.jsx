import Modal from './Modal'
import React from 'react'

function Achievement(props) {

    return (
        <ul class="w-full">
            <li
                class="w-full flex flex-row justify-between pr-[5vw] items-center border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                <p>Achievement 1</p>
                <Modal />
            </li>
            <li
                class="w-full flex flex-row justify-between pr-[5vw] items-center border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                <p>Achievement 2</p>
                <Modal />
            </li>
            <li
                class="w-full flex flex-row justify-between pr-[5vw] items-center border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                <p>Achievement 3</p>
                <Modal />
            </li>
        </ul>
    )
}

export default Achievement
import React from 'react'

interface IInfoCard {
    title: string,
    icon: JSX.Element,
    ammount: string
}

function InfoCard(props: IInfoCard) {
  return (
    <div className='card-container'>
        <div className='upper-text-contaier'>
            <h1>{props.title}</h1>
            <p>{props.icon}</p>
        </div>
    </div>
  )
}

export default InfoCard
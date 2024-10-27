import React from 'react';
import './Lottery.css';

import { useState } from 'react';
import { genTicket, sum } from './Helper';

function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    let buyTicket = () =>{
        setTicket(genTicket(3));
    }

    return (
        <div className="lottery-container">
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div><br/>
            <button onClick={buyTicket}>Click on new Ticket!</button>
            
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}

export default Lottery;


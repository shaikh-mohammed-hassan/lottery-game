import { useState } from "react";
import {genTicket, sum} from "./helper.js"
import Ticket from "./Ticket.jsx";

function Lottery({n=3, winCondition}) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let newTicket = () => {
        setTicket(genTicket(3));
    }

    return (
        <div>
            <h1>Lottery Game</h1>

            <Ticket ticket ={ticket} />
            
            <br />
            <button onClick={newTicket}>Buy new Ticket</button>
            <h3>{isWinning && "Congratulations You Won!!"}</h3>
        </div>
    );
}

export default Lottery;
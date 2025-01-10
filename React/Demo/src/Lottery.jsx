import { useState } from "react"

const Lottery = () => {
    
    const [ticket,setTicket] = useState(0)
    const [win ,setWin] = useState(false)
    
    const handleCheckTicket = () => {
        let digit1 = (Math.floor(Math.random() * 10));
        let digit2 = (Math.floor(Math.random() * 10));
        let digit3 = (Math.floor(Math.random() * 10));

        let finalNoStr = digit1.toLocaleString()+digit2.toLocaleString()+digit3.toLocaleString() 

        setTicket(finalNoStr) 

        if((digit1+digit2+digit3) == 15){
            setWin(true)
        }
        
    }

    return (
        <div>
            
            <h3>{win ? "Lottery 'Congratulations,you won!'" : "Lottery"}Lottery</h3>

            <br />
            <p>Lottery Ticket = {ticket} </p>
            <button onClick={handleCheckTicket}>Get New Ticket</button>

        </div>
    )
}

export default Lottery
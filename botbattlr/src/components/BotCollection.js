import React, { useState, useEffect } from 'react'
import BotList from './BotList'
import "./BotCollection.css"

function BotCollection() {
    const [BotCollection, setBotCollection] = useState([]);

    useEffect(() => {
        fetch(" http://localhost:3000/bots")
        .then(res => res.json())
        .then((data) => setBotCollection(data));
    }, [])
  return (
   < div >
       <div className='container col'>
        {BotCollection.map((bots) => {
            return (
                <BotList
                key={bots.id}
                name={bots.name}
                health={bots.health}
                damage={bots.damage}
                armor={bots.armor}
                bot_class={bots.bot_class}
                catchphrase={bots.catchphrase}
                image={bots.avatar_url}
                created={bots.created_at}
                updated={bots.updated_at}
                />
            );
        })}
        </div>
   </div>
  );
}

export default BotCollection

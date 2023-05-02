import React, { useState, useEffect } from 'react'
import BotList from './BotList'


function BotCollection() {
    const [BotCollection, setBotCollection] = useState([]);

    useEffect(() => {
        fetch(" http://localhost:3000/bots")
        .then(res => res.json())
        .then((data) => setBotCollection(data));
    }, [])
  return (
   < div >
      <h3>CHOOSE A BOT FOR YOUR ARMY:</h3>
       <div className='container row' style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
           
           borderWidth:"200px", gridGap:"1rem", width:"18rem", overflow:"hidden", 
           whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
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

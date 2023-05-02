import React from 'react'

function BotList({
    name,
    image,
    catchphrase,
    health,
    damage,
    armor,
    bot_class,
    created,
    updated,
 }) {
  function armyHandler() {}
  return (
    <>
     <div>
      <div class="card col-sm-3" style={{width: "18rem"}}>
        <p class="card-text">Bot name:{name}</p>
        <img src={image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <p class="card-text">phrase:{catchphrase}</p>
            <p class="card-text">health:{health}</p>
            <p class="card-text">damage:{damage}</p>
            <p class="card-text">armor:{armor}</p>
            <p class="card-text">class:{bot_class}</p>
            <p class="card-text">created:{created}</p>
            <p class="card-text">updated:{updated}</p>
            <button onClick={armyHandler}>Add Bot</button>
            <button onClick={armyHandler}>x</button>
            {}
        </div>
      </div>
      </div>
      </>
  );
}

export default BotList

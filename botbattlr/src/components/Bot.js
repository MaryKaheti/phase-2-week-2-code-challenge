import React from "react";


function Bot({bot, addRemoveBot, inArmy, deleteBot}) {

    return (
        <div className="ui column">
            <div
                className="ui card"
                key={bot.id}
                onClick={() => {
                    addRemoveBot(bot, inArmy)
                }}
            >
                <div className="image">
                    <img alt="oh no!" src={bot.avatar_url}/>
                </div>
                <div className="content">
                    <div className="header">
                        {bot.name}
                    </div>
                </div>
                <div className="extra content">
          <span>
            <i className="icon heartbeat"/>
              {bot.health}
          </span><span>
            <i className="icon lightning"/>
                    {bot.damage}
          </span>
                    <span>
            <i className="icon shield"/>
                        {bot.armor}
          </span>
                    <span>
            <div className="ui center aligned segment basic">
              <button
                  className="ui negative button"
                  onClick={() => {
                      deleteBot(bot)
                  }}
              >
                delete 
              </button>
            </div>
          </span>
                </div>
            </div>
        </div>
    );
}

export default Bot;
import React from 'react'


const CharactersItems = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name: </strong>{item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname: </strong>{item.nickname}
                        </li>
                        <li>
                            <strong>Birthday: </strong>{item.birthday}
                        </li>
                        <li>
                            <strong>Status: </strong>{item.status}
                        </li>
                        <li>
                            <strong>Seasons: </strong>{item.appearance.map(el => el).join(', ')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharactersItems;
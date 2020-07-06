import React from 'react'

const CharacterItem = ({ item }) => {
  console.log(item)

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.thumbnail.path + '.jpg'} alt=""></img>
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Description: </strong> {item.description}
            </li>
            <li>
              Detail: <a href={item.urls[0].url}>Associated Comic Series</a>
            </li>
            <li>
              Wiki: <a href={item.urls[1].url}>Abilities & Statistics</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem

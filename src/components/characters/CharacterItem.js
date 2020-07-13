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
              Detail:{' '}
              <a
                href={item.urls[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Detailed Information
              </a>
            </li>
            <li>
              Comics:{' '}
              <a
                href={item.urls[1].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Associated Comic Series
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem

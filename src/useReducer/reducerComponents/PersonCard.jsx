import React from 'react'

export const PersonCard = ({person}) => {
    const {picture,name,id} = person;
  return (
    <div className='person-card'>
        <h4>Person Card </h4>
        <img src={picture.large} alt="person" />
        <p>Name: <i>{name.first} {name.last}</i></p>
        <p><strong>id: {id.value}</strong></p>
    </div>
  )
}

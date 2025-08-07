import React from 'react'
import UsersList from '../components/UsersList'
const Users = props => {
  const USERS = [
    {
      id: 1,
      name: 'Max Schwarz',
      places: 4,
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-hero?qlt=82&ts=1742179190787'
    }
  ]
  return (

    <UsersList users={USERS}/>
  )
}

export default Users
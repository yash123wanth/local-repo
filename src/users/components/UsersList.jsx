import React from 'react'
import './UsersList.css'
import Card from '../../shared/components/UIElements/Card'
import UserItem from './UserItem'
const UsersList = props => {

  if(props.users.length === 0){
    return <div className='center'>
      <Card>
        <h2>No users found.</h2>
      </Card>
      
      </div>
  }
  return(
    <ul className='users-list'>
      {props.users.map(user => (
        <UserItem key={user.id} id={user.id} name={user.name} placeCount={user.places} image={user.image}/>
      )
      )}
    </ul>
  )
}
export default UsersList
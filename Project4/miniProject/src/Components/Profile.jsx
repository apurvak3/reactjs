import React, {useContext} from 'react'
import userContext from '../Context/userContext'
function Profile() {
    const {user} = useContext(userContext);
    if(!user) return <div>Pleases Login</div>
  return (
    <div>Welcome {user.user.name}</div>
  )
}

export default Profile
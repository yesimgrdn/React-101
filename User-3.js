import React, {useState} from 'react'

export default function User() {
const[user,setUser] = useState({name:"Mehmet" , surname : "Seven"})

  return (
    <div>
      {user.name} {user.surname}

<br/><br/>

<div>
<button onClick={()=> setUser({...user, name:"Ahmet"})}>İsmi Değiştir</button>
<button onClick={()=> setUser({...user, name:"Yılmaz"})}>Soyadı Değiştir</button>

</div>

    </div>
  )
}

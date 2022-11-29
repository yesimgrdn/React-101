import React from 'react'

export default function User({data,friends}) {
  return (
    <div>User
     
      <div>İsim : {data.name}</div>
      <div>Şehir : {data.city}</div>
      <div>Yaş : {data.age}</div>
      
      <h3>Arkadaşları</h3>

{
  friends.map((friends,index) => (
  <div key={index}>{friends}</div>
  ))
}

     
      <hr/>
    </div>
  )
}

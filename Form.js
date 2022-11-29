import React,{useState} from 'react'

export default function Form() {
const [name,setName] = useState("")
const [surname,setSurname] = useState("")
const [gender,setGender] = useState("Erkek")

  return (
    <div>
        <div>İSİM <br></br>

        <input placeholder='İsim' value={name} onChange={(event)=> setName(event.target.value)} />
        <input placeholder='Soyisim' value={surname} onChange={(event)=> setSurname(event.target.value)} />

        </div>

        <div>
            {name} {surname}
        </div>

        <br></br>

        <div>
            CİNSİYET
        </div>
        <div>
            <select value={gender} onChange={(event)=> setGender(event.target.value)}>
                <option value="Erkek">Erkek</option>
                <option value="Bayan">Bayan</option>
            </select>
        </div>
<hr></hr>
        <div>
            Adı : {name} <br></br> Soyadı : {surname} <br></br> Cinsiyet : {gender}
        </div>


    
    </div>
    
  )
}

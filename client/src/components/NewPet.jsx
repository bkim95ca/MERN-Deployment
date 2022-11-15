import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const NewPet = (props) => {

  const navigate = useNavigate();

    
  const [petName, setPetName] = useState("")
  const [petNameError, setPetNameError] = useState("")
  const [petType, setPetType] = useState("")
  const [petTypeError, setPetTypeError] = useState("")
  const [petDescription, setPetDescription] = useState("")
  const [petDescriptionError, setPetDescriptionError] = useState("")
  const [skills1, setSkills1] = useState("")
  const [skills2, setSkills2] = useState("")
  const [skills3, setSkills3] = useState("")
  
  const [errors, setErrors] = useState([]);

  const createPet = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/pet/new", {petName, petType, petDescription, skills1, skills2, skills3})
        .then(res => {
            console.log("client success")
            console.log(res.data)
            navigate("/pets")
        })
        .catch(err => {
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
          navigate("/pet/new")
        })
  }

  const petNameValidation = (e) => {
    setPetName(e.target.value);
    if(e.target.value.length < 3 && e.target.value.length > 0) {
        setPetNameError("Pet name must be at least 3 characters!");
    } else {
      setPetNameError("");
    }
}

const petTypeValidation = (e) => {
  setPetType(e.target.value);
  if(e.target.value.length < 3 && e.target.value.length > 0) {
      setPetTypeError("Pet type must be at least 3 characters!");
  }
  else {
      setPetTypeError("");
  }
}

const petDescriptionValidation = (e) => {
setPetDescription(e.target.value);
if(e.target.value.length < 3 && e.target.value.length > 0) {
    setPetDescriptionError("Pet description must be at least 3 characters!");
}
else {
    setPetDescriptionError("");
}
}



  return (
    <div>
      <div>
        <h1>Pet Shelter</h1>
        <p><Link to={"/pets"}>back to home</Link></p>
      </div>
      <h2>Know a pet needing a home?</h2>
      <form onSubmit={createPet} >
        {errors.map((err, index) => <p key={index}>{err}</p>)}
          <div className='d-flex justify-content-between'>
            <div>
                <div>
                    <label>Pet Name</label>
                    <input onChange={petNameValidation} value={petName} type="text" />
                    {
                  petNameError ?
                  <p style={{color:'red'}}>{ petNameError }</p> :
                  ''
                }<br />
                </div>
                <div>
                    <label>Pet Type</label>
                    <input onChange={petTypeValidation} value={petType} type="text" />
                    {
                  petTypeError ?
                  <p style={{color:'red'}}>{ petTypeError }</p> :
                  ''
                }<br />
                </div>
                <div>
                    <label>Pet Description</label>
                    <input onChange={petDescriptionValidation} value={petDescription} type="text" />
                    {
                  petDescriptionError ?
                  <p style={{color:'red'}}>{ petDescriptionError }</p> :
                  ''
                }<br />
                </div>
            </div>
              <div>
                  <label>Skills 1</label>
                  <input onChange={e => setSkills1(e.target.value)} type="text" value={skills1}/>
              </div>
              <div>
                  <label>Skills 2</label>
                  <input onChange={e => setSkills2(e.target.value)} type="text" value={skills2}/>
              </div>
              <div>
                  <label>Skills 3</label>
                  <input onChange={e => setSkills3(e.target.value)} type="text" value={skills3}/>
              </div>
              <button>Add Pet</button>
          </div>
        </form>
    </div>
  )
}

export default NewPet
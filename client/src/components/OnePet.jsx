import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const OnePet = (props) => {
  const navigate = useNavigate();
    
  const [petName, setPetName] = useState("")
  const [petType, setPetType] = useState("")
  const [petDescription, setPetDescription] = useState("")
  const [skills1, setSkills1] = useState("")
  const [skills2, setSkills2] = useState("")
  const [skills3, setSkills3] = useState("")

  const {id} = useParams()

  useEffect(() => {
      axios.get(`http://localhost:8000/pet/${id}`)
          .then(res => {
              console.log(res.data)
              setPetName(res.data.petName)
              setPetType(res.data.petType)
              setPetDescription(res.data.petDescription)
              setSkills1(res.data.skills1)
              setSkills2(res.data.skills2)
              setSkills3(res.data.skills3)
          })
          .catch(err => {
              console.log(err)
          })
  }, [id])

  const deletePet = (deleteID) => {
    axios.delete(`http://localhost:8000/pet/${deleteID}`)
        .then(res => {
            console.log("Delete Success", res.data)
            navigate("/pets")
            // setPet(pet.filter((onePet) => onePet._id !== deleteID)) 
        })
        .catch(err => {
            console.log(err)
        })
}



return (
  <div>
      <h1>{petName}</h1>
      <Link to={"/pets"} className='btn btn-primary'>Home</Link>
      <button className='btn btn-danger' onClick={() => deletePet(id)}>Adopt {petName}</button>
          <div className='d-flex justify-content-evenly'>
              <div className='border'>
                  <h1>About</h1>
                  <ul>
                      <li>Pet Type: {petType}</li>
                      <li>Description: {petDescription}</li>
                      <li>Skills: {skills1}</li>
                      <li>{skills2}</li>
                      <li>{skills3}</li>
                  </ul>
              </div>
          </div>
  </div>
)
}

export default OnePet
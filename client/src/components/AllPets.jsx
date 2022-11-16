import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const AllPets = (props) => {

  const [pet, setPet] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            console.log(res.data)
            setPet(res.data)
        })       
        .catch(err => {
            console.log(err)
        })  
}, [])

const sortedPets = pet.sort((a,b) => a.petType.localeCompare(b.petType))

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1>Pet Shelter</h1>
        <Link to={"/pet/new"}>add a pet to the shelter</Link>
      </div>
      <p>These pets are looking for a good home</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            sortedPets.map((onePet, i) => {
              return (
                <tr key={onePet._id}>
                  <td>{onePet.petName}</td>
                  <td>{onePet.petType}</td>
                  <td><Link to={`/pet/${onePet._id}`} >details</Link> | <Link to={`/pet/${onePet._id}/edit`}>edit</Link></td> 
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllPets
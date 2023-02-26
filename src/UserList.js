import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios";

function UserList() {
   const [listOfUSer,setlistOfUSer] = useState([])
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setlistOfUSer(res.data))
   }
   ,[])
  return (
    <table>
      <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Website</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
        {listOfUSer.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
             <td>{user.name}</td>
             <td>{user.username}</td>
             <td>{user.email}</td>
             <td>{user.address.street}</td>
             <td>{user.phone}</td>
             <th>{user.website}</th>
             <th>{user.company.name}</th>
          </tr>
        )
        )}
        </tbody>
    </table>
  )
}

export default UserList
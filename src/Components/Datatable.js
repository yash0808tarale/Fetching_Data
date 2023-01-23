import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowsAltV } from 'react-icons/fa';


const Datatable = ({ Users }) => {
  const [query,setQuery]=useState("");
  const [data,setData] = useState(Users);
  const [order,setOrder]=useState("ASC");
  const sorting=(col)=>{
    if(order==="ASC"){
      const sorted = [...data].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    else if(order==="DSC"){
      const sorted = [...data].sort((a,b)=>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  }
  return (
    <>
      <input type="text" placeholder='Search...' className='search' onChange={e=>setQuery(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={()=>sorting("username")}> Username <FaArrowsAltV/></th>
            <th onClick={()=>sorting("first_name")}>First Name <FaArrowsAltV/></th>
            <th onClick={()=>sorting("last_name")}>Last Name <FaArrowsAltV/></th>
            <th onClick={()=>sorting("email")}>Email <FaArrowsAltV/></th>
            <th onClick={()=>sorting("gender")}>Gender <FaArrowsAltV/></th>
            <th onClick={()=>sorting("dob")}>DOB <FaArrowsAltV/></th>
          </tr>
        </thead>
        {
          data.filter((item)=> {
            return query.toLocaleLowerCase()==='' ? item : item.first_name.toLocaleLowerCase().includes(query)
          }).map(usr => {
            return (
              <tbody key={usr.id}>
                <tr>
                  <td>{usr.id}</td>
                  <td>{usr.username}</td>
                  <td>{usr.first_name}</td>
                  <td>{usr.last_name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.dob}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </>
  )
}

export default Datatable;

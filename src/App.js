import React,{useState} from 'react';
import './App.css';
import Datatable from './Components/Datatable';
import Pagination from './Components/Pagination';
import Users from './Components/users.json'

function App() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(40);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = Users.slice(indexOfFirstUser,indexOfLastUser);

  const paginate =(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  return (
    <div className='container'>
    <Datatable Users={currentUsers}/>
    <Pagination usersPerPage={usersPerPage} totalUsers={Users.length} paginate={paginate}/>
    </div>
  );
}

export default App;

import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { context } from '../../../App';
import './MarksTable.css'


function MarksTable() {
  const{ serverLink} = useContext(context)
  const [AllStudents, setAllStudents] = useState([])
  const { selectedClass, selectedSemester } = useParams();

  useEffect(() => {
    AllData()
  }, [])

  const AllData = async () => {
    let result = await axios.get(`${serverLink}/StdRecord/ShowStudentRecord/`)
    result = result.data
    setAllStudents(result)

  }

  const filteredStudents =
    selectedClass ? AllStudents?.filter((student) => student.Course === selectedClass ? student : null)
      : AllStudents;

  return (
    <>
      <div className='semester'>
        <h1>{selectedSemester}</h1>
        <h1>{selectedClass}</h1>
      </div>
      <div className='table'>

        {selectedClass ? (
          filteredStudents.length > 0 ? (
            <Table striped bordered hover size="sm">
              <thead>
                <tr className='table-row'>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Roll no</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>
                  <th>Subject</th>

                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td colSpan={1}>{student.Firstname}</td>
                    <td colSpan={1}>{student.Fathersname}</td>
                    <td colSpan={1}> <input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>
                    <td colSpan={1}><input type="text" /></td>

                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className='noData'>No students available for the selected class</p>
          )
        ) : (
          <p className='noData'>Please select a class</p>
        )}



      </div>
    </>

  )
}

export default MarksTable
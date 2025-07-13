import React from 'react';

function Table({ data }) {
    const rows = [];
  
    for (let i = 0; i < data.length; i++) {
      const student = data[i];
      rows.push(
        <tr key={i}>
          <td>{student.rno}</td>
          <td>{student.name}</td>
          <td>{student.sub1}</td>
          <td>{student.sub2}</td>
          <td>{student.sub3}</td>
          <td>{student.total}</td>
          <td>{student.percentage}%</td>
        </tr>
      );
    }
  
    return (
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Total</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  
  export default Table;
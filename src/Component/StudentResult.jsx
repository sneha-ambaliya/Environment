import { useState } from 'react';
import Form from './Form';
import Table from './Table';

function StudentResult() {
  const [students, setStudents] = useState([]);

  const handleFormSubmit = (formData) => {
    setStudents([...students, formData]);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <Table data={students} />
    </div>
  );
}

export default StudentResult;
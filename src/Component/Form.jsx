import { useState } from 'react';

function Form({ onSubmit }) {
  const [rno, setRno] = useState(''); 
  const [name, setName] = useState('');
  const [sub1, setSub1] = useState('');
  const [sub2, setSub2] = useState('');
  const [sub3, setSub3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Number(sub1) + Number(sub2) + Number(sub3);
    const percentage = (total / 300)*100;

    const formData = {
      rno,
      name,
      sub1,
      sub2,
      sub3,
      total,
      percentage
    };

    onSubmit(formData);
  };

  return (
    <>
    <h1 className='text-center cursor-pointer bg-black text-white font-semibold text-3xl'>JimitKaklotar</h1>
      <form onSubmit={handleSubmit}>
        <label>Roll No: </label> 
        <input type='number'  value={rno} onChange={(e) => setRno(e.target.value)} required /><br /><br/>
        <label>Name: </label> 
        <input  value={name} onChange={(e) => setName(e.target.value)} required /><br /><br/>
        <label>sub1: </label> 
        <input type="number" value={sub1} onChange={(e) => setSub1(e.target.value)} required /><br /><br/>
        <label>sub2: </label> 
        <input type="number" value={sub2} onChange={(e) => setSub2(e.target.value)} required /><br /><br/>
        <label>sub3: </label> 
        <input type="number" value={sub3} onChange={(e) => setSub3(e.target.value)} required /><br /><br />
        <button type="submit">Submit</button>
      </form>
   </>

  );
}

export default Form;
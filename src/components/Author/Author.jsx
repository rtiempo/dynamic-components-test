import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const Author = ({ contributors, setContributors, type, id }) => {
  const [initials, setInitials] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    let temp = contributors;
    temp[index] = {
      id: id,
      type: type,
      initials: initials,
      lastName: lastName,
    };
    setContributors(temp);
    console.log(JSON.stringify(contributors));
  }, [type, initials, lastName, contributors, id, setContributors]);

  return (
    <>
      <p>Author</p>
      <TextField
        id="filled-basic"
        label="Initials"
        variant="filled"
        onChange={handleChangeInitials}
      />
      <TextField
        id="filled-basic"
        label="Last Name"
        variant="filled"
        onChange={handleChangeLastName}
      />
    </>
  );
};

export default Author;

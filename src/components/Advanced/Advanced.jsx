import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const Advanced = ({ contributors, setContributors, type, id }) => {
  const [title, setTitle] = useState('');
  const [initials, setInitials] = useState('');
  const [infix, setInfix] = useState('');
  const [lastName, setLastName] = useState('');
  const [suffix, setSuffix] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  };
  const handleChangeInfix = (e) => {
    setInfix(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeSuffix = (e) => {
    setSuffix(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    let temp = contributors;
    temp[index] = {
      id: id,
      type: type,
      title: title,
      initials: initials,
      infix: infix,
      lastName: lastName,
      suffix: suffix,
    };
    setContributors(temp);
    console.log(JSON.stringify(contributors));
  }, [
    type,
    title,
    initials,
    infix,
    lastName,
    suffix,
    contributors,
    id,
    setContributors,
  ]);

  return (
    <>
      <p>Advanced</p>
      <TextField
        id="filled-basic"
        label="Title"
        variant="filled"
        onChange={handleChangeTitle}
      />
      <TextField
        id="filled-basic"
        label="Initials"
        variant="filled"
        onChange={handleChangeInitials}
      />
      <TextField
        id="filled-basic"
        label="Infix"
        variant="filled"
        onChange={handleChangeInfix}
      />
      <TextField
        id="filled-basic"
        label="Last Name"
        variant="filled"
        onChange={handleChangeLastName}
      />
      <TextField
        id="filled-basic"
        label="Suffix"
        variant="filled"
        onChange={handleChangeSuffix}
      />
    </>
  );
};

export default Advanced;

import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const Organization = ({ contributors, setContributors, type, id }) => {
  const [organization, setOrganization] = useState('');

  const handleChangeOrganization = (e) => {
    setOrganization(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    let temp = contributors;
    temp[index] = { id: id, type: type, organization: organization };
    setContributors(temp);
    console.log(JSON.stringify(contributors));
  }, [type, organization, contributors, id, setContributors]);

  return (
    <>
      <p>Organization</p>
      <TextField
        id="filled-basic"
        label="Organization"
        variant="filled"
        onChange={handleChangeOrganization}
      />
    </>
  );
};

export default Organization;

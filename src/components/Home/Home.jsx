import React, { useState } from 'react';
import InputGroup from '../InputGroup/InputGroup';
import { Button, Stack, Box } from '@mui/material';
import { v4 as uuid } from 'uuid';

const Home = () => {
  const [contributors, setContributors] = useState([]);

  const handleAddContributor = () => {
    setContributors([...contributors, { id: uuid() }]);
  };

  return (
    <>
      <Stack>
        <p>uwu</p>
        {contributors.map((contributor) => (
          <Box key={contributor.id}>
            <InputGroup
              contributors={contributors}
              setContributors={setContributors}
              id={contributor.id}
            />
          </Box>
        ))}
        <Button variant="contained" onClick={handleAddContributor}>
          Add Contributor
        </Button>
      </Stack>
    </>
  );
};

export default Home;

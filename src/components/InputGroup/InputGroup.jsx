import React, { useState, useEffect } from 'react';
import Author from '../Author/Author';
import Organization from '../Organization/Organization';
import Advanced from '../Advanced/Advanced';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
} from '@mui/material';

const InputGroup = ({ contributors, setContributors, id }) => {
  const [value, setValue] = useState('author');

  const handleChange = async (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    let temp = contributors;
    temp[index] = { ...temp[index] };
    setContributors(temp);
  }, [value, contributors, id, setContributors]);

  return (
    <Stack>
      <FormControl component="fieldset">
        <FormLabel component="legend">Contributor</FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="author" control={<Radio />} label="Author" />
          <FormControlLabel
            value="organization"
            control={<Radio />}
            label="Organization"
          />
          <FormControlLabel
            value="advanced"
            control={<Radio />}
            label="Advanced"
          />
        </RadioGroup>
      </FormControl>
      {value === 'author' && (
        <Author
          contributors={contributors}
          setContributors={setContributors}
          type={value}
          id={id}
        />
      )}
      {value === 'organization' && (
        <Organization
          contributors={contributors}
          setContributors={setContributors}
          type={value}
          id={id}
        />
      )}
      {value === 'advanced' && (
        <Advanced
          contributors={contributors}
          setContributors={setContributors}
          type={value}
          id={id}
        />
      )}
    </Stack>
  );
};

export default InputGroup;

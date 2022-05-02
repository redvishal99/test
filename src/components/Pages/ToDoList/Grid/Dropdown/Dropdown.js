import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectSmall=()=>{
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 270 }} size="small">
      <InputLabel id="demo-select-small">Bristol Office List</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Test1</MenuItem>
        <MenuItem value={20}>Test2</MenuItem>
        <MenuItem value={30}>Test3</MenuItem>
      </Select>
    </FormControl>
  );
}
export default SelectSmall;
/** MUI Components */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useInputChange from '../hooks/useInputChange';
import { useState } from 'react';


const fields = [
  {
    key: "stateDate",
    id: "timeline-start",
    label: "State Date"
  },
  {
    key: "endDate",
    id: "timeline-end",
    label: "End Date"
  },
  {
    key: "company",
    id: "timeline-company",
    label: "Company Name"
  },
  {
    key: "role",
    id: "timeline-role",
    label: "Role at Company"
  },
  {
    key: "asdfasd",
    id: "timeline-asdf",
    label: "Role at Company"
  }
]

const Home = () => {

  const [ formState, setFormState ] = useState({
    stateDate: "",
    endDate: "",
    company: "",
    position: ""
  });

  const handleChange = useInputChange(formState, setFormState);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Box sx={{display:"grid", gap:"20px"}}>
        <h1>Login</h1>
        <Box component="form" sx={{display:"grid", gap:"20px"}} onSubmit={handleFormSubmit}>
          {fields.map(({key, ...options}) => {
            return <TextField {...{ key, ...options }} fullWidthvariant="outlined" value={formState[key]} name={key} onChange={handleChange} />
          })}
          <Button type="submit" color="primary" variant="contained">Login</Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;

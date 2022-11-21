import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import {axios} from 'axios';

export default function MaterialUIPickers(props) {
  const [value, setValue] = React.useState(dayjs);

  const handleChange = (newValue) => {
    let myDate = new Date(newValue);
    let dateFinal = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
    setValue(dateFinal);
    // console.log(dateFinal);
    props.onSaveDateData(dateFinal);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="Date"
          className='date'
          required
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

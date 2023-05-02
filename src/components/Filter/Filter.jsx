import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice.js';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  return (
    <>
      <TextField
        sx={{ width: 400 }}
        id="standard-search"
        label="Contacts"
        variant="standard"
        type="text"
        value={filterValue}
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
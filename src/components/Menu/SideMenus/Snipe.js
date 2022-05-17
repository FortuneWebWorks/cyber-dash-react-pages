import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const useStyles = createUseStyles({
  selectLabel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  secondRow: {
    width: '100%',
    display: 'flex',
    gap: '0.5rem',
  },
});

export default function Snipe() {
  const styles = useStyles();

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl sx={{ width: '100%', gap: '1rem' }}>
      {/* 1: Select */}
      <div className={styles.selectLabel}>
        <label htmlFor="wallet">Select Wallet</label>
        <Select
          sx={{
            height: '2rem',
            backgroundColor: '#0B1E39',
            color: '#fff',
            borderRadius: '10px',
          }}
          id="wallet"
          value={personName}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>

      {/* 2: two Select */}
      <div className={styles.secondRow}>
        <div className={styles.selectLabel}>
          <label htmlFor="wallet">Select Wallet</label>
          <Select
            sx={{
              width: '100%',
              height: '2rem',
              backgroundColor: '#0B1E39',
              color: '#fff',
              borderRadius: '10px',
            }}
            id="wallet"
            value={personName}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className={styles.selectLabel}>
          <label htmlFor="wallet">Select Wallet</label>
          <Select
            sx={{
              width: '100%',
              height: '2rem',
              backgroundColor: '#0B1E39',
              color: '#fff',
              borderRadius: '10px',
            }}
            id="wallet"
            value={personName}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>

      {/* 3: Select & Btn */}
      <div className={styles.secondRow}>
        <TextField
          sx={{
            width: '100%',
            backgroundColor: '#0B1E39',
            color: '#fff',
            borderRadius: '10px',
          }}
          type="text"
          hiddenLabel
          size="small"

          // variant="filled"
        />
      </div>
    </FormControl>
  );
}

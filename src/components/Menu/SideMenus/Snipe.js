import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button } from '@mui/material';

const useStyles = createUseStyles({
  selectLabel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    fontSize: '0.8rem',
  },
  secondRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0.5rem',
  },
  textField: {
    width: '100%',
    height: '2rem',
    borderRadius: '10px',
    backgroundColor: '#0B1E39',
    color: '#fff',

    [`& fieldset`]: {
      borderRadius: '10px',
    },
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
    <FormControl
      sx={{
        width: '100%',
        maxHeight: '100%',
        overflow: 'auto',
        padding: '0.1rem',
        gap: '1rem',
      }}
    >
      {/* 1: Select */}
      <div className={styles.selectLabel}>
        <label htmlFor="wallet">Select Wallet</label>
        <Select
          sx={{
            height: '2rem',
            backgroundColor: '#0B1E39',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '0.8rem',
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
              fontSize: '0.8rem',
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
              fontSize: '0.8rem',
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
        <div className={styles.selectLabel}>
          <label htmlFor="text">Collection Slug *</label>
          <TextField
            className={styles.textField}
            type="text"
            hiddenLabel
            size="small"
            sx={{ input: { color: '#fff' } }}
            inputProps={{
              style: {
                height: '1rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
              },
            }}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            height: '2rem',
            backgroundColor: '#1956E2',
            fontSize: '0.8rem',
            borderRadius: '20px',
            padding: '0 2rem',
            whiteSpace: 'nowrap',
            textTransform: 'none',
            boxShadow: 'none',
          }}
        >
          Load Traits
        </Button>
      </div>

      {/* 4: number input */}
      <div className={styles.secondRow}>
        <div className={styles.selectLabel}>
          <label htmlFor="text">Snipe Below *</label>
          <TextField
            className={styles.textField}
            type="text"
            hiddenLabel
            size="small"
            sx={{ input: { color: '#fff' } }}
            inputProps={{
              style: {
                height: '1rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
              },
            }}
          />
        </div>
      </div>

      {/* 5: two Select */}
      <div className={styles.secondRow}>
        <div className={styles.selectLabel}>
          <label htmlFor="wallet">Snipe Trait</label>
          <Select
            sx={{
              width: '100%',
              height: '2rem',
              backgroundColor: '#0B1E39',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '0.8rem',
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
          <label htmlFor="wallet">Trait Value</label>
          <Select
            sx={{
              width: '100%',
              height: '2rem',
              backgroundColor: '#0B1E39',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '0.8rem',
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

      {/* 6: number input */}
      <div className={styles.secondRow}>
        <div className={styles.selectLabel}>
          <label htmlFor="text">Snipe Below Rank</label>
          <TextField
            className={styles.textField}
            type="text"
            hiddenLabel
            size="small"
            sx={{ input: { color: '#fff' } }}
            inputProps={{
              style: {
                height: '1rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
              },
            }}
          />
        </div>
      </div>

      {/* 7: number input */}
      <div className={styles.secondRow}>
        <div className={styles.selectLabel}>
          <label htmlFor="text">Ignore Tokens</label>
          <TextField
            className={styles.textField}
            type="text"
            hiddenLabel
            size="small"
            sx={{ input: { color: '#fff' } }}
            inputProps={{
              style: {
                height: '1rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
              },
            }}
          />
        </div>
      </div>

      {/* 8: Select */}
      <div className={styles.selectLabel}>
        <label htmlFor="wallet">RPC</label>
        <Select
          sx={{
            height: '2rem',
            backgroundColor: '#0B1E39',
            color: '#fff',
            borderRadius: '10px',
            fontSize: '0.8rem',
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

      {/* 9: text input */}
      <div className={styles.secondRow}>
        <div className={styles.selectLabel}>
          <label htmlFor="text">RPC URL *</label>
          <TextField
            className={styles.textField}
            type="text"
            hiddenLabel
            size="small"
            sx={{ input: { color: '#fff' } }}
            inputProps={{
              style: {
                height: '1rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
              },
            }}
          />
        </div>
      </div>
    </FormControl>
  );
}

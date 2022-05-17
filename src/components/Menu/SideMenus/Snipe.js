import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { styled } from '@mui/material/styles';
import {
  Stack,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

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
  activeBtn: {
    '&&': {
      backgroundColor: '#0B1E39',
      color: '#fff',
    },
  },
});

const ActiveBtn = styled(ToggleButton)`
  color: #20b2aa;

  &.Mui-selected {
    background-color: #0b1e39;
  }
`;

export default function Snipe() {
  const styles = useStyles();

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  // Toggle buttons active
  const [alignment, setAlignment] = useState('Custom');

  const handleToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
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
      <Stack spacing={0.3} fontSize="0.8rem" direction="column">
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
      </Stack>

      {/* 2: two Select */}
      <Stack spacing={1} direction="row">
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
      </Stack>

      {/* 3: Select & Btn */}
      <Stack spacing={1} direction="row" alignItems="flex-end">
        <Stack fontSize="0.8rem">
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
        </Stack>
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: '2rem',
            // backgroundColor: '#1956E2',
            fontSize: '0.8rem',
            borderRadius: '20px',
            padding: '0 2rem',
            whiteSpace: 'nowrap',
            textTransform: 'none',
            // boxShadow: 'none',
          }}
        >
          Load Traits
        </Button>
      </Stack>

      {/* 4: number input */}
      <Stack spacing={1}>
        <Stack fontSize="0.8rem">
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
        </Stack>
      </Stack>

      {/* 5: two Select */}
      <Stack spacing={1} direction="row">
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
      </Stack>

      {/* 6: number input */}
      <Stack className={styles.secondRow}>
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
      </Stack>

      {/* 7: number input */}
      <Stack className={styles.secondRow}>
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
      </Stack>

      {/* 8: Select */}
      <Stack className={styles.selectLabel}>
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
      </Stack>

      {/* 9: text input */}
      <Stack className={styles.secondRow}>
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
      </Stack>

      {/* 10: Toggle buttons */}
      <Stack>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleToggle}
          variant="contained"
          color="primary"
        >
          <ActiveBtn value="Fast(90)">Fast(90)</ActiveBtn>
          <ActiveBtn value="Multiplier">Multiplier</ActiveBtn>
          <ActiveBtn value="Custom">Custom</ActiveBtn>
        </ToggleButtonGroup>
      </Stack>

      {/* 11: two text input */}
      <Stack className={styles.secondRow}>
        <Stack direction="row" spacing={1}>
          <Stack fontSize="0.6rem" spacing={0.5}>
            <label htmlFor="text">Max Free Per Gas</label>
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
          </Stack>
          <Stack fontSize="0.6rem" spacing={0.5}>
            <label htmlFor="text">Max Peiority fee</label>
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
          </Stack>
          <Stack fontSize="0.6rem" spacing={0.5}>
            <label htmlFor="text">Gas Limit</label>
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
          </Stack>
        </Stack>
      </Stack>
    </FormControl>
  );
}

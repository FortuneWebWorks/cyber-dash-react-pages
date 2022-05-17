import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { styled } from '@mui/material/styles';
import {
  Stack,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Switch,
  Button,
  FormControlLabel,
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

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  transform: 'scale(1.3) translateX(8px)',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function Bulk() {
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
      {/* 1: input */}
      <Stack spacing={1}>
        <Stack fontSize="0.8rem" spacing={0.5}>
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

      {/* 2: input */}
      <Stack spacing={1}>
        <Stack fontSize="0.8rem" spacing={0.5}>
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

      {/* 3: Three text input */}
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
            {/* 1: Select */}
            <Stack spacing={0.3} fontSize="0.7rem" direction="column">
              <label htmlFor="wallet">Select Wallet</label>
              <Select
                sx={{
                  width: '5rem',
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
          </Stack>
        </Stack>
      </Stack>

      {/* 4: Three input */}
      <Stack className={styles.secondRow}>
        <Stack direction="row" spacing={1}>
          <Stack fontSize="0.6rem">
            <label htmlFor="text">Overbid?</label>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
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
            {/* 1: Select */}
            <Stack spacing={0.3} fontSize="0.7rem" direction="column">
              <label htmlFor="wallet">Select Wallet</label>
              <Select
                sx={{
                  width: '5.7rem',
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
          </Stack>
        </Stack>
      </Stack>

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
        }}
      >
        Load Traits
      </Button>
    </FormControl>
  );
}

import { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ActiveBtn: {
    color: '#fff',
    fontSize: '0.77rem',
    borderRadius: '20px',

    [`&.Mui-selected`]: {
      backgroundColor: theme.palette.primary.light,
      color: '#fff',
    },
  },
  toggleBtns: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    margin: '0.4rem 0',
  },
  buttonsContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
  },
}));

const MultiSelect = ({ label, width, placeHolder, options }) => {
  const classes = useStyles();

  // Toggle buttons active
  const [alignment, setAlignment] = useState('Custom');

  const handleToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box width={width} className={classes.toggleBtns}>
      <label htmlFor="text" className={classes.label}>
        {label}
      </label>
      <ToggleButtonGroup
        className={classes.buttonsContainer}
        value={alignment}
        exclusive
        onChange={handleToggle}
        variant="contained"
        size="small"
      >
        <ToggleButton
          className={classes.ActiveBtn}
          value="Fast(90)"
          size="small"
        >
          adds
        </ToggleButton>
        <ToggleButton
          className={classes.ActiveBtn}
          value="Multiplier"
          size="small"
        >
          Multiplier
        </ToggleButton>
        <ToggleButton className={classes.ActiveBtn} value="Custom" size="small">
          Custom
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default MultiSelect;

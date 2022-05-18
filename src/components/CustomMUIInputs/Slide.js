import { Box, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 1rem',
  },
}));

const marks = [
  {
    value: 0,
    label: '-10000',
  },
  {
    value: 100,
    label: '10000',
  },
];

const Slide = ({ label, width, placeHolder, options }) => {
  const classes = useStyles();

  return (
    <Box width={width} className={classes.container}>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        // getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
      />
    </Box>
  );
};

export default Slide;

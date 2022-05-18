import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    position: 'absolute',
    top: '50%',
    left: '100%',
    width: '16rem',
    height: '95%',
    borderRadius: theme.borderRadius.secondary,
    padding: '1rem',
    backgroundColor: theme.palette.primary.light,
    transform: 'translateY(-50%)',
  },
}));

export default useStyles;

import { createUseStyles } from 'react-jss';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

const useStyles = createUseStyles({
  conatiner: {
    width: '100%',
    aspectRatio: '1/1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '20px',
    padding: '0.7rem 0.7rem',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#244677',
  },
  sideMenu: {
    position: 'absolute',
    top: '50%',
    right: '-250%',
    width: '250%',
    height: '95%',
    borderRadius: '10px',
    padding: '0.7rem',
    backgroundColor: '#244677',
    transform: 'translateY(-50%)',
  },
});

const MenuItem = ({ Icon, title, isActive }) => {
  const styles = useStyles();

  return (
    <div
      className={
        isActive ? `${styles.conatiner} ${styles.active}` : styles.conatiner
      }
    >
      <Icon />
      <span>{title}</span>

      {/* Side menue */}
      {isActive && title !== 'Dashboard' && (
        <div className={styles.sideMenu}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Age
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default MenuItem;

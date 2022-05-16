import { createUseStyles } from 'react-jss';

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
        <div className={styles.sideMenu}>Sub</div>
      )}
    </div>
  );
};

export default MenuItem;

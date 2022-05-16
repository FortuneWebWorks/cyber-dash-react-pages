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
});

const MenuItem = ({ Icon, title }) => {
  const styles = useStyles();

  return (
    <div className={`${styles.conatiner} ${styles.active}`}>
      <Icon />
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;

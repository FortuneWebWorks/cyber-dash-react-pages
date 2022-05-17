import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  conatiner: {
    width: '100%',
    aspectRatio: '1/1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.7rem',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '0.7rem',
    backgroundColor: '#244677',
    transform: 'translateY(-50%)',
    // overflow: 'auto',
  },
});

const MenuItem = ({ Icon, title, active, SideMenu, onClickHandler }) => {
  const styles = useStyles();

  return (
    <div
      className={
        active === title
          ? `${styles.conatiner} ${styles.active}`
          : styles.conatiner
      }
      onClick={onClickHandler && onClickHandler.bind(null, title)}
    >
      <Icon />
      <span>{title}</span>

      {/* Side menu */}
      {SideMenu && active === title && title !== 'Dashboard' && (
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
      )}
    </div>
  );
};

export default MenuItem;

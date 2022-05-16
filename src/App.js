import { createUseStyles } from 'react-jss';
// Menu svgs
import { ReactComponent as DashboardIcon } from './assets/icons/dashboard.svg';
import { ReactComponent as SnipeIcon } from './assets/icons/snipe.svg';
import { ReactComponent as AutoMintIcon } from './assets/icons/auto-mint.svg';
import { ReactComponent as BulkIcon } from './assets/icons/bulk.svg';
// Menu components
import MenuItem from './components/Menu/MenuItem';
// Board components
import Board from './components/Board/Board';

const useStyles = createUseStyles({
  container: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 5rem',
    backgroundColor: '#000F24',
  },
  Menu: {
    position: 'relative',
    width: '7.5rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '20px',
    padding: '0.7rem',
    backgroundColor: '#0B1E39',
    color: '#fff',
  },
  board: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '20px',
    padding: '0.7rem',
    backgroundColor: '#0B1E39',
    color: '#fff',
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <>
      <div
        style={{ width: '100%', height: '10vh', backgroundColor: '#0B1E39' }}
      ></div>
      <div className={styles.container}>
        <div className={styles.Menu}>
          <MenuItem Icon={DashboardIcon} title="Dashboard" />
          <MenuItem Icon={SnipeIcon} title="Snipe" isActive={true} />
          <MenuItem Icon={AutoMintIcon} title="Auto Mint" />
          <MenuItem Icon={BulkIcon} title="Bulk" />
        </div>
        <div className={styles.board}>
          <Board />
        </div>
      </div>
    </>
  );
};

export default App;

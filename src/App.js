import { useState } from 'react';
// Jss
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
// Side menues
import Snipe from './components/Menu/SideMenus/Snipe';
import AutoMint from './components/Menu/SideMenus/AutoMint';
import Bulk from './components/Menu/SideMenus/Bulk';

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
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '20px',
    padding: '5rem',
    backgroundColor: '#0B1E39',
    color: '#fff',
  },
});

const App = () => {
  const styles = useStyles();

  const [active, setActive] = useState('Snipe');

  const onClickHandler = (target) => {
    setActive(target);
  };

  return (
    <>
      <div
        style={{ width: '100%', height: '10vh', backgroundColor: '#0B1E39' }}
      ></div>
      <div className={styles.container}>
        <div className={styles.Menu}>
          <MenuItem
            Icon={DashboardIcon}
            title="Dashboard"
            active={active}
            onClickHandler={onClickHandler}
          />
          <MenuItem
            Icon={SnipeIcon}
            title="Snipe"
            active={active}
            SideMenu={Snipe}
            onClickHandler={onClickHandler}
          />
          <MenuItem
            Icon={AutoMintIcon}
            title="Auto Mint"
            active={active}
            SideMenu={AutoMint}
            onClickHandler={onClickHandler}
          />
          <MenuItem
            Icon={BulkIcon}
            title="Bulk"
            active={active}
            SideMenu={Bulk}
            onClickHandler={onClickHandler}
          />
        </div>
        <div className={styles.board}>
          <Board />
        </div>
      </div>
    </>
  );
};

export default App;

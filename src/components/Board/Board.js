import { useState } from 'react';

import { createUseStyles } from 'react-jss';
// Menu svgs
import { ReactComponent as SnipeIcon } from '../../assets/icons/snipe.svg';
import { ReactComponent as AutoMintIcon } from '../../assets/icons/auto-mint.svg';
import { ReactComponent as BulkIcon } from '../../assets/icons/bulk.svg';
// Menu components
import MenuItem from '../Menu/MenuItem';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.2rem',
  },
  text: {
    fontSize: '1.2rem',
  },
  iconsContainer: {
    width: '62%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
  },
});

const Bord = () => {
  const styles = useStyles();

  const [active, setActive] = useState('Snipe');

  const onClickHandler = (target) => {
    setActive(target);
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        SELECT ONE OF THE BOTS FROM THE LEFT AND INITIATE A TASK
      </p>
      <div className={styles.iconsContainer}>
        <MenuItem Icon={SnipeIcon} title="Snipe" active="Snipe" />
        <MenuItem Icon={AutoMintIcon} title="Auto Mint" active="Auto Mint" />
        <MenuItem Icon={BulkIcon} title="Bulk" active="Bulk" />
      </div>
    </div>
  );
};

export default Bord;

import { Box } from '@material-ui/core';
import useStyles from '../../../styles/sideMenus/Snipe.css';
import DropDown from '../../CustomMUIInputs/DropDown';
import Input from '../../CustomMUIInputs/Input';
import MultiSelect from '../../CustomMUIInputs/MultiSelect';
import Slide from '../../CustomMUIInputs/Slide';

const items = ['val1', 'val2', 'val3', 'val4'];

const Snipe = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formControl}>
      <DropDown
        label="Wallet"
        placeHolder="Wall"
        width={'100%'}
        options={items}
      />
      <Input label="someLabel" width={'100%'} placeHolder="Placeholder" />
      <MultiSelect width={'100%'} />
      <Slide />
    </Box>
  );
};

export default Snipe;

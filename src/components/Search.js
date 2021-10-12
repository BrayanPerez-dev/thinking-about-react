import React from 'react';
import { Input, Checkbox, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  wrapper: {
    margin: 80
  },
  wrappermini: {
    display: 'flex'
  },

  input: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    borderStyle: 'none'
  }
});
export const Search = props => {
  const { checkValue, inputValue } = props;
  const classes = useStyle();
  const [input, setInput] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const handleFormSubmit = e => {
    e.preventDefault();
    checkValue(check);
    inputValue(input);
  };
  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleFormSubmit}>
        <Input
          className={classes.input}
          color="primary"
          placeholder="Search..."
          onChange={e => setInput(e.target.value)}
        />

        <div className={classes.wrappermini}>
          <Checkbox
            color="primary"
            onChange={e => setCheck(e.target.checked)}
          />
          <Typography variant="h6">Only show products in stock</Typography>
        </div>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          size="small"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;

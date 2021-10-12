import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
export const ProductCategoryRow = ({ category }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell component="th" align="center" scope="row">
        {category}
      </TableCell>
      <TableCell component="th" align="center" scope="row" />
    </TableRow>
  );
};

export default ProductCategoryRow;

import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
export const ProductRow = ({ product }) => {
  const classes = useStyles();
  const name = <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <TableRow>
      <TableCell component="td" scope="row">
        {product.stocked ? product.name : name}
      </TableCell>
      <TableCell component="td" scope="row">
        {product.price}
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;

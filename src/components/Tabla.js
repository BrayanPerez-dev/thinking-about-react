import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  divTabla: {
    padding: 50,
  },
});
export const Tabla = ({ data, filterText, inStockOnly }) => {
  const classes = useStyles();
  const rows = [];
  let lastCategory = null;
  data.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      product.price.indexOf(filterText) === -1
    ) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.id} />);
    lastCategory = product.category;
  });

  return (
    <div className={classes.divTabla}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tabla;

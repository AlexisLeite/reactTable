import React from 'react';
import { useSelector } from '../../../../mstore/lib';
import mstore from '../../../../mstore/lib/mstore';
import { CellProps } from '../../types';
import useReactTableContext from '../ReactTableContext';
import { CellWrapper } from './types';

const Cell: CellWrapper = ({ cellId, rowId }) => {
  const { CellRenderer, handler } = useReactTableContext();

  const cellsStore = React.useMemo(
    () => handler.rowsStore.getProps(rowId)?.cells as mstore<CellProps>,
    [handler.rowsStore, rowId],
  );

  const cellProps = useSelector(cellId, cellsStore, (props) => props);

  return <CellRenderer {...cellProps}>{cellProps.children}</CellRenderer>;
};

export default Cell;

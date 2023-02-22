import React from 'react';
import { useFieldsList } from '../../../../mstore/lib';
import useReactTableContext from '../ReactTableContext';
import Cell from './Cell';
import { CellsWrapper } from './types';

const Cells: CellsWrapper = ({ rowId, rowIndex }) => {
  const { handler } = useReactTableContext();

  const cellsStoreName = React.useMemo(
    () => handler.rowsStore.getProps(rowId)?.cells.name,
    [handler.rowsStore, rowId],
  );

  if (!cellsStoreName) throw new Error(`Missing cellsStore ${rowId}`);

  const cells = useFieldsList(cellsStoreName);

  return (
    <>
      {cells.map((current, i) => (
        <Cell
          key={current}
          cellId={current}
          cellIndex={i}
          rowId={rowId}
          rowIndex={rowIndex}
        />
      ))}
    </>
  );
};

export default Cells;

import React from 'react';
import useReactTableContext from '../ReactTableContext';
import Cells from './Cells';
import { RowWrapper } from './types';

const Row: RowWrapper = ({ rowIndex, rowId }) => {
  const { RowsRenderer } = useReactTableContext();

  return (
    <RowsRenderer
      domProps={React.useMemo(
        () => ({
          'aria-rowindex': rowIndex,
        }),
        [rowIndex],
      )}
      renderCells={React.useCallback(
        () => (
          <Cells rowId={rowId} rowIndex={rowIndex} />
        ),
        [rowId, rowIndex],
      )}
    />
  );
};

export default Row;

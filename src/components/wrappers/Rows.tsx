import React from 'react';
import { useFieldsList } from '../../../../mstore/lib';
import useReactTableContext from '../ReactTableContext';
import Row from './Row';
import { RowsWrapper as TRowsWrapper } from './types';

const RowsWrapper: TRowsWrapper = () => {
  const { name } = useReactTableContext();
  const rows = useFieldsList(name);

  return (
    <>
      {rows.map((current, i) => (
        <Row rowId={current} rowIndex={i} key={current} />
      ))}
    </>
  );
};

export default RowsWrapper;

import React from 'react';
import { Id } from '../../types';

export type CellIdentifier = {
  cellId: Id;
  cellIndex: number;
};

export type RowIdentifier = {
  rowId: Id;
  rowIndex: number;
};

/**
 * Singular wrappers are used to keep the props of a single element memoized, avoiding unnecessary re-renders.
 */
export type CellWrapper = React.FunctionComponent<
  RowIdentifier & CellIdentifier
>;
export type RowWrapper = React.FunctionComponent<RowIdentifier>;

/**
 * Plural wrappers are used to contain multiple same-type components grouped together.
 */
export type CellsWrapper = React.FunctionComponent<RowIdentifier>;
export type RowsWrapper = () => React.ReactNode;

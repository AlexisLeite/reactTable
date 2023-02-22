import React from 'react';
import { MStore } from '../../mstore/lib';
import TableHandler from './classes/TableHandler';
import {
  CellRenderer,
  RowRenderer,
  TableRenderer,
} from './components/renderers/types';
// import { PStore } from '@aluy/pstore';

export type Id = string | number;

export type Map<Type = unknown> = Record<Id, Type>;

export type CellProps<CellPropsType = unknown> = {
  children: React.ReactNode;
  className?: string;
  id: Id;
  props: CellPropsType;
};

export interface RowProps<CellPropsType = unknown> {
  cells: MStore<CellProps<CellPropsType>>;
  id: Id;
}

export type Cell<CellPropsType = unknown> = CellProps<CellPropsType> & {
  renderer?: CellRenderer<CellPropsType>;
};

export type Row<CellPropsType = unknown> = RowProps<CellPropsType> & {
  Renderer?: RowRenderer;
};

export type NewRow = Omit<Row, 'cells'> & {
  cells: Cell[];
};

export interface TableProps<CellPropsType = unknown> {
  defaultCellRenderer?: CellRenderer;
  defaultRowRenderer?: RowRenderer;
  defaultTableRenderer?: TableRenderer;
  getHandler: (handler: TableHandler<CellPropsType>) => unknown;
  name: string;
}

export type RowsSortMethod<CellPropsType = unknown> = (
  rowA: Row<CellPropsType>,
  rowB: Row<CellPropsType>,
) => number;

export type TableContext = {
  handler: TableHandler;
} & { CellRenderer: CellRenderer; RowsRenderer: RowRenderer; name: string };

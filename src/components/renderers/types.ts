import React from 'react';
import { CellProps } from '../../types';

export type TableRendererProps = {
  domProps: React.HTMLProps<HTMLTableElement>;
  renderRows: () => React.ReactNode;
};

export type RowRendererProps = {
  domProps: React.HTMLProps<HTMLTableRowElement>;
  renderCells: () => React.ReactNode;
};

export type CellRenderer<CellPropsType = unknown> = React.FunctionComponent<
  CellProps<CellPropsType>
>;

export type RowRenderer = React.FunctionComponent<RowRendererProps>;

export type TableRenderer = React.FunctionComponent<TableRendererProps>;

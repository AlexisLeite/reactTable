import React from 'react';
import { TableContext } from '../types';

export const ReactTableContext = React.createContext<TableContext>(
  {} as TableContext,
);

export default function useReactTableContext() {
  const context = React.useContext(ReactTableContext);

  return context;
}

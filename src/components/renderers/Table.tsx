import { TableRenderer } from './types';

const Table: TableRenderer = (props) => (
  <table {...props.domProps}>{props.renderRows()}</table>
);

export default Table;

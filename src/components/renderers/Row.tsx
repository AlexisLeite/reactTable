import { RowRenderer } from './types';

const Row: RowRenderer = (props) => (
  <tr {...props.domProps}>{props.renderCells()}</tr>
);

export default Row;

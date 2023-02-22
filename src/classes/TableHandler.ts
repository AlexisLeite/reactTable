// import { PStore } from '@aluy/pstore';
import { SStore, MStore } from '../../../mstore/lib';
import { CellProps, Id, NewRow, Row, RowsSortMethod } from '../types';

type State = {
  rows: Id[];
};

export default class TableHandler<CellPropsType = unknown> {
  #id = 0;

  rowsStore: MStore<Row<CellPropsType>>;

  constructor(private name: string) {
    this.rowsStore = new MStore<Row<CellPropsType>>(`react-table-${this.name}`);
    this.#state = new SStore<State>(name);
  }

  #state: SStore<State>;

  get length() {
    return this.rowsStore.length;
  }

  get state() {
    return this.#state.getProps();
  }

  getCellProps(rowId: Id, cellId: Id) {
    return this.rowsStore.getProps(rowId)?.cells.getProps(cellId);
  }

  getRowProps(rowId: Id) {
    return this.rowsStore.getProps(rowId);
  }

  deleteRow(id: Id) {
    this.rowsStore.delete(id);
    this.#state.update((current) => ({
      rows: current.rows.filter((search) => search !== id),
    }));
  }

  sort(sortMethod: RowsSortMethod<CellPropsType>) {
    this.rowsStore.sortFields(sortMethod);
  }

  /**
   * Adds a row to the table (or updates it if there exists a row with the same id).
   */
  upsertRow(newRow: NewRow) {
    this.#id += 1;
    this.rowsStore.update(newRow.id, {
      ...newRow,
      cells: new MStore<CellProps>(`${this.name} ${this.#id}`, newRow.cells),
    });
  }
}

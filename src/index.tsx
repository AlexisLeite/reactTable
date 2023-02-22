import React from 'react';

declare global {
  interface Window {
    react1: typeof React;
    react2: typeof React;
  }
}
window.react2 = React;
console.log(window.react1 === React);
const ReactTable = () => {
  const a = React.useMemo(() => 'a', []);
  return <>Hola mundo {a}</>;
};

export default ReactTable;

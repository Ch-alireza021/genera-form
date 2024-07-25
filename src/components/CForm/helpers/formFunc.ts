export const gridColumn = ({
  size,
  width,
  column,
}: {
  size?: string;
  width: number;
  column: number;
}): { column: number; gridColumnEnd: number; gridColumnStart: number } => {
  const display = width < 600 ? "s" : width < 900 ? "m" : "l";
  const regex = new RegExp(`(${display})(\\d+)`);
  const match = size?.match(regex);
  const setdisplay = Number(match ? parseInt(match[2], 10) : 12);
  let gridColumnStart;
  column + setdisplay > 13 ? (gridColumnStart = 1) : (gridColumnStart = column);
  const gridColumnEnd = setdisplay + gridColumnStart;
  column = gridColumnEnd;
  return { column: gridColumnEnd, gridColumnEnd, gridColumnStart };
};

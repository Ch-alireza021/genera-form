export const gridColumn = ({
  size,
  display,
  column,
}: {
  size?: string;
  display: string;
  column: number;
}): { column: number; gridColumnEnd: number; gridColumnStart: number } => {
  const regex = new RegExp(`(${display})(\\d+)`);
  const match = size?.match(regex);
  const setdisplay = Number(match ? parseInt(match[2], 10) : 12);
  let gridColumnStart = 1;
  let gridColumnEnd = setdisplay;
  if (!(column + setdisplay > 12)) {
    gridColumnStart = column || 1;
    gridColumnEnd = column + gridColumnEnd;
  }
  return { column: gridColumnEnd, gridColumnEnd, gridColumnStart };
};

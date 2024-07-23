export const gridColumn = ({
  size,
  width,
  column,
}: {
  size?: string;
  width: number;
  column: number;
}): { column: number; gridColumnEnd: number; gridColumnStart: number } => {
    console.log({width})
    const display = width < 600 ? "s" : width < 900 ? "m" : "l";
    console.log({display})
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

const randint = (min, max) => {
  if (max == undefined) { max = min; min = 0; }
  return Math.floor(Math.random() * (max - min)) + min;
};

const randfloat = (min, max) => {
  if (max == undefined) { max = min; min = 0; }
  return (Math.random() * (max - min)) + min;
};

/** Render piece */
function renderPiece(isWhite, x, y, l) {
  if (isWhite) {
    // WHITE (circle)
    stroke(black);
    fill(white);
    circle(x, y, l * 2);
  } else {
    // BLACK (triangle)
    stroke(white);
    fill(black);

    beginShape();
    vertex(x, y - l);
    vertex(x - l, y + l);
    vertex(x + l, y + l);
    vertex(x, y - l);
    endShape();
  }
}

/** Reset piece at index ot origin position */
const resetPiecePos = pos => {
  if (boardInfo.pos[pos]) {
    boardInfo.pos[pos][0] = boardRenderInfo.home[pos][0];
    boardInfo.pos[pos][1] = boardRenderInfo.home[pos][1];
    render("board");
  }
};

const movPiece = (pos, x, y) => {
  if (boardInfo.pos[pos]) {
    boardInfo.pos[pos][0] = x;
    boardInfo.pos[pos][1] = y;
    render("board");
  }
};

/** Get house coords are over (-1 if 404) */
const getHouseOver = (x, y) => {
  const hd = boardRenderInfo.w / 2;
  for (let i = 0; i < boardRenderInfo.home.length; i++) {
    let pos = boardRenderInfo.home[i];
    let isOver = (x > pos[0] - hd && x < pos[0] + hd && y > pos[1] - hd && y < pos[1] + hd);
    if (isOver) return i;
  }
  return -1;
};
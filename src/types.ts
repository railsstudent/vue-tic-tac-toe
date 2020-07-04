export enum Direction {
  HORT = "hort",
  VERTICAL = "vertical",
  LEFT_DIAG = "left-diag",
  RIGHT_DIAG = "right-diag"
}

export interface Move {
  idx: number;
  score: number;
}

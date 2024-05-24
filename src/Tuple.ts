import { Utilities } from "./utilities/Utilities.js";

import { TupleNode } from "./Tuple.types.js";

export class Tuple {
  public static create = ({ name, type, coordinates, icon }) =>
    [
      Utilities.uuid,
      name,
      type,
      [coordinates.x, coordinates.y],
      icon,
    ] as TupleNode;
}

import { Utilities } from "./utilities/Utilities.js";
import { Metadata } from "./Generic.types.js";

import { TupleNode } from "./Tuple.types.js";

export class Tuple {
  public static structure = "tuple";
  public static create = ({ name, type, coordinates, icon }) =>
    [
      Utilities.uuid,
      name,
      type,
      [coordinates.x, coordinates.y],
      icon,
    ] as TupleNode;

  public static extend = (node: TupleNode, metadata: Metadata): TupleNode => {
    node[5] = Array.isArray(node[5]) ? [...node[5], metadata] : [metadata];
    return node;
  };

  public static move = (node: TupleNode, coordinates): TupleNode => {
    node[3] = [coordinates.x, coordinates.y];
    return node;
  };
}

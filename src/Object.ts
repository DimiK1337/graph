import { Utilities } from "./utilities/Utilities.js";
import { Metadata } from "./Generic.types.js";

import { ObjectNode, ObjectCoordinates } from "./Object.types.js";

export class Object {
  public static structure = "object";
  public static create = ({ name, type, coordinates, icon }): ObjectNode => ({
    id: Utilities.uuid,
    name,
    type,
    coordinates,
    icon,
  });

  public static extend = (
    node: ObjectNode,
    metadata: Metadata
  ): ObjectNode => ({
    ...node,
    metadata: node.metadata ? [...node.metadata, metadata] : [metadata],
  });

  public static move = (
    node: ObjectNode,
    coordinates: ObjectCoordinates
  ): ObjectNode => ({
    ...node,
    coordinates,
  });
}

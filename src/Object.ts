import { Utilities } from "./utilities/Utilities.js";
import { Metadata } from "./Generic.types.js";

import { ObjectNode, ObjectCoordinates } from "./Object.types.js";

export class Object {
  public static structure = "object";
  public static create = ({ name, type, coordinates, icon }) =>
    ({
      id: Utilities.uuid,
      name,
      type,
      coordinates,
      icon,
    } as ObjectNode);

  public static extend = (node: ObjectNode, metadata: Metadata) =>
    ({
      ...node,
      metadata,
    } as ObjectNode);

  public static move = (node: ObjectNode, coordinates: ObjectCoordinates) =>
    ({
      ...node,
      coordinates,
    } as ObjectNode);
}

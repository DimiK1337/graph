import { Utilities } from "./utilities/Utilities.js";

import { Node, Metadata, Coordinates } from "./Types.js";

export class Object {
  public static create = ({ name, type, coordinates, icon }) =>
    ({
      id: Utilities.uuid,
      name: name,
      type: type,
      coordinates: coordinates,
      icon: icon,
    } as Node);
}

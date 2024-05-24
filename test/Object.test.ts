import { Utilities } from "utilities";
import { Node, NodeTypes, NodeType } from "../src/Types.js";

import { Object } from "../src/Object.js";

describe("Given Object imported", () => {
  it("then Object exist", () => {
    expect(Object).toBeDefined();
  });
  describe("Given Object exist", () => {
    it("then Object has a create method", () => {
      expect(Object.create).toBeDefined();
    });
    describe("when Object.create(node) is called", () => {
      let details;
      beforeEach(() => {
        details = {
          name: "Node",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        };
      });
      it("then a node is return", () => {
        let node = Object.create(details);
        expect(node).toBeDefined();
      });
      it("then node has an id", () => {
        let node = Object.create(details);
        expect(node.id).toBeDefined();
      });
      it("then node has a name", () => {
        let node = Object.create(details);
        expect(node.name).toBe("Node");
      });
      it("then node has a type", () => {
        let node = Object.create(details);
        expect(node.type).toBe(details.type);
      });
      it("then node has coordinates", () => {
        let node = Object.create(details);
        expect(node.coordinates).toBe(details.coordinates);
      });
      it("then node has an icon", () => {
        let node = Object.create(details);
        expect(node.icon).toBe(details.icon);
      });
    });
  });
});

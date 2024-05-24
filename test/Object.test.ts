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
    it("then Object has a extend method", () => {
      expect(Object.extend).toBeDefined();
    });
    describe("when Object.extend(node, metadata) is called", () => {
      let node;
      let metadata;
      beforeEach(() => {
        node = Object.create({
          name: "Node",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        metadata = {
          arrival: {
            distribution: "exponential",
            parameters: [{ rate: 1 }],
          },
        };
      });
      it("then an extended node is return", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode).toBeDefined();
      });
      it("then extended node has an id", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode.id).toBe(node.id);
      });
      it("then extended node has a name", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode.name).toBe(node.name);
      });
      it("then extended node has a type", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode.type).toBe(node.type);
      });
      it("then extended node has coordinates", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode.coordinates).toBe(node.coordinates);
      });
      it("then extended node has an icon", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode.icon).toBe(node.icon);
      });
      it("then extended node has metadata", () => {
        let extendedNode = Object.extend(node, metadata);
        expect(extendedNode.metadata).toBe(metadata);
      });
    });
    it("then Object has a move method", () => {
      expect(Object.move).toBeDefined();
    });
    describe("when Object.move(node, coordinates) is called", () => {
      let node;
      let coordinates;
      beforeEach(() => {
        node = Object.create({
          name: "Node",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        coordinates = { x: 1, y: 1 };
      });
      it("then a node is return", () => {
        let movedNode = Object.move(node, coordinates);
        expect(movedNode).toBeDefined();
      });
      it("then node has coordinates", () => {
        let movedNode = Object.move(node, coordinates);
        expect(movedNode.coordinates).toBe(coordinates);
      });
      it("then node coordinates are updated", () => {
        let movedNode = Object.move(node, coordinates);
        expect(movedNode.coordinates).toBe(coordinates);
      });
    });
  });
});

import { Utilities } from "utilities";
import { NodeTypes, NodeType, Metadata } from "../src/Generic.types.js";

import { Tuple } from "tuple";

describe("Given Tuple imported", () => {
  it("then Tuple exist", () => {
    expect(Tuple).toBeDefined();
  });
  describe("Given Tuple exist", () => {
    it("then Tuple has a create method", () => {
      expect(Tuple.create).toBeDefined();
    });
    describe("when Tuple.create(node) is called", () => {
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
        let node = Tuple.create(details);
        expect(node).toBeDefined();
      });
      it("then node[0] exist", () => {
        let node = Tuple.create(details);
        expect(node[0]).toBeDefined();
      });
      it("then node[1] exist", () => {
        let node = Tuple.create(details);
        expect(node[1]).toBeDefined();
      });
      it("then node[2] exist", () => {
        let node = Tuple.create(details);
        expect(node[2]).toBeDefined();
      });
      it("then node[3] exist", () => {
        let node = Tuple.create(details);
        expect(node[3]).toBeDefined();
      });
      it("then node[4] exist", () => {
        let node = Tuple.create(details);
        expect(node[4]).toBeDefined();
      });
    });
    it("then Tuple has a extend method", () => {
      expect(Tuple.extend).toBeDefined();
    });
    describe("when Tuple.extend(node, metadata) is called", () => {
      let node;
      let metadata: Metadata;
      beforeEach(() => {
        node = Tuple.create({
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
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode).toBeDefined();
      });
      it("then extended node[0] exist", () => {
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode[0]).toBeDefined();
      });
      it("then extended node[1] exist", () => {
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode[1]).toBeDefined();
      });
      it("then extended node[2] exist", () => {
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode[2]).toBeDefined();
      });
      it("then extended node[3] exist", () => {
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode[3]).toBeDefined();
      });
      it("then extended node[4] exist", () => {
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode[4]).toBeDefined();
      });
      it("then extended node[5] exist", () => {
        let extendedNode = Tuple.extend(node, metadata);
        expect(extendedNode[5]).toBeDefined();
      });
    });
    it("then Tuple has a move method", () => {
      expect(Tuple.move).toBeDefined();
    });
    describe("when Tuple.move(node, coordinates) is called", () => {
      let node;
      let coordinates;
      beforeEach(() => {
        node = Tuple.create({
          name: "Node",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        coordinates = { x: 1, y: 1 };
      });
      it("then a node is return", () => {
        let movedNode = Tuple.move(node, coordinates);
        expect(movedNode).toBeDefined();
      });
      it("then node has coordinates", () => {
        let movedNode = Tuple.move(node, coordinates);
        expect(movedNode[3]).toBeDefined();
      });
      it("then node coordinates are updated", () => {
        let movedNode = Tuple.move(node, coordinates);
        let tupleCoordinates = [coordinates.x, coordinates.y];
        expect(movedNode[3]).toEqual(tupleCoordinates);
      });
    });
  });
});

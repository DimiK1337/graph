import { Utilities } from "utilities";
import { NodeTypes, NodeType } from "../src/Generic.types.js";

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
  });
});

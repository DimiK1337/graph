import { Utilities } from "utilities";
import { NodeTypes, NodeType, Metadata } from "types";

import { Tuple } from "tuple";

describe("Given Tuple imported", () => {
  it("then Tuple exist", () => {
    expect(Tuple).toBeDefined();
  });
  describe("Given Tuple exist", () => {
    it("then Tuple.create exist", () => {
      expect(Tuple.create).toBeDefined();
    });
    describe("when result = Tuple.create(node)", () => {
      let details;
      beforeEach(() => {
        details = {
          name: "Node",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        };
      });
      it("then result exist", () => {
        let result = Tuple.create(details);
        expect(result).toBeDefined();
      });
      describe("Given result exist", () => {
        let result;
        beforeEach(() => {
          result = Tuple.create(details);
        });
        it("then result[0] exist", () => {
          expect(result[0]).toBeDefined();
        });
        it("then result[1] exist", () => {
          expect(result[1]).toBeDefined();
        });
        it("then result[1] equal details.name", () => {
          expect(result[1]).toBe(details.name);
        });
        it("then result[2] exist", () => {
          expect(result[2]).toBeDefined();
        });
        it("then result[2] equal details.type", () => {
          expect(result[2]).toBe(details.type);
        });
        it("then result[3] exist", () => {
          expect(result[3]).toBeDefined();
        });
        it("then result[3] equal details.coordinates", () => {
          let tupleCoordinates = [details.coordinates.x, details.coordinates.y];
          expect(result[3]).toEqual(tupleCoordinates);
        });
        it("then result[4] exist", () => {
          expect(result[4]).toBeDefined();
        });
        it("then result[4] equal details.icon", () => {
          expect(result[4]).toBe(details.icon);
        });
      });
    });
    it("then Tuple.extend exist", () => {
      expect(Tuple.extend).toBeDefined();
    });
    describe("when result = Tuple.extend(node, metadata)", () => {
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
      it("then result exist", () => {
        let result = Tuple.extend(node, metadata);
        expect(result).toBeDefined();
      });
      describe("Given result exist", () => {
        let result;
        beforeEach(() => {
          result = Tuple.extend(node, metadata);
        });
        it("then result[0] exist", () => {
          expect(result[0]).toBeDefined();
        });
        it("then result[0] equals node[0]", () => {
          expect(result[0]).toBe(node[0]);
        });
        it("then result[1] exist", () => {
          expect(result[1]).toBeDefined();
        });
        it("then result[1] equal node[1]", () => {
          expect(result[1]).toBe(node[1]);
        });
        it("then result[2] exist", () => {
          expect(result[2]).toBeDefined();
        });
        it("then result[2] equal node[2]", () => {
          expect(result[2]).toBe(node[2]);
        });
        it("then result[3] exist", () => {
          expect(result[3]).toBeDefined();
        });
        it("then result[3] equal node[3]", () => {
          expect(result[3]).toBe(node[3]);
        });
        it("then result[3] exist", () => {
          expect(result[3]).toBeDefined();
        });
        it("then result[4] exist", () => {
          expect(result[4]).toBeDefined();
        });
        it("then result[4] equal node[4]", () => {
          expect(result[4]).toBe(node[4]);
        });
        it("then result[5] exist", () => {
          expect(result[5]).toBeDefined();
        });
        it("then result[5] equal metadata", () => {
          expect(result[5]).toBe(metadata);
        });
      });
    });
    it("then Tuple.move exist", () => {
      expect(Tuple.move).toBeDefined();
    });
    describe("when result = Tuple.move(node, coordinates)", () => {
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
      it("then result exist", () => {
        let result = Tuple.move(node, coordinates);
        expect(result).toBeDefined();
      });
      describe("Given result exist", () => {
        let result;
        beforeEach(() => {
          result = Tuple.move(node, coordinates);
        });
        it("then result[0] exist", () => {
          expect(result[0]).toBeDefined();
        });
        it("then result[0] equal node[0]", () => {
          expect(result[0]).toBe(node[0]);
        });
        it("then result[1] exist", () => {
          expect(result[1]).toBeDefined();
        });
        it("then result[1] equal node[1]", () => {
          expect(result[1]).toBe(node[1]);
        });
        it("then result[2] exist", () => {
          expect(result[2]).toBeDefined();
        });
        it("then result[2] equal node[2]", () => {
          expect(result[2]).toBe(node[2]);
        });
        it("then result[3] exist", () => {
          expect(result[3]).toBeDefined();
        });
        it("then result[3] equal coordinates", () => {
          let tupleCoordinates = [coordinates.x, coordinates.y];
          expect(result[3]).toEqual(tupleCoordinates);
        });
        it("then result[4] exist", () => {
          expect(result[4]).toBeDefined();
        });
        it("then result[4] equal node[4]", () => {
          expect(result[4]).toBe(node[4]);
        });
      });
    });
  });
});

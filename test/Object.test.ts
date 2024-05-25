import { Utilities } from "utilities";
import { NodeTypes, NodeType, Metadata } from "types";

import { Object } from "object";

describe("Given Object imported", () => {
  it("then Object exist", () => {
    expect(Object).toBeDefined();
  });
  describe("Given Object exist", () => {
    it("then Object.structure exist", () => {
      expect(Object.structure).toBeDefined();
    });
    it("then Object.structure equals object", () => {
      expect(Object.structure).toEqual("object");
    });
    it("then Object.create exist", () => {
      expect(Object.create).toBeDefined();
    });
    describe("when result = Object.create(node)", () => {
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
        let result = Object.create(details);
        expect(result).toBeDefined();
      });
      describe("Given result exist", () => {
        let result;
        beforeEach(() => {
          result = Object.create(details);
        });
        it("then result.id exist", () => {
          expect(result.id).toBeDefined();
        });
        it("then result.name exist", () => {
          expect(result.name).toBeDefined();
        });
        it("then result.name equals details.name", () => {
          expect(result.name).toBe(details.name);
        });
        it("then result.type exist", () => {
          expect(result.type).toBeDefined();
        });
        it("then result.type equals details.type", () => {
          expect(result.type).toBe(details.type);
        });
        it("then result.coordinates exist", () => {
          expect(result.coordinates).toBeDefined();
        });
        it("then result.coordinates equals details.coordinates", () => {
          expect(result.coordinates).toBe(details.coordinates);
        });
        it("then result.icon exist", () => {
          expect(result.icon).toBeDefined();
        });
        it("then result.icon equals details.icon", () => {
          expect(result.icon).toBe(details.icon);
        });
      });
    });
    it("then Object.extend exist", () => {
      expect(Object.extend).toBeDefined();
    });
    describe("when result = Object.extend(node, metadata)", () => {
      let node;
      let metadata: Metadata;
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
      it("then result exist", () => {
        let result = Object.extend(node, metadata);
        expect(result).toBeDefined();
      });
      describe("Given result exist", () => {
        let result;
        beforeEach(() => {
          result = Object.extend(node, metadata);
        });
        it("then result.id exist", () => {
          expect(result.id).toBeDefined();
        });
        it("then result.id equals node.id", () => {
          expect(result.id).toBe(node.id);
        });
        it("then result.name exist", () => {
          expect(result.name).toBeDefined();
        });
        it("then result.name equals node.name", () => {
          expect(result.name).toBe(node.name);
        });
        it("then result.type exist", () => {
          expect(result.type).toBeDefined();
        });
        it("then result.type equals node.type", () => {
          expect(result.type).toBe(node.type);
        });
        it("then result.coordinates exist", () => {
          expect(result.coordinates).toBeDefined();
        });
        it("then result.coordinates equals node.coordinates", () => {
          expect(result.coordinates).toBe(node.coordinates);
        });
        it("then result.icon exist", () => {
          expect(result.icon).toBeDefined();
        });
        it("then result.icon equals node.icon", () => {
          expect(result.icon).toBe(node.icon);
        });
        it("then result.metadata exist", () => {
          expect(result.metadata).toBeDefined();
        });
        it("then result.metadata equals metadata", () => {
          expect(result.metadata).toBe(metadata);
        });
      });
    });
    it("then Object.move exist", () => {
      expect(Object.move).toBeDefined();
    });
    describe("when result = Object.move(node, coordinates)", () => {
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
      it("then result exist", () => {
        let result = Object.move(node, coordinates);
        expect(result).toBeDefined();
      });
      describe("Given result exist", () => {
        let result;
        beforeEach(() => {
          result = Object.move(node, coordinates);
        });
        it("then result.id exist", () => {
          expect(result.id).toBeDefined();
        });
        it("then result.id equals node.id", () => {
          expect(result.id).toBe(node.id);
        });
        it("then result.name exist", () => {
          expect(result.name).toBeDefined();
        });
        it("then result.name equals node.name", () => {
          expect(result.name).toBe(node.name);
        });
        it("then result.type exist", () => {
          expect(result.type).toBeDefined();
        });
        it("then result.type equals node.type", () => {
          expect(result.type).toBe(node.type);
        });
        it("then result.coordinates exist", () => {
          expect(result.coordinates).toBeDefined();
        });
        it("then result.coordinates equals coordinates", () => {
          expect(result.coordinates).toBe(coordinates);
        });
        it("then result.coordinates is not equal to node.coordinates", () => {
          expect(result.coordinates).not.toBe(node.coordinates);
        });
      });
    });
  });
});

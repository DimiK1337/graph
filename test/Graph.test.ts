import { Utilities } from "utilities";
import { NodeTypes, NodeType } from "types";

import { Object } from "object";
import { Tuple } from "tuple";

import { Graph } from "../src/Graph.js";

describe("Given Graph imported", () => {
  it("then Graph exist", () => {
    expect(Graph).toBeDefined();
  });
  describe("Given a Object factory is used to create a new Graph instance", () => {
    let graph;
    beforeEach(() => {
      graph = new Graph(Object);
    });
    it("then graph exist", () => {
      expect(graph).toBeDefined();
    });
    it("then graph.nodeFactory exist", () => {
      expect(graph.nodeFactory).toBeDefined();
    });
    it("then graph.nodeFactory equals Object", () => {
      expect(graph.nodeFactory).toBe(Object);
    });
    it("then graph.addNode exist", () => {
      expect(graph.addNode).toBeDefined();
    });
    describe("Given nodes = []", () => {
      let nodes;
      beforeEach(() => {
        nodes = [];
      });
      it("then nodes exist", () => {
        expect(nodes).toBeDefined();
      });
      it("then nodes.length equals 0", () => {
        expect(nodes.length).toBe(0);
      });
      describe("when graph.addNode(nodes, { name, type, coordinates, icon })", () => {
        let details;
        beforeEach(() => {
          details = {
            name: "Node",
            type: Utilities.getRandomElement<NodeType>(NodeTypes),
            coordinates: { x: 0, y: 0 },
            icon: "./icon.svg",
          };
          nodes = graph.addNode(nodes, details);
        });
        it("then nodes.length equals 1", () => {
          expect(nodes.length).toBe(1);
        });
        it("then nodes[0].name equals details.name", () => {
          expect(nodes[0].name).toEqual(details.name);
        });
        it("then nodes[0].type equals details.type", () => {
          expect(nodes[0].type).toEqual(details.type);
        });
        it("then nodes[0].coordinates equals details.coordinates", () => {
          expect(nodes[0].coordinates).toEqual(details.coordinates);
        });
        it("then nodes[0].icon equals details.icon", () => {
          expect(nodes[0].icon).toEqual(details.icon);
        });
      });
    });
  });
  describe("Given a Tuple factory is used to create a new Graph instance", () => {
    let graph;
    beforeEach(() => {
      graph = new Graph(Tuple);
    });
    it("then graph exist", () => {
      expect(graph).toBeDefined();
    });
    it("then graph.nodeFactory exist", () => {
      expect(graph.nodeFactory).toBeDefined();
    });
    it("then graph.nodeFactory equals Object", () => {
      expect(graph.nodeFactory).toBe(Tuple);
    });
    it("then graph.addNode exist", () => {
      expect(graph.addNode).toBeDefined();
    });
    describe("Given nodes = []", () => {
      let nodes;
      beforeEach(() => {
        nodes = [];
      });
      it("then nodes exist", () => {
        expect(nodes).toBeDefined();
      });
      it("then nodes.length equals 0", () => {
        expect(nodes.length).toBe(0);
      });
      describe("when graph.addNode(nodes, { name, type, coordinates, icon })", () => {
        let details;
        beforeEach(() => {
          details = {
            name: "Node",
            type: Utilities.getRandomElement<NodeType>(NodeTypes),
            coordinates: { x: 0, y: 0 },
            icon: "./icon.svg",
          };
          nodes = graph.addNode(nodes, details);
        });
        it("then nodes.length equals 1", () => {
          expect(nodes.length).toBe(1);
        });
        it("then nodes[0][1] equals details.name", () => {
          expect(nodes[0][1]).toEqual(details.name);
        });
        it("then nodes[0][2] equals details.type", () => {
          expect(nodes[0][2]).toEqual(details.type);
        });
        it("then nodes[0][3] equals details.coordinates", () => {
          let coordinates = [details.coordinates.x, details.coordinates.y];
          expect(nodes[0][3]).toEqual(coordinates);
        });
        it("then nodes[0][4] equals details.icon", () => {
          expect(nodes[0][4]).toEqual(details.icon);
        });
      });
    });
  });
});
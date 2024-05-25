import { Utilities } from "utilities";
import { NodeTypes, NodeType } from "types";

import { Object } from "object";
import { Tuple } from "tuple";

import { Graph } from "graph";

import { Benchmark } from "./Benchmark.js";

describe("Given Graph imported", () => {
  it("then Graph exist", () => {
    expect(Graph).toBeDefined();
  });
  describe("and a Object factory is used to create a new Graph instance", () => {
    let graph;
    beforeEach(() => {
      graph = new Graph(Object);
    });
    it("then graph exist", () => {
      expect(graph).toBeDefined();
    });
    it("then graph.node exist", () => {
      expect(graph.node).toBeDefined();
    });
    it("then graph.node equals Object", () => {
      expect(graph.node).toBe(Object);
    });
    it("then graph.createNodes exist", () => {
      expect(graph.createNodes).toBeDefined();
    });
    describe("and nodes is declared", () => {
      let nodes;
      describe("when graph.createNodes(1, details)", () => {
        beforeEach(() => {
          const details = {
            name: "Node",
            type: Utilities.getRandomElement<NodeType>(NodeTypes),
            coordinates: { x: 0, y: 0 },
            icon: "./icon.svg",
          };
          nodes = graph.createNodes(1, details);
        });
        it("then nodes exist", () => {
          expect(nodes).toBeDefined();
        });
        it("then nodes.length equals 1", () => {
          expect(nodes.length).toBe(1);
        });
      });
      describe("when benchmarking graph.createNodes function", () => {
        let details;
        beforeEach(() => {
          details = {
            name: "Node",
            type: Utilities.getRandomElement<NodeType>(NodeTypes),
            coordinates: { x: 0, y: 0 },
            icon: "./icon.svg",
          };
        });
        it("then create 1 node takes", () => {
          let qty = 1;
          let results = Benchmark.Performance(
            { structure: "Object", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
        it("then create 1 node consumes", () => {
          let qty = 1;
          let results = Benchmark.Memory(
            { structure: "Object", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
        it("then create 10 node takes", () => {
          let qty = 10;
          let results = Benchmark.Performance(
            { structure: "Object", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
        it("then create 10 node consumes", () => {
          let qty = 10;
          let results = Benchmark.Memory(
            { structure: "Object", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
      });
    });
    describe("and nodes = []", () => {
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
    it("then graph.findNodeById exist", () => {
      expect(graph.findNodeById).toBeDefined();
    });
    describe("and nodes.length = 2", () => {
      let nodes;
      beforeEach(() => {
        nodes = graph.addNode([], {
          name: "Node1",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        nodes = graph.addNode(nodes, {
          name: "Node2",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        nodes = structuredClone(nodes);
      });
      it("then nodes.length equals 2", () => {
        expect(nodes.length).toBe(2);
      });
      describe("when graph.findNodeById(nodes, id)", () => {
        let id;
        beforeEach(() => {
          id = nodes[1].id;
        });
        it("then graph.findNodeById(nodes, id) returns nodes[0]", () => {
          expect(graph.findNodeById(nodes, id)).toEqual(nodes[1]);
        });
      });
    });
  });
  describe("and a Tuple factory is used to create a new Graph instance", () => {
    let graph;
    beforeEach(() => {
      graph = new Graph(Tuple);
    });
    it("then graph exist", () => {
      expect(graph).toBeDefined();
    });
    it("then graph.node exist", () => {
      expect(graph.node).toBeDefined();
    });
    it("then graph.node equals Object", () => {
      expect(graph.node).toBe(Tuple);
    });
    it("then graph.addNode exist", () => {
      expect(graph.addNode).toBeDefined();
    });
    describe("and nodes is declared", () => {
      let nodes;
      describe("when graph.createNodes(1, details)", () => {
        beforeEach(() => {
          const details = {
            name: "Node",
            type: Utilities.getRandomElement<NodeType>(NodeTypes),
            coordinates: { x: 0, y: 0 },
            icon: "./icon.svg",
          };
          nodes = graph.createNodes(1, details);
        });
        it("then nodes exist", () => {
          expect(nodes).toBeDefined();
        });
        it("then nodes.length equals 1", () => {
          expect(nodes.length).toBe(1);
        });
      });
      describe("when benchmarking graph.createNodes function", () => {
        let details;
        beforeEach(() => {
          details = {
            name: "Node",
            type: Utilities.getRandomElement<NodeType>(NodeTypes),
            coordinates: { x: 0, y: 0 },
            icon: "./icon.svg",
          };
        });
        it("then create 1 node takes", () => {
          let qty = 1;
          let results = Benchmark.Performance(
            { structure: "Tuple", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
        it("then create 1 node consumes", () => {
          let qty = 1;
          let results = Benchmark.Memory(
            { structure: "Tuple", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
        it("then create 10 node takes", () => {
          let qty = 10;
          let results = Benchmark.Performance(
            { structure: "Tuple", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
        it("then create 10 node consumes", () => {
          let qty = 10;
          let results = Benchmark.Memory(
            { structure: "Tuple", action: "createNodes" },
            graph.createNodes,
            qty,
            details
          );
          expect(results.length).toEqual(qty);
        });
      });
    });
    describe("and nodes = []", () => {
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
    it("then graph.findNodeById exist", () => {
      expect(graph.findNodeById).toBeDefined();
    });
    describe("and nodes.length = 2", () => {
      let nodes;
      beforeEach(() => {
        nodes = graph.addNode([], {
          name: "Node1",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        nodes = graph.addNode(nodes, {
          name: "Node2",
          type: Utilities.getRandomElement<NodeType>(NodeTypes),
          coordinates: { x: 0, y: 0 },
          icon: "./icon.svg",
        });
        nodes = structuredClone(nodes);
      });
      it("then nodes.length equals 2", () => {
        expect(nodes.length).toBe(2);
      });
      describe("when graph.findNodeById(nodes, id)", () => {
        let id;
        beforeEach(() => {
          id = nodes[1][0];
        });
        it("then graph.findNodeById(nodes, id) returns nodes[0]", () => {
          expect(graph.findNodeById(nodes, id)).toEqual(nodes[1]);
        });
      });
    });
  });
});

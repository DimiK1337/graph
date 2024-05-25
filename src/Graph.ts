import { Node } from "./Types.js";
import { Object } from "object";
import { Tuple } from "tuple";
import { ObjectNode } from "./Object.types.js";
import { TupleNode } from "./Tuple.types.js";

type NodeFactory = typeof Object | typeof Tuple;

// Operations on Graph takes nodes as first argument to enable performance testing
// Once performance testing is done, we can refactor to use a class instance
// Also operations can return this to enable fluent interface
export class Graph {
  public nodeFactory: NodeFactory;
  constructor(nodeFactory: NodeFactory) {
    this.nodeFactory = nodeFactory;
  }
  addNode = (nodes: Node[], { name, type, coordinates, icon }) => {
    const node = this.nodeFactory.create({ name, type, coordinates, icon });
    nodes.push(node);
    return nodes;
  };
  findNodeById = (nodes: Node[], id: string) =>
    this.nodeFactory.structure === "object"
      ? nodes.find((node: ObjectNode) => node.id === id)
      : nodes.find((node: TupleNode) => node[0] === id);
}

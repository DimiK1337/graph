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
  public node: NodeFactory;
  constructor(nodeFactory: NodeFactory) {
    this.node = nodeFactory;
  }
  createNodes = (qty: number, details) => {
    const nodes = [];
    for (let i = 0; i < qty; i++) {
      nodes.push(this.node.create(details));
    }
    return nodes;
  };
  addNode = (nodes: Node[], { name, type, coordinates, icon }) => {
    const node = this.node.create({ name, type, coordinates, icon });
    nodes.push(node);
    return nodes;
  };
  findNodeById = (nodes: Node[], id: string) =>
    this.node.structure === "object"
      ? nodes.find((node: ObjectNode) => node.id === id)
      : nodes.find((node: TupleNode) => node[0] === id);
}

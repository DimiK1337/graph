import { Node } from "./Types.js";
import { Object } from "object";
import { Tuple } from "tuple";

type NodeFactory = typeof Object | typeof Tuple;

export class Graph {
  public nodeFactory: NodeFactory;
  constructor(nodeFactory: NodeFactory) {
    this.nodeFactory = nodeFactory;
  }
  addNode(nodes: Node[], { name, type, coordinates, icon }) {
    const node = this.nodeFactory.create({ name, type, coordinates, icon });
    nodes.push(node);
    return nodes;
  }
}

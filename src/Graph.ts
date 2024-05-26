import { Node } from "./Types.js";
import { Object } from "object";
import { Tuple } from "tuple";
import { ObjectNode } from "./Object.types.js";
import { TupleNode } from "./Tuple.types.js";
import { Metadata } from "types";

type NodeFactory = typeof Object | typeof Tuple;

// Operations on Graph takes nodes as first argument to enable performance testing
// Once performance testing is done, we can refactor to use a class instance
// Also operations can return this to enable fluent interface
export class Graph {
  public node: NodeFactory;
  constructor(nodeFactory: NodeFactory) {
    this.node = nodeFactory;
  }

  createNodes = (qty: number, details) =>
    Array.from({ length: qty }, () => this.node.create(details));

  addNode = (nodes: Node[], details) => [...nodes, this.node.create(details)];

  addNodes = (nodes: Node[], newNodes: Node[]) => [...nodes, ...newNodes];

  findNodeById = (nodes: Node[], id: string) =>
    this.node.structure === "object"
      ? nodes.find((node: ObjectNode) => node.id === id)
      : nodes.find((node: TupleNode) => node[0] === id);

  findNodesByType = (nodes: Node[], type: string) =>
    this.node.structure === "object"
      ? nodes.filter((node: ObjectNode) => node.type === type)
      : nodes.filter((node: TupleNode) => node[2] === type);

  addNodeMetadata = (nodes: Node[], id: string, metadata: Metadata) => {
    let addMetadata = (node, metadata) => this.node.extend(node, metadata);
    return this.node.structure === "object"
      ? nodes.map((node: ObjectNode) =>
          node.id === id ? addMetadata(node, metadata) : node
        )
      : nodes.map((node: TupleNode) =>
          node[0] === id ? addMetadata(node, metadata) : node
        );
  };

  removeNodeById = (nodes: Node[], id: string) =>
    this.node.structure === "object"
      ? nodes.filter((node: ObjectNode) => node.id !== id)
      : nodes.filter((node: TupleNode) => node[0] !== id);
}

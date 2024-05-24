export type UUID = string;

export const NodeTypes = [
  "start",
  "workflow",
  "delay",
  "end",
  "decision",
] as const;

export type NodeType = (typeof NodeTypes)[number];

export const GraphTypes = ["pathway"] as const;

export type GraphType = (typeof GraphTypes)[number];
export interface Coordinates {
  x: number;
  y: number;
}

export interface Metadata {
  arrival?: {
    distribution: string;
    parameters: { rate: number }[];
  };
  duration?: {
    distribution: string;
    parameters: { meanlog: number; sdlog?: number }[];
  };
  prevalence?: { target: string; probability: number }[];
}

export interface Node {
  id: UUID;
  name: string;
  type: NodeType;
  coordinates: Coordinates;
  icon?: string;
  metadata?: Metadata[];
}

export interface Connection {
  id: UUID;
  name: string;
  source: UUID;
  target: UUID;
  coordinates: {
    start: Coordinates;
    end: Coordinates;
  };
}

export interface Pathway {
  graph: {
    id: UUID;
    name: string;
    type: GraphType;
  };
  nodes: Node[];
  connections: Connection[];
}

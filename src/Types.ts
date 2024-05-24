interface Coordinates {
  x: number;
  y: number;
}

interface Metadata {
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

interface Node {
  id: string;
  name: string;
  type: string;
  coordinates: Coordinates;
  metadata?: Metadata[];
}

interface Connection {
  id: string;
  name: string;
  source: string;
  target: string;
  coordinates: {
    start: Coordinates;
    end: Coordinates;
  };
}

interface Pathway {
  graph: {
    id: string;
    name: string;
    type: string;
  };
  nodes: Node[];
  connections: Connection[];
}

type UUID = string;

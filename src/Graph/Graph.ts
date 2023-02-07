export class GraphNode<T> {
  value: T;
  connectionsTo: Set<GraphNode<T>>;
  connectionsFrom: Set<GraphNode<T>>;

  constructor(value: T) {
    this.value = value;
    this.connectionsTo = new Set<GraphNode<T>>();
    this.connectionsFrom = new Set<GraphNode<T>>();
  }

  connectedTo() {
    return this.connectionsTo;
  }

  connectedFrom() {
    return this.connectionsFrom;
  }

  setValue(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

export class Graph<T> {
  nodeSet: Set<GraphNode<T>>;

  constructor() {
    this.nodeSet = new Set<GraphNode<T>>();
  }

  addNode(node: GraphNode<T>) {
    if (!this.nodeSet.has(node)) {
      this.nodeSet.add(node);
    }
  }

  addConnection(origin: GraphNode<T>, destination: GraphNode<T>) {
    this.addNode(origin);
    this.addNode(destination);

    origin.connectedTo().add(destination);
    destination.connectedFrom().add(origin);
  }

  removeConnection(origin: GraphNode<T>, destination: GraphNode<T>) {
    origin.connectedTo().delete(destination);
    destination.connectedFrom().delete(origin);
  }

  removeNode(nodeToDelete: GraphNode<T>) {
    this.nodeSet.delete(nodeToDelete);

    this.nodeSet.forEach((node) => {
      this.removeConnection(nodeToDelete, node);
      this.removeConnection(node, nodeToDelete);
    });
  }

  getNodes() {
    return this.nodeSet;
  }
}

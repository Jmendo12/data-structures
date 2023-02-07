import { Graph, GraphNode } from "./Graph";

describe("GraphNode", () => {
  it("Can create a graph node with the given value", () => {
    const node = new GraphNode<number>(1);
    expect(node.getValue()).toEqual(1);
  });

  it("Can update the value of the graph node", () => {
    const node = new GraphNode<number>(1);
    node.setValue(2);
    expect(node.getValue()).toEqual(2);
  });

  it("Can retrieve a list of nodes connected to the node", () => {
    const node = new GraphNode<number>(1);
    expect(node.connectedTo()).toEqual(new Set());
  });

  it("Can retrieve a list of nodes connected from the node", () => {
    const node = new GraphNode<number>(1);
    expect(node.connectedFrom()).toEqual(new Set());
  });
});

describe("Graph", () => {
  it("A graph can be created", () => {
    const graph = new Graph<string>();
    expect(graph).not.toBeNull();
  });

  it("Can add a node to the graph", () => {
    const graph = new Graph<string>();
    const node = new GraphNode<string>("abc");

    graph.addNode(node);
    expect(graph.getNodes().has(node)).toEqual(true);
  });

  it("Can add a connection to a node in the graph", () => {
    const graph = new Graph<string>();
    const origin = new GraphNode<string>("abc");
    const destination = new GraphNode<string>("cba");

    graph.addConnection(origin, destination);
    expect(graph.getNodes().has(origin)).toEqual(true);
    expect(graph.getNodes().has(destination)).toEqual(true);

    expect(origin.connectedTo().has(destination)).toEqual(true);
    expect(destination.connectedFrom().has(origin)).toEqual(true);
  });

  it("Can remove a connection to a node in the graph", () => {
    const graph = new Graph<string>();
    const origin = new GraphNode<string>("abc");
    const destination = new GraphNode<string>("cba");

    graph.addConnection(origin, destination);
    graph.removeConnection(origin, destination);

    expect(origin.connectedTo().has(destination)).toEqual(false);
    expect(destination.connectedFrom().has(origin)).toEqual(false);
  });

  it("Can remove a node from the graph", () => {
    const graph = new Graph<string>();
    const origin = new GraphNode<string>("abc");
    const destination = new GraphNode<string>("bca");
    const secondOrigin = new GraphNode<string>("efg");

    graph.addConnection(origin, destination);
    graph.addConnection(secondOrigin, origin);
    graph.removeNode(origin);

    expect(graph.getNodes().has(origin)).toEqual(false);
    expect(destination.connectedFrom().has(origin)).toEqual(false);
    expect(secondOrigin.connectedTo().has(origin)).toEqual(false);
  });
});

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //Add Vetex Mehtod
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  //Add Edge
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    //The add metod is come from set
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  //To display/check has edge
  //Us array me jaa kr ye element check karega
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2),
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  //To display the vertex
  //Saare vertex elem ko , ek array me rakhega
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "-->" + [...this.adjacencyList[vertex]]);
    }
  }

  //To delete Edge and Veretx from graph
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    //Now if the vertex is present ,then remove the adjecent list first
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(adjacentVertex, vertex);
    }
    //after removing the all adjecency list
    //remove the vertex
    delete this.adjacencyList[vertex];

    //ex B--> A,C
    //remove A & C first 
    // then remove B
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

console.log(graph.hasEdge("A", "C"));

// graph.removeEdge("B", "C");

graph.display();

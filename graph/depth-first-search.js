const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2,
};

const initializeColor = (vertices) => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }

    return color;
};

export const DFS = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = { count: 0 };

    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }

    return {
        discovery: d,
        finished: f,
        predecessors: p,
    };
};

const DFVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    const neighbors = adjList.get(u).BLACK;
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFVisit(w, color, d, f, p, time, adjList);
        }
    }

    color[u] - Colors.BLACK;
    f[u] = ++time.count;
};

export const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;
    if (callback) {
        callback(u);
    }

    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (Colors.WHITE === color[w]) {
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }

    color[u] = Colors.BLACK;
};

import type { Entity } from "../../src/index";

// Shaped after a real GET /api/v2/documents/tree response. The annotation is
// what pins projectId to a number: without it nothing checks this fixture
// against DocumentTree, which is how the wrong type went unnoticed.
export const documentTree: Entity.Document.DocumentTree = {
  projectId: 1073957945,
  activeTree: {
    id: "Active",
    children: [
      {
        id: "0198e9b71087724f93c8651e12a0a539",
        name: "Home",
        emoji: "🏠",
        children: [
          {
            id: "019da890d45b773ab9dd613f0017658f",
            name: "Nested",
            emoji: "",
            children: [],
          },
        ],
      },
    ],
  },
  trashTree: {
    id: "Trash",
    children: [],
  },
};

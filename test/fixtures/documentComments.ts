const createdUser = {
  id: 1,
  userId: "user_001",
  uniqueId: "user_001",
  name: "User One",
  mailAddress: "user1@example.com",
  roleType: 1,
  lang: "ja",
  icon: "",
};

export const documentComments = [
  {
    id: "019a1b2c3d4e7f0a8b9c0d1e2f3a4b5c",
    documentId: "01939983409c79d5a06a49859789e38f",
    statusId: 1,
    content:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"comment"}]}]}',
    plain: "comment",
    commentType: "comment",
    createdUserId: 1,
    created: "2025-06-01T00:00:00Z",
    updatedUserId: 1,
    updated: "2025-06-01T00:00:00Z",
    createdUser,
    replies: [
      {
        id: "019a1b2c3d4e7f0a8b9c0d1e2f3a4b5d",
        documentId: "01939983409c79d5a06a49859789e38f",
        commentId: "019a1b2c3d4e7f0a8b9c0d1e2f3a4b5c",
        content:
          '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"reply"}]}]}',
        plain: "reply",
        createdUserId: 1,
        created: "2025-06-02T00:00:00Z",
        updatedUserId: 1,
        updated: "2025-06-02T00:00:00Z",
        createdUser,
      },
    ],
  },
  {
    id: "019a1b2c3d4e7f0a8b9c0d1e2f3a4b5e",
    documentId: "01939983409c79d5a06a49859789e38f",
    statusId: 1,
    content: '{"type":"doc","content":[]}',
    plain: "",
    commentType: "comment",
    createdUserId: 1,
    created: "2025-06-03T00:00:00Z",
    updatedUserId: 1,
    updated: "2025-06-03T00:00:00Z",
    createdUser,
    replies: [],
  },
];

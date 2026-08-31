import * as dotenv from "dotenv";

dotenv.config();

// The test suite must never touch the network: `test.ts` reads BACKLOG_HOST,
// BACKLOG_API_KEY and BACKLOG_CLIENT_ID from the environment, so a request that
// escapes the mock would run destructive calls (adding/deleting documents,
// unstarring, ...) against a real space. Clients under test are given an
// explicit `fetch`, so anything still reaching the global one is a bug -- make
// it fail loudly instead of succeeding quietly against real data.
globalThis.fetch = (input: any) => {
  const url = typeof input === "string" ? input : (input?.url ?? String(input));
  return Promise.reject(
    new Error(
      `Unexpected real network request to ${url}. ` +
        `Tests must pass \`fetch: mockFetch\` from test/mock.ts.`,
    ),
  );
};

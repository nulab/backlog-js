import * as dotenv from "dotenv";
import { mockFetch } from "./mock";

dotenv.config();

// The test suite must never touch the network: `test.ts` reads BACKLOG_HOST,
// BACKLOG_API_KEY and BACKLOG_CLIENT_ID from the environment, so a request that
// escapes the mock would run destructive calls (adding/deleting documents,
// unstarring, ...) against a real space -- and pass, which is worse than
// failing. Routing the global fetch through the MockAgent keeps the default
// `configure.fetch ?? globalThis.fetch` path in Request under test, and
// mockFetch throws on any request made outside an active mock.
globalThis.fetch = mockFetch;

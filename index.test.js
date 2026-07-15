import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "./index.js";

test("greets the world by default", () => {
  assert.equal(greet(), "hello, world");
});

test("greets a named target", () => {
  assert.equal(greet("computingforgeeks"), "hello, computingforgeeks");
});

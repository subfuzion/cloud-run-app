import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { Server } from "node:http";
import request from "supertest";

import { app, start, stop } from "../src/app.js";

const port = process.env["PORT"] || "0";
let server: Server;

beforeAll(async () => {
  server = await start(port);
});

afterAll(async () => {
  if (server) {
    await stop();
  }
});

describe("smoke tests", () => {
  test("HEAD /", async () => {
    const route = "/";
    await request(app).head(route).expect(200);
  });
  test("GET /", async () => {
    const route = "/";
    const res = await request(app).get(route).expect(200);
    expect(res.text).toBe("ok");
  });
  test("GET /api/ping", async () => {
    const route = "/api/ping";
    const res = await request(app).get(route).expect(200);
    expect(res.body.message).toBe("ok");
  });
  test("POST /api/echo", async () => {
    const route = "/api/echo";
    const message = {
      message: "hello",
    };
    const res = await request(app).post(route).send(message).expect(200);
    expect(res.body.message).toBe("hello");
  });
});

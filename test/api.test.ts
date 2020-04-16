import request from "supertest";
import app from "../src/app";

describe("GET /api/students", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/api/students")
      .expect(200);
  });
});

describe("GET /api/classes", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/api/classes")
      .expect(200);
  });
});

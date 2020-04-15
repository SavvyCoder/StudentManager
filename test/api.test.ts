import request from "supertest";
import app from "../src/app";

describe("POST /api", () => {
  it("should return 200 OK", () => {
    return request(app)
      .post("/api")
      .expect(200);
  });
});

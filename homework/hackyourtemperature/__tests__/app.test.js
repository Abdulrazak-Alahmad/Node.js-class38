import app from '../app.js'
import supertest from "supertest";
import request from "supertest";

describe("POST /weather", () => {
  it("check if POST request works well", async () => {
    const response = await request(app).post("/weather").send({ cityName: 'London' });

    expect(response.statusCode).toBe(200);
  });
  it("check if cityName isn't correct", async () => {
    const response = await request(app).post("/weather").send({});

    expect(response.statusCode).toBe(400);
  });
});

describe("/", () => {
  it("check if GET request works well or not", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });
});
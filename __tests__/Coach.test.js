const Coach = require("../lib/Coach");

test("Can set contract account via constructor", () => {
  const testValue = "contractUser";
  const e = new Coach("Foo", 1, "test@test.com", testValue);
  expect(e.contract).toBe(testValue);
});

test("getRole() should return \"Coach\"", () => {
  const testValue = "Coach";
  const e = new Coach("Foo", 1, "test@test.com", "contractUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get contract username via getcontract()", () => {
  const testValue = "contractUser";
  const e = new Coach("Foo", 1, "test@test.com", testValue);
  expect(e.getContract()).toBe(testValue);
});
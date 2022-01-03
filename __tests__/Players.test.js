const Players = require("../lib/Players");

test("Can set position via constructor", () => {
  const testValue = "UCLA";
  const e = new Players("Foo", 1, "test@test.com", testValue);
  expect(e.position).toBe(testValue);
});

test("getRole() should return \"Players\"", () => {
  const testValue = "Players";
  const e = new Players("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get position via getposition()", () => {
  const testValue = "UCLA";
  const e = new Players("Foo", 1, "test@test.com", testValue);
  expect(e.getPosition()).toBe(testValue);
});
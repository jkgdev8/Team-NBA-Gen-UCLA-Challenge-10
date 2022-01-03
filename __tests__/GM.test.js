const GM = require("../lib/GM");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new GM("Foo", 1, "test@test.com", testValue);
  expect(e.yearsleft).toBe(testValue);
});

test("getRole() should return \"GM\"", () => {
  const testValue = "GM";
  const e = new GM("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new GM("Foo", 1, "test@test.com", testValue);
  expect(e.getyearsleft()).toBe(testValue);
});
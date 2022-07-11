import slugify from "../services/slugify";

test("slugify", () => {
  expect(slugify("Hello World")).toBe("hello-world");
});

test("slugify with spaces", () => {
  expect(slugify("Hello World ")).toBe("hello-world");
});

test("slugify with special characters", () => {
  expect(slugify("Hello World!@#$%^&*()+")).toBe("hello-world");
});

test("slugify for all special characters", () => {
  expect(slugify("!@#$%^&*()+")).toBe("");
});

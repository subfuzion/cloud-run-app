import { expect, test } from "@jest/globals";

import { getPackageName, getPackageRoot } from "./util.js";

test("package name", () => {
  const name = getPackageName();
  expect(name).toBe("cloud-run-app");
});

test("package root", async () => {
  const name = await getPackageRoot();
  expect(name).toBe("cloud-run-app");
});

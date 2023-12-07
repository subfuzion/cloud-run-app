import { access, constants, lstat } from "node:fs/promises";
import { join, parse } from "node:path";
import { env } from "node:process";
import { dirname } from "node:path";
import { fileURLToPath } from 'node:url';

/**
 * Returns the package name if the process was started with npm (or if the
 * environment variable `npm_package_name` has been manually set).
 * @param {bool} shouldThrow Set to true if the function should throw.
 * @return {string} The package name or an empty string if shouldThrow is false.
 * @throws Error if `npm_package_name` isn't set (either set this manually or
 * use npm (`npm start|test`) when starting the process. See
 * [package.json vars](https://docs.npmjs.com/cli/v10/using-npm/scripts#packagejson-vars).
 */
export function getPackageName(shouldThrow = false): string {
  const name = env["npm_package_name"] || "";
  if (!name && shouldThrow) {
    throw new Error(
      "npm_package_name not set (start process with npm or set environment explicitly)",
    );
  }
  return name;
}

export async function getPackageRoot(): Promise<string> {
  let dir = dirname(fileURLToPath(import.meta.url));
  const { root } = parse(dir);

  while (dir && dir !== root) {
    const f = join(dir, "package.json");
    console.log("checking: " + f);
    try {
      await access(f);
      console.log("found: " + f);
      return dir;
    } catch {
      // keep looking
      console.log("not found: " + f);
    }
    dir = dirname(dir);
  }
  return dir;
}

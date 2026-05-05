import { getCommands } from "../commands/command_registry.js";
import { describe, expect, test } from "vitest";

describe("getCommands", () => {
  test("returns exit command with required fields", () => {
    const commands = getCommands();
    expect(commands["exit"]).toBeDefined();
    expect(commands["exit"].name).toBe("exit");
    expect(commands["exit"].description).toBeTruthy();
    expect(typeof commands["exit"].callback).toBe("function");
  });

  test("returns help command with required fields", () => {
    const commands = getCommands();
    expect(commands["help"]).toBeDefined();
    expect(commands["help"].name).toBe("help");
    expect(commands["help"].description).toBeTruthy();
    expect(typeof commands["help"].callback).toBe("function");
  });

  test("returns a fresh registry on each call", () => {
    const a = getCommands();
    const b = getCommands();
    expect(a).not.toBe(b);
  });
});

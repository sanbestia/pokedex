import { initState } from "../state.js";
import { describe, expect, test } from "vitest";

describe("initState", () => {
  test("returns registry with exit command", () => {
    const state = initState();
    state.rl.close();
    expect(state.registry["exit"]).toBeDefined();
    expect(state.registry["exit"].name).toBe("exit");
    expect(state.registry["exit"].description).toBeTruthy();
    expect(typeof state.registry["exit"].callback).toBe("function");
  });

  test("returns registry with help command", () => {
    const state = initState();
    state.rl.close();
    expect(state.registry["help"]).toBeDefined();
    expect(state.registry["help"].name).toBe("help");
    expect(state.registry["help"].description).toBeTruthy();
    expect(typeof state.registry["help"].callback).toBe("function");
  });

  test("returns a fresh state on each call", () => {
    const a = initState();
    const b = initState();
    a.rl.close();
    b.rl.close();
    expect(a).not.toBe(b);
  });
});

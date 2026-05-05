import { commandHelp } from "../commands/command_help.js";
import { State, CLICommand } from "../state.js";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { type Interface } from "readline";

const mockState: State = {
  rl: {} as Interface,
  registry: {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: vi.fn() as CLICommand["callback"],
    },
  },
};

describe("commandHelp", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("prints a line for each command", () => {
    commandHelp(mockState);
    const calls = (console.log as ReturnType<typeof vi.spyOn>).mock.calls.flat().join("\n");
    expect(calls).toContain("help");
    expect(calls).toContain("exit");
  });

  test("includes command descriptions", () => {
    commandHelp(mockState);
    const calls = (console.log as ReturnType<typeof vi.spyOn>).mock.calls.flat().join("\n");
    expect(calls).toContain("Displays a help message");
    expect(calls).toContain("Exits the pokedex");
  });

  test("prints welcome header", () => {
    commandHelp(mockState);
    const firstCall = (console.log as ReturnType<typeof vi.spyOn>).mock.calls[0][0];
    expect(firstCall).toContain("Welcome to the Pokedex");
  });
});

import { commandHelp } from "../commands/command_help.js";
import { CLICommand } from "../commands/command.js";
import { describe, expect, test, vi, beforeEach } from "vitest";

const mockCommands: Record<string, CLICommand> = {
  help: {
    name: "help",
    description: "Displays a help message",
    callback: commandHelp,
  },
  exit: {
    name: "exit",
    description: "Exits the pokedex",
    callback: vi.fn(),
  },
};

describe("commandHelp", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("prints a line for each command", () => {
    commandHelp(mockCommands);
    const calls = (console.log as ReturnType<typeof vi.spyOn>).mock.calls.flat().join("\n");
    expect(calls).toContain("help");
    expect(calls).toContain("exit");
  });

  test("includes command descriptions", () => {
    commandHelp(mockCommands);
    const calls = (console.log as ReturnType<typeof vi.spyOn>).mock.calls.flat().join("\n");
    expect(calls).toContain("Displays a help message");
    expect(calls).toContain("Exits the pokedex");
  });

  test("prints welcome header", () => {
    commandHelp(mockCommands);
    const firstCall = (console.log as ReturnType<typeof vi.spyOn>).mock.calls[0][0];
    expect(firstCall).toContain("Welcome to the Pokedex");
  });
});

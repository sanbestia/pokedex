import { createInterface, type Interface } from "readline";
import { commandExit } from "./commands/command_exit.js"
import { commandHelp } from "./commands/command_help.js"


export type State = { 
  rl: Interface;
  registry: Record<string, CLICommand>;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};


export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });

  const registry = {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
  };

  return { rl, registry };
}
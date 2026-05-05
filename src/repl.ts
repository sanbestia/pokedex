import { createInterface } from 'readline';
import { getCommands } from './commands/command_registry.js';
import { CLICommand } from './commands/command.js';


export function cleanInput(input: string): string[] {
    // Transform a string of words into a list of lowercase words without whitespace
    return input.toLowerCase().trim().split(/\s+/);
}

export function startREPL() {
    // Create interface to interact with the console stream
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });

    rl.prompt();

    rl.on('line', (input) => {
        const wordArr: string[] = cleanInput(input);

        if (wordArr[0] === "") {
            rl.prompt();
            return;
        }

        const command: CLICommand | undefined = getCommands()[wordArr[0]];

        if (typeof command === "undefined") {
            console.log("Unknown command")
            rl.prompt();
            return;
        }

        command.callback(getCommands());

        rl.prompt();
    });

}
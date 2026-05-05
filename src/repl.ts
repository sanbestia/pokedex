import { createInterface } from 'readline';
import { CLICommand } from './state.js';
import { State } from './state.js';


export function cleanInput(input: string): string[] {
    // Transform a string of words into a list of lowercase words without whitespace
    return input.toLowerCase().trim().split(/\s+/);
}

export function startREPL(state : State) {
    state.rl.prompt();

    state.rl.on('line', (input) => {
        const wordArr: string[] = cleanInput(input);

        if (wordArr[0] === "") {
            state.rl.prompt();
            return;
        }

        const command: CLICommand | undefined = state.registry[wordArr[0]];

        if (typeof command === "undefined") {
            console.log("Unknown command")
            state.rl.prompt();
            return;
        }

        command.callback(state);

        state.rl.prompt();
    });

}
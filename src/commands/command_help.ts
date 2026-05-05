import { State } from "../state.js";

export function commandHelp(state: State) {
    console.log(`Welcome to the Pokedex!\nUsage:`);
    for (const command of Object.values(state.registry)) {
        console.log(`${command.name}: ${command.description}`);
    }
}
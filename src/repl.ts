import { createInterface } from 'readline';


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
        } else {
            console.log(`Your command was: ${wordArr[0]}`);
            rl.prompt();
        };
    });



}
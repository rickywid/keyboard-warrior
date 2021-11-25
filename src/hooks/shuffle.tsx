import { useEffect, useState } from "react";

function shuffle(array: string[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const useShuffle = (array: string[]) => {

    const [state, setState] = useState<string[]>(array);

    useEffect(() => {
        setState(shuffle(array));
    }, [array])

    return [state];
}

export default useShuffle;
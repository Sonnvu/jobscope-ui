import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TextLoop({TEXTS}) {
    const [index, setIndex] = React.useState(0);

    React.useState(() => {
        const internvalId = setInterval(() => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(internvalId);
    }, []);

    return (
        <text className="font-black text-3xl uppercase text-blue-500 text-slate">
            <TextTransition springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </text>
    )
}
// comment here
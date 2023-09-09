import { createContext } from "react";

export interface ScoreType {
    score: number;
    setScore: (val: number) => void;
};

const ScoreContext = createContext<ScoreType>({
    score: 0,
    setScore: (_val: number) => { }
});

export default ScoreContext;


import { useState } from "react";
import ScoreContext from "../contexts/Score";
const ScoreProvider = ({ children }: { children: any }) => {
    const [score, setScore] = useState(0);

    return (
        <ScoreContext.Provider value={{
            score: score,
            setScore: setScore
        }} >
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider
import React from "react";
import "./VoteAverage.scss";

const VoteAverage = ({
    isLoading,
    voteAverage,
    size = "40px",
    bold = "3px",
    text = "10px",
    color = "#f62682",
}) => {
    const cacularVoteAverage = (voteAverage) => {
        if (typeof voteAverage !== "number") {
            voteAverage = 0;
        }
        const average = (voteAverage / 10) * 100;
        return Math.round(average * 100) / 100;
    };
    const average = cacularVoteAverage(voteAverage);
    return (
        <span className="flex justify-center items-center">
            {isLoading ? (
                <div
                    className="pie animate skeleton"
                    style={{
                        "--p": 10,
                        "--b": bold,
                        "--w": size,
                        "--text": text,
                        "--c": color,
                    }}
                >
                    10%
                </div>
            ) : (
                <div
                    className="pie animate"
                    style={{
                        "--p": average,
                        "--b": bold,
                        "--w": size,
                        "--text": text,
                        "--c": color,
                    }}
                >
                    {average}%
                </div>
            )}
        </span>
    );
};

export default VoteAverage;

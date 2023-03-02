import React from "react";
import "./VoteAverage.scss";

interface IVoteAverageProps {
    className?: string;
    isLoading?: boolean;
    voteAverage?: number;
    size?: string;
    bold?: string;
    text?: string;
    color?: string;
}

interface ICustomStyles extends React.CSSProperties {
    "--p"?: number;
    "--b"?: string;
    "--w"?: string;
    "--text"?: string;
    "--c"?: string;
}

const VoteAverage: React.FC<IVoteAverageProps> = ({
    className,
    isLoading,
    voteAverage = 0,
    size = "40px",
    bold = "3px",
    text = "10px",
    color = "#f62682",
}) => {
    const cacularVoteAverage = (voteAverage: number) => {
        if (typeof voteAverage !== "number") {
            voteAverage = 0;
        }
        const average = (voteAverage / 10) * 100;
        return Math.round(average * 100) / 100;
    };
    const average = cacularVoteAverage(voteAverage);

    const styles: ICustomStyles = {
        "--p": 10,
        "--b": "bold",
        "--w": "size",
        "--text": "text",
        "--c": "color",
    };
    return (
        <span className={`flex justify-center items-center ${className}`}>
            {isLoading ? (
                <div className="pie animate skeleton" style={styles}>
                    10%
                </div>
            ) : (
                <div className={`pie animate `} style={styles}>
                    {average}%
                </div>
            )}
        </span>
    );
};

export default VoteAverage;

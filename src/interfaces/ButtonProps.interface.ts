import { IMoive } from "./Movie.interface";

export interface IButtonProps {
    onClick?: () => void;
    disable?: boolean;
    children: React.ReactNode;
    className?: string;
}

export interface IButtonWatchTrailerProps {
    movieId: number | string | undefined;
    disable?: boolean;
}

export interface IButtonAddWatchListProps {
    movieInfo?: IMoive;
    disable?: boolean;
    className?: string;
}

export interface IButtonWatchNowProps {
    disable?: boolean;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    movieID: number | undefined;
}

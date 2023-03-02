import { withErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { IMoive } from "../../interfaces/Movie.interface";
import Image from "../Image";
import VoteAverage from "../voteAverage/VoteAverage";

interface IPopularItemProps {
    movieInfo?: IMoive;
    isLoading?: boolean;
}

const PopularItem: React.FC<IPopularItemProps> = ({ movieInfo, isLoading }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                if (isLoading || !movieInfo) return;
                navigate(`/home/${movieInfo?.id}`);
            }}
            className={`relative flex justify-center items-center gap-3 p-3 bg-slate-800 rounded-lg text-sm transition-all ${
                !isLoading && "cursor-pointer"
            }`}
        >
            <div
                className={`${
                    isLoading && "skeleton"
                } rounded-[inherit] w-[40%] h-[80px]`}
            >
                {!isLoading && (
                    <Image
                        src={`https://image.tmdb.org/t/p/w300/${
                            movieInfo?.poster_path || movieInfo?.backdrop_path
                        }`}
                        alt=""
                        className="w-full h-full object-cover rounded-[inherit]"
                    />
                )}
            </div>
            <div className="w-[60%]">
                {isLoading ? (
                    <div className="skeleton mb-7 w-[150px] h-2 rounded-lg"></div>
                ) : (
                    <h4 className="mb-3 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {movieInfo?.title || movieInfo?.name}
                    </h4>
                )}
                <div className="flex justify-between items-center">
                    {isLoading ? (
                        <div className="skeleton w-[20px] h-2 rounded-lg"></div>
                    ) : (
                        <span className="text-xs">
                            {movieInfo &&
                                new Date(
                                    movieInfo?.release_date ||
                                        movieInfo?.first_air_date
                                ).getFullYear()}
                        </span>
                    )}
                    <VoteAverage
                        voteAverage={movieInfo?.vote_average}
                        text="12px"
                    />
                </div>
            </div>
        </div>
    );
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(PopularItem, {
    FallbackComponent,
});

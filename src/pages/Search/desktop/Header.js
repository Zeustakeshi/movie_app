import React, { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";

const Header = ({ setSearchValue }) => {
    const [inputSearch, setInputSearch] = useState("");
    const debounce = useDebounce(inputSearch, 800);

    useEffect(() => {
        setSearchValue(debounce);
    }, [debounce, setSearchValue]);

    return (
        <div className="flex justify-center items-center p-5">
            <input
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                type="text"
                placeholder="search movie ..."
                className="bg-slate-800 px-5 py-3 outline-none w-[500px] rounded-lg placeholder:font-bold text-lg caret-primary"
            />
        </div>
    );
};

export default Header;

import React, { useState } from "react";

import SearchContent from "./SearchContent";
import Header from "./Header";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="flex-1 flex flex-col gap-4">
            <Header setSearchValue={setSearchValue} />
            <SearchContent searchValue={searchValue} />
        </div>
    );
};

export default SearchPage;

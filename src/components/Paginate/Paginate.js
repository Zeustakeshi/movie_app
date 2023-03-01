import React, { useEffect, useState } from "react";
import { withErrorBoundary } from "react-error-boundary";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
const Paginate = ({ data, itemsPerPage, setNextPage }) => {
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        if (!data || !data.total_pages) return;
        setPageCount(Math.ceil(data.total_pages / itemsPerPage));
    }, [itemOffset, data, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_pages;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    return (
        <ReactPaginate
            breakLabel={
                <div className=" rounded-sm p-1 md:py-2 md:px-3 font-bold cursor-pointer hover:bg-primary transition-all bg-slate-800 text-[12px] md:text-base">
                    ...
                </div>
            }
            nextLabel={<ion-icon name="chevron-forward-outline"></ion-icon>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel={<ion-icon name="chevron-back-outline"></ion-icon>}
            renderOnZeroPageCount={null}
            className="flex justify-center items-center gap-[5px] w-full max-w-[100vw] overflow-hidden"
            pageClassName="rounded-sm font-bold cursor-pointer hover:bg-primary transition-all bg-slate-800"
            pageLinkClassName="flex justify-center items-center p-1 md:py-2 md:px-3 text-[12px] md:text-base"
            activeClassName="bg-primary"
            previousLinkClassName="md:px-3 md:py-2 p-1 flex justify-center items-center transition-all text-xl text-slate-500  hover:text-primary"
            nextLinkClassName=" md:px-3 md:py-2 p-1 flex justify-center items-center transition-all text-xl text-slate-500  hover:text-primary"
            disabledLinkClassName="text-slate-800 pointer-events-none"
        />
    );
};

Paginate.propTypes = {
    data: PropTypes.object.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    setNextPage: PropTypes.func.isRequired,
};

function FallbackComponent() {
    return (
        <p className="bg-red-50 text-red-500">
            Something went wrong with this component
        </p>
    );
}

export default withErrorBoundary(Paginate, {
    FallbackComponent,
});

import { People } from "@/data";
import { isLastPage } from "@/helpers";
import { itemsPerPage, PropsPaginate } from "@/types";

export const PaginatorUiComponent = ({ pageNow, handlePrevPage, handleNextPage }: PropsPaginate) => {

  return (
    <ul className="flex flex-row justify-center items-center gap-5 text-xl my-5">
      <li><button onClick={handlePrevPage}>Prev</button></li>
      {pageNow - 1 > 0 && (<li>{pageNow - 1}</li>)}
      <li className="font-bold text-xl shadow rounded p-2 
      hover:text-white hover:bg-blue-600 transition-all duration-300"
      >
        {pageNow}
      </li>
      {!isLastPage(pageNow, itemsPerPage, People) && < li > {pageNow + 1}</li>}
      <li><button onClick={handleNextPage}>Next</button></li>
    </ul >
  )
}
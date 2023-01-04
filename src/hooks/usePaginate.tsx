import { People } from "@/data";
import { calculatePaginate, isLastPage } from "@/helpers";
import { IPerson } from "@/models";
import { itemsPerPage } from "@/types";
import { useEffect, useState } from "react";


const peopleList: IPerson[] = People;


export const usePaginate = () => {
  const [pageNow, setPageNow] = useState(1)

  const paginateList = () => {
    const { firstIndex, lastIndex } = calculatePaginate(peopleList, pageNow, itemsPerPage);
    return peopleList.slice(firstIndex, lastIndex);
  };

  const handlePrevPage = () => {
    if (pageNow === 1) return;
    setPageNow(pageNow - 1)
  };

  const handleNextPage = () => {
    if (isLastPage(pageNow, itemsPerPage, peopleList)) return;
    setPageNow(pageNow + 1);
  };

  useEffect(() => {
    paginateList
  }, [pageNow]);

  return {
    pageNow,
    handleNextPage,
    handlePrevPage,
    paginateList,
  }
}
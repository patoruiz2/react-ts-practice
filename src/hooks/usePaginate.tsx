import { People } from "@/data";
import { calculatePaginate } from "@/helpers";
import { IPerson } from "@/models";
import { useEffect, useState } from "react";


const peopleList: IPerson[] = People;
const itemsPerPage: number = 5;

export const usePaginate = () => {
  const [pageNow, setPageNow] = useState(1)

  const handlePrevPage = () => {
    setPageNow(pageNow - 1)
  };

  const handleNextPage = () => {
    setPageNow(pageNow + 1);
  }

  const paginateList = () => {
    const { firstIndex, lastIndex } = calculatePaginate(peopleList, pageNow, itemsPerPage);
    return peopleList.slice(firstIndex, lastIndex);
  }

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
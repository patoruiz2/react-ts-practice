import { IPerson } from "@/models";
import { useState } from "react";

type Props = {
  pageNow: number,
  handlePrevPage: () => void,
  handleNextPage: () => void,
};

export const PaginatorUiComponent = ({ pageNow, handlePrevPage, handleNextPage }: Props) => {

  return (
    <ul className="flex flex-row justify-center gap-5 text-xl my-5">
      <li><button onClick={handlePrevPage}>Prev</button></li>
      {pageNow - 1 !== 0 && (<li>{pageNow - 1}</li>)}
      <li>{pageNow}</li>
      <li>{pageNow + 1}</li>
      <li><button onClick={handleNextPage}>Next</button></li>
    </ul>
  )
}
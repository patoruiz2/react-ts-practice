import { People } from "@/data"
import { usePaginate } from "@/hooks/usePaginate";
import { IPerson } from "@/models";
import { PaginatorUiComponent } from "@/ui"
import { useState } from "react";

export interface IHome { }



export const HomePage: React.FC<IHome> = () => {

  const { pageNow, handleNextPage, handlePrevPage, paginateList } = usePaginate();
  const listPeople = paginateList();
  return (
    <>
      <div className="border p-5 rounded-sm shadow">
        <ul role="columnheader" className='grid gap-4 grid-flow-col grid-cols-3  h-full'>
          <li role="cell" className="border-r-2 font-bold">Name</li>
          <li role="cell" className="border-r-2 font-bold">Category</li>
          <li role="cell" className="border-r-2 font-bold">Company</li>

        </ul>
        <ul className='grid gap-4' role="row">
          {
            listPeople.map(person => (
              <div className="grid grid-cols-3 gap-4" key={person.id}>
                <li role="cell" className="mt-2">{person.name}</li>
                <li role="cell" className="mt-2">{person.category}</li>
                <li role="cell" className="mt-2">{person.company}</li>
              </div>

            ))
          }
        </ul>
      </div>
      <PaginatorUiComponent
        pageNow={pageNow}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  )
}

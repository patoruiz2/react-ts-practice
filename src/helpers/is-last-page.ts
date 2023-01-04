export const isLastPage = <T>(pageNow: number, itemsPerPage: number, list: T[]) => {
  const lastPage = list.length / itemsPerPage;
  return lastPage === pageNow;
}
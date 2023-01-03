export const calculatePaginate = <T>(list: T[], pageNow: number, itemsPerPage: number) => {
  const firstIndex: number = (pageNow - 1) * itemsPerPage;
  const lastIndex: number = firstIndex + itemsPerPage > list.length
    ? list.length
    : firstIndex + itemsPerPage;
  return { firstIndex, lastIndex }
};


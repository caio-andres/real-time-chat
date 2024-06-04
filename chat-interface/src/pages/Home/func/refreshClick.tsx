export const resetPage = () => {
  window.location.reload();
};

export const handleRefreshClick = () => {
  setTimeout(() => {
    console.log(localStorage.getItem("nome"));
    resetPage();
  }, 100);
};

export const resetPage = () => {
  window.location.reload();
};

export const handleRefreshClick = () => {
  setTimeout(() => {
    resetPage();
  }, 3000);
};

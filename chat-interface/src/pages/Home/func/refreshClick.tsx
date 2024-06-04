export const resetPage = () => {
  window.location.reload();
};

export const handleRefreshClick = (
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsRotating(true);
  setTimeout(() => {
    setIsRotating(false);
    resetPage();
  }, 1000);
};

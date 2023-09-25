const getDataFromLs = () => {
  const storedData = localStorage.getItem("donation");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveDataToLs = (id) => {
  const storedDatas = getDataFromLs();
  const isExist = storedDatas?.find((dataId) => dataId === id);
  if (!isExist) {
    storedDatas.push(id);
    localStorage.setItem("donation", JSON.stringify(storedDatas));
  }
};

export { getDataFromLs, saveDataToLs };

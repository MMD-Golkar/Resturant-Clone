export const handleSearch = (e, searcheditem, user, setUser, navigate) => {
  e.preventDefault();
  if (!searcheditem.trim()) return;

  setUser((prevUser) => ({
    ...prevUser,
    searchfor: searcheditem.trim(),
  }));
  if (searcheditem !== "") navigate("/shop");
};

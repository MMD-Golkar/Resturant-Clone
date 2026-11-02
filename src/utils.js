export const handleSearch = (e, searcheditem, user, setUser, navigate) => {
  e.preventDefault();
  const query = searcheditem.trim();

  setUser((prevUser) => ({
    ...prevUser,
    searchfor: query,
  }));
  navigate("/shop");
};

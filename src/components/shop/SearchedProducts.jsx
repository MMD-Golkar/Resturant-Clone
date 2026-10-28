import { useState } from "react";
import { ProductsList } from "../../lists";
import { Products } from "../../components/shop/Products";
import { ProductsSidebar } from "../../components/shop/ProductsSidebar";

export function SearchedProducts({ user, setUser }) {
  const query = user.searchfor;            // comes from App.jsx
  const [category, setCategory] = useState("all");

  const q = query.trim().toLowerCase();

  const filteredProducts = ProductsList.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesQuery =
      !q ||
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  // used by the sidebar search box
  const handleSidebarSearch = (value) => {
    setUser((prev) => ({ ...prev, searchfor: value.trim() }));
  };

  const clearFilters = () => {
    setUser((prev) => ({ ...prev, searchfor: "" }));
    setCategory("all");
  };

  return (
    <div className="ml-auto mr-auto w-[90%] pt-10">
      <h3 className="mb-10 text-sm text-gray-500">
        {q ? `Home/Shop/Search results for "${query.trim()}"` : "Home/Shop"}
      </h3>

      <section className="flex flex-col gap-10 md:flex-row md:gap-5">
        <SearchedProductsLeftComponent
          products={filteredProducts}
          onClear={clearFilters}
        />
        <SearchedProductsRightComponent
          query={query}
          onSearch={handleSidebarSearch}
          category={category}
          onCategoryChange={setCategory}
        />
      </section>
    </div>
  );
}

export function SearchedProductsLeftComponent({ products, onClear }) {
  return (
    <div className="min-w-0 flex-1">
      <Products products={products} onClear={onClear} />
    </div>
  );
}

export function SearchedProductsRightComponent({
  query,
  onSearch,
  category,
  onCategoryChange,
}) {
  return (
    <ProductsSidebar
      query={query}
      onSearch={onSearch}
      activeCategory={category}
      onCategoryChange={onCategoryChange}
    />
  );
}

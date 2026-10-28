import { useState } from "react";
import { ProductsList, RecentPosts } from "../../lists";

const counts = {};
ProductsList.forEach((p) => {
  counts[p.category] = (counts[p.category] || 0) + 1;
});
const categories = [
  { name: "all", count: ProductsList.length },
  ...Object.entries(counts).map(([name, count]) => ({ name, count })),
];

const featuredProducts = ProductsList.slice(0, 5);

function SidebarCard({ title, children, titleClassName = "" }) {
  return (
    <div className="border border-gray-200 bg-white p-4">
      {title && (
        <h4
          className={`mb-5 text-center text-sm uppercase text-[#654832] ${titleClassName}`}
        >
          {title}
        </h4>
      )}
      {children}
    </div>
  );
}

export function ProductsSidebar({
  query,
  onSearch,
  activeCategory,
  onCategoryChange,
}) {
  const [value, setValue] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <aside className="flex w-full shrink-0 flex-col gap-8 md:w-64 lg:w-72">
      <SidebarCard title="Search eateries" titleClassName="hidden md:block">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search products..."
            className="h-11 w-full border border-black px-3 text-sm outline-none"
          />
          <button
            type="submit"
            className="mt-3 w-full cursor-pointer bg-[#654832] py-3 font-semibold tracking-wide text-white transition hover:bg-[#503824]"
          >
            Search
          </button>
        </form>
      </SidebarCard>

      <SidebarCard title="Products">
        <ul className="flex flex-col gap-5">
          {featuredProducts.map((product) => (
            <li key={product.id} className="flex items-start justify-between gap-3">
              <div>
                <h5 className="text-sm font-semibold leading-snug text-gray-800">
                  {product.name}
                </h5>
                <div
                  className="text-[#654832]"
                  aria-label={`${product.rating} out of 5 stars`}
                >
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <div className="text-sm text-gray-600">
                  {product.salePrice ? (
                    <>
                      <span className="line-through">${product.price}</span>{" "}
                      <span className="underline">${product.salePrice}</span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </div>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="h-12.5 w-12.5 shrink-0 object-cover"
              />
            </li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard title="Product categories">
        <ul className="flex flex-col">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                type="button"
                onClick={() => onCategoryChange(cat.name)}
                className={`flex w-full cursor-pointer items-center justify-between px-2 py-2 text-left capitalize transition hover:text-[#654832] ${
                  activeCategory === cat.name
                    ? "font-semibold text-[#654832]"
                    : "text-gray-800"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-sm font-normal text-gray-500">
                  ({cat.count})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard title="Recent posts">
        <ul className="flex flex-col gap-3 px-2">
          {RecentPosts.map((post) => (
            <li key={post.id}>
              <a
                href={post.href}
                className="text-gray-800 transition hover:text-[#654832]"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </SidebarCard>
    </aside>
  );
}
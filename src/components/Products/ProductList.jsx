import React, { useEffect, useState } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import Pagination from "../Common/Pagination";
import useData from "../../hooks/useData";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  // const page = search.get("page");

  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        category: category,
        perPage: 10,
        page: page,
      },
    },
    [category, page]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // const handlePageChange = (page) => {
  //   const currentParams = Object.fromEntries([...search]);

  //   setSearch({ ...currentParams, page: page });
  // };
  // const handlePageChange = (page) => {
  //   const currentParams = Object.fromEntries([...search]);

  //   setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
  // };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight - 1 &&
        !isLoading &&
        data &&
        page < data.totalPages
      ) {
        // handlePageChange();
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, isLoading]);

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <section className="product_list_section">
      <header className="align_center product_list_header">
        <h2>Products</h2>

        <select name="sort" id="" className="product_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="product_list">
        {error && <em className="form_error">{error}</em>}
        {data?.products &&
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.images[0]}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.count}
              stock={product.stock}
            />
          ))}

        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}

        {/* {data && (
          <Pagination
            totalPosts={data.totalProducts}
            currentPage={page}
            postPerPage={8}
            onClick={handlePageChange}
          />
        )} */}
      </div>
    </section>
  );
};

export default ProductList;

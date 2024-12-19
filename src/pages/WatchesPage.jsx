import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryAndBrand } from "../redux/slices/productSlice";
import {store} from "../redux/store";

const WatchesPage = () => {
    const dispatch = useDispatch();
    const { items: products, loading, error } = useSelector((state) => state.products);

    const fetchProducts = async () => {
        try {
            // Fetch all watches under category 1
            const response = await store.dispatch(fetchProductsByCategoryAndBrand());
            console.log("Products fetched successfully:", response);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        // Call the function that fetches the products
        fetchProducts();
    }, [dispatch]); // Only run once when the component mounts

    return (
        <div>
            <h1>Watches</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default WatchesPage;

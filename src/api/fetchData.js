export const fetchData = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=800');
        const data = await res.json();
        // setProducts(data.products);
        return data.products;
    } catch (err) { console.error(err); }
}
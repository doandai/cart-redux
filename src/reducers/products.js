var initialSate = [
  {
    id: 1,
    name: "Iphone",
    image:
      "https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-pro-max-64-gb.jpg",
    description: "san pham do Apple",
    price: 5000,
    iventory: 10,
    rating: 5,
  },
  {
    id: 2,
    name: "S7",
    image:
      "https://didongviet.vn/pub/media/catalog/product//g/a/galaxy-s20-didongviet_5.jpg",
    description: "san pham do Samsung",
    price: 4000,
    iventory: 5,
    rating: 4,
  },
  {
    id: 3,
    name: "Oppo",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/212116/oppo-a5-2020-128gb-trang-600x600-600x600.jpg",
    description: "san pham do Oppo",
    price: 2000,
    iventory: 8,
    rating: 3,
  },
];

const products = (state = initialSate, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;

const initialState = {
  products: [
    {
      id: 1,
      title: "Apple iPhone 13 Green 256GB 5G",
      description:
        "Meld style and practicality with the Apple iPhone 13 smartphone",
      price: " 340.45",
      image: "../images/01.jpg",
      amount: 5,
    },
    {
      id: 2,
      title: 'Apple MacBook Pro Core i7 2.5GHz 13"',
      description:
        "This MacBook Pro has been professionally restored to working order by an approved vendor",
      price: " 870.45",
      image: "../images/02.jpg",
      amount: 3,
    },
    {
      id: 3,
      title: "Canon EOS M53 Mirror Camera Body",
      description:
        "2160p UHD Video Recording, Built-in Flash, Body only, Auto Focus, AE/FE Lock, Tripod Thread",
      price: " 500.00",
      image: "../images/03.jpg",
      amount: 4,
    },
    {
      id: 4,
      title: 'VIZIO D-Series D24F-F1 24" Full HD Smart TV',
      description:
        'VIZIO D-Series D24F-F1 24" Full HD LED Smart TV. Condition is Manufacturer refurbished',
      price: " 1100.99",
      image: "../images/4.jpg",
      amount: 2,
    },
  ],
};
const productReducer = (state = initialState, action) => {
  return state;
};
export default productReducer;

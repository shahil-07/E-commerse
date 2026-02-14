export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "household", label: "Household" },
      { id: "beauty", label: "Beauty" },
      { id: "cosmetics", label: "Cosmetics" },
      { id: "computer-accessories", label: "Computer Accessories" },
      { id: "home-appliances", label: "Home Appliances" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "samsung", label: "Samsung" },
      { id: "lg", label: "LG" },
      { id: "philips", label: "Philips" },
      { id: "dell", label: "Dell" },
      { id: "hp", label: "HP" },
      { id: "loreal", label: "L'Oreal" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "household",
    label: "Household",
    path: "/shop/listing",
  },
  {
    id: "beauty",
    label: "Beauty",
    path: "/shop/listing",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    path: "/shop/listing",
  },
  {
    id: "computer-accessories",
    label: "Computer Accessories",
    path: "/shop/listing",
  },
  {
    id: "home-appliances",
    label: "Home Appliances",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  household: "Household",
  beauty: "Beauty",
  cosmetics: "Cosmetics",
  "computer-accessories": "Computer Accessories",
  "home-appliances": "Home Appliances",
};

export const brandOptionsMap = {
  samsung: "Samsung",
  lg: "LG",
  philips: "Philips",
  dell: "Dell",
  hp: "HP",
  loreal: "L'Oreal",
};

export const filterOptions = {
  category: [
    { id: "household", label: "Household" },
    { id: "beauty", label: "Beauty" },
    { id: "cosmetics", label: "Cosmetics" },
    { id: "computer-accessories", label: "Computer Accessories" },
    { id: "home-appliances", label: "Home Appliances" },
  ],
  brand: [
    { id: "samsung", label: "Samsung" },
    { id: "lg", label: "LG" },
    { id: "philips", label: "Philips" },
    { id: "dell", label: "Dell" },
    { id: "hp", label: "HP" },
    { id: "loreal", label: "L'Oreal" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];

interface UserCredentials {
  username: string;
  password: string;
}

interface Product {
  name: string;
  price: string;
  description: string;
}

const testData: {
  [key: string]: UserCredentials | Product;
} = {
  userStandard: {
    username: "standard_user",
    password: "secret_sauce",
  },
  userLocked: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
  productOne: {
    name: "Sauce Labs Backpack",
    price: "$29.99",
    description:
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
  },
  productTwo: {
    name: "Sauce Labs Bike Light",
    price: "$9.99",
    description:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
  },
};

export default testData;

interface UserCredentials {
  username: string;
  password: string;
}

const testData: { [key: string]: UserCredentials } = {
  userStandard: {
    username: "standard_user",
    password: "secret_sauce",
  },
  userLocked: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
};

export default testData;

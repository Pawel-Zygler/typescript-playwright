interface UserCredentials {
  username: string;
  password: string;
}

const testData: { [key: string]: UserCredentials } = {
  userStandard: {
    username: "standard_user",
    password: "secret_sauce",
  },
  userGlitch: {
    username: "performance_glitch_user",
    password: "secret_sauce",
  },
};

export default testData;

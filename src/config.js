const config = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-api-mabry",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://7h2we7wch8.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_DpRSefWsD",
    APP_CLIENT_ID: "Y50tg79mprfg22a1nhrlcs9hs9o",
    IDENTITY_POOL_ID: "us-west-2:7bfd41b5-ca8a-4844-8bbd-2a11b6ddcd3e",
  },
};

export default config;

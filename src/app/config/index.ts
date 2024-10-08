import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 1440,
  mongodb_url: process.env.MONGODB_URL,
  node_env: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS || 10,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,

  payment_url: process.env.PAYMENT_URL,
  payment_verify_url: process.env.PAYMENT_VERIFY_URL,
  store_id: process.env.STORE_ID,
  signature_key: process.env.SIGNATURE_KEY,

  client_base_url: process.env.CLIENT_BASE_URL,
};

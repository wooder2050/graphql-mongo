import mongoose from "mongoose";
import config from "../config";

const expressLoader = (app) => {
  return app;
};

const mongooseLoader = async () => {
  const { MONGODB_BASE_URL, MONGODB_DATABASE_NAME } = config;
  console.log(MONGODB_BASE_URL);
  const connect = async () => {
    await mongoose.set("debug", true);
    await mongoose.connect(`${MONGODB_BASE_URL}`, {
      dbName: `${MONGODB_DATABASE_NAME}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
      (err) => {
        if (err) console.log("몽고디비 연결 에러 : ", err);
        else console.log("몽고디비 연결 성공");
      };
  };
  await connect();
  mongoose.connection.on("error", (e) => {
    console.error("connection error:");
    console.error(e);
  });
  mongoose.connection.once("open", () => {
    console.log("mongo db connected");
  });
};
const initLoaders = async (app) => {
  expressLoader(app);
  await mongooseLoader();
};

export default initLoaders;

import mongoose from "mongoose";

export default function connectDB() {
  const mongoURL = Bun.env.MONGO_URL;

  try {
    mongoose.connect(mongoURL);
  } catch (error) {
    const castedError = error as Error;
    console.error(castedError.message);
    process.exit(1);
  }

  mongoose.connection.once("open", (_) => {
    console.log(`Database connected`);
  });

  mongoose.connection.on("error", (err) => {
    console.error(`Database connection error: ${err}`);
  });
}

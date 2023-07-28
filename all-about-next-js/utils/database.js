import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongo db url"
    );
    console.log(`Database connected on ${connection.host}`);
  } catch (error) {
    console.log("Error", error);
  }
};

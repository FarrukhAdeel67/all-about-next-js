import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://farrukhadeel:pps993icp956@cluster0.ysuiv.mongodb.net/all-about-nextjs"
    );
    console.log(`Database connected on ${connection.host}`);
  } catch (error) {
    console.log("Error", error);
  }
};

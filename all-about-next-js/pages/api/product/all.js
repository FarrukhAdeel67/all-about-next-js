import { Product } from "@/model/products";
import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
  const products = await Product.find();
  await connectDB();
  res.status(200).json({
    success: true,
    products,
  });
}

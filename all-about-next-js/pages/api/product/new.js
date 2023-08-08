import { Product } from "@/model/products";
import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
  await connectDB();
  if (req.method !== "POST") {
    res.status(404).json({
      success: false,
      message: `no API with ${req.method} method`,
    });
  } else {
    const { name, price, category } = req.body;
    const product = await Product.create({
      price,
      name,
      category,
    });
    res.status(201).json({
      success: true,
      product,
      message: "product created successfully",
    });
  }
}
//this is comment
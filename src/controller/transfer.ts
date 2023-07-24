// // DataTransferController.js
// import { CartModel } from "../models/cart.model";
// import { OrderModel } from "../models/order.model";

// const transferData = async (req, res) => {
//   try {
//     // Retrieve data from the source table
//     const sourceData = await CartModel.findAll({ limit: 3 }); // Fetch only 3 rows

//     // Transfer the selected data to the destination table
//     await OrderModel.bulkCreate(sourceData);

//     res.status(200).json({ message: "Data transfer successful" });
//   } catch (error) {
//     console.error("Error transferring data:", error);
//     res.status(500).json({ message: "Error transferring data" });
//   }
// };

// module.exports = { transferData };

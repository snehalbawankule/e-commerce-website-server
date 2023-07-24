import {
  getAllOrder,
  updateOrder,
  getCurrentUserOrder,
} from "../service/orders.service";

const getAllOrders = async (req: any, res: any, next: any) => {
  getAllOrder(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

// const postOrder = async (req: any, res: any) => {
//   try {
//     const { userId, userAddressId } = req.body;
//     const Order = await createOrder(userId, userAddressId);
//     return res.json(Order);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

const updateOrders = async (req: any, res: any) => {
  try {
    const { id, name, image } = req.body;
    const result = await updateOrder(id, name);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const getOrdersById = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getCurrentUserOrder(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order,
    req.query.userId
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

export { getAllOrders, updateOrders, getOrdersById };

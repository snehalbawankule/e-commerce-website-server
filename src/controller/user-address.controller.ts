import {
  getAllUserAddresss,
  createUserAddress,
  updateUserAddresss,
} from "../service/user-address.service";

const getAllUserAddress = async (req: any, res: any, next: any) => {
  getAllUserAddresss(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addUserAddress = async (req: any, res: any) => {
  try {
    const {
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      mobile,
    } = req.body;
    const UserAddress = await createUserAddress(
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      mobile
    );
    return res.json(UserAddress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateUserAddress = async (req: any, res: any) => {
  try {
    const {
      id,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      mobile,
    } = req.body;
    const result = await updateUserAddresss(
      id,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      mobile
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAllUserAddress, addUserAddress, updateUserAddress };

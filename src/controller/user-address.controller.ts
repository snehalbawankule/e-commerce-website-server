import {
  getCurrentUserAddresss,
  createUserAddress,
  updateUserAddresss,
  removeUserAddress,
} from "../service/user-address.service";

const getAllUserAddress = async (req: any, res: any, next: any) => {
  getCurrentUserAddresss(req.query.id)
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
      userId,
      name,
      mobile,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      alternative_mobile,
      address_type,
    } = req.body;
    const UserAddress = await createUserAddress(
      userId,
      name,
      mobile,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      alternative_mobile,
      address_type
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

      name,
      mobile,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      alternative_mobile,
      address_type,
    } = req.body;
    const result = await updateUserAddresss(
      id,

      name,
      mobile,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      alternative_mobile,
      address_type
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const deleteUserAddress = async (req: any, res: any, next: any) => {
  removeUserAddress(req.query.id)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export {
  getAllUserAddress,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
};

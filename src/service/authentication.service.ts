import jwt from "jsonwebtoken";

export const verifyToken = async (req: any, res: any, next: any) => {
  try {
    let token = req.header("Authorization");
    if (!token) res.status(400).json({ message: "Invalid token" });
    if (!token.startsWith("Bearer "))
      res.status(400).json({ message: "invalid header" });

    token = token.slice(7, token.length).trim();

    const verify = jwt.verify(token, "SECRET");
    req.user = verify;
    next();
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

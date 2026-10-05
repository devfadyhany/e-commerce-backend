const adminPerms = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "user not authenticated" });
  }

  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access denied. you aren't an admin" });
  }

  next();
};

export default adminPerms;

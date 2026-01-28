import jwt from "jsonwebtoken";

const optionalAuth = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    req.userId = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    req.userId = null;
    next();
  }
};

export default optionalAuth;

import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  role: "buyer" | "supplier" | "admin";
  impersonating?: {
    id: string;
    role: "buyer" | "supplier";
  };
}

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
};

export const getAuthUser = (token: string) => {
  const decoded = verifyToken(token);

  if (decoded.impersonating) {
    return {
      userId: decoded.impersonating.id,
      role: decoded.impersonating.role,
      isImpersonating: true,
      adminId: decoded.id,
    };
  }

  return {
    userId: decoded.id,
    role: decoded.role,
    isImpersonating: false,
  };
};

export const requireRole = (user: any, roles: string[]) => {
  if (!roles.includes(user.role)) {
    throw new Error("Forbidden");
  }
};
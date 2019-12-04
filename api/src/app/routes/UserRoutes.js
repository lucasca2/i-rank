// import UserValidator from "../validators/UserValidator";
// import authMiddleware from "../middlewares/auth";

/**
 * User route file - /users
 * @param routes
 * @param Controller
 */
export default function UserRoutes ( routes, Controller ) {
  // routes.post(`/`, UserValidator.store, Controller.store);
  routes.get(`/`, (req, res) => res.json({ teste: true }));

  return routes;
}

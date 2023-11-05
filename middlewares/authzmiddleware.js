// middlewares/authzMiddleware.js
export const authorizeTeacher = (req, res, next) => {
    const user = req.user;
  
    if (user.role !== 'teacher') {
      return res.sendStatus(403);
    }
  
    next();
  };
  
  export const authorizeAdmin = (req, res, next) => {
    const user = req.user;
  
    if (user.role !== 'admin') {
      return res.sendStatus(403);
    }
  
    next();
  };
  
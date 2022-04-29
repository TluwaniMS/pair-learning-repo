const { extractJWTToken } = require("../Services/middleWareService");
const { createUser, getUserByEmail } = require("../database-queries/UserDBQueries");

const userSyncHandler = async (req, res, next) => {
    if (req.headers.authorization) {
      const tokenInformation = extractJWTToken(req.headers.authorization);
      const user = await getUserByEmail(tokenInformation.email);
  
      if (!user) {
        const createdUser = await createUser({name:tokenInformation.name, surname:tokenInformation.surname, email :tokenInformation.email});
        req.user = createdUser;
      } else {
        req.user = user;
      }
    }
  
    next();
  };
  
  module.exports = { userSyncHandler };

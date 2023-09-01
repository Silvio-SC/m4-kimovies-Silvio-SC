import { verifyToken } from './verifyToken.middleware';
import { verifyAdm } from './verifyAdm.middleware';
import { idExists } from './idExist.middleware';
import { handleErrors } from './handleErrors.middleware';


export default { handleErrors, idExists, verifyAdm, verifyToken }
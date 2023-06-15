import jwt from 'jsonwebtoken';

const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
export default async function apiJwtGuard(apiToken: string) {
    if (!apiToken) {
        return false
    }
    try {
        const decodedJWT = jwt.decode(apiToken, { complete: true });
        if (!decodedJWT || !decodedJWT.payload || !decodedJWT.header.alg) {
            return false;
        }
        // STEP: verify the jwt token 
        // step 2: check authorization header and get token
        const decodedJWTAccessToken = await jwt.verify(apiToken, tokenSecret);
        if (!decodedJWTAccessToken) {
            // if error, decoded id not found kick out
            return false;
        } else return true;

    } catch (error) {
        return false;
    }
}
import jwt_decode from "jwt-decode";
export const getDecodedTokenData = (inpReq) => {
    const token = inpReq.cookies.access_token;
    const tokenData = jwt_decode(token);
    return tokenData;

}
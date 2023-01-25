import { ThreeDots } from "react-loader-spinner";

export const carregamento = (
    <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />
);

export const urlLogin = `${process.env.REACT_APP_API_URL}/auth/sign-in`
export const urlSignUp = `${process.env.REACT_APP_API_URL}/auth/sign-up`
export const urlAccounts = `${process.env.REACT_APP_API_URL}/accounts`
export const urlPostStatement = `${process.env.REACT_APP_API_URL}/accounts`
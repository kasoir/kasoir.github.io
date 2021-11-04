import { objectify } from '../utils/objectify';

export interface User {
    id?: string,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isVerified?: boolean,
    status?: string;
}

const defaultUser: Required<User> = {
    password: '',
    id: '',
    name: '',
    isVerified: false,
    status: '',
    isAdmin: false,
    email: '',
};

export const getDefaultUser = () => {
	return objectify( defaultUser );
};
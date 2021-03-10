export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}

export interface UserImg{
    id: string;
    user: string;
    base64: string;
}
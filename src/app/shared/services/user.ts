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


export interface AllIngredients {
    ingredient: string;
    quantity: string;
}

export interface Recipe {
    id:string;
    category: string;
    name: string;
    description: string;
    allIngredients: AllIngredients[];
    photoName: string;
    base64: string;
    user: string;
}
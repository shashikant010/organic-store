export interface Product extends Document{
    title:string;
    description:string;
    price:number;
    
}


export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    Cart:[]
}
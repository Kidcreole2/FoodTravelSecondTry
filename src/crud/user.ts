import { DataType } from 'ts-postgres';
class User {
    signUp( user_type: string,kitchen_name: string,first_name: string,last_name: string,mail: string,hash_password: string,user_token: string,telephone: string,user_address: string,restaraunt_id: string): number {
        try {
            
        }catch (error) {
            console.error(error);
        }
    }
    signIn(): number {
        let x : number;
        x = 1;
        return x;
    }
}
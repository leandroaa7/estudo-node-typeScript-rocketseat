import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    email?: string;
    firstName?: string;
    lastName?: string;
    fullName(): string;
}



const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
})

UserSchema.methods.fullName = function (): string {
    return this.firstName + ' ' + this.lastName;
}

//passa a interface para ser a extrutura padrão, assim consigo ver os parâmetros em UserControler
export default model<UserInterface>('User', UserSchema)
import { Schema } from 'mongoose';

export const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        firstName: {
            type: String,
            trim: true,
            default: '',
        },
        lastName: {
            type: String,
            trim: true,
            default: '',
        },
        userName: {
            type: String,
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (obj, ret) => {
                delete ret._id;
            },
        },
        toObject: {
            virtuals: true,
        },
    },
);

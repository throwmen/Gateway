/* eslint-disable prettier/prettier */
import {
    IsDateString,
    IsInt,
    IsString,
} from 'class-validator';

export class CreateLiquorDto {
    @IsString()
    readonly liquorType: string;

    @IsInt()
    readonly quantity: number;

    @IsInt()
    readonly stockLevel: number;

    @IsDateString()
    readonly orderDate: string;

    @IsString()
    readonly supplierContact: string;

    @IsInt()
    readonly reorderThreshold: number;

    @IsInt()
    readonly eventServed: number;
}
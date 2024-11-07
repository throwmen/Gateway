/* eslint-disable prettier/prettier */
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  readonly eventName: string;

  @IsDateString()
  readonly eventDate: string;

  @IsString()
  readonly guestName: string;

  @IsEmail()
  readonly guestEmail: string;

  @IsInt()
  @Min(1)
  readonly guestCount: number;

  @IsOptional()
  @IsString()
  readonly specialRequests?: string;
}

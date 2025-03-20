import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: 'What is your full name?',
  })
  fullName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({
    message: 'What is your email address?',
  })
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: 'What is the id of the event?',
  })
  eventId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({
    message: 'What is the amount for the event?',
  })
  amount: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: 'What is the transaction reference?',
  })
  transactionReference: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: 'What is your payment type?',
  })
  type: 'Card' | 'Crypto';

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  gatewayReference?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  paymentLink?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  gatewayStatus?: string;
}

export class InitializeTransactionDto {
  eventId: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
}

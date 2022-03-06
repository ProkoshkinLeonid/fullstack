import {ApiProperty} from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({example: '@ya.com', description: 'Email пользователя', required: true})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({},{message: 'Некорректный email адрес'})
    readonly email: string;
    @ApiProperty({example: '1234', description: 'Пароль пользователя', required: true})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Длина пароля должна быть не меньше 4 и не больше 16 символов'})
    readonly password: string;
}
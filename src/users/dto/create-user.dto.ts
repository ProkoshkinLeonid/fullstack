import {ApiProperty} from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({example: '@ya.com', description: 'Email пользователя', required: true})
    readonly email: string;
    @ApiProperty({example: '1234', description: 'Пароль пользователя', required: true})
    readonly password: string;
}
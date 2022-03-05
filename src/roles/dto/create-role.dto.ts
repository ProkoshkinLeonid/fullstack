import {ApiProperty} from '@nestjs/swagger'

export class CreateRoleDto {
    @ApiProperty({example: 'Админ', description: 'уникальная роль пользователя', required: true})
    readonly value: string;
    @ApiProperty({example: '1234', description: 'Описание роли', required: true})
    readonly description: string;
}
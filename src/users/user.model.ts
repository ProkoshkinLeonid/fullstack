import { Column, DataType, Table, Model, BelongsToMany} from "sequelize-typescript";
import {ApiProperty, ApiTags} from '@nestjs/swagger'
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}
@ApiTags('Пользователи')
@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор', required: false})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '@ya.com', description: 'Email пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '1234', description: 'Пароль пользователя'})
    @Column({type: DataType.TEXT, allowNull: false})
    password: string;

    @ApiProperty({example: false, description: 'Забанен ли пользователь в системе', required: false})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned:boolean;
    
    @ApiProperty({example: 'Потому что', description: 'Причина бана', required: false})
    @Column({type: DataType.STRING})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}
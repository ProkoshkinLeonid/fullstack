import { Column, DataType, Table, Model, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {ApiProperty, ApiTags} from '@nestjs/swagger'
import { User } from "src/users/user.model";
import { Role } from "./roles.model";

@ApiTags('Роли')
@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}
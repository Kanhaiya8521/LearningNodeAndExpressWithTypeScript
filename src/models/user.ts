import {Table, Model, Column, DataType} from 'sequelize-typescript';

@Table({
    timestamps:true,
    tableName: 'users'
})

export class Users extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string

}
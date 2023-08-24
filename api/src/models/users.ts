import { Model } from 'sequelize';
import { UserAtributes } from '../types';

module.exports = (sequelize: any, DataTypes: any) =>{
	class User extends Model<UserAtributes>
	implements UserAtributes{
		id!:string;
		name!: string;
		lastName!: string;
		email!: string;
		password!: string;
		static associate(model: any){
			User.belongsToMany(model.Pokemon, {
				through: 'UserPokemon'
			})
		}
	}
	User.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false
		},
		name:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'User'
	})
}
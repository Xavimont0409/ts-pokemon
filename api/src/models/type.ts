import { Model } from 'sequelize'
import { TypeAtributes } from '../types'

module.exports = (sequelize: any, DataTypes: any) =>{
	class Type extends Model<TypeAtributes>
	implements TypeAtributes{
		id!: string;
		name!: string;

		static associate(model: any) {
			Type.belongsToMany(model.Pokemon, {
				through: 'PokemonType'
			})
		}
	}
	Type.init({
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},{
		sequelize,
		modelName: 'Type'
	})
}
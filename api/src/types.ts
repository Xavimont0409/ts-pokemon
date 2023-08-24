export interface PokemonAtributes {
	id: string;
	name: string;
	image: string;
	life: number;
	attack: number;
	defense: number;
	speed: number;
	height: number;
	weight: number;
	created: boolean;
}

export interface TypeAtributes {
	id: string;
	name: string;
}

export interface UserAtributes {
	id: string;
	name: string;
	lastName: string;
	email: string;
	password: string;
}
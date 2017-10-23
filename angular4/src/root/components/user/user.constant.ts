let prodUrl = 'https://ustadium-api.herokuapp.com',
    devUrl = 'https://ustadium-api-dev.herokuapp.com';

export class UserAPI {
	// GET user ID
	public static getByID = devUrl.concat('/api/users/');
};

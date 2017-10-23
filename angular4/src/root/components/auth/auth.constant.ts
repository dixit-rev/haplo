let prodUrl = 'https://ustadium-api.herokuapp.com/auth';
let devUrl = 'https://ustadium-api-dev.herokuapp.com/auth';

export class AuthAPI {
	public static signUp = devUrl.concat('/signup');
	public static verify = devUrl.concat('/verify');
	public static logIn = devUrl.concat('/token');
	public static forgotPassword = devUrl.concat('/forgot-password');
	public static resetPassword = devUrl.concat('/reset-forgotten-password');
}



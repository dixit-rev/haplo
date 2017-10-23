import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserAPI } from './user.constant';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http: Http,
                private authService: AuthService) {

    }

    extractUserID(token) {
      let payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);

      return payload.data;
    }

    getUser() {
      let config,
          credentials = this.getUserAndToken(),
          url = UserAPI.getByID;

      if (credentials) {
        config = {
          headers: {
            Authorization: 'JWT ' + credentials.token
          }
        };

        url = UserAPI.getByID.concat(credentials.userID);

        return this.http.get(url, config)
          .map((res: Response) => {
            return res.json().data.data
          });
      } else {
        return null;
      }
    }

    getUserAndToken() {
      let token = this.authService.getJWT(),
          userAndToken,
          userID;

      if (token) {
        userID = this.extractUserID(token);
        userAndToken = { userID: userID, token: token };
      }

      return userAndToken;
    }
}
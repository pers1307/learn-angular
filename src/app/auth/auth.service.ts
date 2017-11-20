import * as firebase from 'firebase';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
    token: string;

    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    public getToken() {
        return this.token;
    }

    public isAuthenticated() {
        return this.token != null;
    }
}

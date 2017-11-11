import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ServiceService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});

        // return this.http.post('https://test-db21.firebaseio.com/data.json', servers, {
        //     headers: headers
        // });

        /**
         * PUT на стороне сервера работает как UPDATE
         */
        return this.http.put('https://test-db21.firebaseio.com/data.json', servers, {
            headers: headers
        });
    }

    getServers() {
        return this.http.get('https://test-db21.firebaseio.com/data.json')
            .map(
                (response: Response) => response.json()
            )
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getAppName() {
        return this.http.get('https://test-db21.firebaseio.com/appName.json')
            .map(
                (response: Response) => response.json()
            );
    }
}

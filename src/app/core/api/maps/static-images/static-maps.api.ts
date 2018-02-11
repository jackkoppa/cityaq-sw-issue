import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, BaseRequestOptions, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../../environments/environment';
import { ApiService } from '../../api.service';

import { StaticMapsRequest } from './static-maps-request.model';

@Injectable()
export class StaticMapsApi {
    constructor(
        private apiService: ApiService,
        private http: Http
    ) {}

    public getImage(request?: StaticMapsRequest): Observable<File> {
        return this.http
            .get(
                environment.mapsApiUrl + 'staticmap?' + this.apiService.buildMapsQueryString(request),
                { responseType: ResponseContentType.Blob }
            )
            .map(res => <File>res.blob());
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_ROUTES, TAM_SERVER_URL } from './../constants/app.const';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    public getTamDataURL(): Observable<string> {
        return this.http.get<string>(`${TAM_SERVER_URL}${SERVER_ROUTES.CSV_FILE_URL}`);
    }
}
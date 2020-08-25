import { HttpHeaders } from '@angular/common/http';

export const TAM_SERVER_URL = 'http://localhost:3000/';

export const SERVER_ROUTES = {
    CSV_FILE_URL: 'csv-file'
};

export const REQUEST_OPTIONS = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    })
};


import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { News } from './news.interface';

@Injectable()
export class NewsService {
    private readonly url = 'http://localhost:3001/news';

    constructor(private readonly httpService: HttpService) { }

    findAll(): Observable<AxiosResponse<News[]>> {
        return this.httpService.get(`${this.url}?_sort=-update_date&_limit=17`);
    }

    create(body: News): Observable<AxiosResponse> {
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        return this.httpService.post(this.url, body, config);
    }

    updateNews() {

    }
}

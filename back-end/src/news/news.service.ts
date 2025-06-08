import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { News } from './news.interface';

@Injectable()
export class NewsService {
    private readonly url = 'http://localhost:3001';

    constructor(private readonly httpService: HttpService) { }

    getNews(): Observable<AxiosResponse<News[]>> {
        return this.httpService.get(`${this.url}/news?_sort=-update_date&_limit=17`);
    }

    crateNews() {

    }

    updateNews() {

    }
}

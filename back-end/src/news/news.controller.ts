import { Controller, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { Observer } from 'rxjs';
import { AxiosResponse } from 'axios';
import { NewsService } from './news.service';
import { News } from './news.interface';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Get()
    getNews(@Res() res: Response) {
        const observer: Observer<AxiosResponse<News[]>> = {
            next: news => {
                res.status(HttpStatus.OK).json(news.data);
            },
            error: err => {
                res.sendStatus(HttpStatus.NOT_FOUND);
            },
            complete: () => { }
        };

        this.newsService.getNews().subscribe(observer);
    }

    @Post()
    crateNews() {

    }

    @Put()
    updateNews() {

    }
}

import { Body, Controller, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
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
            next: value => {
                res.status(HttpStatus.OK).json(value.data);
            },
            error: err => {
                res.sendStatus(HttpStatus.NOT_FOUND);
            },
            complete: () => { }
        };

        this.newsService.findAll().subscribe(observer);
    }

    @Post()
    createNews(@Body() news: News, @Res() res: Response) {
        const observer: Observer<AxiosResponse> = {
            next: value => {
                res.sendStatus(HttpStatus.NO_CONTENT);
            },
            error: err => {
                res.sendStatus(HttpStatus.BAD_REQUEST);
            },
            complete: () => { }
        };

        this.newsService.create(news).subscribe(observer);
    }

    @Put()
    updateNews() {

    }
}

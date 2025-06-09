import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './news.interface';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Get()
    async getNews() {
        return await this.newsService.findAll();
    }

    @Post()
    async createNews(@Body() news: News) {
        return await this.newsService.create(news);
    }

    @Put()
    updateNews() {

    }
}

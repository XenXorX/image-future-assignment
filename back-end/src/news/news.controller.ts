import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './news.interface';
import { ValidateNewsPipe } from './validate-news/validate-news.pipe';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Get()
    async getNews() {
        return await this.newsService.findAll();
    }

    @Post()
    async createNews(@Body(new ValidateNewsPipe()) news: News) {
        return await this.newsService.create(news);
    }

    @Put(':id')
    async updateNews(@Param('id') entry_id: number, @Body(new ValidateNewsPipe()) news: News) {
        const newsArray: News[] = await this.newsService.findOne(entry_id);
        const id: string = newsArray[0]['id'];

        return await this.newsService.update(id, news);
    }
}

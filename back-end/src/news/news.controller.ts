import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    getNews() {

    }

    @Post() 
    crateNews() {

    }

    @Put()
    updateNews() {

    }
}

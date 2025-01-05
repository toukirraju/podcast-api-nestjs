import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode';
import { ConfigService } from './../config/config.service';

@Controller('episodes')
export class EpisodesController {
    constructor(
        private episodeService: EpisodesService,
        private configService: ConfigService
    ) { }


    @Get()
    findAll(@Query() query: {
        sort: 'asc' | 'desc'
    }) {

        return this.episodeService.findAll(query.sort)
    }

    @Get("featured")
    findFeatured() {
        return this.episodeService.findFeatured()
    }


    @Get(":id")
    findOne(@Param() id: string) {
        return this.episodeService.findOne(id)
    }

    @Post()
    create(@Body() body: CreateEpisodeDto) {
        return this.episodeService.create(body)
    }

    @Delete(":id")
    delete(@Param() params: {
        id: string
    }) {
        return this.episodeService.delete(params.id)
    }




}

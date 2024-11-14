/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Inject,
    Patch,
    Delete,
    Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs/operators';
import { CreateLiquorDto } from './dto/create-liquor.dto';
import { UpdateLiquorDto } from './dto/update-liquor.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { NATS_SERVICE } from 'src/config';

@Controller('/liquors')
export class LiquorController {
    constructor (@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

    @Post()
    createLiquor (@Body() createLiquorDto: CreateLiquorDto) {
        return this.client.send({ cmd: 'create_liquor' }, createLiquorDto).pipe(
            catchError((error) => {
                throw new RpcException(error);
            }),
        );
    }

    @Get()
    findAllLiquors (@Query() paginationDto: PaginationDto) {
        return this.client.send({ cmd: 'find_all_liquors' }, paginationDto).pipe(
            catchError((error) => {
                throw new RpcException(error);
            }),
        );
    }

    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.client.send({ cmd: 'find_one_liquor' }, { id }).pipe(
            catchError((error) => {
                throw new RpcException(error);
            }),
        );
    }

    @Patch(':id')
    updateLiquor (
        @Param('id') id: string,
        @Body() updateLiquorDto: UpdateLiquorDto,
    ) {
        return this.client.send({ cmd: 'update_liquor' }, { id, ...updateLiquorDto }).pipe(
            catchError((error) => {
                throw new RpcException(error);
            }),
        );
    }

    @Delete(':id')
    deleteLiquor (@Param('id') id: string) {
        return this.client.send({ cmd: 'delete_liquor' }, { id }).pipe(
            catchError((error) => {
                throw new RpcException(error);
            }),
        );
    }

}
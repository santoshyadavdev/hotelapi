import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Rooms } from './rooms';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() :  Rooms[] {
    return this.appService.getRoomsList();
  }

  @Post()
  addRooms(@Body() Rooms: Rooms): Rooms[] {
    return this.appService.addRooms(Rooms);
  }

  @Put()
  editRooms(rooms: Rooms): Rooms[] {
    return this.appService.editRooms(rooms);
  }

  @Delete()
  deleteRooms(roomNumber: number): Rooms[] { 
    return this.appService.deleteRooms(roomNumber);
  }

}

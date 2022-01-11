import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDTO } from './dto/create-booking.dto';

@Controller('api/booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() bookingDTO: BookingDTO) {
    return this.bookingService.create(bookingDTO);
  }

  @Get()
  get() {
    return this.bookingService.getAll();
  }
}

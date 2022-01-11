import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [RoomsModule, BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

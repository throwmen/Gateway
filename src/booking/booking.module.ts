/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookingsController } from './booking.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [BookingsController],
  imports: [NatsModule],
})
export class BookingModule {}

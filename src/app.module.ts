/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [BookingModule, NatsModule],
})
export class AppModule {}

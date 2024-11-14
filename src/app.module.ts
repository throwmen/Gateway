/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { NatsModule } from './transports/nats.module';
import { LiquorModule } from './liquor/liquor.module';

@Module({
  imports: [BookingModule, NatsModule, LiquorModule],
})
export class AppModule {}

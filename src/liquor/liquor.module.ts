import { Module } from "@nestjs/common";
import { LiquorController } from "./liquor.controller";
import { NatsModule } from 'src/transports/nats.module';

@Module({
    controllers: [LiquorController],
    imports: [NatsModule],
})
export class LiquorModule {}

import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Room } from './models/room.model';
import { LocationsModule } from '../locations/locations.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Room]),
    LocationsModule
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports: [RoomsService]
})
export class RoomsModule {}

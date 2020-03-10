import { Test, TestingModule } from '@nestjs/testing';
import { RoomBookingController } from './room-booking.controller';

describe('RoomBooking Controller', () => {
  let controller: RoomBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomBookingController],
    }).compile();

    controller = module.get<RoomBookingController>(RoomBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

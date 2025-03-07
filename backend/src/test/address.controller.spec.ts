import { Test, TestingModule } from '@nestjs/testing';
import { AddressController } from '@/address/address.controller';
import { describe, beforeEach, it, expect } from 'vitest';

describe('AddressController', () => {
  let controller: AddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressController],
    }).compile();

    controller = module.get<AddressController>(AddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

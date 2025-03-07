import { Test, TestingModule } from '@nestjs/testing';
import { AddressService } from '../address/address.service';
import { beforeEach, describe, expect, it } from 'vitest';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressService],
    }).compile();

    service = module.get<AddressService>(AddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

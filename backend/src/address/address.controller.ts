import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get() // /address
  findAll(){
    return this.addressService.getAllAddresses()
  }

  @Get(":id") // /address/id
  findById(@Param("id") id: string){
    return this.addressService.getById( parseInt(id) )
  }

  @Delete(":id") // /address/id
  deleteById(@Param("id") id: string){
    return this.addressService.deleteById( parseInt(id) )
  }
}

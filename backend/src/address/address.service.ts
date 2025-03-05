import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  getAllAddresses() {
    return this.prisma.address.findMany();
  }

  async getById(entry_id: number) {
    const entry = await this.prisma.address.findUnique({
      where: { id: entry_id },
    });

    if (!entry) {
      throw new NotFoundException(`Entry with ID:${entry_id} is not found`);
    }
    return entry;
  }

  async deleteById(entry_id: number) {
    try {
      return await this.prisma.address.delete({
        where: { id: entry_id },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}

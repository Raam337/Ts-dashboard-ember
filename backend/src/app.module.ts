import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [AddressModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { RenderService } from './render.service';
import { RenderController } from './render.controller';

@Module({
  providers: [RenderService],
  controllers: [RenderController]
})
export class RenderModule {}

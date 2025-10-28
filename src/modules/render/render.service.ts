import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RenderService {
  constructor(private readonly httpService: HttpService) {}

  callBackRender() {
    const TIMECALLBACK = 60000; // 1 minute in milliseconds
    const callbackUrl =
      'https://message-internal.onrender.com/api/v1/render/callback';

    setTimeout(() => {
      this.httpService.get(callbackUrl);
    }, TIMECALLBACK);
  }
  callBackRenderFromConstructor() {
    const TIMECALLBACK = 60000; // 1 minute in milliseconds
    const callbackUrl =
      'https://constructor-api.onrender.com/render/callback';

    setTimeout(() => {
      this.httpService.get(callbackUrl);
    }, TIMECALLBACK);
  }
  
}

import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway {
  @SubscribeMessage('msgToServer')
  handleMessage(client: any, payload: any): string {
    return 'Author: caio-andres';
  }
}

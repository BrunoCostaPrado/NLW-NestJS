import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['honest-gull-8807-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'aG9uZXN0LWd1bGwtODgwNyQOCKG7iBMO7wwmh6AP4LPUtS6etn3mnjLnV6zVm6M',
          password:
            'jPbNAYLYUkUIukO6XwF9U7Wd7pGa2xk2bltZX5O1mtd8Z3E3rTinCT0BowTK77qSlTlbRQ==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}

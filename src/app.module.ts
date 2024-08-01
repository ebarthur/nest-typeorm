import { Module } from '@nestjs/common'
import { DatabaseModule } from './lib/database/database.module'
import { ConfigModule } from '@nestjs/config'
import { StoreModule } from './store/store.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

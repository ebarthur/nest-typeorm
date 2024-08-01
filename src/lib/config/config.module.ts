import { Module } from '@nestjs/common'
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.number().default(3306),
        MYSQL_DATABASE: Joi.string().required(),
        MYSQL_USERNAME: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_SYNCHRONIZE: Joi.boolean().default(false),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}

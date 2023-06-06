import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Carts } from './entities/carts.entity';
import { CartItems } from './entities/cart_items.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: +process.env.DATABASE_PORT,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [Carts, CartItems],
            synchronize: true,
            logging: true,
            namingStrategy: new SnakeNamingStrategy(),
        }),
        TypeOrmModule.forFeature([Carts, CartItems]),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
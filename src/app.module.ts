import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:BJBFpNbCUAGsc7G2@cluster0.5aop2.mongodb.net', {dbName: 'myFirstDatabase'}),
    // { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}),
    JogadoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

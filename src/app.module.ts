import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:BJBFpNbCUAGsc7G2@cluster0.5aop2.mongodb.net', {dbName: 'myFirstDatabase'}),
    // { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}),
    JogadoresModule,
    CategoriasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

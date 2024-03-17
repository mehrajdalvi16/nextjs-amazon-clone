import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProdcutModuleBase } from "./base/prodcut.module.base";
import { ProdcutService } from "./prodcut.service";
import { ProdcutController } from "./prodcut.controller";
import { ProdcutResolver } from "./prodcut.resolver";

@Module({
  imports: [ProdcutModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProdcutController],
  providers: [ProdcutService, ProdcutResolver],
  exports: [ProdcutService],
})
export class ProdcutModule {}

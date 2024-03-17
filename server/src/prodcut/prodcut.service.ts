import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProdcutServiceBase } from "./base/prodcut.service.base";

@Injectable()
export class ProdcutService extends ProdcutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProdcutService } from "./prodcut.service";
import { ProdcutControllerBase } from "./base/prodcut.controller.base";

@swagger.ApiTags("prodcuts")
@common.Controller("prodcuts")
export class ProdcutController extends ProdcutControllerBase {
  constructor(
    protected readonly service: ProdcutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

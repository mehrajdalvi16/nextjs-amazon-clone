/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Order, // @ts-ignore
  Prodcut, // @ts-ignore
  User,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCountArgs>
  ): Promise<number> {
    return this.prisma.order.count(args);
  }

  async orders<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }
  async order<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<Order | null> {
    return this.prisma.order.findUnique(args);
  }
  async createOrder<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<Order> {
    return this.prisma.order.create<T>(args);
  }
  async updateOrder<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<Order> {
    return this.prisma.order.update<T>(args);
  }
  async deleteOrder<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<Order> {
    return this.prisma.order.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProdcutFindManyArgs
  ): Promise<Prodcut[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

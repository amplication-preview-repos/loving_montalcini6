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
  Organisation as PrismaOrganisation,
  User as PrismaUser,
} from "@prisma/client";

export class OrganisationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrganisationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.organisation.count(args);
  }

  async organisations<T extends Prisma.OrganisationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganisationFindManyArgs>
  ): Promise<PrismaOrganisation[]> {
    return this.prisma.organisation.findMany<Prisma.OrganisationFindManyArgs>(
      args
    );
  }
  async organisation<T extends Prisma.OrganisationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganisationFindUniqueArgs>
  ): Promise<PrismaOrganisation | null> {
    return this.prisma.organisation.findUnique(args);
  }
  async createOrganisation<T extends Prisma.OrganisationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganisationCreateArgs>
  ): Promise<PrismaOrganisation> {
    return this.prisma.organisation.create<T>(args);
  }
  async updateOrganisation<T extends Prisma.OrganisationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganisationUpdateArgs>
  ): Promise<PrismaOrganisation> {
    return this.prisma.organisation.update<T>(args);
  }
  async deleteOrganisation<T extends Prisma.OrganisationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganisationDeleteArgs>
  ): Promise<PrismaOrganisation> {
    return this.prisma.organisation.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.organisation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}

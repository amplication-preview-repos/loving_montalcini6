import * as graphql from "@nestjs/graphql";
import { OrganisationResolverBase } from "./base/organisation.resolver.base";
import { Organisation } from "./base/Organisation";
import { OrganisationService } from "./organisation.service";

@graphql.Resolver(() => Organisation)
export class OrganisationResolver extends OrganisationResolverBase {
  constructor(protected readonly service: OrganisationService) {
    super(service);
  }
}

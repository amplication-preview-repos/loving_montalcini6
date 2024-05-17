import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANISATION_TITLE_FIELD } from "../organisation/OrganisationTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <ReferenceField
          label="organisation"
          source="organisation.id"
          reference="Organisation"
        >
          <TextField source={ORGANISATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

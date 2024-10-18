import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import posts from "./posts";
import comments from "./comments";
import users from "./users";
import tags from "./tags";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" {...tags} />
    <Resource name="users" {...users} />
  </Admin>
);

import { createBrowserRouter } from "react-router";
import {
  ContactPage,
  PortraitPage,
  GearPage,
} from "../pages";
import RootLayout from "./RootLayout";

export let router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: PortraitPage,
        },
        {
          path: "contact",
          Component: ContactPage,
        },
        {
          path: "gear",
          Component: GearPage,
        },
      ],
    },
  ],
  {
    basename: "/dusan",
  }
);

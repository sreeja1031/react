/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExploreMenu from ".";

export default {
  title: "Components/Organisms",
  component: ExploreMenu,
} as ComponentMeta<typeof ExploreMenu>;

const Template: ComponentStory<typeof ExploreMenu> = (args) => (
  <ExploreMenu {...args} />
);

export const Explorer = Template.bind({});

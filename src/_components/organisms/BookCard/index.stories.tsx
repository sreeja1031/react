/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BookCard from ".";

export default {
  title: "Components/Organisms",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const firstBookCard = Template.bind({});
firstBookCard.args = {
  imagePath: "/assets/img1.png",
  title: "Bring your Human to Work",
  author: "Erica Keswin",
  readTime: "13",
};

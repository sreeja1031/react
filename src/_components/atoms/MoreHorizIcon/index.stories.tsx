import React from "react";
import More from ".";

export default {
  title: "Components/Atoms",
  component: More,
  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
  },
};

export const MoreIcon = <More />;

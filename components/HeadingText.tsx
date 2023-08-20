import React from "react";

type Props = {
  title: string;
  description: string;
};

const HeadingText = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
    </div>
  );
};

export default HeadingText;

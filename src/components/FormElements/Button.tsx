import { FC } from "react";

interface Props {
  active: boolean;
  title: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ active, title, onClick }) => {
  const activeStyles = active ? "border bg-primary text-white font-semibold rounded-lg" : "form-element text-grayMedium font-medium";

  return (
    <>
      <button className={`h-9 w-full pl-6 pr-4 whitespace-nowrap ${activeStyles}`} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

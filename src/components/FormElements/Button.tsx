import { FC } from "react";

interface Props {
  active: boolean;
  title: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ active, title, onClick }) => {
  const activeStyles = active ? "bg-[#17A2B8] text-white font-semibold" : "border border-[#DEE2E6] text-[#54595E] font-medium";

  return (
    <>
      <button className={`h-9 w-full pl-6 pr-4 rounded-lg whitespace-nowrap ${activeStyles}`} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

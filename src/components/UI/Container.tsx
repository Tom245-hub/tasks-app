import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex justify-center h-screen mt-40">
        <div className="flex flex-col w-[285px] gap-4">{children}</div>
      </div>
    </>
  );
};

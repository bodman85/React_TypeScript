import { PropsWithChildren } from "react";

type ImageType = {
  src: string;
  alt: string;
};

type HeaderProps = PropsWithChildren<{ image: ImageType }>;

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

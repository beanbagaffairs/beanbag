import { SpinningText } from "../../../../../components/motion-primitives/spinning-text";

export function SpinningTextBasic() {
  return (
    <SpinningText
      radius={5}
      fontSize={1.2}
      className="font-medium font-sans leading-none"
    >
      {`quality • creativity • emotion • `}
    </SpinningText>
  );
}

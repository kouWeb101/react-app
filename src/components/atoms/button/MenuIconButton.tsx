import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface Props {
  onOpen: () => void;
}
export const MenuIconButton: VFC<Props> = memo(({ onOpen }) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstayled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});

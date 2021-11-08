import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { memo, VFC } from "react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  OnClickHome: () => void;
  OnClickUserManagement: () => void;
  onClickSetting: () => void;
}
export const MenuDrawer: VFC<Props> = memo(
  ({ onClose, isOpen, OnClickHome, OnClickUserManagement, onClickSetting }) => {
    return (
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={OnClickHome}>
                TOP
              </Button>
              <Button w="100%" onClick={OnClickUserManagement}>
                ユーザ一覧
              </Button>
              <Button w="100%" onClick={onClickSetting}>
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
);

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function ReusableDrawer({
  isOpen,
  onClose,
  title,
  children,
  size,
}: {
  isOpen: boolean;
  title?: string;
  size?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Drawer placement="left" size={size} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize={{ lg: 16, md: 15, base: 13 }}>
          {title}
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

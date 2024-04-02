import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ReusableModal({
  isOpen,
  onClose,
  title,
  children,
  size,
}: {
  isOpen: boolean;
  title: string;
  size?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Modal
      isCentered
      size={size ? size : "lg"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ lg: 16, md: 15, base: 13 }}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

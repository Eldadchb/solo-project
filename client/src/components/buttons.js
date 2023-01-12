import { Button } from "@chakra-ui/react";

function SideBarButton({ title, onClick }) {
  return (
    <Button
      size="md"
      height="15vh"
      width="100%"
      colorScheme="cyan"
      variant="solid"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
export default SideBarButton;

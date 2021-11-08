import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

interface Props {
  imageUrl: string;
  userName: string;
  fullName: string;
}
export const UserCard: VFC<Props> = memo(({ imageUrl, userName, fullName }) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="large" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="small" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

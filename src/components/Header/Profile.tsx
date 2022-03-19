import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Murilo Sambuite</Text>
          <Text color='gray.300' fontSize='small'>
            murilosambuite@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Murilo Sambuite'
        src='https://github.com/sambuite.png'
      />
    </Flex>
  );
}

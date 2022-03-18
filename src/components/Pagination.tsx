import { Box, Button, Stack } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack
      direction='row'
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {Array.from({ length: 4 }).map((_, index) => (
          <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme={index === 0 ? 'pink' : 'gray.700'}
            disabled={index === 0}
            _hover={{
              bgColor: index === 0 ? 'pink.500' : 'gray.700',
            }}
            _disabled={{
              bgColor: 'pink.500',
              cursor: 'default',
            }}
          >
            {index}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}

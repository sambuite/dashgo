import { Box, Stack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        {Array.from({ length: 7 }).map((_, index) => (
          <PaginationItem key={index} number={index} isCurrent={index === 1} />
        ))}
      </Stack>
    </Stack>
  );
}

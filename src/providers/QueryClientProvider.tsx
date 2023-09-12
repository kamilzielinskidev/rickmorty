import {
  QueryClient,
  QueryClientProvider as QueryClientProviderLib,
} from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

export const QueryClientProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <QueryClientProviderLib
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
              retryOnMount: false,
              refetchOnWindowFocus: false,
            },
          },
        })
      }
    >
      {children}
    </QueryClientProviderLib>
  );
};

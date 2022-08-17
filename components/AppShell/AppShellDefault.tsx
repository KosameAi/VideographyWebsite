import { useState } from 'react';
import { HeaderAction } from '../Header/HeaderAction';
import { AppShell, Header, Footer, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

export function AppShellDefault() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={<HeaderAction />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

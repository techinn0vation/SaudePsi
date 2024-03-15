'use client'

import React, { ReactNode } from 'react'

import Menu from 'components/Menu'
import { ThemeProvider } from 'styled-components'

import { Container } from './styles'

import StyledComponentsRegistry from 'app/registry'
import { mainFont } from 'styles/FontConfig'
import { GlobalStyle } from 'styles/global'
import { theme } from 'themes/themes'
interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <html lang='pt-br'>
          <body className={mainFont.className}>
            <Container>
              <Menu />
              {children}
            </Container>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

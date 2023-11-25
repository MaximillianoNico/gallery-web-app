"use client"
import { useRouter } from 'next/navigation'
import { Box, Input } from "@chakra-ui/react"
import { House, UploadSimple } from "@phosphor-icons/react";
import { FC } from "react"

import useDeviceDetect from '../hooks/useDeviceDetect';

interface ILayout {
  children: React.ReactNode | JSX.Element | JSX.Element[]
}

interface INavBar {
  onNavigate: (page: string) => void
}

const NavBarDesktop: FC<INavBar> = (props) => {
  return (
    <Box display="grid" columnGap={4} alignItems="center" gridTemplateColumns="100px 100px auto 100px" marginBottom={6}>
      <Box cursor="pointer" onClick={() => props?.onNavigate('/')} fontWeight="bold">
        Home
      </Box>
      <Box cursor="pointer" onClick={() => props?.onNavigate('/create')}>
        Create
      </Box>
      <Box cursor="pointer">
        <Input borderRadius={20} placeholder='Search' />
      </Box>
      <Box cursor="pointer">
        Avatar
      </Box>
    </Box>
  )
}

const StickyNavBar: FC<INavBar> = (props) => {
  return (
    <Box
      zIndex={100}
      borderTop="1px solid #D9D9D9"
      display="grid"
      gridTemplateColumns="auto auto"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      padding={4}
      backgroundColor="white"
    >
      <Box onClick={() => props?.onNavigate('/')} cursor="pointer" display="flex" justifyContent="center" alignItems="center">
        <House size={32} />
      </Box>
      <Box onClick={() => props?.onNavigate('/create')} cursor="pointer" display="flex" justifyContent="center" alignItems="center">
        <UploadSimple size={32} />
      </Box>
    </Box>
  )
}

const Component: FC<ILayout> = ({ children }) => {
  const router = useRouter();
  const { isMobile } = useDeviceDetect()

  const onNavigate = (pageName: string) => router.push(pageName);

  return (
    <Box minHeight="100vh" padding="6px 6px 10px 6px">
      {!isMobile && <NavBarDesktop onNavigate={onNavigate} />}
      {children}
      {isMobile && <StickyNavBar onNavigate={onNavigate} />}
    </Box>
  )
}

export default Component;

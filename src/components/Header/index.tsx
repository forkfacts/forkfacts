import React from "react"
import {Flex, Text} from "@chakra-ui/react"
import {ReactComponent as Logo} from "../../images/svg/logo.svg"

export const Header = () => {
    return <Flex py={2} pl={2} gridGap={2} alignItems={"center"} bg={"white"}>
        <Logo height={32} width={32}/>
        <Text fontSize={'xl'} fontWeight={'extrabold'}>forkfacts</Text>
    </Flex>
}
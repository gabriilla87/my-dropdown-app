import type { AnchorHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface CollapsibleItemProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}

const Container = styled.div`
    width: calc(100% - 10px);
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 0 0 10px;

    &:hover {
        background-color: #d4d4d4;
    }
`

const Link = styled.a`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    cursor: pointer;
    color: black;

    &:hover {
        color: black;
    }
`

export const CollapsibleItem = ({
    children,
    ...props
}: CollapsibleItemProps) => {
    return (
        <Container>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </Link>
        </Container>

    );
};

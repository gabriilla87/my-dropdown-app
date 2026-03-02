import { useState, type ReactNode } from "react";
import styled from "styled-components";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Collapsible = ({
                       title,
                       children,
                       defaultOpen = false,
                     }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
      <Container>
        <Header onClick={toggle}>
          <Title>{title}</Title>
          <Icon $isOpen={isOpen}>{isOpen ? "▲" : "▼"}</Icon>
        </Header>

        {isOpen && <Content>{children}</Content>}
      </Container>
  );
};

export default Collapsible;

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: Arial, sans-serif;
`;

const Header = styled.button`
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  border: none;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  text-align: left;

  &:hover {
    background: #ececec;
  }
`;

const Title = styled.span`
  flex: 1;
`;

const Icon = styled.span<{ $isOpen: boolean }>`
  margin-left: 8px;
  transition: transform 0.2s ease;

  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
`;

const Content = styled.div`
  padding: 10px;
  background: #fff;
`;
import { type FC, useState } from "react";
import styled from "styled-components";

interface HoverCopyTextProps {
    originalText: string;
    copyText: string;
    type: "link" | "text";
    copiedText?: string;
}

const Wrapper = styled.div`
    margin-top: 10px;
    width: 100%;
    background: #f3f4f6;
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    color: inherit;

    display: grid;
    place-items: center;

    transition: background 0.2s ease;

    &:hover {
        background: #e5e7eb;
    }
`;

interface TextProps {
    $visible: boolean;
}

const Text = styled.span<TextProps>`
    grid-area: 1 / 1;
    text-align: center;
    word-break: break-word;

    transition: opacity 0.25s ease, transform 0.25s ease;

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: ${({ $visible }) =>
            $visible ? "translateY(0)" : "translateY(4px)"};
`;

export const CollapsibleItem: FC<HoverCopyTextProps> = ({
                                                            originalText,
                                                            copyText,
                                                            type,
                                                            copiedText = "Скопировано!",
                                                        }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyText);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    };

    const showActionText = isHovered || isCopied;

    const actionText =
        type === "text"
            ? isCopied
                ? copiedText
                : copyText
            : copyText;

    const content = (
        <>
            <Text $visible={!showActionText}>
                {originalText}
            </Text>

            <Text $visible={showActionText}>
                {actionText}
            </Text>
        </>
    );

    if (type === "link") {
        return (
            <Wrapper
                as="a"
                href={copyText}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {content}
            </Wrapper>
        );
    }

    return (
        <Wrapper
            onClick={handleCopy}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {content}
        </Wrapper>
    );
};
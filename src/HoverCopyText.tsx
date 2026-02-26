import { type FC, useState } from "react";
import styled from "styled-components";

interface HoverCopyTextProps {
    originalText: string;
    copyText: string;
    copiedText?: string;
}

const Wrapper = styled.div`
    margin-top: 10px;
    position: relative;
    width: 100%;
    background: #f3f4f6; /* светло-серый */
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
`;

interface TextProps {
    $visible: boolean;
}

const Text = styled.span<TextProps>`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: ${({ $visible }) =>
            $visible ? "translateY(0)" : "translateY(6px)"};

    pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
`;

const Placeholder = styled.span`
    visibility: hidden;
    display: block;
    text-align: center;
`;

export const HoverCopyText: FC<HoverCopyTextProps> = ({
                                                          originalText,
                                                          copyText,
                                                          copiedText = "Скопировано!",
                                                      }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyText);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    };

    const showCopyText = isHovered || isCopied;

    return (
        <Wrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={showCopyText ? handleCopy : undefined}
        >
            {/* фиксируем высоту */}
            <Placeholder>
                {isCopied ? copiedText : isHovered ? copyText : originalText}
            </Placeholder>

            <Text $visible={!showCopyText}>
                {originalText}
            </Text>

            <Text $visible={showCopyText}>
                {isCopied ? copiedText : copyText}
            </Text>
        </Wrapper>
    );
};
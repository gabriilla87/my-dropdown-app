import { useState } from "react";
import type { ReactNode } from "react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div style={styles.container}>
      <div
        style={styles.header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && <div style={styles.content}>{children}</div>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    margin: "0",
    fontFamily: "Arial",
  },
  header: {
    padding: "10px",
    borderRadius: "6px 6px 0 0",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 500,
  },
  content: {
    backgroundColor: "#fff",
  },
};

export default Collapsible;

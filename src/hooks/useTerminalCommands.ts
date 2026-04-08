import { useMemo, useState } from "react";

interface TerminalCommandResult {
  command: string;
  output: string;
}

const commandMap: Record<string, string> = {
  help: "Available commands: contact, email, linkedin, clear",
  contact: "iamjuandiego: open to backend engineering conversations and team-focused opportunities.",
  email: "Email: hello@iamjuandiego.dev",
  linkedin: "LinkedIn: https://linkedin.com/in/iamjuandiego",
  instagram: "Instagram: https://instagram.com/iamjuandiego"
};

export function useTerminalCommands(): {
  history: TerminalCommandResult[];
  run: (value: string) => void;
  reset: () => void;
} {
  const [history, setHistory] = useState<TerminalCommandResult[]>([
    { command: "help", output: commandMap.help }
  ]);

  const normalizedMap = useMemo(() => commandMap, []);

  const run = (value: string): void => {
    const input = value.trim().toLowerCase();
    if (!input) return;
    if (input === "clear") {
      setHistory([]);
      return;
    }
    const output = normalizedMap[input] ?? "Unknown command. Try: help";
    setHistory((prev) => [...prev, { command: input, output }]);
  };

  const reset = (): void => setHistory([{ command: "help", output: commandMap.help }]);

  return { history, run, reset };
}

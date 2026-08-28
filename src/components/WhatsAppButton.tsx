import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  const href = getWhatsAppLink(message);

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      icon={<MessageCircle className="h-[1.15em] w-[1.15em]" strokeWidth={2.25} />}
      className={className}
    >
      {children}
    </Button>
  );
}

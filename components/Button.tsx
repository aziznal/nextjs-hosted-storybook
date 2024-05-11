import { cn } from "@/lib/utils";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "p-2 px-4 hover:bg-blue-800 transition-colors duration-75 border-none text-white rounded-lg",
        primary ? "bg-blue-600" : "bg-violet-600",
      )}
    >
      {label}
    </button>
  );
};

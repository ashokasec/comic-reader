import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const SettingsSection = ({ title, className, children }: Props) => {
  return (
    <section className={cn("space-y-4", className)}>
      {title && (
        <h3 className="font-medium text-xs text-neutral-600 uppercase">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};

export default SettingsSection;

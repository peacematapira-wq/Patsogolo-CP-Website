export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-[1160px] mx-auto px-6 lg:px-8 ${className}`}>{children}</div>;
}

import { Logo } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-2 mt-36">
      <div className="flex items-center gap-2">
        <Logo className="flex flex-col text-sm text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          © {currentYear} Manuel Alférez
        </p>
      </div>
    </div>
  );
}

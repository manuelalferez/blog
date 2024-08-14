import { Logo } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-16 p-2 md:px-0 mx-auto w-full md:w-2/3 lg:w-2/3 xl:w-2/3 flex flex-col justify-between gap-12 py-6 md:mt-32 md:flex-row md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Logo className="flex flex-col text-sm text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            © {currentYear} Manuel Alférez
          </p>
        </div>
      </div>
    </div>
  );
}

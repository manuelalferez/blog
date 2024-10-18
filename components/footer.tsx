import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="py-8 mt-10 text-sm text-slate-500">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Manuel Alférez
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/movies" className="hover:underline">
            Movies
          </a>
          <a href="/photos" className="hover:underline">
            Photos
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

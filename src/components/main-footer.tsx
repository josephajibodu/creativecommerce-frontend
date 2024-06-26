import { Logo } from "./ui/logo";

const MainFooter = () => {
  return (
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10 flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <div>
          <div className="flex justify-center sm:justify-start">
            <Logo />
          </div>
          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            © 2024 Flitsell. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700 mt-12 md:mt-0">
          {/* <a href="#">Privacy policy</a>
          <div className="h-4 w-px bg-slate-500/20"></div> */}
          {/* <a href="#">Changelog</a> */}
        </div>
      </div>
    </footer>
  );
};

MainFooter.displayName = "MainFooter";

export { MainFooter };

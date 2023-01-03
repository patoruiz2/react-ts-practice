import { NavBarComponents } from "./components"
import { HomePage } from "./pages"

interface IHomeApp { };

export const HomeApp: React.FC<IHomeApp> = () => {
  return (
    <div>
      <header className="sticky block top-0 left-0 w-full">
        <NavBarComponents />
      </header>
      <main className="w-10/12 mx-auto p-2 ">
        <HomePage />
      </main>
    </div>
  )
}

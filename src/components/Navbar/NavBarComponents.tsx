
export interface INavBar { };

export const NavBarComponents: React.FC<INavBar> = () => {
  return (
    <nav className="block w-full bg-[#26205f] p-5">
      <ul className="flex flex-row justify-between text-[#41bfc8]">
        <li>Home</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
      </ul>
    </nav>
  )
}

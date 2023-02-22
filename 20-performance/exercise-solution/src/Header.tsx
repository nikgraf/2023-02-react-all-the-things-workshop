import { slightlySlowCalculation } from "./calculations";

function Header() {
  slightlySlowCalculation();
  return <div>Hello World</div>;
}

export default Header;

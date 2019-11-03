
import Link from "next/link";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <main>
        {props.children}
      </main>
    </div>
  )
};

export default Layout;

import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="wrapper">
        {props.children}
    </div>
  )
};

export default Layout;
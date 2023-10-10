import _Header  from "./_header";
import _Footer  from "./_footer";


export default function admin_Layout({children}) {
  //  title = props.title;
  return (
    <>
      <_Header/>
      <div 
      className="main"
      >{children}</div>
      <_Footer/>
    </>
  );
}

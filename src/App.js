import Logo from "./component/logo";
import Form from "./component/form";
import PackingList from "./component/packingList";
import Stats from "./component/stats";


export default function App(){
  return(
    <div className="app">
      <Logo />
      <Form />
      <PackingList /> 
      <Stats />
    </div>
  );
}

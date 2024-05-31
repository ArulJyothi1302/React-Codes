import logo from './logo.svg';
import React from 'react';
import './App.css';
import Welcome from './components/Welcome-Func-Class'
import Hello from './components/Hello'
import InfoClass from './components/StateClass';
import BootCampInfo from './components/BootcampInfo';
import Login from './components/Login';
import Buttons from './components/ButtonsFunc';
import States from './components/Day10State';
import Task from './components/tasks/HeadingTask';
import Count from './components/tasks/Counter';
// import Wel from './components/Day11_Destructuring';
import Greet from './components/Day11_Destructuring';
import IfElse from './components/ConditionalRendering';
import Ternary from './components/Ternary';
import Ter from './components/tasks/TernaryFunctional';
import IfElseTask from './components/tasks/IfelseConditionTask';
import Styles from './components/Day12Style';
import Prod from './components/ListRender';
import ObjectList from './components/ObjectProd';
import Bank_Users from './components/tasks/ListRenderingTask';
import Proditems from './components/tasks/productList';
import Frag from './components/Fragments_D-14';
import TableFragments from './components/TableFrag';
// import PureComponentPrac from './components/PureComponentD-14';
import ParentPure from './components/ParentPurePrac';
import Parent from './components/tasks/ParentComp';
import NormbefPure from './components/Day15PureNormal';
import PureComp from './components/Day15PureComp';
import ParentMemo from './components/Day15MemoNorm';
import MemoParent from './components/tasks/MemoTask';
import Refs from './components/Day16Ref';
import Form from './components/tasks/FormRef';
import FocusInput from './components/tasks/FocusInput';
import Frparent from './components/tasks/Frparent';
import CountHoc from './components/ClickFoc';
import Hover from './components/HoverHoc';
import DecHoverHoc from './components/tasks/DecHoverHoc';
import DecHoc from './components/tasks/DecHoc';
import DecBtn from './components/tasks/DecHoc';
import DecHover from './components/tasks/DecHoverHoc';
import Getdata from './components/Day17';
import PostForm from './components/Day18Post';
import PostFormData from './components/tasks/PostPac';
import PostDataFromForm from './components/tasks/PostCopy';
import UseState from './components/Day19HooksUseState';
import UseStateHook from './components/tasks/HooksUseState';
import CompA from './components/Context/CompA';
import Comp1 from './components/Context/Comp1';
import ClumsyCont1 from './components/Context/ClumsyCont1';

export const UserContext=React.createContext();

export const ClumsyContext= React.createContext();

export const  ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
   {/* <UserContext.Provider value="Arul">
<Comp1/> 

</UserContext.Provider> */}
{/* Normal Context without creating Context */}
{/* <ClumsyCont1/> */}

{/* creating context api here */}
{/* <ClumsyContext.Provider value="Arul">

<ClumsyCont1/>
</ClumsyContext.Provider> */}

{/* Multiple context */}
{/* <ClumsyContext.Provider value="Arul">
  <ChannelContext.Provider value="Cricket">
  <ClumsyCont1/>

  </ChannelContext.Provider>
 
</ClumsyContext.Provider> */}
     {/* <h1>React</h1>
  <Welcome name="Arul" off="50%"/>
  <Welcome name="Ganesh" off="50%"/>
  <Welcome name="Murugan" off="50%"/>

  <Hello/>
  <InfoClass/>
  <BootCampInfo course="React " day="Friday" day1="Saturday" day2="Sunday">
    </BootCampInfo>
    <Buttons/>

    <button className='btn btn-primary'>Register</button>
<Login/> */}
{/* Day10 */}

{/* <States/>
<Task/>
<Count/> */}
{/* day11 Destructure */}
{/* <Proditems items="Phone"/> */}
{/* <Greet name="Arul" sports="Cricket"/> */}
{/* <Wel name="Arul" sports="Cricket"/> */}
{/* <IfElse/>
<Ternary/>
<Ter/>
<IfElseTask name="Arul"/>
<Styles heading1={true}/> */}
{/* <Prod/> */}
{/* <ObjectList/>
<Bank_Users/>
<hr/>
<h1>Day-14</h1>
<Frag/>
<hr/>
<TableFragments/>
<ParentPure/>
<Parent/> */}
{/* <NormbefPure/> */}
{/* <PureComp/> */}
{/* <ParentMemo/> */}
{/* <MemoParent/> */}
{/* <Refs/> */}
{/* <Form/> */}

{/* <FocusInput/> */}
{/* <Frparent/>
<CountHoc/>
<Hover/>
<DecBtn/>
<DecHover/> */}
{/* <Getdata/> */}
{/* <PostForm/> */}
{/* <PostFormData/> */}
{/* <PostDataFromForm/> */}
{/* <UseState/> */}
{/* <UseStateHook/> */}

    </div>
  );
}

export default App;
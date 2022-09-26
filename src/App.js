import {useState} from 'react';

import SelectAll from 'components/selectAll/SelectAll';

import PROGRAMS_DATA from 'data/ProgramsData';

import './App.css';

function App() {
  const [programs,setPrograms]=useState(PROGRAMS_DATA);
  const [selectPrograms,setSelectPrograms]=useState([]);
  
  const changeHandler=(e)=>{
    if(e.target.name==="selectAll"){
      setPrograms(programs.map(program=>({...program,isChecked: e.target.checked})));
      if(programs.every(program=>program.isChecked===true)){
        setSelectPrograms([]);
      }
      else{
        setSelectPrograms(programs.map(program=>program.programName));
      }
    }
    else{
      setPrograms(programs.map(program=>program.programName===e.target.id?{...program,isChecked: e.target.checked}:program));
      if(selectPrograms.find(selectProgram=>(selectProgram===e.target.id))){
        setSelectPrograms(selectPrograms.filter(selectProgram=>(selectProgram!==e.target.id)));
      }
      else{
        setSelectPrograms([...selectPrograms,e.target.id]);
      }
    }
	};

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <SelectAll programs={programs} changeHandler={changeHandler} />
      </div>
    </section>
  );
}

export default App;
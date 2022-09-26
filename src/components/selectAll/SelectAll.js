import './SelectAll.css';

const SelectAll=({programs,changeHandler})=>{
    return (
        <div className="select-all">
            <div className="select-group">
                <input type="checkbox" className="checkbox-input" id="selectAll" name="selectAll" checked={programs.every(program=>program.isChecked===true)} onChange={changeHandler} />
                <label htmlFor="selectAll">全選</label>
            </div>
            {programs.map(program=>(
                <div className="select-group" key={program.id}>
                    <input type="checkbox" className="checkbox-input" id={program.programName} name="selectPrograms" checked={program.isChecked} onChange={changeHandler} />
                    <label htmlFor={program.programName}>{program.programName}</label>
                </div>
            ))}
        </div>
    );
}

export default SelectAll;
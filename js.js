class Calculator{
    constructor(input,output){
        this.inputDisplay=input;
        this.outputDisplay=output;
        this.inputHistory=[];
    }
  
clearAllHistory(){
    this.inputHistory=[];
    this.updateInputDisplay();
    this.updateoutputDisplay();
}

getAllInputValues(){
    return this.inputHistory.map(entry=>entry.value);
}
updateInputDisplay(){
    this.inputDisplay.value = this.getAllInputValues().joint("");
}
updateoutputDisplay(value){
    this.outputDisplay.value = Number(value).toLocaleString();
}
}
import { Component, OnInit } from '@angular/core';


interface Option {
  label: string;
  value: string;
  showInput?: boolean; // Flag to control input box visibility
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  tableData: string[] = [];
  folderData: string[] = [];
 openintput: boolean= false;
 openplus :boolean = false;

 isOpen = false;
 selectedOption: Option | null = null;

 options: Option[] = [
  { label: 'Table', value: 'table', showInput: true },
  { label: 'Folder', value: 'folder' }
];

inputdata(){
  this.openintput = true;
}

inputValue: string = '';

// saveData() {
//   console.log('Input Data Saved:', this.inputData);

// }


save() {
  console.log('Saving table input:', this.inputValue);
  // Replace with your logic to handle saving the input value (e.g., send to server)
}

cancel() {
  this.inputValue = ''; // Clear input value on cancel
}

// saveData() {
//   if (this.inputData.trim() !== '') {
//     this.tableData.push(this.inputData); // Assuming you want to save it in tableData array
//     this.inputData = ''; // Clear input after saving
//   }
// }

plusdata(){
this.openplus = true;
}

// clearInput() {
//   this.inputData = '';
// }

onInputDataSaved(savedInput: string) {
  this.tableData.push(savedInput);
}


selectOption(option: Option) {
  this.selectedOption = option;
  this.isOpen = false; // Close dropdown on selection
  this.inputValue = ''; // Clear input value on selection change
}

ngOnInit(): void {
}













}


import React, { Component } from "react";
import storage from '../config/firebase'

//Componente con class
class Upload extends Component {
  state = {
    selectedFile: null,
    url: ''
  };


  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = (e) => {
    e.preventDefault();  
    if(this.state.selectedFile == null)
      return;

    const ref = storage.ref(`/files/${this.props.fiscalia+'_'+this.state.selectedFile.name}`);
    const uploadTask = ref.put(this.state.selectedFile);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          this.setState({ url: url})
          this.props.parentCallback(url);
        });
    });
    
  };

  fileData = () => {
    if(this.state.url){
      return(<div>
        <p>Archivo subido  &#9989;</p>
        <p>Ahora puede Agregar la Fiscalía  &#9989;</p>
      </div>)
    }

    if (this.state.selectedFile) {
      return (
        <div>
          <p>Archivo seleccionado  &#128077;</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Selecciona un archivo antes de presionar Subir archivo</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="mt-2 text-sm text-gray-400">
        <div>
          <input className="mt-5 text-gray-900" type="file" accept=".pdf" onChange={this.onFileChange} />
          <div className="pb-1 pt-2">
            <button className="py-2 px-4 border
                    border-transparent text-sm font-medium rounded-md 
                    text-white bg-blue-500 hover:bg-blue-800" onClick={this.onFileUpload}>Subir archivo</button>
          </div>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Upload;

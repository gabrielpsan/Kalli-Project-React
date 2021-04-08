import React, { Component } from "react";
import Upload from '../Upload/index'
import FileList from '../FileList/index'
import Dropzone from 'react-dropzone'
import { uniqueId } from 'lodash'
import filesize from 'filesize'


export class UploadComponent extends Component {

    state = {
        uploadedFiles: []
    };

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }))

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });
        console.log("files: ", files)
    };


    render() {

        const {uploadedFiles} = this.state;
        console.log("esse: ", uploadedFiles)
        return (
            <>
                <Upload onUpload={this.handleUpload} />
                { !!uploadedFiles.length && (
                    <FileList files={uploadedFiles} />
                )}
            </>
        );
    }
}

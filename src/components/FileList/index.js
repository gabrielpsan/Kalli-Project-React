import React from 'react';

import { Container, FileInfo, Preview } from '../../styles/FileList';
import previewImg from '../../utils/img/produto1.jpg'

import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

const FileList = ( {files} ) => (
    <Container>
        {files.map(uploadedFile => (
            <li>
                <FileInfo>
                    <Preview src={uploadedFile.preview}></Preview>
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>
                            {uploadedFile.readableSize}
                            {!!uploadedFile.url && (
                                <button onClick={() => { }}>Excluir</button>
                            )}
                        </span>
                    </div>
                </FileInfo>

                <div className="icons">
                    {!uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressbar
                            styles={{
                                root: { width: 24 },
                                path: { stroke: '#7159c1' }
                            }}
                            strokeWidth={10}
                            value={uploadedFile.progress}
                        />
                    )}

                    {uploadedFile.url && (
                        <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                        </a>
                    )}


                    { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78d5e5" />}
                    { uploadedFile.error &&  <MdError size={24} color="#e57878" /> }
                   
                </div>
            </li>
        ))}
    </Container>
)

export default FileList;
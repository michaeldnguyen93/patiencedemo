import React from "react"
import Dropzone from 'react-dropzone'

const Uploader = (props) => {
    return (
        <div className="uploader">
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <h5>Drag & drop some files here, or click to select files.</h5>
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    )
}

export default Uploader
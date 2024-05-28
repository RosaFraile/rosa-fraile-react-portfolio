import React from "react";
import DropzoneComponent from "react-dropzone-component";

const ImageUpload = (props) => {
    const componentConfig = () => {
        return {
          iconFiletypes: [".jpg", ".png"],
          showFiletypeIcon: true,
          postUrl: "https://httpbin.org/post"
        };
    }
    
    const djsConfig = () => {
        return {
          addRemoveLinks: true,
          maxFiles: 1
        };
    }

    return (
        <div>
            {props.editMode && props.imageToUpload ? (
                <div className='image-upload-wrapper'>
                    <img src={props.imageToUpload} />

                    <div className='image-removal-link'>
                        <a onClick={() => props.deleteImage(props.imageType)}>
                        Remove file
                        </a>
                    </div>
                </div>
            ):(
                <DropzoneComponent
                    ref={props.imageRef}
                    config={componentConfig()}
                    djsConfig={djsConfig()}
                    eventHandlers={props.handleImageDrop()}
                >
                <div className="dz-message">{props.imageType}</div>
                </DropzoneComponent>
            )}
        </div>
    );
}

export default ImageUpload;
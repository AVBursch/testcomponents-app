import React, { Component } from 'react';
import { GalleryElement } from '../components/galleryelementcomponent';
import { GallerySpace } from '../components/galleryspacecomponent';

export class GalleryRow extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return  <div className="float-left">
            <div>
                <h3> {this.props.category} -- {this.props.database.length} Recent Files </h3>
            </div>

            <div className="float-left grayborder" style={{height:220,width:24}}>
                <div className="float-top" style={{height:95, width:22}}></div>
                <div className="float-left" style={{height:29, width:22}}>
                    <button> « </button>
                </div>
                <div className="float-left" style={{height:95, width:22}}></div>
            </div>

            <GallerySpace/>

            {this.props.database.map  (element => (<GalleryElement 
                            category={element.gallery_element_category}
                            filesize={element.gallery_element_file_size}
                            description={element.gallery_element_description}
                            subcategory={element.gallery_element_subcategory}/>
            ))}

            <div className="float-left grayborder" style={{height:220, width:24}}>
                <div className="float-top" style={{height:95, width:24}}></div>
                <div className="float-left" style={{height:30, width:24}}>
                <button> » </button>
                </div>
                <div className="float-left" style={{height:95, width:24}}></div>
            </div>

        </div>
    }
}
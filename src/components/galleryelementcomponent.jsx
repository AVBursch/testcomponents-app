import React, { Component } from 'react';

export class GalleryElement extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return  <div className="float-left">
            
            <div className="float-left grayborder" style={{height:220, width:180}}>

                <div className="float-top" style={{height:130, width:180}}>
                    <div className="float-left" style={{height:130, width:20}}></div>
                    <div className="float-left" style={{height:130, width:140}}>
                        <div className="float-top" style={{height:20, width:140}}></div>
                        <div className="float-left grayborder" style={{height:110, width:140}}>

                        </div>
                    </div>
                    <div className="float-left" style={{height:130, width:20}}></div>
                </div>

                <div className="float-left" style={{height:90, width:180}}>
                    <div className="float-top" style={{height:28, width:180}}>
                        <div className="float-left" style={{height:28, width:110}}>
                            <p className="line-space"><font size="2"> {this.props.filesize} MB </font></p>
                        </div>
                        <div className="float-left" style={{height:28, width:30}}>
                            <button> dl </button>
                        </div>
                        <div className="float-left" style={{height:28, width:40}}>
                            <button> fav </button>
                        </div>
                    </div>
                    <div className="float-left" style={{height:62, width:180}}>
                        <p className="line-space overflow-hidden"><font size="2"> {this.props.description} </font></p>
                        <p className="line-space overflow-hidden"><font size="2"> In/{this.props.category}/{this.props.subcategory}</font></p>
                    </div>
                </div>

            </div>              
            
        </div>
    }
}
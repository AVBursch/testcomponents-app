import React, { Component } from 'react';
import { GalleryNavBar } from '../components/navbarcomponent';
import { GalleryRow } from '../components/galleryrowcomponent';
import { getGalleryDatabaseList, getVegetationCategoryList, getVehicleCategoryList, getBathroomCategoryList, getBedroomCategoryList } from '../services/podiumdataservice';

export class Gallery extends Component {
    
    state = {

        galleryDatabase : getGalleryDatabaseList(),

        galleryRowArray : [{category: "Vegetation", galleryrow : getVegetationCategoryList()},
                           {category: "Vehicles", galleryrow : getVehicleCategoryList()},
                           {category: "Bathroom", galleryrow : getBathroomCategoryList()},
                           {category: "Bedroom", galleryrow : getBedroomCategoryList()}],

        galleryelementfilesize : 44,
        categoryarraysize : 196,
        galleryelementdescription : "Snowdrops",
        galleryelementcategory : "Vegetation",
        galleryelementsubcategory : "2D Plants"
        
    };

    

    getGalleryRow = (category) => {
        const vegetationGalleryRow = this.state.galleryDatabase.filter (m => m.gallery_element_category === "Vegetation");
    };

    render() {
        return <div>
            <GalleryNavBar/>
            {this.state.galleryRowArray.map (row => (<div>
                <GalleryRow database={row.galleryrow}
                            category={row.category}/>
                <p></p>
                <br></br>
            </div>))}

        </div>
    }
}
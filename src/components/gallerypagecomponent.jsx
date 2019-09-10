import React, { Component } from 'react';
import { GalleryNavBar } from '../components/navbarcomponent';
import { GalleryRow } from '../components/galleryrowcomponent';
import { getGalleryDatabaseList, getVegetationCategoryList, getVehicleCategoryList, getBathroomCategoryList, getBedroomCategoryList, getHardwareCategoryList, getOfficeCategoryList, getLightFixturesCategoryList, getKitchenCategoryList, getElectronicCategoryList, getWindowsCategoryList } from '../services/podiumdataservice';
import { get2DAngledViewsList, get2DGrassList, get2DInteriorPlantsList, get2DSouthPacificsList } from '../services/vegetationcategoryservice';

export class Gallery extends Component {
    
    state = {

        galleryDatabase : getGalleryDatabaseList(),

        galleryRowArray : [{category: "Vegetation", galleryrow : getVegetationCategoryList()},
                           {category: "Vehicles", galleryrow : getVehicleCategoryList()},
                           {category: "Bathroom", galleryrow : getBathroomCategoryList()},
                           {category: "Bedroom", galleryrow : getBedroomCategoryList()},
                           {category: "Hardware and Construction", galleryrow : getHardwareCategoryList()},
                           {category: "Office", galleryrow : getOfficeCategoryList()},
                           {category: "Light Fixtures Interior", galleryrow : getLightFixturesCategoryList()},
                           {category: "Kitchen", galleryrow : getKitchenCategoryList()},
                           {category: "Electronic", galleryrow : getElectronicCategoryList()},
                           {category: "Windows", galleryrow : getWindowsCategoryList()}],

        VegetationCategoryArray : [{subcategory: "2D Angled Views", subcategoryrow : get2DAngledViewsList()},
                                  {subcategory: "2D Grass", subcategoryrow : get2DGrassList()},
                                  {subcategory: "2D Interior Plants", subcategoryrow : get2DInteriorPlantsList()},
                                  {subcategory: "2D South Pacific", subcategoryrow : get2DSouthPacificsList()}],

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


            {this.state.VegetationCategoryArray.map (row => (<div>
                <GalleryRow database={row.subcategoryrow}
                            category={row.subcategory}/>
                <p></p>
                <br></br>
            </div>))}

        </div>
    }
}
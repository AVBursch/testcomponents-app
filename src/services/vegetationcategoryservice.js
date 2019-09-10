const VegetationCategoryDatabaseService = [

    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Angled Views",
        gallery_element_description : "White Orchid Tree Bauhinia",
        gallery_element_file_size : 16
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Angled Views",
        gallery_element_description : "White Bottle Brush Callistemon Salignus",
        gallery_element_file_size : 14
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Angled Views",
        gallery_element_description : "Western Soapberry",
        gallery_element_file_size : 14
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Angled Views",
        gallery_element_description : "Verawood",
        gallery_element_file_size : 13
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Angled Views",
        gallery_element_description : "Tsuga Heterophylla Western Hemlock",
        gallery_element_file_size : 11
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Grass",
        gallery_element_description : "Flowers Instance 02",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Grass",
        gallery_element_description : "Flowers Instance 01",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Grass",
        gallery_element_description : "Grass Instance 03",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Grass",
        gallery_element_description : "Grass Instance 02",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Grass",
        gallery_element_description : "Grass Instance 01",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Interior Plants",
        gallery_element_description : "Indoor 009",
        gallery_element_file_size : 2
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Interior Plants",
        gallery_element_description : "Indoor 099",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Interior Plants",
        gallery_element_description : "Indoor 098",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Interior Plants",
        gallery_element_description : "Indoor 097",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D Interior Plants",
        gallery_element_description : "Indoor 096",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D South Pacific",
        gallery_element_description : "Regal Velvet",
        gallery_element_file_size : 2
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D South Pacific",
        gallery_element_description : "Melaleuca",
        gallery_element_file_size : 2
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D South Pacific",
        gallery_element_description : "EG021",
        gallery_element_file_size : 3
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D South Pacific",
        gallery_element_description : "EG006",
        gallery_element_file_size : 1
    },
    {
        gallery_element_category : "Vegetation",
        gallery_element_subcategory : "2D South Pacific",
        gallery_element_description : "Wingarra",
        gallery_element_file_size : 2
    },
];

export function get2DAngledViewsList() 
{
    return VegetationCategoryDatabaseService.filter (m => m.gallery_element_subcategory === "2D Angled Views");
}

export function get2DGrassList() 
{
    return VegetationCategoryDatabaseService.filter (m => m.gallery_element_subcategory === "2D Grass");
}

export function get2DInteriorPlantsList() 
{
    return VegetationCategoryDatabaseService.filter (m => m.gallery_element_subcategory === "2D Interior Plants");
}

export function get2DSouthPacificsList() 
{
    return VegetationCategoryDatabaseService.filter (m => m.gallery_element_subcategory === "2D South Pacific");
}
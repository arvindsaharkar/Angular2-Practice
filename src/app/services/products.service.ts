import { Injectable } from '@angular/core';

@Injectable()

export class ProductsService {
    getLatestProducts(){
        return LatestProducts;
    }
    
    getProductByCategories(category:any){
       //console.log(JSON.stringify(Products[0]['mobile']));
        return Products[0][category];
    }
}

const LatestProducts = [
{   
    "id":1,
	"title": "Lenovo K6 Note",
	"price": 14300,
    "category":"Electronics",
    "tags": ["awesome", "best", "sale", "shoes"],
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
    "images":[
        "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
    ]
},
{   
    "id":2,
	"title": "Samsung Galaxy C9 Pro",
	"price": 36299,
    "category":"Electronics",
    "tags": ["awesome", "best", "sale", "shoes"],
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
    "images":[
        "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
    ]
},
{   
    "id":3,
	"title": "Vivo V5 Plus",
	"price": 25290,
    "category":"Electronics",
    "tags": ["awesome", "best", "sale", "shoes"],
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
    "images":[
        "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
    ]
},
{   
    "id":4,
	"title": "Xiaomi Redmi Note 4 64GB",
	"price": 14999,
    "category":"Electronics",
    "tags": ["awesome", "best", "sale", "shoes"],
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
    "images":[
        "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
    ]
},
{   
    "id":5,
	"title": "Samsung On5 Pro (Gold)",
	"price": 700,
    "category":"Electronics",
    "tags": ["awesome", "best", "sale", "shoes"],
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
    "images":[
        "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
    ]
},
{   
    "id":6,
	"title": "Vivo V5",
	"price": 16049,
    "category":"Electronics",
    "tags": ["awesome", "best", "sale", "shoes"],
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
    "images":[
        "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
    ]
}
];

const Products = [{
	"mobile": [
        {
            "id": 1,
            "title": "Lenovo K6 Note",
            "price": 14300,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 2,
            "title": "Samsung Galaxy C9 Pro",
            "price": 36299,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 3,
            "title": "Vivo V5 Plus",
            "price": 25290,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 4,
            "title": "Xiaomi Redmi Note 4 64GB",
            "price": 14999,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 5,
            "title": "Samsung On5 Pro (Gold)",
            "price": 700,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 6,
            "title": "Vivo V5",
            "price": 16049,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 7,
            "title": "Xiaomi Redmi 3S Prime",
            "price": 8999,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 8,
            "title": "Samsung Galaxy J7 Prime",
            "price": 15900,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 9,
            "title": "Xiaomi Redmi Note 4",
            "price": 12799,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }
    ],
    "TV": [
        {
            "id": 1,
            "title": "Activa 6003 80 cm ( 32 ) FULL HD (FHD) LED Television",
            "price": 12247,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "The ACTIVA Full HD  LED Television is a perfect addition to your living space. The TV's IPS panel offers vibrant colours and wide viewing angles. This ACTIVA TV is equipped with lightening protection, summer heat protection, humidity protection and dust protection. It can even work without a stabilizer. The TV has built-in games that are sure to provide hours of entertainment.<br><br>Watch everything in FULL HD with ACTIVA LED TV. It has been developed with the highest resolution of 1080 pixle  to provide unbelievably clear picture with crisp details and rich texture. You will be able to witness the high definition of the on-screen image in every shot.",
            "images": [
                "1.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 2,
            "title": "Micromax 32GRAND_i/32GRAND_r 81 cm (32) HD Ready LED Television",
            "price": 14550,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "The Micromax 32GRAND_i / 32T6175HD_i Ready LED Television will take your entertainment experience to the next level. This television provides rich high-definition imagery with crisp detail and powerful sound quality. With a wide viewing angle of 170 degrees, you can watch your favourite TV shows from any corner of the room. This television offers HDMI connectivity, enabling it to be used as secondary monitor for your laptop. The provided USB ports allow you to watch movies and videos directly from a pen drive.<br><br>Experience breath-taking quality of entertainment with Micromax 32GRAND_i / 32T6175HD_i LED TV! It comes with a wide 81cm (32) HD display with superior AVEA technology & SRS sound system. Witness lifelike picture quality with naturalistic colour codes and texture!",
            "images": [
                "product-2.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 3,
            "title": "Maser 24MS4000A 60 cm ( 24 ) HD Ready (HDR) LED Television",
            "price": 25290,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-3.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 4,
            "title": "Weston WEL-5100 122 cm ( 48 ) Smart Full HD LED Television",
            "price": 29990,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-4.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 5,
            "title": "LG 32LH564A 80 cm ( 32 ) HD Ready LED Television",
            "price": 19680,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-5.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 6,
            "title": "Micromax 43E7002UHD/43E9999UHD 109.2 ",
            "price": 34900,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-6.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 7,
            "title": "Panasonic TH-32D200DX 80 cm ( 32 ) HD Ready (HDR) LED Television",
            "price": 17090,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-7.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 8,
            "title": "Wybor W19-47-Narrow 47cm (19) HD Ready LED Television",
            "price": 6490,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-8.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 9,
            "title": "Micromax 50Z9999UHD 127 cm ( 50 ) Smart Ultra HD (4K) LED ",
            "price": 43168,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-9.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 10,
            "title": "Wybor 40MS16SM/15SM 102 cm ( 40 ) Smart Full HD (FHD) LED ",
            "price": 24765,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-10.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 11,
            "title": "Sony 40R352D 101.6 cm ( 40 ) Full HD (FHD) LED Television",
            "price": 39730,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-11.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 12,
            "title": "LG 55UH650T 139 cm ( 55 ) Smart Ultra HD (4K) LED Television",
            "price": 119990,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-12.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }, {
            "id": 13,
            "title": "Daiwa D32D4S 80 cm ( 32 ) HD Ready (HDR) LED Television",
            "price": 16786,
            "category": "Electronics",
            "tags": ["awesome", "best", "sale", "shoes"],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.<br>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.",
            "images": [
                "product-13.jpg", "product-thumb-1.jpg", "product-thumb-2.jpg", "product-thumb-3.jpg"
            ]
        }
    ]
}];
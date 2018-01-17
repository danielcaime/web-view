/**
 * Copyright 
 * dcaime
 */

/**
 * product Model
 *
 * @class Product
 */
export default class Product {
    /**
     * @property {Array.<string>} - Available categories
     */
    // static CATEGORIES = [
    //   'moisturizer',
    //   'cleanser',
    //   'mask',
    //   'lipTreatment',
    // ];
  
    /**
     * Create a Gift
     *
     * @param {string} id - Unique idenitifier of this gift.
     * @param {string} name - Human readable gift name.
     * @param {object} images - Path to images.
     * @param {object} images.original - Full size image.
     * @param {object} images.square - Square cropped image.
     * @param {string} description - Description of the gift.
     * @param {string} category - Category of this gift (`Gift.CATEGORIES`).
     */
    constructor(id, name, images, description, category, price) {
      this.id = id;
      this.name = name;
      this.images = images;
      this.description = description;
      this.category = category;
      this.price = price;
    }
  }
  